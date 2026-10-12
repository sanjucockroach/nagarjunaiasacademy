import { NextResponse } from 'next/server';
import { ALL_ENTRIES, LAYER_BY_ID } from '@/data/geo';
import type { GeoPoint } from '@/data/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface QuizQuestion {
  id: string;
  question: string;
  targetId: string;
  targetName: string;
  layer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  generatedBy: 'ai' | 'local';
}

function pickRandom<T>(arr: T[], exclude: Set<string>, key?: (x: T) => string): T {
  const pool = key ? arr.filter((x) => !exclude.has(key(x))) : arr;
  const src = pool.length > 0 ? pool : arr;
  return src[Math.floor(Math.random() * src.length)];
}

const POINTS = ALL_ENTRIES.filter((e) => e.layer !== 'rivers') as GeoPoint[];

/** Deterministic, offline question bank from the local atlas data. */
function localQuestion(excludeIds: string[]): QuizQuestion {
  const exclude = new Set(excludeIds);
  const target = pickRandom(POINTS, exclude, (p) => p.id);
  const templates: Array<() => { q: string; e: string; d: QuizQuestion['difficulty'] }> = [
    () => ({
      q: `Locate the ${LAYER_BY_ID[target.layer].short.toLowerCase()} named "${target.name}" on the globe.`,
      e: target.examFacts[0] ?? '',
      d: 'easy',
    }),
    () => ({
      q: `Which location matches this fact: "${target.examFacts[0]}"? Click where it lies.`,
      e: `${target.name}: ${target.whyInNews}`,
      d: 'medium',
    }),
    () => ({
      q: `${target.whyInNews.split('.')[0]}. Where on the map is this?`,
      e: `${target.name} (${target.region ?? target.country ?? ''}).`,
      d: 'hard',
    }),
  ];
  const t = templates[Math.floor(Math.random() * templates.length)]();
  return {
    id: `local-${target.id}-${Math.random().toString(36).slice(2, 7)}`,
    question: t.q,
    targetId: target.id,
    targetName: target.name,
    layer: target.layer,
    explanation: t.e,
    difficulty: t.d,
    generatedBy: 'local',
  };
}

async function aiQuestion(excludeIds: string[]): Promise<QuizQuestion | null> {
  const target = pickRandom(POINTS, new Set(excludeIds), (p) => p.id);
  try {
    const mod = await import('z-ai-web-dev-sdk').catch(() => null);
    if (!mod) return null;
    const zai = await (mod.default as any).create();
    const prompt = `You are a UPSC Geography map-quiz master. Create ONE map location question.
Target location: ${target.name} (${target.layer} layer, ${target.region ?? target.country ?? 'world'}).
Known facts: ${target.examFacts.join(' | ')}
Why in news: ${target.whyInNews}

Rules:
- The aspirant answers by clicking a spot on a 3D globe, so the question must have ONE unambiguous place as answer: ${target.name}.
- Never name the answer in the question itself.
- 1-2 sentences, exam-realistic phrasing (like UPSC map-based questions).
- Prefer asking via context (rivers, borders, news events) over naming directly.
Return ONLY strict JSON: {"question": string, "explanation": string (one crisp line tying it to exam relevance), "difficulty": "easy"|"medium"|"hard"}`;

    const completion = await Promise.race([
      zai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        thinking: { type: 'disabled' },
      }),
      new Promise((_, rej) => setTimeout(() => rej(new Error('ai-timeout')), 9000)),
    ]);
    const raw = (completion as any)?.choices?.[0]?.message?.content ?? '';
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) return null;
    const parsed = JSON.parse(match[0]);
    if (typeof parsed.question !== 'string' || !parsed.question.trim()) return null;
    return {
      id: `ai-${target.id}-${Math.random().toString(36).slice(2, 7)}`,
      question: parsed.question.trim(),
      targetId: target.id,
      targetName: target.name,
      layer: target.layer,
      explanation: String(parsed.explanation ?? target.examFacts[0] ?? '').trim(),
      difficulty: ['easy', 'medium', 'hard'].includes(parsed.difficulty)
        ? parsed.difficulty
        : 'medium',
      generatedBy: 'ai',
    };
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  let excludeIds: string[] = [];
  try {
    const body = await req.json();
    if (Array.isArray(body?.excludeIds)) {
      excludeIds = body.excludeIds.filter((x: unknown) => typeof x === 'string').slice(0, 40);
    }
  } catch {
    // empty body is fine
  }

  const q = (await aiQuestion(excludeIds)) ?? localQuestion(excludeIds);
  return NextResponse.json({ ok: true, question: q });
}

export async function GET() {
  const q = localQuestion([]);
  return NextResponse.json({ ok: true, question: q });
}
