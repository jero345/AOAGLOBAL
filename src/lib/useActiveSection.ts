import { useEffect, useState } from 'react';

/**
 * Devuelve el id de la sección que ocupa la franja central del viewport.
 * Solo tiene sentido en la home (las anclas del menú); en otras rutas devuelve null.
 */
export function useActiveSection(ids: string[], enabled = true): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join('|');

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === 'undefined') {
      setActive(null);
      return;
    }
    const sections = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        }
        // Con el hero en pantalla (antes de la primera sección) no se marca nada
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        setActive(best);
      },
      // Franja: desde debajo del header hasta un poco por encima de la mitad inferior
      { rootMargin: '-35% 0px -50% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, enabled]);

  return active;
}
