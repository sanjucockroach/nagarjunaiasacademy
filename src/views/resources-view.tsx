'use client';

import { useEffect, useMemo, useState } from 'react';
import { CheckSquare, FlipHorizontal, ListTree, Puzzle, RotateCcw, Square, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

/* ---------------- Syllabus tracker (stored in local memory) ---------------- */

const SYLLABUS: Array<{ paper: string; units: string[] }> = [
  {
    paper: 'GS I',
    units: [
      'Indian culture: art forms, literature, architecture',
      'Modern India: mid-18th century to present',
      'Freedom struggle and post-independence consolidation',
      'World history: revolutions, redrawn boundaries',
      'Indian society: salient features, diversity, urbanisation',
      'World geography: geophysical, resources, distribution',
      'Indian geography: physiography, monsoon, industries',
      'Natural hazards and disaster management',
    ],
  },
  {
    paper: 'GS II',
    units: [
      'Constitution: historical underpinnings, evolution',
      'Union and States: functions, responsibilities',
      'Parliament and State legislatures',
      'Executive, judiciary: structures and functioning',
      'RPA and constitutional/statutory bodies',
      'Development processes and the development industry',
      'Welfare schemes for vulnerable sections',
      'Social sector: health, education, human resources',
      'Governance and e-governance applications',
      'India and its neighbourhood, bilateral and global groupings',
    ],
  },
  {
    paper: 'GS III',
    units: [
      'Indian economy: growth, planning, mobilisation of resources',
      'Inclusive growth and issues arising from it',
      'Government budgeting and fiscal policy',
      'Agriculture: cropping patterns, irrigation, storage',
      'Food processing and allied industries',
      'Land reforms in India',
      'Science and technology developments, indigenisation',
      'Space, defence and nanotechnology basics',
      'Environment: conservation, pollution, EIA',
      'Internal security: extremism, cyber, border management',
    ],
  },
  {
    paper: 'GS IV',
    units: [
      'Ethics and human interface: essence, determinants',
      'Attitude: content, structure, function, influence',
      'Aptitude and foundational values for civil service',
      'Emotional intelligence concepts for administrators',
      'Contributions of moral thinkers and philosophers',
      'Public/Civil service values and probity in governance',
      'Case studies on integrity, governance and dilemmas',
    ],
  },
];

const STORAGE_KEY = 'niasa-syllabus-progress';

interface GyanCard {
  id: string;
  subject: string;
  prompt: string;
  answer: string;
}

const GYAN_CARDS: GyanCard[] = [
  {
    id: 'fr-citizens',
    subject: 'Polity',
    prompt: 'Which Fundamental Rights are available ONLY to citizens of India?',
    answer:
      'Articles 15, 16, 19, 29 and 30. Rights under Articles 14, 20, 21, 21A, 23, 24 and 25 to 28 extend to all persons, including foreigners.',
  },
  {
    id: 'art-32',
    subject: 'Polity',
    prompt: 'Why is Article 32 called the heart and soul of the Constitution?',
    answer:
      'Ambedkar said so because it makes Fundamental Rights enforceable: the Supreme Court may issue habeas corpus, mandamus, prohibition, certiorari and quo warranto writs.',
  },
  {
    id: 'tesp',
    subject: 'Answer Writing',
    prompt: 'What does the TESP technique stand for?',
    answer:
      'Theme (what the question is really asking), Example (evidence and data), Structure (intro-body-conclusion with subheads), Presentation (maps, diagrams, clean paragraphs).',
  },
  {
    id: 'ken-betwa',
    subject: 'Geography',
    prompt: 'State the essentials of the Ken-Betwa Link Project.',
    answer:
      'First project of the National Perspective Plan for interlinking: Daudhan dam on the Ken transfers water to the Betwa, both Yamuna tributaries. Benefits MP and UP; Panna Tiger Reserve submergence is the key environmental concern.',
  },
  {
    id: 'ramsar',
    subject: 'Environment',
    prompt: 'What is a Ramsar site and where does India stand?',
    answer:
      'Wetlands of international importance under the 1971 Ramsar Convention. India crossed 91 designated sites, among the highest in Asia. Keoladeo and Loktak sit on the Montreux Record of threatened sites.',
  },
  {
    id: 'nqm',
    subject: 'Science & Tech',
    prompt: 'What is the National Quantum Mission?',
    answer:
      'Approved 2023 with about 6,003 crore rupees over 8 years: builds quantum computers up to 50-1000 physical qubits, secure quantum communication, and a quantum-entangled metrology network.',
  },
];

export function ResourcesView() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Restore revision progress from local memory after mount
    queueMicrotask(() => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) setDone(JSON.parse(raw));
      } catch {
        /* noop */
      }
    });
  }, []);

  const toggleUnit = (unit: string) => {
    setDone((prev) => {
      const next = { ...prev, [unit]: !prev[unit] };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* noop */
      }
      return next;
    });
  };

  const resetProgress = () => {
    setDone({});
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* noop */
    }
  };

  const totals = useMemo(() => {
    const all = SYLLABUS.flatMap((p) => p.units);
    const completed = all.filter((u) => done[u]).length;
    return { total: all.length, completed };
  }, [done]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold-ink">Resources</p>
      <h1 className="mt-3 max-w-2xl font-serif text-[clamp(1.9rem,4.4vw,3rem)] font-semibold leading-[1.1]">
        Revise faster: a tracker, flashcards and the frameworks that mark answers
      </h1>

      {/* Syllabus tracker */}
      <section className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-serif text-2xl font-semibold">Mains syllabus tracker</h2>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Tick a unit only when you can answer a previous-year question on it. Progress
              is stored on this device, so your next visit resumes where you left off.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-mono text-[12px] text-muted-foreground">
              {totals.completed}/{totals.total} units
            </p>
            <Button variant="ghost" size="sm" className="h-8 text-[12px]" onClick={resetProgress}>
              <RotateCcw className="mr-1 h-3.5 w-3.5" aria-hidden />
              Reset
            </Button>
          </div>
        </div>
        <Progress value={(totals.completed / totals.total) * 100} className="mt-4 h-1.5" />
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {SYLLABUS.map((paper) => {
            const paperDone = paper.units.filter((u) => done[u]).length;
            return (
              <section key={paper.paper} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-primary dark:text-primary">
                    {paper.paper}
                  </h3>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {paperDone}/{paper.units.length}
                  </span>
                </div>
                <ul className="mt-3 space-y-1">
                  {paper.units.map((u) => {
                    const checked = !!done[u];
                    return (
                      <li key={u}>
                        <button
                          onClick={() => toggleUnit(u)}
                          aria-pressed={checked}
                          className="flex w-full items-start gap-2.5 rounded-md px-2 py-1.5 text-left transition-colors hover:bg-accent"
                        >
                          {checked ? (
                            <CheckSquare className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                          ) : (
                            <Square className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" aria-hidden />
                          )}
                          <span
                            className={`text-[13.5px] leading-snug ${checked ? 'text-muted-foreground line-through decoration-secondary/60' : ''}`}
                          >
                            {u}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </section>

      {/* Gyan cards */}
      <section className="mt-16">
        <h2 className="font-serif text-2xl font-semibold">Gyan cards</h2>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Pocket revision in card form. Click a card to flip it. The full deck ships with
          the Bronze membership.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GYAN_CARDS.map((c) => {
            const isFlipped = !!flipped[c.id];
            return (
              <button
                key={c.id}
                onClick={() => setFlipped((p) => ({ ...p, [c.id]: !p[c.id] }))}
                className="group min-h-[190px] rounded-xl border border-border bg-card p-5 text-left transition-colors hover:border-secondary/60"
                aria-pressed={isFlipped}
                aria-label={`Gyan card: ${c.subject}. ${isFlipped ? 'Showing answer' : 'Showing question'}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-gold-ink">
                    {c.subject}
                  </span>
                  <FlipHorizontal className="h-3.5 w-3.5 text-muted-foreground/60 transition-transform group-hover:rotate-180" aria-hidden />
                </div>
                {isFlipped ? (
                  <p className="mt-3 text-[13.5px] leading-relaxed text-foreground/90">{c.answer}</p>
                ) : (
                  <p className="mt-3 font-serif text-[16px] font-medium leading-snug">{c.prompt}</p>
                )}
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70">
                  {isFlipped ? 'Answer · click to flip back' : 'Question · click to reveal'}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Frameworks & templates */}
      <section className="mt-16">
        <h2 className="font-serif text-2xl font-semibold">Frameworks, templates and mind maps</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Workflow,
              title: 'TESP answer template',
              line: 'The house method for 10-markers: theme framing, example bank, structure skeleton and a presentation checklist you can tick in 90 seconds.',
            },
            {
              icon: Puzzle,
              title: 'Current affairs mind maps',
              line: 'Every news item from the briefing maps into its GS subject tree, so revision of one event revises the whole chapter around it.',
            },
            {
              icon: ListTree,
              title: 'PYQ topic trees',
              line: 'Ten years of previous questions arranged by micro-topic, showing exactly which units the exam revisits and in what style.',
            },
          ].map((f) => (
            <article key={f.title} className="rounded-xl border border-border bg-card p-5">
              <f.icon className="h-5 w-5 text-secondary" aria-hidden />
              <h3 className="mt-3 font-serif text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{f.line}</p>
              <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground/70">
                Included with membership
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
