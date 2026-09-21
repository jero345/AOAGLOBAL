import { useEffect, useState } from 'react';

/**
 * Cortina de entrada de la home: se muestra una vez por sesión.
 * Fases: marca (0–1.3 s) → elección de idioma (hasta que el visitante elige o pasan
 * INTRO_AUTO_MS) → se levanta. El hero espera al evento INTRO_DONE_EVENT para animar.
 * La decisión se toma en el cliente; en SSR siempre "no".
 */
export const INTRO_KEY = 'aoa_intro';
/** Momento en que aparece la elección de idioma (ms) */
export const INTRO_CHOOSE_MS = 1300;
/** Si nadie elige, la cortina se levanta sola a los (ms) */
export const INTRO_AUTO_MS = 8000;
/** Duración de la subida de la cortina (ms) */
export const INTRO_LEAVE_MS = 800;
/** Evento global: la cortina empieza a levantarse (el hero arranca su entrada) */
export const INTRO_DONE_EVENT = 'aoa:intro-done';

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

/** true cuando el hero ya puede animar: sin cortina, o cuando esta se levanta */
export function useIntroReady(): boolean {
  const [ready, setReady] = useState(() => !introWillPlay());
  useEffect(() => {
    if (ready) return;
    const onDone = () => setReady(true);
    window.addEventListener(INTRO_DONE_EVENT, onDone);
    return () => window.removeEventListener(INTRO_DONE_EVENT, onDone);
  }, [ready]);
  return ready;
}
