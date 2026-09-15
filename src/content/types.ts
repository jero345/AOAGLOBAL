/**
 * Contrato del contenido del sitio.
 * en.ts y es.ts DEBEN implementar esta interfaz completa: si falta una clave,
 * `tsc` (que corre en `npm run build`) falla. Nunca cae a texto vacío en producción.
 *
 * Principio de marca: ESTRATEGIA · TECNOLOGÍA · EJECUCIÓN.
 * Sin países ni ubicaciones, sin precios, sin testimonios inventados,
 * IA solo como tecnología dentro de una capacidad (nunca como claim).
 */

export type Locale = 'en' | 'es';

export type ServiceSlug = 'strategy' | 'automation' | 'platforms' | 'data' | 'web';

/** Valor del tipo de proyecto en el formulario: una capacidad o "por definir" */
export type ProjectType = ServiceSlug | 'general';

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
    /** Microcopy de baja jerarquía: propuesta inicial solo para requerimientos definidos */
    note: string;
    imageAlt: string;
    ticker: string[];
    /** Tarjeta "De la necesidad al proyecto" */
    card: {
      label: string;
      steps: Array<{ title: string; detail: string }>;
      footer: string;
    };
  };

  challenges: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ title: string; text: string }>;
    closing: string[];
  };

  approach: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: Array<{ number: string; title: string; description: string }>;
    closing: string[];
    /** Bloque "Una dirección integrada de proyecto" */
    model: {
      title: string;
      paragraphs: string[];
      highlight: string;
      pillars: Array<{ image: string; alt: string; label: string; text: string }>;
    };
  };

  capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    challengeLabel: string;
    whatLabel: string;
    outcomeLabel: string;
    capabilitiesLabel: string;
    /** CTA de cada tarjeta → formulario con el tipo de proyecto preseleccionado */
    cta: string;
    /** Tarjeta "Cuando el problema está claro, pero la solución todavía no" */
    undecided: { title: string; paragraphs: string[]; cta: string };
    items: Array<{
      slug: ServiceSlug;
      name: string;
      challenge: string;
      what: string;
      outcome: string;
      capabilities: string[];
      image: string;
      imageAlt: string;
    }>;
  };

  /** Tipos de solución (no clientes concretos) */
  projects: {
    eyebrow: string;
    title: string;
    capabilitiesLabel: string;
    items: Array<{ title: string; text: string; capabilities: string[] }>;
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
    imageAlt: string;
    form: {
      name: { label: string; placeholder: string; required: string };
      company: { label: string; placeholder: string; required: string };
      email: { label: string; placeholder: string; required: string; invalid: string };
      projectType: {
        label: string;
        placeholder: string;
        required: string;
        options: Array<{ value: ProjectType; label: string }>;
      };
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
    /** Línea de marca: Strategy · Technology · Execution */
    brandLine: string;
    solutionsTitle: string;
    solutions: Array<{ slug: ServiceSlug; label: string }>;
    companyTitle: string;
    companyLinks: Array<{ label: string; anchor: string }>;
    contactTitle: string;
    /** Discreto, junto al copyright */
    legal: string;
    rights: string;
  };
}
