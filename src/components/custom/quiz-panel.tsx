'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Brain, Compass, Crosshair, RotateCcw, Sparkles, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { POINTS } from '@/data/geo';
import { LAYER_BY_ID } from '@/data/geo';
import type { GeoPoint } from '@/data/types';
import { haversineKm, formatKm, scoreDistance } from '@/lib/geo';

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

export type QuizStatus = 'idle' | 'loading' | 'answering' | 'answered' | 'done';

export interface QuizState {
  question: QuizQuestion | null;
  status: QuizStatus;
  result: { distKm: number; band: string; points: number } | null;
  score: number;
  streak: number;
  bestStreak: number;
  round: number;
  askedIds: string[];
  usedReveal: boolean;
}

export const QUIZ_ROUNDS = 10;

export const initialQuizState: QuizState = {
  question: null,
  status: 'idle',
  result: null,
  score: 0,
  streak: 0,
  bestStreak: 0,
  round: 0,
  askedIds: [],
  usedReveal: false,
};

/** Build a question locally when the network or AI is unavailable. */
export function makeLocalQuestion(excludeIds: string[]): QuizQuestion {
  const pool = POINTS.filter((p) => !excludeIds.includes(p.id));
  const target: GeoPoint = (pool.length ? pool : POINTS)[
    Math.floor(Math.random() * (pool.length ? pool.length : POINTS.length))
  ];
  const kinds = ['name', 'fact', 'news'] as const;
  const kind = kinds[Math.floor(Math.random() * kinds.length)];
  const base = {
    id: `local-${target.id}-${Math.random().toString(36).slice(2, 7)}`,
    targetId: target.id,
    targetName: target.name,
    layer: target.layer,
    difficulty: 'medium' as const,
    generatedBy: 'local' as const,
  };
  if (kind === 'fact') {
    return {
      ...base,
      question: `Which location matches this fact: "${target.examFacts[0]}"? Click where it lies.`,
      explanation: `${target.name}: ${target.whyInNews}`,
    };
  }
  if (kind === 'news') {
    return {
      ...base,
      question: `${target.whyInNews.split('.')[0]}. Where on the map is this?`,
      explanation: `${target.name} (${target.region ?? target.country ?? 'world'}).`,
    };
  }
  return {
    ...base,
    question: `Locate ${target.name} on the globe.`,
    explanation: target.examFacts[0] ?? `${target.name}, ${target.region ?? target.country ?? 'world'}.`,
  };
}

interface QuizPanelProps {
  state: QuizState;
  setState: (updater: (s: QuizState) => QuizState) => void;
  onReveal: (lat: number, lng: number) => void;
  /** Registers the answer(lat, lng) handler so the atlas can forward globe clicks. */
  registerAnswer: (fn: (lat: number, lng: number) => void) => void;
}

