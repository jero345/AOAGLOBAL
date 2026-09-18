/**
 * Cortina de entrada de la home: se muestra una vez por sesión.
 * La decisión se toma en el cliente; en SSR siempre "no" (solo afecta a retardos de animación).
 */
export const INTRO_KEY = 'aoa_intro';
/** Duración total de la cortina (ms): el hero puede empezar a animar un poco antes de que termine */
export const INTRO_TOTAL_MS = 1900;
/** Retardo (s) que suma el hero a sus entradas cuando la cortina se muestra */
export const INTRO_HERO_DELAY = 1.25;

export function introWillPlay(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return !sessionStorage.getItem(INTRO_KEY);
  } catch {
    return false;
  }
}

export function markIntroSeen(): void {
  try {
    sessionStorage.setItem(INTRO_KEY, '1');
  } catch {
    /* noop */
  }
}
