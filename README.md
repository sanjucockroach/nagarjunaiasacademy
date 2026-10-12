# Nagarjuna IAS Academy (NIASA)

A professional, fast, human-designed rebuild of [nagarjunaiasacademy.in](https://nagarjunaiasacademy.in): the digital campus of Nagarjuna IAS Academy, Guntur (Andhra Pradesh, India), founded by Sri V. Ravindra Babu for UPSC Civil Services and APPSC preparation under the 4i approach (Information, Interpretation, Integrity, Intensity).

> Brand line: **for Variety, Velocity & Veracity.**

![Stack](https://img.shields.io/badge/Next.js%2016-App%20Router-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind%204-css-teal) ![Deploy](https://img.shields.io/badge/Vercel-ready-purple)

---

## What is inside

### Current Affairs Briefings (local memory, zero API calls)
A daily editorial briefing for **today and yesterday**, compiled by the academy and stored entirely in local data files:

- **PIB analysis items** marked with a badge, alongside The Hindu / Indian Express / Down To Earth sourcing
- Every article is structured for fast revision: **memory hook, overview, Prelims points, Mains points, Additional points, key terms**, and **practice questions** (interactive Prelims MCQs with instant feedback, plus Mains questions with answer structures)
- Category filters, date tabs (Today / Yesterday), GS tags and syllabus tags

### 3D AI Geo Maps: the full world atlas
A real interactive 3D globe (globe.gl + three.js, textures served locally) with **168 UPSC-curated locations across 8 toggleable layers**:

| Layer | Count | Layer | Count |
| --- | --- | --- | --- |
| Places in News | 36 | Ports (incl. Vizhinjam, Chabahar, Gwadar) | 22 |
| Rivers (real polylines: Ganga, Brahmaputra, Indus + world) | 30 | Dams & Projects (Polavaram, Ken-Betwa, GERD...) | 12 |
| Mountain Ranges | 16 | UNESCO Heritage (Charaideo 2024, Maratha Forts 2025) | 17 |
| Straits & Chokepoints (Hormuz, Malacca, Bab el-Mandeb...) | 18 | Ecology (parks, Ramsar, hotspots) | 17 |

- Every location carries **why in the news + exam facts + syllabus tags**
- Search with fly-to, explore list, prev/next navigation
- **AI Map Quiz** (`/api/ai/geo-quiz`): LLM-generated questions answered by clicking the globe, haversine-distance scoring (bullseye / close / warm / off target), streaks, a "Show on map" reveal, and a local fallback question bank when the AI is busy, so the quiz always works offline

### The academy, faithfully replicated
- Home page with the 4i approach, learn pillars, the ten exclusive benefits, audiences, real officer testimonials (IAS, IPS, IRS, IFS, IRAS...) and the full FAQ
- Course path: Launch Pad Foundation, GS Standard, GS Mastery, Current Affairs Exclusive, Bronze membership, test series, Gyan Cards and webinars
- Resources: a mains syllabus tracker with progress saved in local memory, flip-card Gyan Cards, and the TESP answer-writing framework
- About (founder profile, NIASA features, public values) and Contact (campus address, hours, local-only enquiry form)

### Pricing
All prices across courses, plans, books, test series and the enrolment list render as the masked token **xxxx**. Fee disclosure happens at the academy office during counselling.

---

## Tech stack

- **Next.js 16 (App Router) + TypeScript 5**, single-route SPA with hash-based views so navigation, refresh and deep links behave
- **Tailwind CSS 4** with a full light/dark token system (navy ink + gold + teal on warm paper, Source Serif 4 + IBM Plex Sans/Mono)
- **shadcn/ui** components, Lucide icons
- **globe.gl + three.js** for the atlas; textures self-hosted in `public/globe/` (no CDN dependency)
- **zustand** for view/cart state, **sonner** for toasts, **next-themes** for dark mode
- Current affairs and atlas data are plain TypeScript modules under `src/data` (no database, no external API at runtime)
- The AI quiz route uses the `z-ai-web-dev-sdk` server-side and degrades gracefully to a deterministic local question bank

## Getting started

```bash
bun install          # or npm install
bun run dev          # http://localhost:3000
bun run lint         # eslint check
bun run build        # production build
```

## Project structure

```
src/
  app/
    api/ai/geo-quiz/route.ts   # AI map quiz (LLM + offline fallback)
    layout.tsx                 # fonts, metadata, providers
    page.tsx                   # single route shell
  components/
    custom/                    # header, footer, globe canvas, quiz panel, cart
    ui/                        # shadcn/ui primitives
  data/
    geo/                       # 168 atlas entries across 8 layer files
    news/                      # daily briefings (2026-10-11, 2026-10-12, index)
    site.ts, types.ts          # academy content + shared contracts
  lib/                         # store (zustand), haversine/score helpers
  views/                       # home, news, atlas, path, resources, about, contact
design.md                      # the design law (tokens, motion, anti-slop rules)
public/
  brand/                       # crest, posters and photos collected from the academy
  globe/                       # self-hosted earth textures
```

## Updating current affairs

Briefings are data files, so adding a day is a copy-paste-free code change:

1. Create `src/data/news/<YYYY-MM-DD>.ts` exporting `CaArticle[]` (see `src/data/types.ts` for the contract: hook, overview, prelimsPoints, mainsPoints, additionalPoints, keyTerms, practice).
2. Register it in `src/data/news/index.ts` (prepend to `NEWS_INDEX`, add an entry to `CA_DATES`).
3. Commit. Nothing else changes: no API, no database.

The same applies to the atlas: add entries to the relevant layer file in `src/data/geo/` with accurate coordinates (the quiz scores clicks by haversine distance).

## Deploying to Vercel

1. Push this repository to GitHub (already at `sanjucockroach/nagarjunaiasacademy`).
2. On [vercel.com](https://vercel.com), import the repo. The Next.js 16 preset is detected automatically; no environment variables are required (the quiz falls back to its local bank without the AI SDK).
3. Deploy. Optional: set the AI SDK credentials as environment variables to enable LLM-generated quiz questions in production.

## Design system

See [`design.md`](./design.md). Rules adopted from the design-taste / impeccable school: no AI-slop patterns (no gradient text, no side-stripe cards, no identical card grids, no em dashes in copy), contrast >= 4.5:1, motion under 300 ms with ease-out and reduced-motion fallbacks, all eight interaction states, sticky footer, 44 px touch targets, and the brand palette pulled from the academy crest (navy `#1E2A52`, gold `#C89B3C`, teal `#2AA39A`).

## Credits

- Academy identity, courses, testimonials and FAQs collected from [nagarjunaiasacademy.in](https://nagarjunaiasacademy.in)
- Earth textures from the three-globe example assets (self-hosted here)
- Design guidance: emilkowalski/skill, pbakaus/impeccable and the merged design-taste synthesis
