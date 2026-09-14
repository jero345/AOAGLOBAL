/**
 * Contrato del contenido del sitio.
 * en.ts y es.ts DEBEN implementar esta interfaz completa: si falta una clave,
 * `tsc` (que corre en `npm run build`) falla. Nunca cae a texto vacío en producción.
 *
 * Los datos de cliente (equipo, testimonios, precios) son de ejemplo hasta que se
 * reemplacen por los reales; ver el comentario al inicio de en.ts / es.ts.
 */

export type Locale = 'en' | 'es';

export type ServiceSlug = 'web' | 'seo' | 'software' | 'automation' | 'consulting';

export interface SiteContent {
  meta: {
    /** <title> de la página */
    title: string;
    description: string;
    ogImageAlt: string;
    /** Nombre legible del idioma para hreflang/selector */
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
    langSuggest: {
      text: string;
      accept: string;
      dismiss: string;
    };
    floatingCta: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    /** Tarjeta visual que ilustra la promesa requerimiento → estimado → entrega */
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
    highlightTitle: string;
    highlightText: string;
    cta: string;
  };

  services: {
    eyebrow: string;
    title: string;
    description: string;
    problemLabel: string;
    whatLabel: string;
    outcomeLabel: string;
    quoteCta: string;
    items: Array<{
      slug: ServiceSlug;
      name: string;
      problem: string;
      what: string;
      outcome: string;
    }>;
  };

  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    fromLabel: string;
    /** Prefijo de la línea secundaria (solo EN muestra AUD). Vacío = no mostrar. */
    secondaryCurrencyNote: string;
    timelineLabel: string;
    deliverableLabel: string;
    featuredBadge: string;
    disclaimer: string;
    cta: string;
    plans: Array<{
      slug: ServiceSlug;
      name: string;
      problem: string;
      deliverables: string[];
      /** Solo el número/texto, sin "USD". Ej: "1,500" o "900 / month" */
      priceUsd: string;
      /** Equivalente aproximado en AUD (solo EN). Vacío en ES. */
      priceAud: string;
      timeline: string;
      featured: boolean;
    }>;
  };

  team: {
    eyebrow: string;
    title: string;
    description: string;
    bridge: string;
    sides: Array<{
      region: string;
      role: string;
      members: Array<{
        name: string;
        role: string;
        location: string;
        skills: string[];
        /** Ruta a la foto en /public. Sin foto → avatar con iniciales. */
        photo: string | null;
      }>;
    }>;
  };

  socialProof: {
    eyebrow: string;
    title: string;
    items: Array<{
      quote: string;
      author: string;
      role: string;
      company: string;
      result: string;
    }>;
  };

  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };

  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    reassurance: string[];
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
      /** Prefijo del asunto del correo que recibe el equipo */
      subjectPrefix: string;
    };
    direct: {
      title: string;
      email: string;
    };
  };

  footer: {
    tagline: string;
    servicesTitle: string;
    companyTitle: string;
    companyLinks: Array<{ label: string; anchor: string }>;
    contactTitle: string;
    rights: string;
  };
}
