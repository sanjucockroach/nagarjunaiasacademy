import type { CaArticle } from '../types';
import { NEWS_2026_10_11 } from './2026-10-11';
import { NEWS_2026_10_12 } from './2026-10-12';

// Today first, then yesterday.
export const NEWS_INDEX: CaArticle[] = [...NEWS_2026_10_12, ...NEWS_2026_10_11];

export const CA_DATES = [
  { iso: '2026-10-12', label: 'Today', longLabel: 'Monday, 12 October 2026' },
  { iso: '2026-10-11', label: 'Yesterday', longLabel: 'Sunday, 11 October 2026' },
];

// Unique categories present in the current briefings, alphabetically sorted.
export const CA_CATEGORIES: string[] = Array.from(
  new Set(NEWS_INDEX.map((article) => article.category)),
).sort();