export function QuizPanel({ state, setState, onReveal, registerAnswer }: QuizPanelProps) {
  const bestRef = useRef<number>(0);

  useEffect(() => {
    try {
      bestRef.current = Number(window.localStorage.getItem('niasa-globe-quiz-best') ?? 0);
      if (bestRef.current > state.bestStreak) {
        setState((s) => ({ ...s, bestStreak: bestRef.current }));
      }
    } catch {
      /* storage unavailable */
    }
  }, []);

  const fetchQuestion = useCallback(
    async (askedIds: string[]) => {
      setState((s) => ({ ...s, status: 'loading', result: null, usedReveal: false }));
      let q: QuizQuestion;
      try {
        const res = await fetch('/api/ai/geo-quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ excludeIds: askedIds }),
        });
        const data = await res.json();
        if (!data?.ok || !data?.question?.targetId) throw new Error('bad response');
        q = data.question as QuizQuestion;
      } catch {
        q = makeLocalQuestion(askedIds);
      }
      setState((s) => ({ ...s, question: q, status: 'answering' }));
    },
    [setState],
  );

  const start = () => {
    setState((s) => ({ ...initialQuizState, bestStreak: s.bestStreak }));
    fetchQuestion([]);
  };

  const next = () => {
    const asked = [...state.askedIds, state.question?.targetId ?? ''];
    if (state.round >= QUIZ_ROUNDS) {
      try {
        const best = Math.max(state.bestStreak, Number(window.localStorage.getItem('niasa-globe-quiz-best') ?? 0));
        window.localStorage.setItem('niasa-globe-quiz-best', String(Math.max(best, state.streak)));
      } catch {
        /* noop */
      }
      setState((s) => ({ ...s, status: 'done' }));
      return;
    }
    setState((s) => ({ ...s, round: s.round + 1 }));
    fetchQuestion(asked);
  };

  /** Called by the atlas when the globe is clicked during 'answering'. */
  const answerWith = (lat: number, lng: number) => {
    if (state.status !== 'answering' || !state.question) return;
    const target = POINTS.find((p) => p.id === state.question!.targetId);
    if (!target) return;
    const distKm = haversineKm(lat, lng, target.lat, target.lng);
    const band = scoreDistance(distKm);
    const streakInc = band.band === 'bullseye' || band.band === 'close' ? 1 : 0;
    setState((s) => {
      const streak = s.streak + streakInc;
      const best = Math.max(s.bestStreak, streak);
      try {
        const stored = Number(window.localStorage.getItem('niasa-globe-quiz-best') ?? 0);
        if (streak > stored) window.localStorage.setItem('niasa-globe-quiz-best', String(streak));
      } catch {
        /* noop */
      }
      return {
        ...s,
        status: 'answered',
        result: { distKm, band: band.label, points: band.points },
        score: s.score + (s.usedReveal ? 0 : band.points),
        streak,
        bestStreak: best,
      };
    });
    onReveal(target.lat, target.lng);
  };

  const reveal = () => {
    if (!state.question) return;
    const target = POINTS.find((p) => p.id === state.question.targetId);
    if (!target) return;
    onReveal(target.lat, target.lng);
    if (state.status === 'answering') {
      setState((s) => ({ ...s, usedReveal: true, status: 'answered', result: { distKm: 0, band: 'Revealed', points: 0 } }));
    }
  };

  const q = state.question;

  // Expose the answer handler to the atlas (always the latest closure)
  useEffect(() => {
    registerAnswer(answerWith);
  });

  return (
    <div className="flex h-full flex-col">
      {/* Scoreboard */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Score</p>
            <p className="font-mono text-lg font-medium leading-none">{state.score}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Streak</p>
            <p className="font-mono text-lg font-medium leading-none">{state.streak}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Best</p>
            <p className="font-mono text-lg font-medium leading-none">{state.bestStreak}</p>
          </div>
        </div>
        <p className="font-mono text-[11px] text-muted-foreground">
          {state.status === 'done' ? 'Complete' : `Round ${Math.min(state.round + 1, QUIZ_ROUNDS)}/${QUIZ_ROUNDS}`}
        </p>
      </div>

      {/* Body */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4 scroll-slim">
        {state.status === 'idle' && (
          <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
            <Compass className="h-8 w-8 text-gold" aria-hidden />
            <div>
              <h3 className="font-serif text-xl font-semibold">AI Map Quiz</h3>
              <p className="mx-auto mt-2 max-w-[30ch] text-[13px] leading-relaxed text-muted-foreground">
                {QUIZ_ROUNDS} questions. Read the prompt, then click the globe where the
                place lies. Closer clicks score more.
              </p>
            </div>
            <Button onClick={start} className="h-10">
              <Brain className="mr-1.5 h-4 w-4" aria-hidden />
              Begin the round
            </Button>
          </div>
        )}

        {state.status === 'loading' && (
          <div className="flex flex-col items-center gap-3 py-12 text-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-gold border-t-transparent" aria-hidden />
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Setting the question
            </p>
          </div>
        )}

        {(state.status === 'answering' || state.status === 'answered') && q && (
          <>
            <div className="rounded-lg border border-border bg-background p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-gold-ink" aria-hidden />
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {q.generatedBy === 'ai' ? 'AI generated' : 'Offline bank'} · {q.difficulty}
                </p>
              </div>
              <p className="mt-2 font-serif text-[16px] font-medium leading-relaxed">{q.question}</p>
              {state.status === 'answering' && (
                <p className="mt-3 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-secondary">
                  <Crosshair className="h-3.5 w-3.5" aria-hidden />
                  Click the globe to answer
                </p>
              )}
            </div>

            {state.status === 'answered' && state.result && (
              <div className="view-enter rounded-lg border border-secondary/50 bg-secondary/10 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-secondary">
                    {state.result.band}
                  </p>
                  <p className="font-mono text-[12px] text-muted-foreground">
                    {state.result.band === 'Revealed' ? 'no points' : formatKm(state.result.distKm)}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  <span className="font-medium">{q.targetName}</span>
                  <span className="text-muted-foreground">
                    {' '}
                    · {LAYER_BY_ID[q.layer as keyof typeof LAYER_BY_ID]?.label}
                  </span>
                </p>
                {q.explanation && (
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {q.explanation}
                  </p>
                )}
                <p className="mt-2 font-mono text-[11px] text-muted-foreground">
                  +{state.result.points} points
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {state.status === 'answering' && (
                <Button variant="outline" size="sm" onClick={reveal} className="h-8 text-[12px]">
                  Show on map (scores 0)
                </Button>
              )}
              {state.status === 'answered' && (
                <Button size="sm" onClick={next} className="h-8 text-[12px]">
                  {state.round >= QUIZ_ROUNDS ? 'See summary' : 'Next question'}
                </Button>
              )}
            </div>
          </>
        )}

        {state.status === 'done' && (
          <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
            <Trophy className="h-8 w-8 text-gold" aria-hidden />
            <div>
              <h3 className="font-serif text-xl font-semibold">Round complete</h3>
              <p className="mt-1 font-mono text-sm text-muted-foreground">
                {state.score} points · best streak {state.bestStreak}
              </p>
            </div>
            <p className="max-w-[34ch] text-[13px] leading-relaxed text-muted-foreground">
              {state.score >= 70
                ? 'Atlas-level command. The map section will fear you.'
                : state.score >= 40
                  ? 'Solid bearings. Revisit the layers you missed and run it again.'
                  : 'Open the explore list, walk the layers once, then retry the round.'}
            </p>
            <Button variant="outline" onClick={start} className="h-10">
              <RotateCcw className="mr-1.5 h-4 w-4" aria-hidden />
              Play another round
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
