'use client';

import { BadgeCheck, GraduationCap, Layers, Presentation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/lib/store';
import { COURSE_CATALOG, PRICE_MASK } from '@/data/types';
import { AddToListButton } from '@/components/custom/cart-drawer';

const KIND_META: Record<
  string,
  { label: string; icon: typeof GraduationCap }
> = {
  course: { label: 'Course', icon: GraduationCap },
  membership: { label: 'Membership', icon: BadgeCheck },
  'test-series': { label: 'Test series', icon: Layers },
  book: { label: 'Book', icon: Layers },
  webinar: { label: 'Live series', icon: Presentation },
};

export function PathView() {
  const { setView } = useApp();
  const courses = COURSE_CATALOG.filter((c) => c.kind === 'course');
  const others = COURSE_CATALOG.filter((c) => c.kind !== 'course');

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold-ink">
        Courses and memberships
      </p>
      <h1 className="mt-3 max-w-2xl font-serif text-[clamp(1.9rem,4.4vw,3rem)] font-semibold leading-[1.1]">
        The path: from Launch Pad to mastery, one stage at a time
      </h1>
      <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
        Every programme follows the same 4i spine. Fees are disclosed during counselling at
        the academy office, so the catalogue shows the method, not a price board.
      </p>

      {/* Course path: 4 stages as a connected timeline, not identical cards */}
      <section aria-label="Course path" className="mt-12">
        <ol className="grid gap-6 lg:grid-cols-2">
          {courses.map((c, i) => {
            const meta = KIND_META[c.kind];
            return (
              <li
                key={c.id}
                className="relative rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-mono text-[12px] font-medium text-primary-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {meta.label}
                    </span>
                  </div>
                  {c.badge && (
                    <span className="rounded-full bg-gold/15 px-3 py-1 font-mono text-[11px] tracking-wide text-gold-ink">
                      {c.badge}
                    </span>
                  )}
                </div>
                <h2 className="mt-4 font-serif text-xl font-semibold">{c.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                <ul className="mt-4 space-y-1.5">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[13.5px] leading-snug">
                      <BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <p>
                    <span className="price-mask text-[15px]">{c.price}</span>
                    <span className="ml-1.5 font-mono text-[11px] text-muted-foreground">
                      {c.period}
                    </span>
                  </p>
                  <AddToListButton id={c.id} label="Add to list" />
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Membership, test series, books, webinars */}
      <section className="mt-14">
        <h2 className="font-serif text-2xl font-semibold">
          Memberships, test series, books and live series
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((c) => {
            const meta = KIND_META[c.kind];
            return (
              <article
                key={c.id}
                className="flex flex-col rounded-xl border border-border bg-card p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {meta.label}
                  </span>
                  {c.badge && (
                    <span className="rounded-full bg-gold/15 px-2.5 py-1 font-mono text-[11px] tracking-wide text-gold-ink">
                      {c.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-serif text-lg font-semibold leading-snug">{c.name}</h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
                  {c.blurb}
                </p>
                <ul className="mt-3 space-y-1">
                  {c.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[13px] leading-snug text-foreground/80">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <p>
                    <span className="price-mask text-[14px]">{c.price}</span>
                    <span className="ml-1.5 font-mono text-[11px] text-muted-foreground">
                      {c.period}
                    </span>
                  </p>
                  <AddToListButton id={c.id} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Fee note */}
      <section className="mt-14 rounded-xl border border-border bg-muted/60 p-6 sm:p-8">
        <h2 className="font-serif text-xl font-semibold">How fees work here</h2>
        <div className="mt-4 grid gap-6 text-sm leading-relaxed text-muted-foreground sm:grid-cols-3">
          <div>
            <p className="font-medium text-foreground">Experience first</p>
            <p className="mt-1.5">
              The Bronze membership exists so you can sit through real classes and tests
              before you commit to a full programme.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">Counselling decides the fee</p>
            <p className="mt-1.5">
              Discounts and instalment plans depend on your stage, attempts and background.
              The office quotes the fee after mapping your path.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">No hidden charges</p>
            <p className="mt-1.5">
              Study material, test papers and webinar access listed in each programme are
              included in the quoted fee.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={() => setView('contact')}>Book a counselling visit</Button>
          <Button variant="outline" onClick={() => setView('news')}>
            Sample the teaching in today&apos;s briefing
          </Button>
        </div>
      </section>
    </div>
  );
}
