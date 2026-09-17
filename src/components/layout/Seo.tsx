import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';
import { content, company, localePath, SITE_URL, LOCALES, DEFAULT_LOCALE, type Locale } from '../../content';
import font400 from '@fontsource/montserrat/files/montserrat-latin-400-normal.woff2?url';
import font700 from '@fontsource/montserrat/files/montserrat-latin-700-normal.woff2?url';

/** Fuentes críticas del primer render (la imagen LCP se precarga en index.html, que es estático) */
const PRELOADS = [font700, font400];
const OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SeoProps {
  title?: string;
  description?: string;
  /** Ruta de esta página en cada idioma (para canonical + hreflang). Por defecto, la home. */
  paths?: Record<Locale, string>;
  /** JSON-LD adicional específico de la página */
  schemas?: object[];
  /** Incluir el FAQPage de la home (solo en la home) */
  homeFaq?: boolean;
  /** Código hreflang por idioma cuando no es el genérico (p. ej. en-AU) */
  langCodes?: Partial<Record<Locale, string>>;
}

/**
 * Meta, canonical, hreflang recíproco + x-default, Open Graph y JSON-LD.
 * Organization va en todas las páginas; el resto lo decide cada página.
 */
export const Seo: React.FC<SeoProps> = ({ title, description, paths, schemas = [], homeFaq = false, langCodes = {} }) => {
  const { language } = useLanguage();
  const t = content[language];
  const pathFor = (l: Locale) => paths?.[l] ?? localePath(l);
  const canonical = SITE_URL + pathFor(language);
  const ogLocale = language === 'es' ? 'es_ES' : 'en_US';
  const pageTitle = title ?? t.meta.title;
  const pageDescription = description ?? t.meta.description;

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    email: company.email,
    sameAs: [company.linkedin],
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: company.email, availableLanguage: ['en', 'es'] }
  };

  const faq = homeFaq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: t.faq.items.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
      }
    : null;

  const all = [organization, ...(faq ? [faq] : []), ...schemas];

  return (
    <Helmet>
      <html lang={language} />
      <title>{pageTitle}</title>
      {PRELOADS.map((href) => (
        <link key={href} rel="preload" as="font" type="font/woff2" href={href} crossOrigin="anonymous" />
      ))}
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonical} />

      {LOCALES.map((l) => (
        <link key={l} rel="alternate" hrefLang={langCodes[l] ?? l} href={SITE_URL + pathFor(l)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={SITE_URL + pathFor(DEFAULT_LOCALE)} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={t.meta.ogImageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {all.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
