'use client';

import Image from 'next/image';
import { BadgeCheck, Landmark, ScrollText, GraduationCap, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/lib/store';
import { ABOUT_FEATURES, FOUNDER } from '@/data/site';

export function AboutView() {
  const { setView } = useApp();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold-ink">
            About the academy
          </p>
          <h1 className="mt-3 font-serif text-[clamp(1.9rem,4.4vw,3rem)] font-semibold leading-[1.1]">
            A first-of-its-kind academy for national-standard civil services coaching
          </h1>
          <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-muted-foreground">
            <p>
              NIASA was founded as the first of its kind in the region to bring national
              standards into the coaching process for the Civil Services Exam. It offers
              success-oriented strategic coaching for CSE, and it strives every nerve to
              bring about the best result for the aspiring youth.
            </p>
            <p>
              Every effort aims at imparting confidence and preparing students to
              psychologically meet any challenge a competitive exam can pose. The method
              is holistic and interdisciplinary: one news event is read through polity,
              geography, economy and ethics at the same time, which is exactly how the
              exam tests you.
            </p>
          </div>

          <div className="rule-ring mt-10 border-t pt-8">
            <h2 className="font-serif text-xl font-semibold">What NIASA features</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {ABOUT_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <Image
              src="/brand/digital-learning-space.png"
              alt="Nagarjuna IAS Academy digital learning space poster"
              width={566}
              height={800}
              className="w-full rounded-lg border border-border object-cover"
            />
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              The digital learning space, NIASA
            </p>
          </div>

          <figure className="rounded-xl border border-border bg-primary p-6 text-primary-foreground">
            <ScrollText className="h-5 w-5 text-gold" aria-hidden />
            <blockquote className="mt-3 font-serif text-[17px] italic leading-relaxed">
              Join as a member and blossom, to spread your unique fragrance in the public
              administration of the Nation.
            </blockquote>
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground/70">
              V. Ravindra Babu · Faculty, Administrative Thinking and Answer Writing
            </figcaption>
          </figure>
        </aside>
      </div>

      {/* Faculty profile, verified against the academy's own publications */}
      <section
        aria-labelledby="faculty-profile-heading"
        className="mt-16 rounded-xl border border-border bg-card p-6 sm:p-8"
      >
        <div className="flex items-center gap-2.5">
          <GraduationCap className="h-5 w-5 text-gold-ink" aria-hidden />
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold-ink">
            The faculty profile
          </p>
        </div>
        <h2 id="faculty-profile-heading" className="mt-3 font-serif text-2xl font-semibold sm:text-3xl">
          Sri V. Ravindra Babu, the teacher the academy is known for
        </h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Identity card: monogram, since the academy publishes no portrait */}
          <div className="rounded-xl border border-border bg-primary p-6 text-primary-foreground">
            <div
              className="flex h-24 w-24 items-center justify-center rounded-full ring-1 ring-gold/60"
              aria-hidden
            >
              <span className="font-serif text-4xl font-semibold text-gold">
                {FOUNDER.monogram}
              </span>
            </div>
            <p className="mt-5 font-serif text-xl font-semibold leading-snug">{FOUNDER.name}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/80">
              {FOUNDER.role}
            </p>
            <p className="mt-4 border-t border-primary-foreground/20 pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-primary-foreground/60">
              {FOUNDER.academy}
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Inside the classroom
            </h3>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {FOUNDER.method.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                  <span>{m}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Officers from this classroom
            </h3>
            <ul className="mt-3 flex max-h-52 flex-wrap gap-2 overflow-y-auto scroll-slim pr-1">
              {FOUNDER.officers.map((o) => (
                <li
                  key={o.name}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-[12.5px] leading-none text-foreground/85"
                >
                  {o.name}
                  <span className="ml-1.5 font-mono text-[10.5px] uppercase tracking-wide text-gold-ink">
                    {o.service}
                  </span>
                </li>
              ))}
            </ul>

            <figure className="mt-7 border-l-2 border-gold pl-4">
              <Quote className="h-4 w-4 text-gold-ink" aria-hidden />
              <blockquote className="mt-1.5 font-serif text-[16.5px] italic leading-relaxed text-foreground/90">
                &ldquo;{FOUNDER.tribute}&rdquo;
              </blockquote>
              <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {FOUNDER.tributeBy}, on her mentor
              </figcaption>
            </figure>

            <p className="mt-6 font-mono text-[10.5px] leading-relaxed text-muted-foreground/80">
              {FOUNDER.sourceNote}
            </p>
          </div>
        </div>
      </section>

      {/* Public values, taught as practice */}
      <section className="mt-16 rounded-xl border border-border bg-card p-6 sm:p-8">
        <div className="flex items-center gap-2.5">
          <Landmark className="h-5 w-5 text-gold-ink" aria-hidden />
          <h2 className="font-serif text-xl font-semibold">
            Key public values in public administration
          </h2>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Taught explicitly in class because the Mains and Interview test whether you can
          practise them, not recite them.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {[
            'Impartiality',
            'Justice',
            'Honesty',
            'Fairness',
            'Probity',
            'Continuity',
            'Confidentiality',
            'Accountability',
            'Transparency',
            'Responsiveness',
          ].map((v) => (
            <li
              key={v}
              className="rounded-full border border-border bg-background px-3.5 py-1.5 font-mono text-[12px] tracking-wide text-foreground/80"
            >
              {v}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button onClick={() => setView('path')}>Explore the course path</Button>
          <Button variant="outline" onClick={() => setView('news')}>
            See a day of classes in the briefing
          </Button>
        </div>
      </section>
    </div>
  );
}
