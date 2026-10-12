# NIASA Design System

> Adopted from the "taste" / "impeccable" / design-taste school (emilkowalski/skill,
> pbakaus/impeccable, h3nryprod01/design-taste). This document is law for every PR.

## Design Read

Institutional education platform for UPSC Civil Services aspirants in India.
Audience reads for hours every day: news briefings, syllabus maps, course details.
Register: **Persuade** (home, courses) + **Read** (news, atlas detail) + **Operate** (quiz).
Language: heritage academia, editorial and calm. It should feel like a well-set
exam hall desk: navy ink on warm paper, gold leaf sparingly, teal for life.

The previous site failed because it looked generated: purple gradients, glassy
cards, template eyebrows. We correct by having opinions, not decoration.

## Intensity dials

- DESIGN_VARIANCE 6 (structured, with editorial rhythm breaks)
- MOTION_INTENSITY 4 (calm, functional motion only)
- VISUAL_DENSITY 5 (reading-first spacing)

## Typography

| Role | Family | Notes |
| --- | --- | --- |
| Display | Source Serif 4 (600/700) | headings, pull quotes; tight leading 1.1-1.2 |
| Body/UI | IBM Plex Sans (400/500/600) | all body copy, buttons, nav |
| Data/labels | IBM Plex Mono (400/500) | dates, tags, stats, prices, coordinates |

- Scale ratio >= 1.25 between steps. Body max 65-75ch, line-height 1.6.
- `text-wrap: balance` on headings. No all-caps body copy. No letterspaced
  uppercase eyebrows on every section; section leads vary in cadence.
- Max 3 families. Never two similar sans.

## Color

Brand DNA from the academy crest (navy field, gold ring, teal book):

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| background | #FAF8F2 warm paper | #121828 navy night | page |
| foreground | #172136 ink | #E9E4D6 parchment | text |
| primary | #1E2A52 brand navy | #E5C36A gold | headings, primary actions |
| secondary | #235F55 deep teal | #4FB3A5 | supporting actions, ecology |
| gold | #C89B3C | #E5C36A | hairlines, crests, stars (never body text) |
| gold-ink | #7A5C15 | #E5C36A | text-safe gold |
| muted-foreground | #5B6272 | #A9ADBE | secondary text (>= 4.5:1 verified) |
| border | #E4DECE | #2A3450 | hairlines |

- Contrast: body >= 4.5:1, large text >= 3:1. Gold is decorative only.
- One accent family per surface. No gradient text. No pure #000/#fff.
- Neutrals lean warm in light mode, navy in dark mode.

## Layout & spacing

- 4/8px scale. Cards radius 12px (inputs 8px, pills full). One radius system.
- Cards only where elevation means hierarchy; prefer hairline dividers and
  whitespace. Nested cards are banned.
- Grid: `repeat(auto-fit, minmax(280px, 1fr))` for responsive grids.
- Footer is sticky to viewport bottom on short pages (`mt-auto` in a
  `min-h-screen flex flex-col` shell), pushed naturally on long pages.
- Long lists cap at max-h with custom scrollbar.
- Z-index scale: dropdown 10, sticky 20, drawer 30, modal 40, toast 50.

## Motion

- Under 300ms. `ease-out` custom curve `cubic-bezier(0.23, 1, 0.32, 1)`.
- Animate only transform + opacity. Enter from scale(0.95)/opacity 0.
- Buttons `:active { transform: scale(0.97) }`. Never animate keyboard actions.
- Every animation has a `prefers-reduced-motion` fallback.
- View transitions: 240ms fade + 8px rise, staggered lists 40ms.

## Interaction states

All eight states for every control: default, hover, focus-visible ring (2px
offset, never `outline: none` bare), active, disabled, loading, error, success.
Touch targets >= 44px. Labels above inputs, never placeholder-as-label.

## Copy rules

- No em dashes (U+2014) anywhere in UI copy. Commas, colons, parentheses.
- No filler verbs (elevate, seamless, empower, supercharge, world-class).
  Concrete verbs: revise, attempt, locate, evaluate, enrol.
- Buttons: verb + object ("Read today's briefing", not "Submit").
- Real names and real numbers only; prices render as the masked token "xxxx".
- Aspirant respect: no hype, no fake urgency, no countdown timers.

## Anti-slop bans (match-and-refuse)

Side-stripe borders, gradient text, glassmorphism, hero-metric template,
identical card grids, eyebrow on every section, 01/02/03 scaffolding,
ghost-card border+wide-shadow pairs, radius > 16px on cards, sketchy SVG art,
stripe backgrounds, "X theater" copy, custom cursors, fake screenshots.
No Inter default. No AI-purple. No cream+brass consumer palette reflex.

## Pre-flight (run before every commit that touches UI)

1. Contrast spot-check muted text on paper/night backgrounds.
2. Heading overflow at 360px, 768px, 1280px.
3. Keyboard-only pass: tab reaches every control, focus visible.
4. Motion: reduced-motion honored; nothing over 300ms.
5. Footer sticks on short views, pushes on long views.
6. Prices show "xxxx". No em dashes. Icons from lucide, not hand-drawn SVG.
7. Globe: every dot has a whyInNews + facts + tags; quiz fallback works offline.
