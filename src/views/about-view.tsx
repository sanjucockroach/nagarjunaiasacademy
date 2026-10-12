'use client';

import Image from 'next/image';
import { BadgeCheck, Landmark, ScrollText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/lib/store';
import { ABOUT_FEATURES } from '@/data/site';

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
            <p>
              Behind the academy stands Sri V. Ravindra Babu, faculty of Administrative
              Thinking and Answer Writing, whose analytical explanations and personal
              guidance have produced officers across the IAS, IPS, IRS, IFS and IRAS.
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
              src="/brand/founder.png"
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
              V. Ravindra Babu · Founder and Director
            </figcaption>
          </figure>
        </aside>
      </div>

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
