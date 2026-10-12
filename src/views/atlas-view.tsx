'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MapPin,
  Search,
  Tag,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GlobeCanvas } from '@/components/custom/globe-canvas';
import {
  QuizPanel,
  initialQuizState,
  type QuizState,
} from '@/components/custom/quiz-panel';
import { ALL_ENTRIES, GEO_TOTAL, LAYERS, LAYER_BY_ID, LAYER_COUNTS, POINTS, RIVER_LINES } from '@/data/geo';
import type { GeoEntry, GeoLayerId, GeoPoint } from '@/data/types';
import { isRiver } from '@/data/types';

export function AtlasView() {
  const [active, setActive] = useState<Set<GeoLayerId>>(new Set(LAYERS.map((l) => l.id)));
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<GeoEntry | null>(null);
  const [focus, setFocus] = useState<{ lat: number; lng: number; ts: number } | null>(null);
  const [ring, setRing] = useState<{ lat: number; lng: number; ts: number } | null>(null);
  const [panel, setPanel] = useState<'details' | 'quiz'>('details');
  const [quiz, setQuiz] = useState<QuizState>(initialQuizState);
  const quizAnswerRef = useRef<(lat: number, lng: number) => void>(() => {});

  const toggleLayer = (id: GeoLayerId) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const visible = useMemo(() => {
    const inLayers = ALL_ENTRIES.filter((e) => active.has(e.layer));
    if (!query.trim()) return inLayers;
    const q = query.trim().toLowerCase();
    return inLayers.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        (e.region ?? '').toLowerCase().includes(q) ||
        (e.country ?? '').toLowerCase().includes(q) ||
        e.whyInNews.toLowerCase().includes(q) ||
        e.syllabusTags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [active, query]);

  const globePoints = useMemo(
    () => POINTS.filter((p) => active.has(p.layer as GeoLayerId)),
    [active],
  );
  const globeRivers = useMemo(
    () => (active.has('rivers') ? RIVER_LINES : []),
    [active],
  );

  const flyTo = useCallback((lat: number, lng: number) => {
    setFocus({ lat, lng, ts: Date.now() });
  }, []);

  const selectEntry = useCallback(
    (e: GeoEntry, fly = true) => {
      setSelected(e);
      setPanel('details');
      if (fly) {
        if (isRiver(e)) {
          const mid = e.path[Math.floor(e.path.length / 2)];
          flyTo(mid[0], mid[1]);
        } else {
          flyTo(e.lat, e.lng);
        }
      }
    },
    [flyTo],
  );

  const handleGlobeClick = useCallback(
    (lat: number, lng: number) => {
      if (panel === 'quiz') {
        quizAnswerRef.current(lat, lng);
      } else {
        // find nearest visible point within 12 degrees for forgiving mobile taps
        let best: GeoPoint | null = null;
        let bestD = Infinity;
        for (const p of globePoints) {
          const d = (p.lat - lat) ** 2 + (p.lng - lng) ** 2;
          if (d < bestD) {
            bestD = d;
            best = p;
          }
        }
        if (best && Math.sqrt(bestD) < 12) selectEntry(best, false);
      }
    },
    [panel, globePoints, selectEntry],
  );

  const reveal = useCallback((lat: number, lng: number) => {
    setRing({ lat, lng, ts: Date.now() });
    flyTo(lat, lng);
  }, [flyTo]);

  const step = (dir: 1 | -1) => {
    if (!selected) return;
    const idx = visible.findIndex((e) => e.id === selected.id);
    const nextIdx = (idx + dir + visible.length) % visible.length;
    selectEntry(visible[nextIdx]);
  };

  return (
    <div className="bg-[#0d1322] text-[#e9e4d6] dark:bg-background">
      <div className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6">
        {/* Masthead */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-gold">
              3D AI Geo Maps · full world atlas
            </p>
            <h1 className="mt-2 font-serif text-[clamp(1.9rem,4.4vw,2.8rem)] font-semibold leading-tight text-[#f2ecdb]">
              {GEO_TOTAL} locations the exam expects you to place on a map
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#aab0c4]">
              Eight toggleable layers, every entry carrying its news context and exam
              facts. Turn on the AI Map Quiz to answer by clicking the globe itself.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={panel === 'quiz' ? 'default' : 'outline'}
              className={`h-10 ${panel === 'quiz' ? 'bg-gold text-[#12182b] hover:bg-gold/90' : 'border-[#3a4666] bg-transparent text-[#e9e4d6] hover:bg-[#1a2238] hover:text-[#e9e4d6]'}`}
              onClick={() => setPanel((p) => (p === 'quiz' ? 'details' : 'quiz'))}
            >
              <GraduationCap className="mr-1.5 h-4 w-4" aria-hidden />
              {panel === 'quiz' ? 'Exit quiz' : 'AI Map Quiz'}
            </Button>
          </div>
        </div>

        {/* Layer toggles */}
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Atlas layers">
          {LAYERS.map((l) => {
            const on = active.has(l.id);
            return (
              <button
                key={l.id}
                onClick={() => toggleLayer(l.id)}
                aria-pressed={on}
                className={`flex h-9 items-center gap-2 rounded-full border px-3.5 text-[12.5px] font-medium transition-colors ${
                  on
                    ? 'border-transparent text-[#10182b]'
                    : 'border-[#3a4666] bg-transparent text-[#aab0c4] hover:text-[#e9e4d6]'
                }`}
                style={on ? { backgroundColor: l.color } : undefined}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: on ? '#10182b' : l.color }}
                  aria-hidden
                />
                {l.label}
                <span className={`font-mono text-[10.5px] ${on ? 'opacity-70' : 'opacity-60'}`}>
                  {LAYER_COUNTS[l.id]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative mt-4 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7590]" aria-hidden />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search places, rivers, straits, tags..."
            className="h-10 border-[#3a4666] bg-[#141b30] pl-9 text-[14px] text-[#e9e4d6] placeholder:text-[#6b7590] focus-visible:ring-gold"
            aria-label="Search the atlas"
          />
        </div>

        {/* Atlas layout */}
        <div className="mt-5 grid gap-4 lg:grid-cols-[290px_1fr] xl:grid-cols-[290px_1fr_360px]">
          {/* Explore list */}
          <aside
            className="order-2 max-h-[420px] overflow-hidden rounded-xl border border-[#2a3450] bg-[#141b30] lg:order-1 lg:max-h-none lg:pt-1"
            aria-label="Explore locations"
          >
            <div className="flex items-center justify-between px-4 pb-2 pt-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6b7590]">
                Explore · {visible.length}
              </p>
            </div>
            <ul className="max-h-[360px] space-y-0.5 overflow-y-auto px-2 pb-3 scroll-slim lg:max-h-[calc(100vh-320px)]">
              {visible.map((e) => {
                const isSel = selected?.id === e.id;
                const color = LAYER_BY_ID[e.layer].color;
                return (
                  <li key={e.id}>
                    <button
                      onClick={() => selectEntry(e)}
                      className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left transition-colors ${
                        isSel ? 'bg-[#232d4a] text-[#f2ecdb]' : 'text-[#aab0c4] hover:bg-[#1a2238]'
                      }`}
                    >
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: color }}
                        aria-hidden
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[13.5px] font-medium leading-tight">
                          {e.name}
                        </span>
                        <span className="block truncate font-mono text-[10.5px] text-[#6b7590]">
                          {isRiver(e) ? 'river course' : e.region ?? e.country}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
              {visible.length === 0 && (
                <li className="px-3 py-6 text-center text-[13px] text-[#6b7590]">
                  Nothing matches. Clear the search or switch layers on.
                </li>
              )}
            </ul>
          </aside>

          {/* Globe */}
          <div className="relative order-1 overflow-hidden rounded-xl border border-[#2a3450] bg-[#0d1322] lg:order-2">
            <div className="h-[52vh] min-h-[380px] sm:h-[58vh] lg:h-[calc(100vh-330px)] lg:min-h-[520px]">
              <GlobeCanvas
                points={globePoints}
                rivers={globeRivers}
                selectedId={selected?.id ?? null}
                focus={focus}
                ring={ring}
                onPointClick={(p) => selectEntry(p, false)}
                onGlobeClick={handleGlobeClick}
                autoRotate={!selected && panel === 'details'}
              />
            </div>
            <div className="pointer-events-none absolute left-3 top-3 rounded-md border border-[#3a4666] bg-[#141b30ee] px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#aab0c4]">
              drag to spin · scroll to zoom · click a dot
            </div>
            {panel === 'quiz' && quiz.status === 'answering' && (
              <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#12182b]">
                click the globe to answer
              </div>
            )}
          </div>

          {/* Detail / quiz panel */}
          <aside
            className="order-3 max-h-[520px] overflow-hidden rounded-xl border border-[#2a3450] bg-[#141b30] xl:max-h-none"
            aria-label="Location details"
          >
            {panel === 'quiz' ? (
              <QuizPanel
                state={quiz}
                setState={(updater) => setQuiz((s) => updater(s))}
                onReveal={reveal}
                registerAnswer={(fn) => {
                  quizAnswerRef.current = fn;
                }}
              />
            ) : selected ? (
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-[#2a3450] px-4 py-3">
                  <span
                    className="rounded-full px-2.5 py-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] text-[#10182b]"
                    style={{ backgroundColor: LAYER_BY_ID[selected.layer].color }}
                  >
                    {LAYER_BY_ID[selected.layer].label}
                  </span>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-[#aab0c4] hover:bg-[#232d4a] hover:text-[#e9e4d6]"
                      onClick={() => step(-1)}
                      aria-label="Previous location"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-[#aab0c4] hover:bg-[#232d4a] hover:text-[#e9e4d6]"
                      onClick={() => step(1)}
                      aria-label="Next location"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex-1 space-y-4 overflow-y-auto p-4 scroll-slim">
                  <h2 className="font-serif text-xl font-semibold leading-snug text-[#f2ecdb]">
                    {selected.name}
                  </h2>
                  <p className="flex items-center gap-1.5 font-mono text-[11px] text-[#6b7590]">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {isRiver(selected)
                      ? `${selected.origin ?? ''} to ${selected.outfall ?? ''}`
                      : [selected.region, selected.country].filter(Boolean).join(', ')}
                    {!isRiver(selected) && (
                      <span className="ml-1">
                        · {selected.lat.toFixed(1)}, {selected.lng.toFixed(1)}
                      </span>
                    )}
                  </p>

                  <div className="rounded-lg border border-[#3a4666] bg-[#10182b] p-3.5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-gold">
                      Why in the news
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#d6d1c2]">
                      {selected.whyInNews}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#6b7590]">
                      Exam facts
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {selected.examFacts.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-[#aab0c4]">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#6b7590]">
                      <Tag className="h-3 w-3" aria-hidden />
                      Syllabus
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {selected.syllabusTags.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="border-[#3a4666] bg-transparent font-mono text-[10.5px] text-[#aab0c4] hover:bg-transparent"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                <MapPin className="h-7 w-7 text-[#3a4666]" aria-hidden />
                <p className="max-w-[26ch] text-[13px] leading-relaxed text-[#6b7590]">
                  Select a dot on the globe or a row in the explore list to read its news
                  context and exam facts.
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
