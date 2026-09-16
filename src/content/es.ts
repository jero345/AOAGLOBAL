import type { SiteContent } from './types';

/**
 * ES — referencia editorial. Firma B2B de consultoría y soluciones tecnológicas.
 * Redacción institucional (sin tuteo). Sin geografía, sin precios, sin testimonios.
 */
export const es: SiteContent = {
  meta: {
    title: 'AOA Global Services | Consultoría y Soluciones Tecnológicas',
    description:
      'AOA Global Services combina consultoría y capacidad tecnológica para mejorar procesos, integrar sistemas y desarrollar soluciones empresariales a medida.',
    ogImageAlt: 'AOA Global Services — tecnología para transformar cómo opera una organización',
    localeName: 'Español'
  },

  nav: {
    links: [
      { label: 'Cómo trabajamos', anchor: '#approach' },
      { label: 'Soluciones', anchor: '#capabilities' },
      { label: 'Proyectos', anchor: '#projects' },
      { label: 'Preguntas', anchor: '#faq' }
    ],
    cta: 'Iniciar un proyecto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mainNavLabel: 'Navegación principal',
    mobileNavLabel: 'Navegación móvil',
    langSwitcherLabel: 'Idioma',
    langSuggest: {
      text: 'This site is also available in English.',
      accept: 'View in English',
      dismiss: 'Seguir en español'
    },
    floatingCta: 'Iniciar un proyecto'
  },

  hero: {
    eyebrow: 'Estrategia · Tecnología · Ejecución',
    title: 'Tecnología para transformar cómo opera una organización.',
    description:
      'AOA Global Services combina consultoría y desarrollo tecnológico para mejorar procesos, integrar sistemas y construir soluciones empresariales, desde el análisis hasta la implementación.',
    primaryCta: 'Iniciar un proyecto',
    secondaryCta: 'Explorar soluciones',
    note: 'Para requerimientos claramente definidos, podemos presentar una propuesta inicial en hasta 48 horas hábiles.',
    imageAlt: 'Ilustración de una plataforma digital con paneles, gráficos e integraciones conectadas',
    ticker: [
      'Estrategia y transformación tecnológica',
      'Automatización y soluciones inteligentes',
      'Plataformas y software a medida',
      'Datos, integraciones y reporting',
      'Web y soluciones digitales'
    ]
  },

  challenges: {
    eyebrow: 'Desafíos de negocio',
    title: 'Cuando la operación evoluciona, la tecnología debe evolucionar con ella.',
    items: [
      {
        title: 'Procesos que limitan la operación',
        text: 'Tareas manuales y herramientas poco adaptadas dificultan la gestión y reducen la capacidad de los equipos.'
      },
      {
        title: 'Sistemas e información desconectados',
        text: 'Datos dispersos dificultan el seguimiento del desempeño, los presupuestos y el avance de los proyectos.'
      },
      {
        title: 'Iniciativas tecnológicas sin una dirección clara',
        text: 'La organización necesita definir qué mejorar, qué integrar y dónde invertir antes de desarrollar una solución.'
      }
    ]
  },

  approach: {
    eyebrow: 'Nuestro enfoque',
    title: 'De la estrategia a la implementación.',
    steps: [
      { number: '01', title: 'Comprender', description: 'Analizamos el negocio, sus procesos y el resultado esperado.' },
      { number: '02', title: 'Diseñar', description: 'Definimos la solución, los requerimientos y el alcance.' },
      { number: '03', title: 'Implementar', description: 'Desarrollamos, integramos y validamos la solución.' }
    ],
    closing: 'Consultoría, desarrollo e implementación coordinados dentro de un mismo proyecto.'
  },

  capabilities: {
    eyebrow: 'Soluciones',
    title: 'Cinco capacidades para transformar procesos, información y operación.',
    showDetails: 'Ver detalles',
    hideDetails: 'Ocultar detalles',
    capabilitiesLabel: 'Capacidades',
    cta: 'Iniciar un proyecto',
    items: [
      {
        slug: 'strategy',
        name: 'Estrategia y Transformación Tecnológica',
        description: 'Analizamos procesos y sistemas para definir prioridades, requerimientos y una hoja de ruta de implementación.',
        capabilities: ['Diagnóstico', 'Procesos', 'Estrategia tecnológica', 'Diseño de soluciones', 'Roadmaps'],
        image: '/img/consulting.webp',
        imageAlt: 'Equipo definiendo prioridades de una iniciativa sobre un tablero'
      },
      {
        slug: 'automation',
        name: 'Automatización y Soluciones Inteligentes',
        description: 'Optimizamos flujos de trabajo y automatizamos tareas para reducir trabajo manual y mejorar la capacidad operativa.',
        capabilities: ['Automatización', 'Workflows', 'Procesamiento documental', 'Integraciones', 'IA aplicada'],
        image: '/img/automation.webp',
        imageAlt: 'Diagrama de flujos de proceso conectados sobre una pared de trabajo'
      },
      {
        slug: 'platforms',
        name: 'Plataformas y Software a Medida',
        description: 'Diseñamos plataformas internas y herramientas de gestión adaptadas a los procesos, usuarios y datos de cada organización.',
        capabilities: ['Plataformas operativas', 'Software empresarial', 'Portales', 'Dashboards', 'Herramientas internas'],
        image: '/img/software.webp',
        imageAlt: 'Código fuente de una plataforma en desarrollo'
      },
      {
        slug: 'data',
        name: 'Datos, Integraciones y Reporting',
        description: 'Integramos sistemas y datos para facilitar el seguimiento de la operación, el desempeño y los resultados.',
        capabilities: ['Integraciones', 'APIs', 'Data flows', 'Dashboards', 'Reporting', 'Analítica'],
        image: '/img/seo.webp',
        imageAlt: 'Tablero de indicadores operativos en un portátil'
      },
      {
        slug: 'web',
        name: 'Web y Soluciones Digitales',
        description: 'Desarrollamos sitios corporativos y experiencias digitales alineados con los objetivos comerciales y operativos de la empresa.',
        capabilities: ['Web Development', 'UX/UI', 'SEO', 'Analytics', 'Landing Pages', 'Portales', 'Experiencias digitales'],
        image: '/img/web.webp',
        imageAlt: 'Estación de diseño con la interfaz de un sitio corporativo en pantalla'
      }
    ]
  },

  projects: {
    eyebrow: 'Proyectos y soluciones',
    title: 'Tecnología aplicada a necesidades reales de operación.',
    items: [
      {
        title: 'Plataformas operativas',
        text: 'Soluciones que integran planificación, información, seguimiento, gestión y reporting dentro de una misma capa tecnológica.'
      },
      {
        title: 'Automatización de procesos',
        text: 'Diseño de flujos que reducen actividades manuales, estructuran información y mejoran la consistencia de procesos recurrentes.'
      },
      {
        title: 'Ecosistemas digitales',
        text: 'Diseño de experiencias digitales conectadas con captación, contenidos, formularios, analytics y procesos internos.'
      }
    ]
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Aspectos clave antes de iniciar un proyecto tecnológico.',
    items: [
      {
        q: '¿Cómo se define y gestiona un proyecto?',
        a: 'El proyecto puede comenzar con un requerimiento definido o con el análisis de una necesidad de negocio. A partir de ese contexto se acuerdan alcance, responsables, entregables e hitos de seguimiento.'
      },
      {
        q: '¿AOA puede trabajar con sistemas existentes?',
        a: 'Sí. Evaluamos las herramientas actuales y las posibilidades de integración antes de recomendar nuevos desarrollos o reemplazos.'
      },
      {
        q: '¿Cómo se determina qué procesos automatizar?',
        a: 'Analizamos el flujo de trabajo, las dependencias, los datos disponibles y el resultado esperado para identificar dónde la automatización puede aportar una mejora concreta.'
      },
      {
        q: '¿Cómo se evalúan los resultados?',
        a: 'Los criterios se acuerdan según el objetivo del proyecto y pueden incluir eficiencia, calidad de información, visibilidad operativa, adopción o desempeño digital.'
      },
      {
        q: '¿Qué ocurre después de la implementación?',
        a: 'El acompañamiento posterior se define según el alcance acordado y puede incluir mantenimiento, optimización, nuevas funcionalidades o integraciones.'
      }
    ]
  },

  contact: {
    eyebrow: 'Nuevos proyectos',
    title: 'Presente su proyecto o desafío.',
    intro: 'Comparta el objetivo del proyecto o el proceso que necesita mejorar. Revisaremos el contexto para definir el siguiente paso.',
    imageAlt: 'Dos profesionales revisando el contexto de un proyecto',
    form: {
      name: { label: 'Nombre', placeholder: 'Nombre y apellido', required: 'Indique su nombre.' },
      company: { label: 'Organización', placeholder: 'Nombre de la organización', required: 'Indique el nombre de la organización.' },
      email: {
        label: 'Correo de trabajo',
        placeholder: 'nombre@organizacion.com',
        required: 'Indique un correo de trabajo.',
        invalid: 'El formato del correo no es válido.'
      },
      projectType: {
        label: 'Tipo de proyecto',
        placeholder: 'Seleccione una opción',
        required: 'Seleccione el tipo de proyecto.',
        options: [
          { value: 'strategy', label: 'Estrategia y transformación tecnológica' },
          { value: 'automation', label: 'Automatización y soluciones inteligentes' },
          { value: 'platforms', label: 'Plataforma o software a medida' },
          { value: 'data', label: 'Datos e integraciones' },
          { value: 'web', label: 'Web y soluciones digitales' },
          { value: 'general', label: 'Por definir' }
        ]
      },
      message: {
        label: 'Contexto del proyecto',
        placeholder: 'Describa brevemente la situación actual, el objetivo del proyecto, los procesos o sistemas involucrados y cualquier plazo relevante.',
        required: 'Describa brevemente el contexto del proyecto.',
        minLength: 'Amplíe el contexto para poder evaluar la solicitud (mínimo 20 caracteres).'
      },
      submit: 'Enviar requerimiento',
      submitting: 'Enviando…',
      success: {
        title: 'Gracias. Hemos recibido la información del proyecto.',
        text: 'Nuestro equipo revisará el requerimiento y se pondrá en contacto para definir el siguiente paso.'
      },
      error: {
        title: 'No fue posible enviar la solicitud.',
        text: 'Intente nuevamente o escríbanos directamente al correo.'
      },
      missingKey: 'El formulario aún no está habilitado. Escríbanos directamente al correo.',
      privacy: 'La información compartida será utilizada exclusivamente para evaluar y responder a esta solicitud.',
      subjectPrefix: 'Nuevo proyecto'
    },
    direct: {
      title: 'Contacto directo',
      email: 'admin@aoaglobalservices.com'
    }
  },

  footer: {
    tagline: 'Consultoría y soluciones tecnológicas para transformar procesos, información y capacidad operativa.',
    brandLine: 'Strategy · Technology · Execution',
    solutionsTitle: 'Soluciones',
    solutions: [
      { slug: 'strategy', label: 'Estrategia y transformación tecnológica' },
      { slug: 'automation', label: 'Automatización y soluciones inteligentes' },
      { slug: 'platforms', label: 'Plataformas a medida' },
      { slug: 'data', label: 'Datos e integraciones' },
      { slug: 'web', label: 'Web y soluciones digitales' }
    ],
    companyTitle: 'Empresa',
    companyLinks: [
      { label: 'Cómo trabajamos', anchor: '#approach' },
      { label: 'Proyectos', anchor: '#projects' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Contacto', anchor: '#contact' }
    ],
    contactTitle: 'Contacto',
    legal: 'US-registered company',
    rights: 'Todos los derechos reservados.'
  }
};
