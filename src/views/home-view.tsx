'use client';

import Image from 'next/image';
import {
  ArrowRight,
  BookOpenCheck,
  Compass,
  Lightbulb,
  Map,
  NotebookPen,
  Quote,
  Trophy,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useApp } from '@/lib/store';
import { TESTIMONIALS, FAQS, LEARN_PILLARS, BENEFITS, AUDIENCES } from '@/data/site';

const STATS: Array<[string, string]> = [
  ['20+', 'subjects woven into one method'],
  ['1,000+', 'topics with PYQ mapping'],
  ['10,000+', 'themes, not notes to memorise'],
  ['2,000+', 'UPSC-standard prelims questions'],
  ['500+', 'mains questions explained in class'],
];

export function HomeView() {
  const { setView } = useApp();

  return (
    <div>
      {/* Hero: editorial, left-set serif, crest on the right */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold-ink">
              UPSC Civil Services · APPSC Groups · Guntur, Andhra Pradesh
            </p>
            <h1 className="mt-4 max-w-2xl font-serif text-[clamp(2.1rem,5.2vw,3.6rem)] font-semibold leading-[1.08]">
              Transforming aspirants into officers, with clarity over confusion.
            </h1>
            <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-muted-foreground">
              Cracking the Civil Services Exam does not have to be overwhelming. With the
              right strategy, discipline and expert support from Sri V. Ravindra Babu,
              aspirants turn preparation into selection, step by step.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button size="lg" className="h-11" onClick={() => setView('news')}>
                Read today&apos;s briefing
                <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
              </Button>
              <Button size="lg" variant="outline" className="h-11" onClick={() => setView('atlas')}>
                <Map className="mr-1.5 h-4 w-4" aria-hidden />
                Explore the 3D geo atlas
              </Button>
            </div>
            <p className="mt-6 max-w-md font-serif text-[15px] italic leading-relaxed text-foreground/70">
              &ldquo;The dawn of light in the lives of IAS aspirants. Ravindra Babu sir will
              be the Dronacharya preparing new age Arjunas.&rdquo;
              <span className="mt-1 block font-mono text-[11px] not-italic tracking-wide text-muted-foreground">
                M. TULASI, IAS · BATCH MENTORED AT NIASA
              </span>
            </p>
          </div>

          <div className="mx-auto w-full max-w-xs">
            <div className="relative mx-auto aspect-square w-full max-w-[300px]">
              <Image
                src="/brand/logo.png"
                alt="Nagarjuna IAS Academy crest: gold ring, teal open book, rising stars"
                fill
                sizes="(max-width: 1024px) 300px, 300px"
                className="rounded-full object-cover ring-1 ring-gold/40 drop-shadow-[0_12px_24px_rgba(30,42,82,0.18)]"
                priority
              />
            </div>
            <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              for Variety, Velocity &amp; Veracity
            </p>
          </div>
        </div>

        {/* Stats as a hairline table, mono numerals */}
        <dl className="rule-ring mt-14 grid grid-cols-2 gap-y-8 border-t pt-8 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map(([num, label]) => (
            <div key={label} className="px-2">
              <dt className="sr-only">{label}</dt>
              <dd className="font-mono text-2xl font-medium text-primary dark:text-primary">
                {num}
              </dd>
              <dd className="mt-1 text-[12.5px] leading-snug text-muted-foreground">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* The 4i approach */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold">
              The 4i approach
            </h2>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              Navigate vastness through a scientific method
            </p>
          </div>
          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                word: 'Information',
                line: 'Curated, current, and to the point. The academy filters the noise of ten newspapers into what the exam actually asks.',
              },
              {
                word: 'Interpretation',
                line: 'Facts are read through an interdisciplinary lens, so a news event connects to polity, geography and economy in one sitting.',
              },
              {
                word: 'Integrity',
                line: 'Public values are taught as practice, not slogans: impartiality, probity, accountability and transparency in administration.',
              },
              {
                word: 'Intensity',
                line: 'Weekly tests, awards for the best performer, and inner-circle calls keep preparation disciplined through the full cycle.',
              },
            ].map((item, i) => (
              <div key={item.word} className={i > 0 ? 'lg:border-l lg:border-border lg:pl-10' : ''}>
                <p className="font-serif text-xl font-semibold text-primary dark:text-primary">
                  {item.word}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll learn: zig-zag editorial list */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="max-w-xl font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold leading-tight">
          What you learn here, in the order it matters
        </h2>
        <div className="mt-10 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {LEARN_PILLARS.map((p, i) => (
            <article key={p.title} className="flex gap-4">
              <p.icon
                className={`mt-0.5 h-5 w-5 shrink-0 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}
                aria-hidden
              />
              <div>
                <h3 className="font-serif text-lg font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.line}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Ten benefits: a genuine ranked sequence */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="max-w-2xl font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold leading-tight">
            Ten reasons members stay through the full cycle
          </h2>
          <ol className="mt-10 grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <li key={b} className="flex items-baseline gap-4 border-b border-white/10 pb-4">
                <span className="font-mono text-[12px] text-primary-foreground/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] leading-snug">{b}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who it is for */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <h2 className="max-w-xs font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold leading-tight">
            Whom the academy is for
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {AUDIENCES.map((a) => (
              <li
                key={a}
                className="rounded-full border border-border bg-card px-4 py-2 text-[13.5px] leading-none text-foreground/85"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials: real officers, horizontal scroll */}
      <section className="border-t border-border bg-card/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold">
              In their own words
            </h2>
            <p className="text-sm text-muted-foreground">
              Officers mentored by Sri V. Ravindra Babu across services
            </p>
          </div>
        </div>
        <div className="scroll-slim flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 sm:px-6 lg:px-[max(1.5rem,calc((100vw-72rem)/2))]">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="w-[320px] shrink-0 snap-start rounded-xl border border-border bg-background p-5"
            >
              <Quote className="h-4 w-4 text-gold" aria-hidden />
              <blockquote className="mt-3 text-[13.5px] leading-relaxed text-foreground/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-mono text-[11px] font-medium text-primary-foreground"
                  aria-hidden
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="block font-mono text-[11px] tracking-wide text-muted-foreground">
                    {t.service}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] font-semibold">
          Questions aspirants ask before joining
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-[15px] font-medium">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
          <Trophy className="mx-auto h-5 w-5 text-gold" aria-hidden />
          <h2 className="mx-auto mt-4 max-w-xl font-serif text-[clamp(1.7rem,3.6vw,2.4rem)] font-semibold leading-tight">
            Join to get empowered, achieve and serve.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Begin with the Bronze membership, experience a month of the method before you
            commit to the full path.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button size="lg" className="h-11" onClick={() => setView('path')}>
              See the course path
              <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
            </Button>
            <Button size="lg" variant="outline" className="h-11" onClick={() => setView('contact')}>
              Talk to the academy
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
