// Shared data contracts for NIASA rebuild.
// All data agents MUST follow these exact shapes.

export type GeoLayerId =
  | 'places'
  | 'rivers'
  | 'mountains'
  | 'straits'
  | 'ports'
  | 'dams'
  | 'unesco'
  | 'ecology';

export interface GeoLayerMeta {
  id: GeoLayerId;
  label: string;
  short: string;
  color: string; // hex used for globe dots/lines
  description: string;
  syllabus: string;
}

export interface GeoBase {
  id: string; // kebab-case, stable
  name: string;
  layer: GeoLayerId;
  country?: string;
  region?: string; // state/sea/continent context
  whyInNews: string; // 1-2 sentences, exam-relevant, why it is in news 2025-26
  examFacts: string[]; // 3-5 crisp facts (numbers, treaties, tributaries, years)
  syllabusTags: string[]; // e.g. "Prelims", "GS1 Geography", "GS2 IR", "GS3 Environment"
  sourceHint?: string; // e.g. "PIB", "The Hindu", "Survey of India"
}

/** A point location on the globe. */
export interface GeoPoint extends GeoBase {
  layer: Exclude<GeoLayerId, 'rivers'>;
  lat: number; // decimal degrees, south negative
  lng: number; // decimal degrees, west negative
  /** Optional real-world footprint radius in km, for nicer visuals */
  sizeKm?: number;
}

/** A river rendered as a polyline through [lat, lng] vertices, source -> mouth. */
export interface GeoRiver extends GeoBase {
  layer: 'rivers';
  path: Array<[number, number]>; // 8-20 vertices, ordered source to mouth
  lengthKm?: number;
  origin?: string;
  outfall?: string;
}

/** Union used by the globe. */
export type GeoEntry = GeoPoint | GeoRiver;

export function isRiver(entry: GeoEntry): entry is GeoRiver {
  return entry.layer === 'rivers';
}

/* ---------------- Current affairs contracts ---------------- */

export type CaCategory =
  | 'Polity & Governance'
  | 'Economy'
  | 'International Relations'
  | 'Environment'
  | 'Science & Tech'
  | 'Defence & Security'
  | 'Society & Culture'
  | 'Agriculture';

export interface CaPracticeQuestion {
  /** "prelims" = objective MCQ, "mains" = descriptive question */
  kind: 'prelims' | 'mains';
  question: string;
  /** MCQ options (prelims only) */
  options?: string[];
  /** index of correct option (prelims only) */
  answerIndex?: number;
  /** explanation for prelims / pointer structure for mains */
  explanation: string;
  /** e.g. "GS2", "GS3", "Essay" */
  gs?: string;
}

export interface CaArticle {
  id: string; // kebab-case, stable
  date: string; // ISO date "2026-10-11"
  title: string;
  category: CaCategory;
  source: string; // "PIB", "The Hindu", "Indian Express", "Down To Earth"...
  isPib: boolean; // true when sourced from PIB analysis
  hook: string; // one-line memory hook for fast revision
  overview: string; // 2-4 sentence plain-language summary
  prelimsPoints: string[]; // 3-6 crisp factual bullets
  mainsPoints: string[]; // 3-6 analytical bullets
  additionalPoints: string[]; // 2-5 context/extra-angle bullets
  keyTerms: Array<{ term: string; meaning: string }>;
  practice: CaPracticeQuestion[]; // 1-3 questions
  gsTags: string[]; // e.g. ["GS2", "GS3"]
  syllabusTags: string[]; // e.g. ["Governance", "Welfare Schemes"]
}

/* ---------------- Commerce contracts (prices masked) ---------------- */

export const PRICE_MASK = 'xxxx';

export interface CourseItem {
  id: string;
  name: string;
  kind: 'course' | 'membership' | 'test-series' | 'book' | 'webinar';
  blurb: string;
  price: string; // always PRICE_MASK or a masked composite like "xxxx xxxx"
  period?: string; // e.g. "per month", "one-time"
  highlights: string[];
  badge?: string;
}

