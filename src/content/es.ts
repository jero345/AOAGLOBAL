import type { SiteContent } from './types';

/**
 * ES — copy final (revisión editorial). Firma B2B de consultoría y soluciones tecnológicas.
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
    paragraphs: [
      'AOA Global Services combina consultoría y capacidad tecnológica para mejorar procesos, conectar información y construir soluciones alineadas con las necesidades reales del negocio.',
      'Desde una iniciativa específica hasta una plataforma empresarial completa, conectamos estrategia y ejecución dentro de un mismo proyecto.'
    ],
    primaryCta: 'Explorar soluciones',
    secondaryCta: 'Iniciar un proyecto',
    note: 'Para requerimientos claramente definidos, podemos presentar una propuesta inicial en hasta 48 horas hábiles.',
    imageAlt: 'La Tierra de noche vista desde órbita, con las luces de las ciudades conectadas entre continentes',
    ticker: [
      'Estrategia y transformación tecnológica',
      'Automatización y soluciones inteligentes',
      'Plataformas y software a medida',
      'Datos, integraciones y reporting',
      'Web y soluciones digitales'
    ],
    card: {
      label: 'De la necesidad al proyecto',
      steps: [
        { title: 'Contexto', detail: 'Comprendemos la necesidad, el proceso involucrado y el resultado que la organización necesita alcanzar.' },
        { title: 'Definición', detail: 'Establecemos alcance, requerimientos, enfoque y plan de ejecución.' },
        { title: 'Implementación', detail: 'Diseñamos, desarrollamos e integramos la solución hasta su puesta en funcionamiento.' }
      ],
      footer: 'Cada proyecto se estructura de acuerdo con su complejidad, objetivos y requerimientos.'
    }
  },

  challenges: {
    eyebrow: 'Desafíos de negocio',
    title: 'Cuando la operación evoluciona, la tecnología debe evolucionar con ella.',
    intro:
      'A medida que una organización crece, también aumenta la complejidad de sus procesos, sistemas e información. Lo que antes funcionaba puede convertirse en una limitación para operar, decidir y escalar.',
    items: [
      {
        title: 'Procesos que ya no escalan',
        text: 'Flujos manuales, tareas repetitivas y dependencias operativas reducen capacidad y aumentan el riesgo de error.'
      },
      {
        title: 'Información fragmentada',
        text: 'Los datos están distribuidos entre sistemas, archivos y equipos, dificultando obtener una visión consistente de la operación.'
      },
      {
        title: 'Sistemas desconectados',
        text: 'Las herramientas funcionan individualmente, pero no como un ecosistema integrado.'
      },
      {
        title: 'Visibilidad limitada',
        text: 'La información existe, pero no siempre está disponible de forma útil para controlar desempeño, identificar desviaciones o tomar decisiones.'
      },
      {
        title: 'Tecnología que no responde al modelo operativo',
        text: 'Las soluciones estándar dejan de ser suficientes cuando los procesos y requerimientos de la organización aumentan en complejidad.'
      },
      {
        title: 'Iniciativas tecnológicas sin una dirección clara',
        text: 'La inversión pierde impacto cuando no existe una relación clara entre necesidades de negocio, prioridades y ejecución.'
      }
    ],
    closing: [
      'La solución no siempre consiste en incorporar más tecnología.',
      'En muchos casos, comienza por mejorar el proceso, integrar mejor la información o utilizar de forma más inteligente los sistemas existentes.'
    ]
  },

  approach: {
    eyebrow: 'Nuestro enfoque',
    title: 'De la estrategia a la implementación.',
    intro: 'AOA integra análisis de negocio, diseño de soluciones y capacidad tecnológica dentro de un mismo modelo de trabajo.',
    steps: [
      {
        number: '01',
        title: 'Comprender',
        description: 'Analizamos el contexto, los procesos, los sistemas existentes y el resultado que la organización necesita alcanzar.'
      },
      {
        number: '02',
        title: 'Diseñar',
        description: 'Definimos la solución, sus requerimientos, prioridades y el enfoque necesario para llevarla a ejecución.'
      },
      {
        number: '03',
        title: 'Implementar',
        description: 'Desarrollamos, configuramos e integramos los componentes definidos hasta la puesta en funcionamiento de la solución.'
      }
    ],
    closing: [
      'La profundidad de cada fase depende del proyecto.',
      'Una necesidad claramente definida puede avanzar directamente a ejecución. Un desafío de mayor complejidad puede requerir primero una fase de análisis y diseño.'
    ],
    model: {
      title: 'Una dirección integrada de proyecto.',
      paragraphs: [
        'Las iniciativas tecnológicas suelen involucrar procesos, datos, sistemas, experiencia y desarrollo.',
        'AOA coordina estas capacidades bajo una misma dirección para mantener coherencia entre la necesidad del negocio, la solución diseñada y su implementación.'
      ],
      highlight: 'Una visión. Un alcance definido. Una solución integrada.',
      pillars: [
        {
          image: '/img/strategy.webp',
          alt: 'Sesión de trabajo con el equipo de negocio',
          label: 'Consultoría',
          text: 'Comprensión del negocio y definición de la iniciativa.'
        },
        {
          image: '/img/team.webp',
          alt: 'Equipo técnico desarrollando una solución',
          label: 'Tecnología',
          text: 'Diseño, desarrollo e integración de soluciones.'
        },
        {
          image: '/img/implementation.webp',
          alt: 'Revisión de una solución antes de su puesta en funcionamiento',
          label: 'Implementación',
          text: 'Gestión, validación y puesta en funcionamiento.'
        }
      ]
    }
  },

  capabilities: {
    eyebrow: 'Capacidades',
    title: 'Soluciones para transformar procesos, información y operación.',
    intro:
      'Cada iniciativa parte de un contexto diferente. Las capacidades de AOA pueden integrarse dentro de un mismo proyecto o aplicarse de forma específica según las necesidades de la organización.',
    challengeLabel: 'El desafío',
    whatLabel: 'Qué hacemos',
    outcomeLabel: 'Resultado',
    capabilitiesLabel: 'Capacidades',
    cta: 'Iniciar un proyecto',
    undecided: {
      title: 'Cuando el problema está claro, pero la solución todavía no.',
      paragraphs: [
        'No es necesario comenzar con una especificación tecnológica.',
        'AOA puede analizar la situación actual y determinar qué combinación de procesos, integración, automatización o desarrollo tiene mayor sentido para la organización.'
      ],
      cta: 'Iniciar un proyecto'
    },
    items: [
      {
        slug: 'strategy',
        name: 'Estrategia y Transformación Tecnológica',
        challenge: 'La organización necesita evolucionar procesos, sistemas o capacidades, pero no existe claridad sobre qué transformar primero.',
        what: 'Analizamos la operación, los procesos, la información y los sistemas existentes para definir oportunidades, prioridades y soluciones tecnológicas viables.',
        outcome: 'Una iniciativa estructurada, con prioridades claras y una dirección tecnológica alineada con el negocio.',
        capabilities: ['Diagnóstico', 'Procesos', 'Estrategia tecnológica', 'Diseño de soluciones', 'Roadmaps'],
        image: '/img/consulting.webp',
        imageAlt: 'Equipo definiendo prioridades de una iniciativa sobre un tablero'
      },
      {
        slug: 'automation',
        name: 'Automatización y Soluciones Inteligentes',
        challenge: 'Procesos repetitivos, grandes volúmenes de información y actividades manuales limitan la capacidad operativa.',
        what: 'Diseñamos soluciones que automatizan tareas, estructuran información y mejoran flujos de trabajo mediante integración, automatización y tecnologías inteligentes cuando aportan valor real al proceso.',
        outcome: 'Mayor capacidad operativa, procesos más eficientes y mejor aprovechamiento de la información.',
        capabilities: ['Automatización', 'Workflows', 'Procesamiento documental', 'Integraciones', 'IA aplicada'],
        image: '/img/automation.webp',
        imageAlt: 'Asistente robótico que representa procesos automatizados'
      },
      {
        slug: 'platforms',
        name: 'Plataformas y Software a Medida',
        challenge: 'Las soluciones existentes ya no responden adecuadamente a la forma en que opera la organización.',
        what: 'Diseñamos y desarrollamos plataformas, sistemas internos, portales y herramientas de gestión adaptadas a requerimientos específicos.',
        outcome: 'Tecnología construida alrededor de los procesos, usuarios y datos de la organización.',
        capabilities: ['Plataformas operativas', 'Software empresarial', 'Portales', 'Dashboards', 'Herramientas internas'],
        image: '/img/software.webp',
        imageAlt: 'Código fuente de una plataforma en desarrollo'
      },
      {
        slug: 'data',
        name: 'Datos, Integraciones y Reporting',
        challenge: 'La información está distribuida entre diferentes sistemas y no existe una visión suficientemente integrada de la operación.',
        what: 'Conectamos sistemas, APIs y fuentes de datos para estructurar flujos de información, reporting y herramientas de análisis.',
        outcome: 'Información más consistente, mayor visibilidad operativa y mejores herramientas para la toma de decisiones.',
        capabilities: ['Integraciones', 'APIs', 'Data flows', 'Dashboards', 'Reporting', 'Analítica'],
        image: '/img/seo.webp',
        imageAlt: 'Tablero de indicadores operativos en un portátil'
      },
      {
        slug: 'web',
        name: 'Web y Soluciones Digitales',
        challenge: 'La presencia digital no refleja adecuadamente el posicionamiento de la organización o no cumple sus objetivos comerciales y operativos.',
        what: 'Diseñamos y desarrollamos sitios corporativos, landing pages, portales y experiencias digitales orientadas a rendimiento, posicionamiento y conversión.',
        outcome: 'Una presencia digital profesional, medible y preparada para evolucionar con el negocio.',
        capabilities: ['Web Development', 'UX/UI', 'SEO', 'Analytics', 'Landing Pages', 'Portales', 'Experiencias digitales'],
        image: '/img/web.webp',
        imageAlt: 'Estación de diseño con la interfaz de un sitio corporativo en pantalla'
      }
    ]
  },

  projects: {
    eyebrow: 'Proyectos y soluciones',
    title: 'Tecnología aplicada a necesidades reales de operación.',
    capabilitiesLabel: 'Capacidades',
    items: [
      {
        title: 'Plataformas operativas',
        text: 'Soluciones que integran planificación, información, seguimiento, gestión y reporting dentro de una misma capa tecnológica.',
        capabilities: ['Procesos', 'Integraciones', 'Datos', 'Dashboards', 'Reporting', 'Automatización']
      },
      {
        title: 'Automatización de procesos',
        text: 'Diseño de flujos que reducen actividades manuales, estructuran información y mejoran la consistencia de procesos recurrentes.',
        capabilities: ['Automation', 'Workflow Design', 'Integraciones', 'Document Processing', 'IA aplicada cuando corresponda']
      },
      {
        title: 'Ecosistemas digitales',
        text: 'Diseño de experiencias digitales conectadas con captación, contenidos, formularios, analytics y procesos internos.',
        capabilities: ['Web', 'UX/UI', 'SEO', 'Analytics', 'Integraciones']
      }
    ]
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Aspectos clave antes de iniciar un proyecto tecnológico.',
    items: [
      {
        q: '¿Qué tipo de proyectos desarrolla AOA?',
        a: 'Trabajamos en proyectos relacionados con transformación tecnológica, automatización, integración de sistemas, plataformas empresariales, datos y soluciones digitales.'
      },
      {
        q: '¿Es necesario tener definida la solución antes de iniciar un proyecto?',
        a: 'No. Un proyecto puede comenzar con un requerimiento claramente definido o con un desafío de negocio que todavía necesita análisis y estructuración.'
      },
      {
        q: '¿Cómo se define el alcance?',
        a: 'El alcance se establece a partir de los objetivos, procesos involucrados, sistemas existentes, requerimientos funcionales, dependencias y nivel de complejidad del proyecto.'
      },
      {
        q: '¿AOA puede trabajar con sistemas existentes?',
        a: 'Sí. Evaluamos primero la infraestructura y las herramientas actuales. Cuando es viable, priorizamos integrar o ampliar sus capacidades antes de recomendar reemplazos innecesarios.'
      },
      {
        q: '¿Cómo se determina si un proceso debe automatizarse?',
        a: 'Evaluamos el proceso actual, el volumen de trabajo, las dependencias, la información disponible y el resultado esperado. La automatización se recomienda cuando genera una mejora clara en eficiencia, consistencia o capacidad operativa.'
      },
      {
        q: '¿Cómo se gestiona un proyecto?',
        a: 'Cada proyecto se estructura con alcance, responsables, entregables, hitos y mecanismos de seguimiento acordes con su complejidad.'
      },
      {
        q: '¿Cómo se evalúa el resultado de una implementación?',
        a: 'Los criterios se definen según el objetivo del proyecto y pueden incluir eficiencia, reducción de trabajo manual, calidad de información, visibilidad operativa, capacidad de gestión, adopción o desempeño digital.'
      },
      {
        q: '¿Qué ocurre después de la implementación?',
        a: 'Las soluciones pueden mantenerse, optimizarse o evolucionar mediante nuevas funcionalidades, integraciones o automatizaciones conforme cambian las necesidades de la organización.'
      }
    ]
  },

  contact: {
    eyebrow: 'Nuevos proyectos',
    title: 'Presente su proyecto o desafío.',
    paragraphs: [
      'Comparta una iniciativa definida, un proceso que necesita evolucionar o un desafío para el que todavía no existe una solución tecnológica clara.',
      'Revisaremos el contexto para identificar el siguiente paso más adecuado.'
    ],
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
