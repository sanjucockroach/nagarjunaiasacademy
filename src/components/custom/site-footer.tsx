'use client';

import { useApp, VIEWS } from '@/lib/store';
import { Phone, MapPin, Mail } from 'lucide-react';

export function SiteFooter() {
  const { setView } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-card/60">
      {/* Public values strip: from the academy's own teaching */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 sm:px-6">
          {['Impartiality', 'Justice', 'Honesty', 'Fairness', 'Probity', 'Accountability', 'Transparency'].map(
            (v) => (
              <span key={v} className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                {v}
              </span>
            ),
          )}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-lg font-semibold leading-snug">
            Nagarjuna IAS Academy
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Founded by Sri V. Ravindra Babu in Guntur, the academy prepares aspirants for
            the UPSC Civil Services and APPSC examinations through a holistic,
            interdisciplinary method. Join as a member and blossom, to spread your unique
            fragrance in the public administration of the Nation.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {VIEWS.map((v) => (
              <li key={v.id}>
                <button
                  className="rounded-sm text-left hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                  onClick={() => setView(v.id)}
                >
                  {v.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Reach the academy
          </p>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              Opp. Brahmamgari Matam, Naidupet, Guntur, Andhra Pradesh 522124
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              <span>Office hours, Mon to Sat: 9 am to 7 pm</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              <span>Admissions through orientation calls each week</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-center font-mono text-[11px] text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
          <span>Copyright {year} Nagarjuna IAS Academy. All rights reserved.</span>
          <span>Transforming aspirants into officers, since Guntur first believed.</span>
        </div>
      </div>
    </footer>
  );
}
