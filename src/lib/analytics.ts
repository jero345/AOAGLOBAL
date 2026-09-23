/**
 * Hooks de analítica — INACTIVOS hasta que existan VITE_GA4_ID / VITE_META_PIXEL_ID.
 * Sin IDs no se carga ningún script externo ni se envía nada.
 *
 * Eventos:
 *  - page_view    { page_path, page_location, page_title, language }  → también al navegar sin recargar
 *  - cta_click    { label, location }   → cualquier elemento con data-track="..."
 *  - form_submit  { service, locale }
 *  - form_success { service, locale }
 *  - form_error   { service, locale, reason }
 */

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

import { isProductionHost } from '../content';

// Solo se mide en aoaglobalservices.com: las copias (Vercel, previews) y el entorno
// local no deben ensuciar los informes de la propiedad.
const GA4_ID = (import.meta.env.VITE_GA4_ID as string | undefined) || undefined;
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined;

let initialised = false;

const loadScript = (src: string) => {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
};

export const initAnalytics = (): void => {
  if (initialised || typeof window === 'undefined') return;
  initialised = true;

  const measure = GA4_ID && isProductionHost();

  if (measure) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag('js', new Date());
    // send_page_view: false → las vistas las envía pageview() con la URL y el título
    // correctos. Con el automático, al navegar sin recargar GA4 reutiliza los de la
    // primera página. (GA4 anonimiza la IP por defecto: no hace falta anonymize_ip.)
    window.gtag('config', GA4_ID, { send_page_view: false });
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`);
  }

  if (PIXEL_ID) {
    // Stub estándar de Meta Pixel: encola llamadas hasta que carga el script
    const f = window as Window & { _fbq?: unknown };
    if (!f.fbq) {
      const n: any = (f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      });
      f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      loadScript('https://connect.facebook.net/en_US/fbevents.js');
    }
    window.fbq!('init', PIXEL_ID);
    window.fbq!('track', 'PageView');
  }

  // Delegación: cualquier click en [data-track] dispara cta_click
  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-track]');
    if (!el) return;
    track('cta_click', {
      label: el.dataset.track,
      location: el.closest('section[id]')?.id ?? 'header'
    });
  });
};

/** Vista de página: la inicial y cada cambio de ruta (/, /es/, páginas secundarias) */
export const pageview = (path: string, title: string, language: string): void => {
  if (typeof window === 'undefined' || !GA4_ID || !isProductionHost()) return;
  window.gtag?.('event', 'page_view', {
    send_to: GA4_ID,
    page_location: window.location.href,
    page_title: title,
    language
  });
  if (import.meta.env.DEV) console.debug('[analytics] page_view', path, title);
};

export const track = (event: string, params: EventParams = {}): void => {
  if (typeof window === 'undefined') return;
  if (import.meta.env.DEV) console.debug('[analytics]', event, params);
  window.gtag?.('event', event, params);
  if (window.fbq) {
    if (event === 'form_success') window.fbq('track', 'Lead', params);
    else window.fbq('trackCustom', event, params);
  }
};
