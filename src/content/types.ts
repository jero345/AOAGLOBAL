/**
 * Contrato del contenido del sitio.
 * en.ts y es.ts DEBEN implementar esta interfaz completa: si falta una clave,
 * `tsc` (que corre en `npm run build`) falla. Nunca cae a texto vacío en producción.
 *
 * Reglas de posicionamiento (brief): sin países, ciudades ni ubicación del equipo;
 * sin precios públicos; la inversión se define por propuesta. Los testimonios
 * actuales son de ejemplo hasta que se reemplacen por reales.
 */

export type Locale = 'en' | 'es';

export type ServiceSlug = 'strategy' | 'ai' | 'platforms' | 'data' | 'web';

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
    /** Nombre legible del idioma para el selector */
    localeName: string;
  };

  nav: {
    links: Array<{ label: string; anchor: string }>;
    cta: string;
    openMenu: string;
    closeMenu: string;
    mainNavLabel: string;
    mobileNavLabel: string;
    langSwitcherLabel: string;
    /** Banner discreto de sugerencia de idioma (nunca redirige) */
    langSuggest: { text: string; accept: string; dismiss: string };
    floatingCta: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    primaryCta: string;
    secondaryCta: string;
    /** Microcopy bajo los CTAs: propuesta inicial para requerimientos definidos */
    noteTitle: string;
    noteText: string;
    imageAlt: string;
    ticker: string[];
    card: {
      label: string;
      steps: Array<{ title: string; detail: string }>;
      footer: string;
    };
  };

  diagnosis: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ problem: string; cost: string }>;
    transition: string;
  };

  howItWorks: {
    eyebrow: string;
    title: string;
    steps: Array<{ number: string; title: string; description: string }>;
    /** Bloque "Una sola dirección. Capacidades integradas." */
    model: {
      title: string;
      paragraphs: string[];
      highlight: string;
      cta: string;
      capabilities: Array<{ image: string; alt: string; label: string; text: string }>;
    };
  };

  services: {
    eyebrow: string;
    title: string;
    description: string;
    problemLabel: string;
    whatLabel: string;
    outcomeLabel: string;
    detailsLabel: string;
    exploreCta: string;
    collapseCta: string;
    undecided: { title: string; text: string; cta: string };
    items: Array<{
      slug: ServiceSlug;
      name: string;
      problem: string;
      what: string;
      outcome: string;
      /** Se muestran al "Explorar solución" */
      details: string[];
      /** CTA dentro del panel desplegado */
      cta: string;
      image: string;
      imageAlt: string;
    }>;
  };

  /** Cómo se define la inversión: sin cifras, por propuesta */
  investment: {
    eyebrow: string;
    title: string;
    points: Array<{ title: string; text: string }>;
    note: string;
  };

  socialProof: {
    eyebrow: string;
    title: string;
    items: Array<{ quote: string; author: string; role: string; company: string; result: string }>;
  };

  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };

  contact: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    reassurance: string[];
    imageAlt: string;
    form: {
      name: { label: string; placeholder: string; required: string };
      company: { label: string; placeholder: string; required: string };
      email: { label: string; placeholder: string; required: string; invalid: string };
      service: { label: string; placeholder: string; required: string; generalOption: string };
      message: { label: string; placeholder: string; required: string; minLength: string };
      submit: string;
      submitting: string;
      success: { title: string; text: string };
      error: { title: string; text: string };
      missingKey: string;
      privacy: string;
      subjectPrefix: string;
    };
    direct: { title: string; email: string };
  };

  footer: {
    tagline: string;
    /** Discreto: "US-registered · Global delivery" */
    legalLine: string;
    servicesTitle: string;
    companyTitle: string;
    companyLinks: Array<{ label: string; anchor: string }>;
    contactTitle: string;
    rights: string;
  };
}
