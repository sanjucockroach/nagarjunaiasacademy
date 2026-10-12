import type { GeoEntry, GeoLayerId, GeoLayerMeta, GeoPoint } from '../types';
import { PLACES } from './places';
import { STRAITS } from './straits';
import { RIVERS } from './rivers';
import { MOUNTAINS } from './mountains';
import { DAMS } from './dams';
import { PORTS } from './ports';
import { UNESCO_SITES } from './unesco';
import { ECOLOGY } from './ecology';

export const LAYERS: GeoLayerMeta[] = [
  {
    id: 'places',
    label: 'Places in News',
    short: 'Places',
    color: '#f2c14e',
    description: '36 locations driving headlines: corridors, flashpoints, summit venues.',
    syllabus: 'GS1 · GS2 IR · GS3',
  },
  {
    id: 'rivers',
    label: 'Rivers',
    short: 'Rivers',
    color: '#4fb3a5',
    description: '30 courses as real polylines: Ganga, Brahmaputra, Indus and the world.',
    syllabus: 'GS1 · GS2 IR · GS3',
  },
  {
    id: 'mountains',
    label: 'Mountain Ranges',
    short: 'Mountains',
    color: '#c97a57',
    description: '16 ranges with peaks, passes and the news attached to them.',
    syllabus: 'GS1 · GS3 Environment',
  },
  {
    id: 'straits',
    label: 'Straits & Chokepoints',
    short: 'Straits',
    color: '#e4705f',
    description: '18 chokepoints with trade volumes: Hormuz, Malacca, Bab el-Mandeb.',
    syllabus: 'GS1 · GS2 IR · GS3 Economy',
  },
  {
    id: 'ports',
    label: 'Ports',
    short: 'Ports',
    color: '#8fa660',
    description: '22 ports incl. Vizhinjam, Chabahar, Gwadar and the Suez cluster.',
    syllabus: 'GS2 IR · GS3 Economy',
  },
  {
    id: 'dams',
    label: 'Dams & Projects',
    short: 'Dams',
    color: '#6d9bc3',
    description: '12 projects: Polavaram, Ken-Betwa, GERD, Kishanganga, Rogun.',
    syllabus: 'GS1 · GS2 IR · GS3',
  },
  {
    id: 'unesco',
    label: 'UNESCO Heritage',
    short: 'UNESCO',
    color: '#d98cb3',
    description: '17 sites incl. Charaideo 2024 and the Maratha Forts 2025.',
    syllabus: 'GS1 History · GS1 Culture',
  },
  {
    id: 'ecology',
    label: 'Ecology',
    short: 'Ecology',
    color: '#63b97a',
    description: '17 parks, Ramsar wetlands, biospheres and hotspots in news.',
    syllabus: 'GS3 Environment',
  },
];

export const LAYER_BY_ID: Record<GeoLayerId, GeoLayerMeta> = Object.fromEntries(
  LAYERS.map((l) => [l.id, l]),
) as Record<GeoLayerId, GeoLayerMeta>;

export const ALL_ENTRIES: GeoEntry[] = [
  ...PLACES,
  ...RIVERS,
  ...MOUNTAINS,
  ...STRAITS,
  ...PORTS,
  ...DAMS,
  ...UNESCO_SITES,
  ...ECOLOGY,
];

export const POINTS: GeoPoint[] = ALL_ENTRIES.filter((e) => e.layer !== 'rivers') as GeoPoint[];
export const RIVER_LINES = RIVERS;

export const GEO_TOTAL = ALL_ENTRIES.length; // 168
export const LAYER_COUNTS: Record<GeoLayerId, number> = ALL_ENTRIES.reduce(
  (acc, e) => {
    acc[e.layer] = (acc[e.layer] ?? 0) + 1;
    return acc;
  },
  {} as Record<GeoLayerId, number>,
);
