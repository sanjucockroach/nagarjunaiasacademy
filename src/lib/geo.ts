/** Haversine distance in km between two coordinates. */
export function haversineKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(a)));
}

export function formatKm(km: number): string {
  if (km < 100) return `${Math.round(km)} km`;
  if (km < 1000) return `${Math.round(km / 10) * 10} km`;
  return `${Math.round(km / 100) * 100} km`;
}

export interface QuizScoreBand {
  band: 'bullseye' | 'close' | 'warm' | 'miss';
  points: number;
  label: string;
}

export function scoreDistance(km: number): QuizScoreBand {
  if (km <= 400) return { band: 'bullseye', points: 10, label: 'Bullseye' };
  if (km <= 1200) return { band: 'close', points: 6, label: 'Close' };
  if (km <= 2500) return { band: 'warm', points: 3, label: 'Warm' };
  return { band: 'miss', points: 0, label: 'Off target' };
}
