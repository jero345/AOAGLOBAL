import type { SiteContent } from './types';

/**
 * ES — referencia editorial. Firma B2B de consultoría y soluciones tecnológicas.
 * Redacción institucional (sin tuteo). Sin geografía, sin precios, sin testimonios.
 */
export const es: SiteContent = {
  meta: {
    title: 'AOA Global Services | Consultoría estratégica y procesos',
    description:
      'Consultoría estratégica para mejorar el desempeño de los negocios. AOA integra optimización de procesos, gestión de proyectos e implementación de soluciones.',
    ogImageAlt: 'AOA Global Services — consultoría estratégica para mejorar el desempeño de los negocios',
    localeName: 'Español'
  },

  nav: {
    links: [
      { label: 'Cómo trabajamos', anchor: '#approach' },
      { label: 'Soluciones', anchor: '#capabilities' },
      { label: 'Proyectos', anchor: '#projects' },
      { label: 'Preguntas frecuentes', anchor: '#faq' }
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
    eyebrow: 'Estrategia · Procesos · Ejecución',
    title: 'Consultoría estratégica para mejorar el desempeño de los negocios.',
    description:
      'AOA Global Services integra análisis de negocio, optimización de procesos y gestión de proyectos para convertir prioridades estratégicas en mejoras operativas. Definimos qué debe cambiar y cómo implementarlo, con prácticas de gestión y soluciones digitales al servicio del negocio.',
    primaryCta: 'Iniciar un proyecto',
    secondaryCta: 'Explorar soluciones',
    note: 'Para requerimientos claramente definidos, podemos presentar una propuesta inicial en hasta 48 horas hábiles.',
    imageAlt: 'Ilustración de una plataforma de gestión con paneles, indicadores e integraciones conectadas',
    ticker: [
      'Consultoría estratégica y optimización de procesos',
      'Automatización y soluciones inteligentes',
      'Plataformas y software a medida',
      'Datos, integraciones y reporting',
      'Web y soluciones digitales'
    ]
  },


  challenges: {
    eyebrow: 'Desafíos de negocio',
    title: 'Cuando la operación limita los objetivos del negocio.',
    items: [
      {
        title: 'Procesos que consumen capacidad',
        text: 'Duplicidades, tareas manuales y responsabilidades poco claras dificultan la coordinación y el aprovechamiento de los recursos.'
      },
      {
        title: 'Información sin una visión de conjunto',
        text: 'Datos dispersos y criterios de seguimiento distintos dificultan evaluar proyectos, presupuestos y desempeño.'
      },
      {
        title: 'Iniciativas sin una ruta de ejecución',
        text: 'Las oportunidades de mejora no se convierten en avances cuando faltan prioridades, responsables y un plan de implementación.'
      }
    ]
  },


  approach: {
    eyebrow: 'Nuestro enfoque',
    title: 'Criterio para priorizar. Capacidad para implementar.',
    steps: [
      { number: '01', title: 'Comprender', description: 'Analizamos objetivos, procesos, responsabilidades e información para identificar las causas del problema y las oportunidades de mejora.' },
      { number: '02', title: 'Diseñar', description: 'Priorizamos mejoras por impacto y viabilidad. Definimos procesos, responsables, indicadores y un plan de implementación.' },
      { number: '03', title: 'Implementar', description: 'Coordinamos la puesta en práctica y evaluamos los avances. Integramos o desarrollamos herramientas cuando el alcance lo requiere.' }
    ],
    closing: 'El análisis no se limita a indicar qué cambiar: define cómo hacerlo y con qué evaluarlo.'
  },


  capabilities: {
    eyebrow: 'Soluciones',
    title: 'Soluciones para la gestión y el desempeño empresarial.',
    intro: 'Las capacidades de AOA pueden contratarse de forma específica o integrarse en un proyecto de mejora, según los objetivos y el alcance.',
    showDetails: 'Ver detalles',
    hideDetails: 'Ocultar detalles',
    capabilitiesLabel: 'Capacidades',
    cta: 'Iniciar un proyecto',
    note: 'No es necesario tener una solución definida. El proyecto puede comenzar por el análisis de una necesidad de negocio.',
    items: [
      {
        slug: 'strategy',
        name: 'Consultoría estratégica y optimización de procesos',
        description: 'Evaluamos la operación y convertimos los objetivos del negocio en prioridades, procesos y planes de mejora, con alcance, responsables e indicadores definidos.',
        capabilities: ['Diagnóstico operativo', 'Análisis y rediseño de procesos', 'Priorización de iniciativas', 'Indicadores de gestión', 'Planes de implementación'],
        note: 'La intervención puede centrarse en prácticas de gestión y procesos, sin requerir nuevos desarrollos tecnológicos.',
        image: '/img/consulting.webp',
        imageAlt: 'Equipo definiendo prioridades de una iniciativa sobre un tablero'
      },
      {
        slug: 'automation',
        name: 'Automatización y soluciones inteligentes',
        description: 'Rediseñamos flujos de trabajo y automatizamos tareas para reducir reprocesos, fortalecer la trazabilidad y liberar capacidad del equipo.',
        capabilities: ['Flujos de trabajo', 'Gestión de aprobaciones', 'Procesamiento documental', 'Integración de herramientas', 'Inteligencia artificial aplicada'],
        note: 'La aplicación de inteligencia artificial se evalúa según el proceso, la calidad de la información, los riesgos y la supervisión necesaria.',
        image: '/img/automation.webp',
        imageAlt: 'Diagrama de flujos de proceso conectados sobre una pared de trabajo'
      },
      {
        slug: 'platforms',
        name: 'Plataformas y software a medida',
        description: 'Diseñamos y desarrollamos plataformas de planificación, control y gestión cuando la operación requiere capacidades que los sistemas actuales no ofrecen.',
        capabilities: ['Plataformas operativas', 'Herramientas internas', 'Portales', 'Planificación y seguimiento', 'Accesos según responsabilidades'],
        image: '/img/software.webp',
        imageAlt: 'Código fuente de una plataforma en desarrollo'
      },
      {
        slug: 'data',
        name: 'Datos, integraciones y reporting',
        description: 'Conectamos información de distintas fuentes y definimos reportes e indicadores para evaluar proyectos, presupuestos y desempeño con criterios consistentes.',
        capabilities: ['Integración de sistemas', 'Consolidación de información', 'Tableros de gestión', 'Reportes operativos', 'Seguimiento de indicadores'],
        image: '/img/seo.webp',
        imageAlt: 'Tablero de indicadores operativos en un portátil'
      },
      {
        slug: 'web',
        name: 'Web y soluciones digitales',
        description: 'Integramos posicionamiento, diseño y desarrollo para crear sitios corporativos y experiencias digitales que respalden los objetivos comerciales y operativos de la empresa.',
        capabilities: ['Estrategia digital', 'Diseño y desarrollo web', 'Experiencia de usuario', 'Formularios e integraciones', 'SEO', 'Analítica'],
        image: '/img/web.webp',
        imageAlt: 'Estación de diseño con la interfaz de un sitio corporativo en pantalla'
      }
    ]
  },


  projects: {
    eyebrow: 'Ejemplos de soluciones',
    title: 'Aplicaciones concretas en la operación.',
    items: [
      {
        title: 'Planificación y control de proyectos',
        text: 'Estructuración de etapas, presupuestos y responsabilidades para conocer el avance, identificar desviaciones y sustentar decisiones de gestión.'
      },
      {
        title: 'Optimización de procesos internos',
        text: 'Rediseño de actividades, controles y aprobaciones para reducir duplicidades y mejorar la coordinación entre áreas.'
      },
      {
        title: 'Mejora de la presencia digital',
        text: 'Desarrollo de sitios y puntos de contacto digitales coherentes con la propuesta de valor, la experiencia del cliente y los objetivos comerciales.'
      }
    ]
  },


  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Aspectos clave para iniciar un proyecto.',
    items: [
      {
        q: '¿Es necesario tener definida la solución?',
        a: 'No. Una necesidad de negocio, un proceso que requiere revisión o un objetivo de mejora permiten iniciar el análisis. A partir de ese contexto se definen el alcance y las alternativas de intervención.'
      },
      {
        q: '¿Todo proyecto requiere incorporar tecnología?',
        a: 'No. La solución puede centrarse en procesos, responsabilidades, controles o indicadores. Las herramientas digitales se incorporan cuando facilitan la implementación y responden a una necesidad definida.'
      },
      {
        q: '¿Cómo se definen las prioridades y el alcance?',
        a: 'Se valoran el impacto esperado, la viabilidad y las dependencias. La propuesta establece objetivos, entregables, responsabilidades e hitos para delimitar la intervención y organizar su seguimiento.'
      },
      {
        q: '¿Cómo se evalúan las mejoras?',
        a: 'Los criterios se acuerdan antes de implementar. Según el proyecto, se revisan tiempos, reprocesos, calidad de información, adopción o desempeño digital, comparándolos con la situación inicial cuando existen datos suficientes.'
      },
      {
        q: '¿AOA puede implementar la solución recomendada?',
        a: 'Sí. AOA integra la definición de la solución con su ejecución: cambios de proceso, automatización, integraciones o desarrollo digital. La implementación y el soporte posterior se delimitan en el alcance contratado.'
      }
    ]
  },

  contact: {
    eyebrow: 'Nuevos proyectos',
    title: 'Presente su proyecto o desafío.',
    intro: 'Indique el objetivo de negocio, la situación actual y el resultado esperado. Esta información permitirá orientar la evaluación inicial del proyecto.',
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
          { value: 'strategy', label: 'Consultoría estratégica y optimización de procesos' },
          { value: 'automation', label: 'Automatización y soluciones inteligentes' },
          { value: 'platforms', label: 'Plataforma o software a medida' },
          { value: 'data', label: 'Datos e integraciones' },
          { value: 'web', label: 'Web y soluciones digitales' },
          { value: 'general', label: 'Por definir' }
        ]
      },
      message: {
        label: 'Contexto del proyecto',
        placeholder: 'Describa la situación actual, el proceso o área involucrada, el resultado esperado y cualquier plazo relevante.',
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
    tagline: 'Consultoría estratégica, optimización de procesos e implementación de soluciones empresariales.',
    brandLine: 'Estrategia · Procesos · Ejecución',
    solutionsTitle: 'Soluciones',
    solutions: [
      { slug: 'strategy', label: 'Consultoría estratégica y optimización de procesos' },
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
