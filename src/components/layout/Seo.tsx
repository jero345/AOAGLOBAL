import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';
import { content, company, localePath, SITE_URL, LOCALES, DEFAULT_LOCALE } from '../../content';
import font400 from '@fontsource/montserrat/files/montserrat-latin-400-normal.woff2?url';
import font700 from '@fontsource/montserrat/files/montserrat-latin-700-normal.woff2?url';

/** Fuentes críticas del primer render (la imagen LCP se precarga en index.html, que es estático) */
const PRELOADS = [font700, font400];

const OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Meta, canonical, hreflang recíproco + x-default, Open Graph y JSON-LD
 * (Organization, Service por cada servicio, FAQPage) — todo generado desde
 * el contenido del idioma activo.
 */
export const Seo: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language];
  const canonical = SITE_URL + localePath(language);
  const ogLocale = language === 'es' ? 'es_ES' : 'en_US';

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    email: company.email,
    sameAs: [company.linkedin],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: company.email,
      availableLanguage: ['en', 'es']
    }
  };

  const services = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: t.capabilities.items.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        provider: { '@type': 'Organization', name: company.name },
        url: `${canonical}#capabilities`
      }
    }))
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{t.meta.title}</title>
      {PRELOADS.map((href) => (
        <link key={href} rel="preload" as="font" type="font/woff2" href={href} crossOrigin="anonymous" />
      ))}
      <meta name="description" content={t.meta.description} />
      <link rel="canonical" href={canonical} />

      {LOCALES.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={SITE_URL + localePath(l)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={SITE_URL + localePath(DEFAULT_LOCALE)} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={t.meta.title} />
      <meta property="og:description" content={t.meta.description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={t.meta.ogImageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t.meta.title} />
      <meta name="twitter:description" content={t.meta.description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">{JSON.stringify(organization)}</script>
      <script type="application/ld+json">{JSON.stringify(services)}</script>
      <script type="application/ld+json">{JSON.stringify(faq)}</script>
    </Helmet>
  );
};
