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

  aiPage: {
    meta: {
      title: 'Consultoría de Inteligencia Artificial para Empresas | AOA Global Services',
      description:
        'Consultoría de IA para empresas: identificamos dónde la inteligencia artificial mejora un proceso, diseñamos la solución y la implementamos integrada con sus sistemas. Automatización, agentes de IA y procesamiento de información.'
    },
    breadcrumb: 'Consultoría de IA',
    eyebrow: 'Consultoría de inteligencia artificial',
    title: 'Consultoría de inteligencia artificial para empresas.',
    intro: [
      'AOA Global Services ayuda a las organizaciones a incorporar inteligencia artificial donde genera un resultado concreto: procesos más eficientes, información mejor estructurada y decisiones con mejor soporte.',
      'Nuestra consultoría de IA parte del negocio, no de la tecnología. Analizamos la operación, identificamos los casos de uso con retorno real y diseñamos e implementamos la solución integrada con los sistemas existentes.'
    ],
    principle: {
      title: 'IA cuando mejora un proceso, no por moda.',
      text: 'No aplicamos inteligencia artificial porque esté de moda. La utilizamos cuando mejora de forma concreta un proceso, una decisión o una capacidad del negocio. En muchos casos, la mejor solución combina automatización, integración de datos y solo el componente de IA que realmente aporta valor.'
    },
    includes: {
      eyebrow: 'Qué incluye',
      title: 'Servicios de consultoría e implementación de IA.',
      items: [
        { title: 'Diagnóstico de oportunidades de IA', text: 'Revisión de procesos, información disponible y sistemas para identificar dónde la inteligencia artificial aporta una mejora medible.' },
        { title: 'Diseño de la solución', text: 'Definición del caso de uso, los datos necesarios, la arquitectura, los riesgos y los criterios de éxito antes de desarrollar.' },
        { title: 'Automatización con IA', text: 'Flujos de trabajo que combinan reglas, integraciones y modelos de lenguaje para reducir trabajo manual.' },
        { title: 'Agentes y asistentes de IA', text: 'Asistentes conectados a la información de la organización para atención, soporte interno, gestión de solicitudes o consultas operativas.' },
        { title: 'Procesamiento inteligente de documentos', text: 'Extracción, clasificación y validación de información en facturas, contratos, formularios y correos.' },
        { title: 'Integración con sistemas existentes', text: 'Conexión con ERP, CRM, bases de datos y herramientas internas para que la IA opere dentro del proceso real, no aislada.' }
      ]
    },
    useCases: {
      eyebrow: 'Casos de uso',
      title: 'Dónde suele aportar valor la IA en una organización.',
      intro: 'Los casos de uso se priorizan por impacto en la operación y viabilidad con la información disponible.',
      items: [
        { title: 'Atención y gestión de solicitudes', text: 'Clasificación automática, respuestas asistidas y derivación al equipo correcto.' },
        { title: 'Operaciones y back office', text: 'Captura de datos, conciliaciones, validaciones y generación de documentos.' },
        { title: 'Ventas y seguimiento comercial', text: 'Calificación de oportunidades, resúmenes de interacciones y seguimiento automatizado.' },
        { title: 'Información y reporting', text: 'Consultas en lenguaje natural sobre datos del negocio y reportes generados automáticamente.' }
      ]
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'De la oportunidad a la solución en operación.',
      steps: [
        { title: 'Comprender', text: 'Analizamos el proceso, los datos disponibles y el resultado esperado.' },
        { title: 'Diseñar', text: 'Definimos el caso de uso, la solución, el alcance y los criterios de evaluación.' },
        { title: 'Implementar', text: 'Desarrollamos, integramos y validamos la solución con el equipo que la utilizará.' }
      ],
      note: 'Para requerimientos claramente definidos, podemos presentar una propuesta inicial en hasta 48 horas hábiles. Los proyectos de mayor complejidad comienzan con una fase de análisis.'
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Preguntas habituales sobre consultoría de IA.',
      items: [
        { q: '¿Qué hace una consultoría de inteligencia artificial?', a: 'Identifica en qué procesos la IA puede generar una mejora real, define la solución adecuada (datos, modelo, integraciones, riesgos) y acompaña su implementación hasta que opera dentro del negocio.' },
        { q: '¿Mi empresa necesita IA?', a: 'No siempre. Evaluamos primero el proceso y la información disponible. Si la mejora se logra con automatización o integración de sistemas, lo recomendamos antes que incorporar IA innecesariamente.' },
        { q: '¿Qué datos se necesitan para un proyecto de IA?', a: 'Depende del caso de uso. Muchos proyectos funcionan con la información que ya existe en documentos, correos y sistemas; parte del diagnóstico es determinar si esa información es suficiente y cómo estructurarla.' },
        { q: '¿La IA puede integrarse con nuestros sistemas actuales?', a: 'Sí. Diseñamos la solución para que se conecte con ERP, CRM, bases de datos y herramientas internas mediante integraciones y APIs, sin reemplazar lo que ya funciona.' },
        { q: '¿Cómo se controla la calidad y la seguridad de una solución con IA?', a: 'Definimos criterios de evaluación, validación humana donde corresponde, límites de uso de la información y monitoreo continuo del comportamiento de la solución.' },
        { q: '¿Cuánto tarda un proyecto de consultoría de IA?', a: 'Un diagnóstico inicial suele tomar pocas semanas. La implementación depende del alcance; se acuerda por escrito junto con entregables e hitos antes de comenzar.' }
      ]
    },
    cta: {
      title: 'Presente su proyecto o desafío.',
      text: 'Comparta el proceso que necesita mejorar. Revisaremos el contexto y le indicaremos si la inteligencia artificial es la respuesta adecuada — y qué combinación de soluciones tiene mayor sentido.',
      button: 'Iniciar un proyecto',
      secondary: 'Ver todas las soluciones'
    }
  },

  aiMarketPage: {
    meta: {
      title: 'Consultoría de IA en Latinoamérica | Inteligencia Artificial para Empresas | AOA Global Services',
      description:
        'Consultoría de inteligencia artificial para empresas en Latinoamérica. AOA Global Services ayuda a organizaciones de Colombia, México, Chile, Perú, Argentina y la región a identificar dónde la IA mejora un proceso, diseñar la solución e implementarla integrada con sus sistemas.'
    },
    breadcrumb: 'Consultoría de IA en Latinoamérica',
    eyebrow: 'Consultoría de IA · Latinoamérica',
    title: 'Consultoría de inteligencia artificial para empresas en Latinoamérica.',
    intro: [
      'AOA Global Services presta servicios de consultoría e implementación de inteligencia artificial a organizaciones de toda Latinoamérica: Colombia, México, Chile, Perú, Argentina, Ecuador, Panamá y el resto de la región.',
      'Ayudamos a las empresas latinoamericanas a pasar de “deberíamos usar IA” a una solución en operación: analizamos la operación, identificamos los casos de uso con retorno real y diseñamos, construimos e integramos la solución con los sistemas que la organización ya utiliza, con estándar internacional.'
    ],
    principle: {
      title: 'IA donde mejora el negocio, no por moda.',
      text: 'Muchas organizaciones en la región sienten la presión de “hacer algo con IA”. Nuestro enfoque es el contrario al ruido: partimos del proceso, de la información disponible y del resultado que se necesita. Cuando la automatización o la integración de sistemas resuelven el problema, lo recomendamos primero. Cuando la IA aporta valor real, la diseñamos e implementamos con criterios de éxito claros.'
    },
    includes: {
      eyebrow: 'Qué incluye',
      title: 'Servicios de consultoría de IA para organizaciones en Latinoamérica.',
      items: [
        { title: 'Diagnóstico de oportunidades de IA', text: 'Revisión estructurada de procesos, datos y sistemas para identificar dónde la IA genera una mejora medible en su organización.' },
        { title: 'Estrategia y hoja de ruta de IA', text: 'Casos de uso priorizados, datos requeridos, arquitectura, riesgos y un plan de implementación realista alineado con los objetivos del negocio.' },
        { title: 'Automatización con IA', text: 'Flujos de trabajo que combinan reglas, integraciones y modelos de lenguaje para reducir trabajo manual en operaciones, finanzas y atención.' },
        { title: 'Agentes y asistentes de IA', text: 'Asistentes conectados a la información de la organización para atención de clientes, soporte interno y gestión de solicitudes.' },
        { title: 'Procesamiento inteligente de documentos', text: 'Extracción, clasificación y validación de información en facturas, contratos, formularios y correos.' },
        { title: 'Integración con sistemas existentes', text: 'Conexión con ERP, CRM, plataformas contables y herramientas internas para que la IA opere dentro del proceso real.' }
      ]
    },
    useCases: {
      eyebrow: 'Casos de uso',
      title: 'Dónde aporta valor la IA en las organizaciones de la región.',
      intro: 'Los casos de uso se priorizan por impacto en la operación y por la información que ya existe en la empresa.',
      items: [
        { title: 'Atención y gestión de solicitudes', text: 'Clasificación automática, respuestas asistidas y derivación al equipo correcto.' },
        { title: 'Operaciones y back office', text: 'Captura de datos, conciliaciones, validaciones y generación de documentos.' },
        { title: 'Ventas y seguimiento comercial', text: 'Calificación de oportunidades, resúmenes de interacciones y seguimiento automatizado.' },
        { title: 'Reporting y soporte a decisiones', text: 'Consultas en lenguaje natural sobre datos del negocio y reportes generados automáticamente.' }
      ]
    },
    industries: {
      eyebrow: 'Sectores',
      title: 'Sectores con los que trabajamos en Latinoamérica.',
      items: ['Servicios profesionales', 'Logística y distribución', 'Construcción e ingeniería', 'Salud', 'Retail y comercio electrónico', 'Inmobiliario', 'Educación', 'Manufactura']
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'De la oportunidad a la solución en operación.',
      steps: [
        { title: 'Comprender', text: 'Analizamos el proceso, los datos disponibles y el resultado esperado.' },
        { title: 'Diseñar', text: 'Definimos el caso de uso, la solución, el alcance y los criterios de evaluación.' },
        { title: 'Implementar', text: 'Desarrollamos, integramos y validamos la solución con el equipo que la utilizará.' }
      ],
      note: 'Para requerimientos claramente definidos, podemos presentar una propuesta inicial en hasta 48 horas hábiles. Los proyectos de mayor complejidad comienzan con una fase de análisis.'
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Consultoría de IA en Latinoamérica — preguntas habituales.',
      items: [
        { q: '¿Trabajan con empresas de cualquier país de Latinoamérica?', a: 'Sí. Atendemos organizaciones de toda la región. Los proyectos se ejecutan en línea, con reuniones en el horario de su organización e hitos acordados por escrito.' },
        { q: '¿Mi empresa es demasiado pequeña para una consultoría de IA?', a: 'No. Muchos de los casos de uso con mayor retorno están en pequeñas y medianas empresas con procesos repetitivos e intensivos en información. El diagnóstico indica rápidamente si un proyecto vale la pena.' },
        { q: '¿Cómo manejan la privacidad y la protección de datos personales?', a: 'Las soluciones se diseñan con minimización de datos, controles de acceso y límites claros sobre el uso de la información, para que su organización cumpla la normativa de protección de datos de su país.' },
        { q: '¿La IA puede integrarse con los sistemas que ya usamos?', a: 'Sí. Nos integramos con ERP, CRM, plataformas contables y sistemas del sector mediante APIs e integraciones, sin reemplazar lo que ya funciona.' },
        { q: '¿Cómo se define y se cotiza un proyecto?', a: 'Alcance, entregables, cronograma e inversión se establecen en una propuesta antes de comenzar. Los requerimientos definidos pueden recibir una propuesta inicial en hasta 48 horas hábiles; las iniciativas complejas inician con una fase de análisis.' },
        { q: '¿Qué ocurre después de la implementación?', a: 'El acompañamiento posterior se define según el alcance acordado y puede incluir mantenimiento, optimización, nuevas funcionalidades o integraciones conforme evoluciona el negocio.' }
      ]
    },
    cta: {
      title: 'Presente su proyecto o desafío.',
      text: 'Comparta el proceso que necesita mejorar. Revisaremos el contexto y le indicaremos si la inteligencia artificial es la respuesta adecuada para su organización — y qué combinación de soluciones tiene mayor sentido.',
      button: 'Iniciar un proyecto',
      secondary: 'Ver todas las soluciones'
    },
    serviceArea: ['Latinoamérica', 'Colombia', 'México', 'Chile', 'Perú', 'Argentina', 'Ecuador', 'Panamá']
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
    aiPageLink: 'Consultoría de inteligencia artificial',
    aiMarketPageLink: 'Consultoría de IA en Latinoamérica',
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
