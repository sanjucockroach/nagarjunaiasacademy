'use client';

import { useMemo, useState } from 'react';
import {
  Brain,
  CheckCircle2,
  ChevronDown,
  FileText,
  FlaskConical,
  ListChecks,
  Newspaper,
  PenLine,
  PlusCircle,
  Target,
  XCircle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useApp } from '@/lib/store';
import { CA_CATEGORIES, CA_DATES, NEWS_INDEX } from '@/data/news';
import type { CaArticle, CaPracticeQuestion } from '@/data/types';

export function NewsView() {
  const [date, setDate] = useState<string>('2026-10-12');
  const [category, setCategory] = useState<string>('All');

  const dayArticles = useMemo(
    () => NEWS_INDEX.filter((a) => a.date === date),
    [date],
  );
  const filtered = useMemo(
    () =>
      category === 'All'
        ? dayArticles
        : dayArticles.filter((a) => a.category === category),
    [dayArticles, category],
  );
  const pibCount = dayArticles.filter((a) => a.isPib).length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Masthead */}
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold-ink">
            Daily briefing · curated from PIB, The Hindu and Indian Express
          </p>
          <h1 className="mt-2 font-serif text-[clamp(1.9rem,4.4vw,2.8rem)] font-semibold leading-tight">
            Current Affairs, separated the way the exam asks
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Each item carries a one-line memory hook, prelims points, mains points,
            additional context and practice questions. All content is prepared by the
            academy and stored locally, so the page reads instantly, offline too.
          </p>
        </div>
        <dl className="flex gap-6 text-right">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">Today</dt>
            <dd className="font-mono text-xl font-medium">{dayArticles.length || NEWS_INDEX.filter(a=>a.date===date).length}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">PIB items</dt>
            <dd className="font-mono text-xl font-medium text-gold-ink">{pibCount}</dd>
          </div>
        </dl>
      </div>

      {/* Date + category controls */}
      <div className="sticky top-16 z-10 -mx-4 mt-6 flex flex-wrap items-center gap-3 bg-background/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
        <div role="tablist" aria-label="Briefing date" className="flex rounded-lg border border-border bg-card p-1">
          {CA_DATES.map((d) => (
            <button
              key={d.iso}
              role="tab"
              aria-selected={date === d.iso}
              onClick={() => setDate(d.iso)}
              className={`h-8 rounded-md px-3.5 text-[13px] font-medium transition-colors ${
                date === d.iso
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {d.label}
              <span className="ml-1.5 hidden font-mono text-[10.5px] sm:inline">{d.iso.slice(5)}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {['All', ...CA_CATEGORIES].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`h-8 rounded-full border px-3 text-[12px] font-medium transition-colors ${
                category === c
                  ? 'border-secondary bg-secondary text-secondary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-secondary/50 hover:text-foreground'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No items in this category for {date === CA_DATES[0].iso ? 'today' : 'yesterday'}. Try another filter.
        </p>
      ) : (
        <div className="stagger mt-8 space-y-8">
          {filtered.map((a) => (
            <NewsArticle key={a.id} article={a} />
          ))}
        </div>
      )}

      <p className="mt-12 border-t border-border pt-6 text-center font-mono text-[11px] leading-relaxed text-muted-foreground">
        Briefings are compiled locally by the academy faculty and refreshed for each teaching day.
        Yesterday, {CA_DATES[1].longLabel}, remains available above.
      </p>
    </div>
  );
}

function SectionBlock({
  icon: Icon,
  title,
  points,
  tone,
}: {
  icon: typeof ListChecks;
  title: string;
  points: string[];
  tone: 'prelims' | 'mains' | 'extra';
}) {
  const toneClass =
    tone === 'prelims'
      ? 'text-secondary'
      : tone === 'mains'
        ? 'text-primary dark:text-primary'
        : 'text-gold-ink';
  return (
    <section className="rounded-lg border border-border bg-background p-4">
      <h4 className={`flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] ${toneClass}`}>
        <Icon className="h-3.5 w-3.5" aria-hidden />
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" aria-hidden />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function PracticeQuestion({ q, index }: { q: CaPracticeQuestion; index: number }) {
  const [picked, setPicked] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const isPrelims = q.kind === 'prelims';

  return (
    <div className="rounded-lg border border-dashed border-border bg-muted/40 p-4">
      <div className="flex items-center gap-2">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
          {isPrelims ? `Prelims MCQ ${index + 1}` : `Mains ${index + 1}`}
        </span>
        {q.gs && (
          <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10.5px] text-primary dark:text-primary">
            {q.gs}
          </span>
        )}
      </div>
      <p className="mt-2 text-[14px] font-medium leading-relaxed">{q.question}</p>

      {isPrelims && q.options ? (
        <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
          {q.options.map((opt, i) => {
            const isAnswer = i === q.answerIndex;
            const isPicked = picked === i;
            const showState = picked !== null;
            return (
              <li key={i}>
                <button
                  onClick={() => {
                    if (picked === null) setPicked(i);
                  }}
                  disabled={picked !== null}
                  className={`flex w-full items-center gap-2 rounded-md border px-3 py-2 text-left text-[13px] leading-snug transition-colors ${
                    showState && isAnswer
                      ? 'border-secondary bg-secondary/10 text-foreground'
                      : showState && isPicked && !isAnswer
                        ? 'border-destructive bg-destructive/10 text-foreground'
                        : 'border-border bg-card hover:border-secondary/60'
                  }`}
                >
                  {showState && isAnswer ? (
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-secondary" aria-hidden />
                  ) : showState && isPicked && !isAnswer ? (
                    <XCircle className="h-3.5 w-3.5 shrink-0 text-destructive" aria-hidden />
                  ) : (
                    <span className="font-mono text-[11px] text-muted-foreground" aria-hidden>
                      {String.fromCharCode(97 + i)})
                    </span>
                  )}
                  <span>{opt}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <Button
          variant="ghost"
          size="sm"
          className="mt-2 h-8 text-[12.5px] text-secondary"
          onClick={() => setRevealed((r) => !r)}
        >
          {revealed ? 'Hide answer structure' : 'Show answer structure'}
          <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform ${revealed ? 'rotate-180' : ''}`} aria-hidden />
        </Button>
      )}

      {(isPrelims && picked !== null) || (isPrelims && revealed) || (!isPrelims && revealed) ? (
        <p className="mt-3 rounded-md border border-border bg-background p-3 text-[13px] leading-relaxed text-muted-foreground">
          {isPrelims && picked !== null && picked !== q.answerIndex && (
            <span className="font-medium text-foreground">Not quite. </span>
          )}
          {isPrelims && picked === q.answerIndex && (
            <span className="font-medium text-secondary">Correct. </span>
          )}
          {q.explanation}
        </p>
      ) : null}
      {isPrelims && picked !== null && (
        <p className="mt-1.5 font-mono text-[10.5px] text-muted-foreground">
          {`Answer: ${String.fromCharCode(97 + (q.answerIndex ?? 0))} ${q.options?.[q.answerIndex ?? 0] ?? ''}`}
        </p>
      )}
    </div>
  );
}

function NewsArticle({ article }: { article: CaArticle }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card">
      {/* Header */}
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-secondary">
            {article.category}
          </span>
          <span className="text-border" aria-hidden>·</span>
          <span className="font-mono text-[11px] text-muted-foreground">{article.source}</span>
          {article.isPib && (
            <Badge className="bg-gold/15 text-gold-ink hover:bg-gold/15">
              <FileText className="mr-1 h-3 w-3" aria-hidden />
              PIB analysis
            </Badge>
          )}
          <span className="ml-auto font-mono text-[11px] text-muted-foreground">
            {article.date.split('-').reverse().join('.')}
          </span>
        </div>

        <h2 className="mt-3 max-w-3xl font-serif text-[19px] font-semibold leading-snug sm:text-[21px]">
          {article.title}
        </h2>

        {/* Memory hook */}
        <div className="mt-4 flex items-start gap-3 rounded-lg border border-gold/30 bg-gold/[0.07] p-3.5">
          <Brain className="mt-0.5 h-4 w-4 shrink-0 text-gold-ink" aria-hidden />
          <div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-gold-ink">
              Memory hook
            </p>
            <p className="mt-1 font-serif text-[15px] italic leading-relaxed">{article.hook}</p>
          </div>
        </div>

        <p className="mt-4 max-w-3xl text-[14.5px] leading-relaxed text-foreground/85">
          {article.overview}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {article.gsTags.map((t) => (
            <span key={t} className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[10.5px] font-medium text-primary dark:text-primary">
              {t}
            </span>
          ))}
          {article.syllabusTags.map((t) => (
            <span key={t} className="rounded-full border border-border px-2.5 py-1 font-mono text-[10.5px] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="mt-4 h-9"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          {open ? 'Collapse analysis' : 'Open full analysis and practice questions'}
          <ChevronDown className={`ml-1.5 h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
        </Button>
      </div>

      {/* Body */}
      {open && (
        <div className="view-enter border-t border-border bg-muted/25 p-5 sm:p-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <SectionBlock
              icon={Target}
              title="Prelims points"
              points={article.prelimsPoints}
              tone="prelims"
            />
            <SectionBlock
              icon={PenLine}
              title="Mains points"
              points={article.mainsPoints}
              tone="mains"
            />
          </div>
          <div className="mt-4">
            <SectionBlock
              icon={PlusCircle}
              title="Additional points"
              points={article.additionalPoints}
              tone="extra"
            />
          </div>

          {article.keyTerms.length > 0 && (
            <div className="mt-4 rounded-lg border border-border bg-background p-4">
              <h4 className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-gold-ink">
                <Newspaper className="h-3.5 w-3.5" aria-hidden />
                Key terms
              </h4>
              <dl className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {article.keyTerms.map((k) => (
                  <div key={k.term} className="text-[13px] leading-relaxed">
                    <dt className="inline font-medium">{k.term}: </dt>
                    <dd className="inline text-muted-foreground">{k.meaning}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="mt-5">
            <h4 className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/70">
              <FlaskConical className="h-3.5 w-3.5 text-secondary" aria-hidden />
              Practice questions
            </h4>
            <div className="mt-3 space-y-3">
              {article.practice.map((q, i) => (
                <PracticeQuestion key={i} q={q} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
