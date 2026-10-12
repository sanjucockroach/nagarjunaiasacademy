'use client';

import { useEffect, useRef } from 'react';
import type { GeoPoint, GeoRiver } from '@/data/types';
import { LAYER_BY_ID } from '@/data/geo';

export interface GlobeCanvasProps {
  points: GeoPoint[];
  rivers: GeoRiver[];
  selectedId: string | null;
  focus: { lat: number; lng: number; ts: number } | null;
  ring: { lat: number; lng: number; ts: number } | null;
  onPointClick: (p: GeoPoint) => void;
  onGlobeClick: (lat: number, lng: number) => void;
  autoRotate: boolean;
}

/**
 * Thin wrapper around globe.gl. Initialises once, then reacts to prop changes
 * through imperative updates. Click handlers are read from a ref so the globe
 * always calls the latest closure without re-initialisation.
 */
export function GlobeCanvas({
  points,
  rivers,
  selectedId,
  focus,
  ring,
  onPointClick,
  onGlobeClick,
  autoRotate,
}: GlobeCanvasProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const globeRef = useRef<any>(null);
  const cbRef = useRef({ onPointClick, onGlobeClick });
  cbRef.current = { onPointClick, onGlobeClick };

  // Init once (client only: dynamic import keeps SSR safe)
  useEffect(() => {
    let disposed = false;
    let ro: ResizeObserver | null = null;

    (async () => {
      const Globe = (await import('globe.gl')).default;
      if (disposed || !hostRef.current) return;
      const host = hostRef.current;

      const g: any = new Globe(host, { animateIn: true });
      globeRef.current = g;

      const size = () => {
        g.width(host.clientWidth).height(host.clientHeight);
      };
      size();

      g.backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('#2aa39a')
        .atmosphereAltitude(0.16)
        .globeImageUrl('/globe/earth-blue-marble.jpg')
        .bumpImageUrl('/globe/earth-topology.png');

      g.controls().enableDamping = true;
      g.controls().autoRotate = true;
      g.controls().autoRotateSpeed = 0.45;
      g.controls().minDistance = 140;
      g.controls().maxDistance = 800;

      g.onGlobeClick(({ lat, lng }: { lat: number; lng: number }) => {
        cbRef.current.onGlobeClick(lat, lng);
      });

      g.pointsData([])
        .pointLat((d: any) => d.lat)
        .pointLng((d: any) => d.lng)
        .pointColor((d: any) => LAYER_BY_ID[d.layer as keyof typeof LAYER_BY_ID]?.color ?? '#ffffff')
        .pointAltitude(0.014)
        .pointRadius((d: any) => (d.layer === 'places' ? 0.34 : 0.3))
        .pointsMerge(false)
        .pointLabel((d: any) => `
          <div style="font-family:var(--font-data),monospace;font-size:11px;padding:6px 9px;border-radius:8px;background:#141b30ee;color:#f2ecdb;border:1px solid #3a4666;max-width:240px">
            <strong style="color:#e5c36a">${d.name}</strong><br/>
            <span style="color:#aab0c4">${d.region ?? d.country ?? ''}</span>
          </div>`)
        .onPointClick((d: any) => cbRef.current.onPointClick(d));

      g.labelsData([])
        .labelLat((d: any) => d.lat)
        .labelLng((d: any) => d.lng)
        .labelText((d: any) => d.name)
        .labelSize(0.85)
        .labelDotRadius(0)
        .labelResolution(2)
        .labelColor(() => '#f7f3e9')
        .labelAltitude(0.035);

      g.pathsData([])
        .pathPoints((d: any) => d.path)
        .pathPointLat((p: any) => p[0])
        .pathPointLng((p: any) => p[1])
        .pathColor(() => LAYER_BY_ID.rivers.color)
        .pathStroke(2.4)
        .pathPointAlt(0.015)
        .pathTransitionDuration(500)
        .pathLabel((d: any) => `
          <div style="font-family:var(--font-data),monospace;font-size:11px;padding:6px 9px;border-radius:8px;background:#141b30ee;color:#f2ecdb;border:1px solid #3a4666;max-width:240px">
            <strong style="color:#3fe0cb">${d.name}</strong><br/>
            <span style="color:#aab0c4">${d.lengthKm ? d.lengthKm + ' km course' : ''}</span>
          </div>`);

      g.ringsData([])
        .ringLat((d: any) => d.lat)
        .ringLng((d: any) => d.lng)
        .ringColor(() => (t: number) => `rgba(229,195,106,${Math.max(0, 1 - t)})`)
        .ringMaxRadius(4.5)
        .ringPropagationSpeed(2.2)
        .ringRepeatPeriod(650)
        .ringAltitude(0.012);

      ro = new ResizeObserver(size);
      ro.observe(host);
    })();

    return () => {
      disposed = true;
      ro?.disconnect();
      try {
        globeRef.current?._destructor?.();
      } catch {
        /* noop */
      }
      globeRef.current = null;
    };
  }, []);

  // Data updates
  useEffect(() => {
    const g = globeRef.current;
    if (!g) return;
    g.pointsData(points);
    g.labelsData(selectedId ? points.filter((p) => p.id === selectedId) : []);
  }, [points, selectedId]);

  useEffect(() => {
    globeRef.current?.pathsData(rivers);
  }, [rivers]);

  useEffect(() => {
    globeRef.current?.ringsData(ring ? [ring] : []);
  }, [ring]);

  // Fly to focus target
  useEffect(() => {
    const g = globeRef.current;
    if (!g || !focus) return;
    g.pointOfView({ lat: focus.lat, lng: focus.lng, altitude: 1.15 }, 900);
  }, [focus]);

  // Auto rotate toggle
  useEffect(() => {
    const g = globeRef.current;
    if (!g) return;
    g.controls().autoRotate = autoRotate;
  }, [autoRotate]);

  return <div ref={hostRef} className="globe-host" aria-label="Interactive 3D globe atlas" role="application" />;
}