export const COURSE_CATALOG: CourseItem[] = [
  {
    id: 'launch-pad-foundation',
    name: 'Launch Pad Foundation Course',
    kind: 'course',
    blurb:
      'The starting block for first-time aspirants. Builds NCERT-level clarity across Polity, History, Geography, Economy and Environment, then bridges it to UPSC-standard questions.',
    price: PRICE_MASK,
    period: 'full course',
    highlights: [
      'NCERT to advanced bridge for 5 core subjects',
      'Weekly orientation and inner-circle calls',
      'Foundational answer-writing drills from week 4',
      'Doubt-clearing sessions with senior faculty',
    ],
    badge: 'Best for beginners',
  },
  {
    id: 'gs-standard',
    name: 'GS Standard Programme',
    kind: 'course',
    blurb:
      'Full General Studies coverage for Prelims and Mains with the 4i method: information that is interpreted, not just delivered, and tested for intensity of understanding.',
    price: PRICE_MASK,
    period: '12 months',
    highlights: [
      'Complete GS1-GS4 syllabus mapped to PYQs',
      'Current affairs integrated with core subjects',
      '2000+ UPSC-standard prelims question bank',
      '500+ mains questions with model structures',
    ],
  },
  {
    id: 'gs-mastery',
    name: 'GS Mastery (Answer Writing Track)',
    kind: 'course',
    blurb:
      'For aspirants who know the syllabus but cannot convert knowledge into marks. Built around the TESP technique and administrative thinking frameworks refined by Sri V. Ravindra Babu.',
    price: PRICE_MASK,
    period: '6 months',
    highlights: [
      'TESP technique: Theme, Example, Structure, Presentation',
      'Daily mains answer evaluation with personal feedback',
      'Essay and ethics case-study clinics',
      'Interview-grade personality development modules',
    ],
    badge: 'Advanced',
  },
  {
    id: 'ca-exclusive',
    name: 'Current Affairs Exclusive',
    kind: 'course',
    blurb:
      'A dedicated current affairs stream that integrates daily news, PIB releases and editorial analysis with the core GS subjects, so revision never becomes a separate burden.',
    price: PRICE_MASK,
    period: '12 months',
    highlights: [
      'Daily briefing with prelims and mains separation',
      'PIB and Yojana analysis, distilled to exam points',
      'Monthly compilation with memory hooks',
      'Weekly current affairs tests',
    ],
  },
  {
    id: 'membership-bronze',
    name: 'Bronze Membership',
    kind: 'membership',
    blurb:
      'Experience before you commit. Self-paced access to the digital learning space with recorded classes, Gyan Cards, mind maps and the weekly webinar series.',
    price: PRICE_MASK,
    period: 'per month',
    highlights: [
      'Recorded video classes, self-paced',
      'Weekly webinars with the faculty',
      'Gyan Cards and mind maps library',
      'PDFs and PPTs for every module',
    ],
    badge: 'Start here',
  },
  {
    id: 'test-series-integrated',
    name: 'Integrated Test Series (Prelims + Mains)',
    kind: 'test-series',
    blurb:
      'UPSC-standard papers with awards for the best performer in every test cycle. Detailed analytics show syllabus coverage, accuracy and time-per-question.',
    price: PRICE_MASK,
    period: 'per series',
    highlights: [
      'Prelims: sectional + full-length with All India positioning',
      'Mains: evaluated papers with copy-annotated feedback',
      'Awards for best performers in every cycle',
      'Post-test analysis sessions',
    ],
  },
  {
    id: 'gyan-cards-vol-1',
    name: 'Gyan Cards: Polity & Governance',
    kind: 'book',
    blurb:
      'Pocket revision cards covering constitutional bodies, amendments, judgments and governance frameworks, designed for 10-minute revision bursts.',
    price: PRICE_MASK,
    period: 'one-time',
    highlights: ['150+ cards', 'PYQ-tagged', 'Spiral-bound pocket format'],
  },
  {
    id: 'atlas-webinar',
    name: 'Geography through the Atlas: Live Series',
    kind: 'webinar',
    blurb:
      'A live walk through the 3D Geo Atlas: rivers, straits, ports and heritage sites in news, taught the way map questions are actually asked.',
    price: PRICE_MASK,
    period: 'per month',
    highlights: ['4 live sessions', 'Map-marking practice', 'Recording access included'],
  },
];
