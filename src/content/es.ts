import type { SiteContent } from './types';

// DATOS DE EJEMPLO: los testimonios son ficticios. Reemplazar por reales antes de publicar.

/**
 * ES — firma internacional de consultoría y soluciones tecnológicas.
 * Tratamiento de usted, tono ejecutivo. Sin geografía, sin precios.
 */
export const es: SiteContent = {
  meta: {
    title: 'AOA Global Services | Estrategia, tecnología e IA para hacer avanzar el negocio',
    description:
      'AOA Global Services combina consultoría, inteligencia artificial y desarrollo tecnológico para optimizar procesos, conectar información y construir soluciones adaptadas a la operación de cada organización.',
    ogImageAlt: 'AOA Global Services — tecnología diseñada para hacer avanzar el negocio',
    localeName: 'Español'
  },

  nav: {
    links: [
      { label: 'Soluciones', anchor: '#services' },
      { label: 'Cómo trabajamos', anchor: '#how-it-works' },
      { label: 'Nuestro trabajo', anchor: '#results' },
      { label: 'Preguntas', anchor: '#faq' },
      { label: 'Contacto', anchor: '#contact' }
    ],
    cta: 'Hablar con AOA',
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
    floatingCta: 'Hablar con AOA'
  },

  hero: {
    eyebrow: 'Estrategia · Tecnología · IA · Ejecución',
    title: 'Tecnología diseñada para hacer avanzar el negocio.',
    paragraphs: [
      'AOA Global Services combina consultoría, inteligencia artificial y desarrollo tecnológico para optimizar procesos, conectar información y construir soluciones adaptadas a la operación de cada organización.',
      'Desde una necesidad específica hasta una plataforma empresarial completa, definimos la solución y la llevamos a ejecución.'
    ],
    primaryCta: 'Explorar soluciones',
    secondaryCta: 'Hablar con AOA',
    noteTitle: '¿Ya existe un requerimiento definido?',
    noteText: 'Podemos presentar una propuesta inicial en hasta 48 horas hábiles.',
    imageAlt: 'Torres de oficinas modernas vistas desde abajo',
    ticker: [
      'Estrategia y transformación tecnológica',
      'IA y automatización',
      'Plataformas a medida',
      'Datos e integraciones',
      'Web y soluciones digitales',
      'Un único punto de contacto'
    ],
    card: {
      label: 'Cómo avanza un proyecto con AOA',
      steps: [
        { title: 'Nos cuenta el requerimiento', detail: 'Una necesidad concreta o un desafío aún sin respuesta definida.' },
        { title: 'Definimos alcance y objetivos', detail: 'Análisis del contexto, la complejidad y el resultado esperado.' },
        { title: 'Propuesta y ejecución', detail: 'Alcance, tiempos, entregables e inversión claros antes de comenzar.' }
      ],
      footer: 'Un único punto de contacto durante todo el proyecto.'
    }
  },

  diagnosis: {
    eyebrow: '¿Le resulta familiar?',
    title: 'Si algo de esto ocurre en su organización, ya está teniendo un costo.',
    intro: 'Son las situaciones que con más frecuencia nos piden resolver. Ninguna aparece en una factura, pero todas afectan el resultado.',
    items: [
      {
        problem: 'Procesos manuales que consumen horas del equipo.',
        cost: 'Cada hora trasladando datos entre planillas es una hora que no se dedica a clientes ni a decisiones.'
      },
      {
        problem: 'Un sitio web que no genera oportunidades.',
        cost: 'Funciona como folleto, no como activo comercial. Los visitantes llegan y se van sin dejar rastro.'
      },
      {
        problem: 'Información dispersa en múltiples herramientas.',
        cost: 'Sin una única fuente de verdad, las decisiones se toman con datos incompletos o desactualizados.'
      },
      {
        problem: 'Proveedores desconectados entre sí.',
        cost: 'Diseñador, desarrollador y agencia por separado: nadie responde por el resultado final.'
      },
      {
        problem: 'Iniciativas tecnológicas que no llegan a implementarse.',
        cost: 'Diagnósticos y propuestas que se quedan en documentos mientras la operación sigue igual.'
      },
      {
        problem: 'Herramientas genéricas que no se ajustan a la operación.',
        cost: 'El equipo adapta su trabajo al software en lugar de que el software se adapte al negocio.'
      }
    ],
    transition: 'Ninguno de estos problemas se resuelve con más herramientas. Se resuelve con una dirección clara y capacidad de ejecución.'
  },

  howItWorks: {
    eyebrow: 'Cómo trabajamos',
    title: 'Del requerimiento a la solución en operación.',
    steps: [
      {
        number: '01',
        title: 'Entendemos el requerimiento',
        description: 'Puede ser una necesidad específica o un desafío todavía abierto. Analizamos el contexto, los objetivos y la complejidad antes de proponer.'
      },
      {
        number: '02',
        title: 'Definimos la propuesta',
        description: 'Antes de comenzar se establecen claramente alcance, tiempos, entregables e inversión. En proyectos complejos, esta etapa puede incluir una fase de análisis.'
      },
      {
        number: '03',
        title: 'Ejecutamos e implementamos',
        description: 'Estrategia, desarrollo, automatización e implementación dentro de un mismo proceso, con avances visibles y un único punto de contacto.'
      }
    ],
    model: {
      title: 'Una sola dirección. Capacidades integradas.',
      paragraphs: [
        'Cada proyecto combina visión de negocio, diseño y capacidad tecnológica dentro de un mismo proceso.',
        'AOA coordina estrategia, desarrollo, automatización e implementación con una estructura clara de trabajo y un único punto de contacto.'
      ],
      highlight: 'Menos fragmentación. Más claridad. Mayor responsabilidad sobre el resultado.',
      cta: 'Hablar con AOA',
      capabilities: [
        {
          image: '/img/strategy.webp',
          alt: 'Sesión de trabajo estratégico con el equipo',
          label: 'Estrategia y diseño',
          text: 'Visión de negocio, definición de la solución y arquitectura.'
        },
        {
          image: '/img/team.webp',
          alt: 'Equipo técnico desarrollando una solución',
          label: 'Desarrollo y ejecución',
          text: 'Construcción, automatización, integración e implementación.'
        }
      ]
    }
  },

  services: {
    eyebrow: 'Soluciones',
    title: 'Cinco capacidades. Un mismo proceso.',
    description: 'Cada solución se define a partir de la operación real de la organización, no de un catálogo cerrado.',
    problemLabel: 'La situación',
    whatLabel: 'Qué hacemos',
    outcomeLabel: 'Qué obtiene',
    detailsLabel: 'Alcance habitual',
    exploreCta: 'Explorar solución',
    collapseCta: 'Cerrar',
    talkCta: 'Hablar con AOA',
    undecided: {
      title: '¿Aún no sabe qué solución necesita?',
      text: 'Descríbanos la situación. Le indicamos qué es necesario — y qué no — antes de definir cualquier alcance.',
      cta: 'Hablar con AOA'
    },
    items: [
      {
        slug: 'strategy',
        name: 'Estrategia y Transformación Tecnológica',
        problem: 'La tecnología debería impulsar el negocio, pero no está claro por dónde empezar ni qué priorizar.',
        what: 'Diagnóstico de procesos, herramientas y datos, con una hoja de ruta priorizada y viable.',
        outcome: 'Un plan de transformación claro, alineado con los objetivos del negocio y listo para ejecutarse.',
        details: [
          'Diagnóstico de operación, sistemas y flujos de información',
          'Hoja de ruta tecnológica priorizada por impacto',
          'Definición de arquitectura y selección de herramientas',
          'Acompañamiento a la dirección durante la implementación'
        ],
        image: '/img/consulting.webp',
        imageAlt: 'Equipo planeando una hoja de ruta con notas adhesivas'
      },
      {
        slug: 'ai',
        name: 'Inteligencia Artificial y Automatización',
        problem: 'El trabajo repetitivo consume el tiempo que el equipo debería dedicar a decisiones y clientes.',
        what: 'Automatizamos flujos de trabajo e incorporamos IA donde genera valor real: captación, seguimiento, documentos, atención y análisis.',
        outcome: 'Procesos que operan sin intervención manual, con menos errores y más capacidad para el equipo.',
        details: [
          'Mapeo y automatización de procesos de negocio',
          'Asistentes y agentes de IA integrados en la operación',
          'Procesamiento inteligente de documentos y solicitudes',
          'Monitoreo, control y mejora continua de los flujos'
        ],
        image: '/img/automation.webp',
        imageAlt: 'Robot asistente humanoide'
      },
      {
        slug: 'platforms',
        name: 'Plataformas y Software a Medida',
        problem: 'Las herramientas genéricas no reflejan cómo opera realmente la organización.',
        what: 'Diseñamos y construimos plataformas web, portales y herramientas internas ajustadas al proceso, del modelo de datos al despliegue.',
        outcome: 'Un sistema que el equipo utiliza a diario, con la información centralizada y bajo control de la organización.',
        details: [
          'Levantamiento funcional y diseño de la solución',
          'Plataformas web, portales de clientes y herramientas internas',
          'Roles, permisos, tableros e integraciones',
          'Despliegue, documentación y transferencia'
        ],
        image: '/img/software.webp',
        imageAlt: 'Código fuente en el portátil de un desarrollador'
      },
      {
        slug: 'data',
        name: 'Datos, Integraciones y Reporting',
        problem: 'La información existe, pero está repartida entre sistemas que no se comunican.',
        what: 'Conectamos las fuentes de datos, integramos sistemas y construimos reportes que muestran el estado real del negocio.',
        outcome: 'Una única fuente de verdad y tableros que permiten decidir con información confiable.',
        details: [
          'Integración entre ERP, CRM, comercio electrónico y herramientas internas',
          'Modelo de datos unificado y calidad de la información',
          'Tableros de control y reportes automatizados',
          'Alertas e indicadores para la dirección'
        ],
        image: '/img/seo.webp',
        imageAlt: 'Portátil con un tablero de indicadores de negocio'
      },
      {
        slug: 'web',
        name: 'Web y Soluciones Digitales',
        problem: 'La presencia digital no refleja el nivel de la organización ni genera oportunidades.',
        what: 'Diseñamos y desarrollamos sitios y experiencias digitales orientadas a resultados, con base técnica sólida y posicionamiento en buscadores.',
        outcome: 'Un activo digital rápido, medible y alineado con la estrategia comercial.',
        details: [
          'Diseño y desarrollo de sitios corporativos y comerciales',
          'Arquitectura de contenidos y posicionamiento (SEO)',
          'Formularios, integraciones y analítica',
          'Mantenimiento y evolución continua'
        ],
        image: '/img/web.webp',
        imageAlt: 'Estación de diseño con el layout de un sitio web en pantalla'
      }
    ]
  },

  investment: {
    eyebrow: 'Inversión',
    title: 'Cada proyecto se define de acuerdo con su alcance, complejidad y objetivos.',
    points: [
      {
        title: 'Propuesta antes de comenzar',
        text: 'Antes de iniciar, se establecen claramente alcance, tiempos, entregables e inversión.'
      },
      {
        title: 'Respuesta ágil para requerimientos definidos',
        text: 'Los proyectos con requerimientos definidos pueden recibir una propuesta inicial en hasta 48 horas hábiles.'
      },
      {
        title: 'Análisis previo cuando la complejidad lo exige',
        text: 'En consultoría, transformación, IA, integraciones o plataformas complejas, primero puede ser necesaria una fase de análisis.'
      }
    ],
    note: 'Nunca proponemos una inversión sin comprender el alcance.'
  },

  socialProof: {
    eyebrow: 'Nuestro trabajo',
    title: 'Lo que obtuvieron las organizaciones con las que trabajamos.',
    items: [
      {
        quote: 'Teníamos tres proveedores y ningún resultado. En pocas semanas contábamos con un solo equipo, una plataforma nueva y oportunidades llegando cada día.',
        author: 'Sarah Whitfield',
        role: 'Directora de Operaciones',
        company: 'Coastline Freight',
        result: '+38% de oportunidades en 90 días'
      },
      {
        quote: 'La propuesta llegó con el alcance claro y la plataforma se implementó en el plazo acordado. Nuestro equipo dejó de operar sobre planillas.',
        author: 'Daniel Moreno',
        role: 'Gerente General',
        company: 'Andina Distribución',
        result: '15 horas semanales recuperadas'
      },
      {
        quote: 'Nos explicaron qué haría y qué no haría cada decisión antes de comprometernos. Seis meses después somos referencia en nuestro segmento.',
        author: 'Priya Nair',
        role: 'Fundadora',
        company: 'Harbour Dental Group',
        result: 'Primer lugar en las búsquedas clave'
      }
    ]
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que suelen preguntarnos antes de escribir.',
    items: [
      {
        q: '¿Cómo se define la inversión de un proyecto?',
        a: 'Cada proyecto se define de acuerdo con su alcance, complejidad y objetivos. Antes de comenzar, se establecen claramente alcance, tiempos, entregables e inversión en una propuesta. No proponemos una inversión sin comprender el alcance.'
      },
      {
        q: '¿Cuánto tarda en llegar una propuesta?',
        a: 'Para requerimientos claramente definidos, podemos presentar una propuesta inicial en hasta 48 horas hábiles. En proyectos de consultoría, transformación, IA, integraciones o plataformas complejas, primero puede ser necesaria una fase de análisis.'
      },
      {
        q: '¿Con quién hablo durante el proyecto?',
        a: 'Con un único punto de contacto, responsable del proyecto desde la propuesta hasta la implementación. Esa persona coordina estrategia, desarrollo y automatización, y traduce las necesidades del negocio en decisiones técnicas.'
      },
      {
        q: '¿Cómo se coordina el trabajo con equipos en distintos horarios?',
        a: 'Operamos bajo un modelo global: las reuniones de avance se agendan en el horario de su organización y el seguimiento se realiza de forma continua a través de canales compartidos, con entregas documentadas.'
      },
      {
        q: '¿Qué ocurre si necesito cambios después de la entrega?',
        a: 'Todo proyecto incluye un periodo de ajustes posterior a la implementación. Después, la solución puede evolucionar mediante nuevas fases o un esquema de soporte y mejora continua, según lo que la organización necesite.'
      },
      {
        q: '¿La solución queda a nombre de mi organización?',
        a: 'Sí. Dominios, infraestructura, repositorios de código y cuentas de terceros se registran a nombre de su organización desde el inicio. La solución es suya, sin dependencia de AOA.'
      },
      {
        q: '¿Necesito contratar a alguien más para que esto funcione?',
        a: 'No. Estrategia, diseño, desarrollo, automatización e implementación se coordinan dentro de un mismo proceso. Si un proyecto requiere una capacidad específica adicional, AOA la integra y mantiene la responsabilidad sobre el resultado.'
      }
    ]
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Cuéntenos qué necesita mejorar, transformar o construir.',
    paragraphs: [
      'Puede tratarse de una solución específica, un proceso que necesita evolucionar o un desafío para el que todavía no existe una respuesta tecnológica definida.',
      'Si el requerimiento está suficientemente definido, podemos presentar una propuesta inicial en hasta 48 horas hábiles.'
    ],
    reassurance: ['Propuesta con alcance, tiempos e inversión definidos', 'Sin compromiso hasta aprobar la propuesta', 'Información tratada con confidencialidad'],
    imageAlt: 'Dos profesionales revisando un requerimiento juntos',
    form: {
      name: { label: 'Nombre', placeholder: 'Ej. Carolina Restrepo', required: 'Indique su nombre' },
      company: { label: 'Organización', placeholder: 'Ej. Restrepo Logística S.A.S.', required: 'Indique el nombre de su organización' },
      email: {
        label: 'Correo corporativo',
        placeholder: 'Ej. carolina@empresa.com',
        required: 'Indique su correo',
        invalid: 'Indique un correo válido'
      },
      service: {
        label: 'Área de interés',
        placeholder: 'Seleccione una opción',
        required: 'Seleccione un área de interés',
        generalOption: 'Aún no está definido — necesito orientación'
      },
      message: {
        label: 'Describa el requerimiento',
        placeholder: '¿Cuál es la situación actual, qué resultado espera y en qué plazo?',
        required: 'Describa brevemente lo que necesita',
        minLength: 'Un poco más de contexto nos permite responder con precisión (mín. 20 caracteres)'
      },
      submit: 'Enviar requerimiento',
      submitting: 'Enviando…',
      success: {
        title: 'Requerimiento recibido.',
        text: 'Lo revisaremos y responderemos con los siguientes pasos. Si está suficientemente definido, recibirá una propuesta inicial en hasta 48 horas hábiles.'
      },
      error: {
        title: 'No se pudo enviar.',
        text: 'Intente de nuevo o escríbanos directamente al correo.'
      },
      missingKey: 'El formulario aún no está configurado. Escríbanos directamente al correo.',
      privacy: 'Sus datos se utilizan únicamente para responder a esta solicitud.',
      subjectPrefix: 'Nuevo requerimiento'
    },
    direct: {
      title: '¿Prefiere escribir directamente?',
      email: 'contact@aoaglobalservices.com'
    }
  },

  footer: {
    tagline: 'Estrategia, tecnología e inteligencia artificial para transformar cómo operan las organizaciones.',
    legalLine: 'US-registered · Global delivery',
    servicesTitle: 'Servicios',
    companyTitle: 'AOA',
    companyLinks: [
      { label: 'Cómo trabajamos', anchor: '#how-it-works' },
      { label: 'Nuestro trabajo', anchor: '#results' },
      { label: 'Preguntas', anchor: '#faq' },
      { label: 'Contacto', anchor: '#contact' }
    ],
    contactTitle: 'Contacto',
    rights: 'Todos los derechos reservados.'
  }
};
