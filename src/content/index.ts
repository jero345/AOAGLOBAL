import { en } from './en';
import { es } from './es';
import type { Locale, SiteContent } from './types';

export type { Locale, SiteContent, ServiceSlug, ProjectType } from './types';

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALES: Locale[] = ['en', 'es'];

/** Dominio de producción: canonical, hreflang, OG, sitemap */
export const SITE_URL = 'https://aoaglobalservices.com';

export const content: Record<Locale, SiteContent> = { en, es };

/** Datos institucionales independientes del idioma */
export const company = {
  name: 'AOA Global Services LLC',
  email: 'admin@aoaglobalservices.com',
  linkedin: 'https://www.linkedin.com/company/aoa-global-services'
};

/** Páginas secundarias: ruta por idioma (con barra final, igual que Vercel trailingSlash) */
export const pages = {
  ai: { en: '/ai-consulting/', es: '/es/consultoria-inteligencia-artificial/' },
  aiMarket: { en: '/ai-consulting-australia/', es: '/es/consultoria-ia-latinoamerica/' }
} as const satisfies Record<string, Record<Locale, string>>;

/** Prefijo de ruta por idioma: EN en raíz, ES bajo /es */
export const localePath = (locale: Locale, hash = ''): string =>
  (locale === DEFAULT_LOCALE ? '/' : `/${locale}/`) + hash;

/** Deriva el idioma de un pathname. Cualquier cosa fuera de /es → EN. */
export const localeFromPath = (pathname: string): Locale =>
  pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
