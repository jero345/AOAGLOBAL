import type { SiteContent } from './types';

/**
 * ES — referencia editorial. Firma B2B de consultoría y soluciones tecnológicas.
 * Redacción institucional (sin tuteo). Sin geografía, sin precios, sin testimonios.
 */
export const es: SiteContent = {
  meta: {
    title: 'AOA Global Services | Consultoría estratégica y procesos',
    description:
      'Consultoría estratégica para mejorar el desempeño de las organizaciones. AOA integra optimización de procesos, gestión de proyectos e implementación de soluciones.',
    ogImageAlt: 'AOA Global Services — consultoría estratégica para mejorar el desempeño de las organizaciones',
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
    title: 'Consultoría estratégica para mejorar el desempeño de las organizaciones.',
    description:
      'AOA Global Services integra análisis organizacional, optimización de procesos y gestión de proyectos para convertir prioridades estratégicas en mejoras operativas. Definimos qué debe cambiar y cómo implementarlo, incorporando buenas prácticas de gestión y soluciones digitales cuando el proyecto lo requiere.',
    primaryCta: 'Iniciar un proyecto',
    secondaryCta: 'Explorar soluciones',
    note: 'Para requerimientos claramente definidos, podemos presentar una propuesta inicial en hasta 48 horas hábiles.',
    imageAlt: 'Profesionales revisando un mapa de procesos y una hoja de ruta sobre una mesa de trabajo',
    ticker: [
      'Consultoría estratégica y optimización de procesos',
      'Automatización y soluciones inteligentes',
      'Plataformas y software a medida',
      'Datos, integraciones y reporting',
      'Web y soluciones digitales'
    ]
  },


  challenges: {
    eyebrow: 'Desafíos organizacionales',
    title: 'Cuando la operación limita los objetivos de la organización.',
    items: [
      {
        title: 'Procesos que consumen capacidad',
        text: 'Duplicidades, tareas manuales y responsabilidades poco claras dificultan la coordinación y el aprovechamiento de los recursos.'
      },
      {
        title: 'Información sin una visión de conjunto',
        text: 'Datos dispersos y criterios de seguimiento distintos dificultan evaluar proyectos, presupuestos y desempeño en el conjunto de la operación.'
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
    title: 'Soluciones para la gestión y el desempeño organizacional.',
    intro: 'Las capacidades de AOA pueden contratarse de forma específica o integrarse en un proyecto de mejora, según los objetivos y el alcance de cada entidad.',
    showDetails: 'Ver detalles',
    hideDetails: 'Ocultar detalles',
    capabilitiesLabel: 'Capacidades',
    cta: 'Iniciar un proyecto',
    note: 'No es necesario tener una solución definida. El proyecto puede comenzar por el análisis de una necesidad concreta de la operación.',
    items: [
      {
        slug: 'strategy',
        name: 'Consultoría estratégica y optimización de procesos',
        description: 'Evaluamos la operación y convertimos los objetivos de la organización en prioridades, procesos y planes de mejora, con alcance, responsables e indicadores definidos.',
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
        description: 'Integramos posicionamiento, diseño y desarrollo para crear sitios institucionales y experiencias digitales que respalden los objetivos de la organización y la relación con las personas a las que atiende.',
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
        text: 'Desarrollo de sitios y puntos de contacto digitales coherentes con la propuesta de valor, la experiencia de las personas usuarias y los objetivos de la organización.'
      }
    ]
  },


  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Aspectos clave para iniciar un proyecto.',
    items: [
      {
        q: '¿Es necesario tener definida la solución?',
        a: 'No. Una necesidad de la operación, un proceso que requiere revisión o un objetivo de mejora permiten iniciar el análisis. A partir de ese contexto se definen el alcance y las alternativas de intervención.'
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
    intro: 'Indique el objetivo de la organización, la situación actual y el resultado esperado. Esta información permitirá orientar la evaluación inicial del proyecto.',
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
      title: 'Consultoría de Inteligencia Artificial para Organizaciones | AOA Global Services',
      description:
        'Consultoría de IA para organizaciones públicas y privadas: identificamos dónde la inteligencia artificial mejora un proceso, diseñamos la solución y la implementamos integrada con sus sistemas. Automatización, agentes de IA y procesamiento de información.'
    },
    breadcrumb: 'Consultoría de IA',
    eyebrow: 'Consultoría de inteligencia artificial',
    title: 'Consultoría de inteligencia artificial para organizaciones.',
    intro: [
      'AOA Global Services ayuda a las organizaciones a incorporar inteligencia artificial donde genera un resultado concreto: procesos más eficientes, información mejor estructurada y decisiones con mejor soporte.',
      'Nuestra consultoría de IA parte de la operación, no de la tecnología. Analizamos los procesos, identificamos los casos de uso con retorno real y diseñamos e implementamos la solución integrada con los sistemas existentes.'
    ],
    principle: {
      title: 'IA cuando mejora un proceso, no por moda.',
      text: 'No aplicamos inteligencia artificial porque esté de moda. La utilizamos cuando mejora de forma concreta un proceso, una decisión o una capacidad de la organización. En muchos casos, la mejor solución combina automatización, integración de datos y solo el componente de IA que realmente aporta valor.'
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
        { title: 'Información y reporting', text: 'Consultas en lenguaje natural sobre datos de la operación y reportes generados automáticamente.' }
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
        { q: '¿Qué hace una consultoría de inteligencia artificial?', a: 'Identifica en qué procesos la IA puede generar una mejora real, define la solución adecuada (datos, modelo, integraciones, riesgos) y acompaña su implementación hasta que opera dentro de la organización.' },
        { q: '¿Mi organización necesita IA?', a: 'No siempre. Evaluamos primero el proceso y la información disponible. Si la mejora se logra con automatización o integración de sistemas, lo recomendamos antes que incorporar IA innecesariamente.' },
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
      title: 'Consultoría de IA en Latinoamérica | Inteligencia Artificial para Organizaciones | AOA Global Services',
      description:
        'Consultoría de inteligencia artificial para organizaciones públicas y privadas en Latinoamérica. AOA Global Services ayuda a entidades de Colombia, México, Chile, Perú, Argentina y la región a identificar dónde la IA mejora un proceso, diseñar la solución e implementarla integrada con sus sistemas.'
    },
    breadcrumb: 'Consultoría de IA en Latinoamérica',
    eyebrow: 'Consultoría de IA · Latinoamérica',
    title: 'Consultoría de inteligencia artificial para organizaciones en Latinoamérica.',
    intro: [
      'AOA Global Services presta servicios de consultoría e implementación de inteligencia artificial a organizaciones de toda Latinoamérica: Colombia, México, Chile, Perú, Argentina, Ecuador, Panamá y el resto de la región.',
      'Ayudamos a las organizaciones latinoamericanas a pasar de “deberíamos usar IA” a una solución en operación: analizamos la operación, identificamos los casos de uso con retorno real y diseñamos, construimos e integramos la solución con los sistemas que la organización ya utiliza, con estándar internacional.'
    ],
    principle: {
      title: 'IA donde mejora la operación, no por moda.',
      text: 'Muchas organizaciones de la región sienten la presión de “hacer algo con IA”. Nuestro enfoque es el contrario al ruido: partimos del proceso, de la información disponible y del resultado que se necesita. Cuando la automatización o la integración de sistemas resuelven el problema, lo recomendamos primero. Cuando la IA aporta valor real, la diseñamos e implementamos con criterios de éxito claros.'
    },
    includes: {
      eyebrow: 'Qué incluye',
      title: 'Servicios de consultoría de IA para organizaciones en Latinoamérica.',
      items: [
        { title: 'Diagnóstico de oportunidades de IA', text: 'Revisión estructurada de procesos, datos y sistemas para identificar dónde la IA genera una mejora medible en su organización.' },
        { title: 'Estrategia y hoja de ruta de IA', text: 'Casos de uso priorizados, datos requeridos, arquitectura, riesgos y un plan de implementación realista alineado con los objetivos de la organización.' },
        { title: 'Automatización con IA', text: 'Flujos de trabajo que combinan reglas, integraciones y modelos de lenguaje para reducir trabajo manual en operaciones, finanzas y atención.' },
        { title: 'Agentes y asistentes de IA', text: 'Asistentes conectados a la información de la organización para atención de clientes, soporte interno y gestión de solicitudes.' },
        { title: 'Procesamiento inteligente de documentos', text: 'Extracción, clasificación y validación de información en facturas, contratos, formularios y correos.' },
        { title: 'Integración con sistemas existentes', text: 'Conexión con ERP, CRM, plataformas contables y herramientas internas para que la IA opere dentro del proceso real.' }
      ]
    },
    useCases: {
      eyebrow: 'Casos de uso',
      title: 'Dónde aporta valor la IA en las organizaciones de la región.',
      intro: 'Los casos de uso se priorizan por impacto en la operación y por la información que ya existe en la organización.',
      items: [
        { title: 'Atención y gestión de solicitudes', text: 'Clasificación automática, respuestas asistidas y derivación al equipo correcto.' },
        { title: 'Operaciones y back office', text: 'Captura de datos, conciliaciones, validaciones y generación de documentos.' },
        { title: 'Ventas y seguimiento comercial', text: 'Calificación de oportunidades, resúmenes de interacciones y seguimiento automatizado.' },
        { title: 'Reporting y soporte a decisiones', text: 'Consultas en lenguaje natural sobre datos de la operación y reportes generados automáticamente.' }
      ]
    },
    industries: {
      eyebrow: 'Sectores',
      title: 'Sectores con los que trabajamos en Latinoamérica.',
      items: ['Sector público y entidades gubernamentales', 'Servicios profesionales', 'Logística y distribución', 'Construcción e ingeniería', 'Salud', 'Educación', 'Comercio y retail', 'Manufactura']
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
        { q: '¿Trabajan con organizaciones de cualquier país de Latinoamérica?', a: 'Sí. Atendemos organizaciones de toda la región. Los proyectos se ejecutan en línea, con reuniones en el horario de su organización e hitos acordados por escrito.' },
        { q: '¿Existe un tamaño mínimo de organización para una consultoría de IA?', a: 'No. Muchos de los casos de uso con mayor retorno están en organizaciones con procesos repetitivos e intensivos en información, con independencia de su tamaño o de su carácter público o privado. El diagnóstico indica rápidamente si un proyecto vale la pena.' },
        { q: '¿Cómo manejan la privacidad y la protección de datos personales?', a: 'Las soluciones se diseñan con minimización de datos, controles de acceso y límites claros sobre el uso de la información, para que su organización cumpla la normativa de protección de datos de su país.' },
        { q: '¿La IA puede integrarse con los sistemas que ya usamos?', a: 'Sí. Nos integramos con ERP, CRM, plataformas contables y sistemas del sector mediante APIs e integraciones, sin reemplazar lo que ya funciona.' },
        { q: '¿Cómo se define y se cotiza un proyecto?', a: 'Alcance, entregables, cronograma e inversión se establecen en una propuesta antes de comenzar. Los requerimientos definidos pueden recibir una propuesta inicial en hasta 48 horas hábiles; las iniciativas complejas inician con una fase de análisis.' },
        { q: '¿Qué ocurre después de la implementación?', a: 'El acompañamiento posterior se define según el alcance acordado y puede incluir mantenimiento, optimización, nuevas funcionalidades o integraciones conforme evoluciona la operación.' }
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

  privacyPage: {
    meta: { title: 'Política de privacidad | AOA Global Services', description: 'Cómo AOA Global Services LLC recopila, utiliza, protege y comparte la información personal en relación con su sitio web, sus comunicaciones y sus servicios.' },
    eyebrow: 'Legal',
    title: 'Política de privacidad',
    updatedLabel: 'Última actualización',
    updated: '22 de septiembre de 2026',
    contentsLabel: 'Contenido',
    backLabel: 'Volver al inicio',
    contactLabel: 'Contacto para consultas de privacidad',
    sections: [
      {
        title: 'Introducción',
        paragraphs: [
          'AOA Global Services LLC (“AOA”, “nosotros”, “nuestro” o “la Compañía”) reconoce la importancia de proteger la privacidad y los datos personales de sus clientes, potenciales clientes, proveedores, colaboradores, usuarios del sitio web y demás personas con quienes mantiene relaciones comerciales o profesionales.',
          'Esta Política de Privacidad describe de manera general cómo AOA recopila, utiliza, almacena, protege y, cuando corresponde, comparte información personal en relación con sus servicios, comunicaciones y plataformas digitales. AOA Global Services LLC es una compañía de responsabilidad limitada constituida en Wyoming, Estados Unidos. Esta Política se aplica al sitio web de AOA, a las comunicaciones realizadas con la Compañía y a los servicios prestados por AOA, salvo que se indique expresamente la aplicación de términos o avisos específicos.'
        ]
      },
      {
        title: 'Información que podemos recopilar',
        paragraphs: [
          'Dependiendo de la relación con AOA, podemos recopilar nombre y apellidos; empresa, organización y cargo; correo electrónico; teléfono; país o ubicación general; información suministrada voluntariamente mediante formularios, correo electrónico, reuniones u otros medios; información necesaria para propuestas, contratos, proyectos o servicios; datos de facturación, pagos y transacciones comerciales; comunicaciones; información profesional o empresarial relevante; e información técnica relacionada con el acceso y utilización de nuestros sitios web o plataformas cuando sea recopilada por los sistemas utilizados por AOA.',
          'AOA procura limitar la recopilación de información personal a aquella razonablemente necesaria para sus actividades y servicios.'
        ]
      },
      {
        title: 'Cómo recopilamos la información',
        paragraphs: [
          'Podemos obtener información directamente cuando una persona o empresa se comunica con AOA, solicita información o una propuesta, contrata nuestros servicios, completa formularios, participa en reuniones o proyectos, mantiene una relación comercial o profesional con AOA o utiliza canales autorizados de comunicación.',
          'También podemos recibir determinada información a través de proveedores tecnológicos, fuentes públicas, referencias comerciales o terceros cuando resulte legítimo y apropiado.'
        ]
      },
      {
        title: 'Finalidades del tratamiento',
        paragraphs: [
          'AOA puede utilizar la información para responder consultas; evaluar necesidades; preparar y administrar propuestas, contratos y proyectos; prestar servicios de consultoría, estrategia, optimización de procesos, soluciones digitales, inteligencia artificial, automatización, desarrollo web y otros servicios profesionales; gestionar relaciones, facturación, pagos y registros; proporcionar soporte; mejorar servicios y plataformas; mantener la seguridad; prevenir fraude, abuso o accesos no autorizados; cumplir obligaciones legales, regulatorias, fiscales, contractuales o administrativas; ejercer o defender derechos legales; y realizar comunicaciones comerciales cuando estén permitidas.',
          'AOA no utilizará deliberadamente información personal para finalidades sustancialmente incompatibles con aquellas para las cuales fue recopilada, salvo autorización del titular o cuando exista otra base legal aplicable.'
        ]
      },
      {
        title: 'Información sensible',
        paragraphs: [
          'Como regla general, AOA no requiere información personal sensible para el funcionamiento ordinario de su sitio web o para iniciar una relación comercial. Cuando un proyecto requiera acceso a información confidencial, sensible o especialmente protegida, su tratamiento podrá estar sujeto a medidas, acuerdos contractuales o condiciones adicionales apropiadas.'
        ]
      },
      {
        title: 'Información de clientes y proyectos',
        paragraphs: [
          'En determinados servicios, AOA puede recibir acceso a información, documentos, bases de datos, sistemas o materiales proporcionados por sus clientes. Cuando AOA trate información por cuenta de un cliente, la utilizará principalmente para prestar los servicios acordados y conforme a las obligaciones contractuales y legales aplicables.',
          'La información del cliente no será utilizada deliberadamente para finalidades comerciales ajenas al servicio contratado sin autorización o una base legal que lo permita.'
        ]
      },
      {
        title: 'Inteligencia artificial y herramientas tecnológicas',
        paragraphs: [
          'Como parte de sus servicios profesionales y procesos internos, AOA puede utilizar herramientas digitales, automatización y tecnologías de inteligencia artificial. Cuando impliquen tratamiento de información de clientes o información personal, AOA procurará aplicar medidas razonables de confidencialidad, seguridad y control de acceso.',
          'AOA no venderá información confidencial de clientes para entrenar modelos de inteligencia artificial de terceros. Cuando un proyecto requiera tratamientos particularmente sensibles mediante sistemas de inteligencia artificial, podrán establecerse condiciones específicas con el cliente.'
        ]
      },
      {
        title: 'Cookies y tecnologías similares',
        paragraphs: [
          'El sitio web de AOA puede utilizar cookies y tecnologías similares necesarias para su funcionamiento, seguridad, análisis de rendimiento o mejora de la experiencia del usuario. Su utilización concreta puede variar a medida que evolucionen nuestros sistemas y proveedores.',
          'Cuando la legislación aplicable requiera consentimiento para determinadas cookies o tecnologías de seguimiento, AOA adoptará mecanismos razonables para obtenerlo.'
        ]
      },
      {
        title: 'Proveedores y terceros',
        paragraphs: [
          'AOA puede utilizar proveedores externos para apoyar sus operaciones, incluidos servicios de infraestructura y alojamiento tecnológico, almacenamiento y procesamiento de información, correo electrónico y comunicaciones, administración empresarial, pagos y facturación, seguridad, analítica, desarrollo, soporte tecnológico y servicios profesionales.',
          'Estos proveedores pueden procesar información en la medida necesaria para proporcionar sus servicios o de acuerdo con sus propios términos, contratos y obligaciones legales.'
        ]
      },
      {
        title: 'Transferencias internacionales',
        paragraphs: [
          'AOA está constituida en Estados Unidos y puede prestar servicios a clientes en diferentes países. La información puede ser almacenada, procesada o gestionada en Estados Unidos, Australia u otros países en los que AOA, sus clientes o sus proveedores tecnológicos desarrollen operaciones.',
          'Cuando la legislación aplicable establezca requisitos específicos para transferencias internacionales de información personal, AOA procurará adoptar las medidas correspondientes.'
        ]
      },
      {
        title: 'Seguridad de la información',
        paragraphs: [
          'AOA adopta medidas administrativas, organizativas y tecnológicas razonables destinadas a proteger la información bajo su control frente a pérdida, uso indebido, acceso no autorizado, alteración o divulgación. Ningún sistema tecnológico, método de transmisión o almacenamiento puede garantizar seguridad absoluta.',
          'En caso de un incidente de seguridad que afecte información personal, AOA evaluará el incidente y realizará las actuaciones y notificaciones que correspondan conforme a la legislación aplicable.'
        ]
      },
      {
        title: 'Conservación de información',
        paragraphs: [
          'AOA conservará información personal durante el tiempo razonablemente necesario para proporcionar sus servicios, mantener relaciones comerciales, cumplir obligaciones contractuales, mantener registros, atender requisitos legales, fiscales o regulatorios, resolver controversias y proteger o ejercer derechos legales. Cuando deje de ser necesaria, AOA podrá eliminarla, anonimizarla o conservarla cuando exista una obligación o justificación legal.'
        ]
      },
      {
        title: 'Derechos sobre la información personal',
        paragraphs: [
          'Dependiendo de la legislación aplicable y del lugar de residencia del titular, una persona puede tener derechos de acceso, corrección o actualización, eliminación, oposición o restricción de determinados tratamientos, retiro del consentimiento, información acerca del tratamiento y presentación de reclamaciones.',
          'Las solicitudes pueden enviarse a admin@aoaglobalservices.com. AOA podrá solicitar información razonable para verificar la identidad antes de proporcionar acceso, modificar o eliminar información.'
        ]
      },
      {
        title: 'Comunicaciones comerciales',
        paragraphs: [
          'AOA puede enviar información sobre sus servicios, novedades o contenidos profesionales a clientes, contactos comerciales o personas que hayan manifestado interés, cuando ello esté permitido. Cuando corresponda, podrán solicitar dejar de recibir dichas comunicaciones mediante los mecanismos disponibles o escribiendo a admin@aoaglobalservices.com.',
          'Las comunicaciones administrativas, contractuales o necesarias para la prestación de un servicio no se consideran necesariamente promocionales.'
        ]
      },
      {
        title: 'Venta de información personal',
        paragraphs: [
          'AOA no tiene como modelo de negocio la venta de información personal de clientes o usuarios a terceros. Si sus prácticas cambiaran sustancialmente en este aspecto, esta Política será actualizada y se adoptarán las medidas exigidas por la legislación aplicable.'
        ]
      },
      {
        title: 'Menores de edad',
        paragraphs: [
          'Los servicios de AOA están dirigidos principalmente a empresas, profesionales y personas con capacidad para contratar servicios profesionales. AOA no dirige intencionadamente sus servicios a menores ni busca recopilar deliberadamente información personal de menores sin la autorización correspondiente cuando sea legalmente requerida.'
        ]
      },
      {
        title: 'Enlaces y servicios de terceros',
        paragraphs: [
          'El sitio web o las comunicaciones de AOA pueden contener enlaces a sitios web, plataformas o servicios administrados por terceros. AOA no controla sus prácticas de privacidad y el tratamiento realizado directamente por esos servicios estará sujeto a sus respectivos términos y políticas.'
        ]
      },
      {
        title: 'Legislación y alcance internacional',
        paragraphs: [
          'AOA Global Services LLC está constituida en Wyoming, Estados Unidos, y puede desarrollar actividades y prestar servicios internacionalmente. El tratamiento de información personal estará sujeto a las leyes y regulaciones de privacidad y protección de datos que resulten aplicables según la naturaleza del tratamiento, los servicios prestados y la jurisdicción correspondiente.',
          'Nada en esta Política pretende limitar derechos que una persona tenga obligatoriamente bajo la legislación aplicable.'
        ]
      },
      {
        title: 'Consultas y reclamaciones',
        paragraphs: [
          'Para consultas, solicitudes o preocupaciones relacionadas con privacidad o tratamiento de información personal:',
          'AOA revisará las solicitudes y reclamaciones y procurará responder dentro de un plazo razonable o dentro del plazo específicamente establecido por la legislación aplicable.'
        ],
        contact: ['AOA Global Services LLC', '30 N Gould St, STE R', 'Sheridan, Wyoming 82801', 'United States', 'Correo electrónico: admin@aoaglobalservices.com']
      },
      {
        title: 'Cambios a esta Política',
        paragraphs: [
          'AOA puede modificar esta Política cuando cambien sus servicios, procesos, tecnologías, proveedores o requisitos legales. La versión actualizada será publicada en el sitio web indicando la fecha de su última actualización.',
          'Cuando un cambio sea sustancial y la legislación aplicable requiera una notificación o consentimiento adicional, AOA adoptará las medidas correspondientes.'
        ]
      }
    ]
  },

  footer: {
    tagline: 'Consultoría estratégica, optimización de procesos e implementación de soluciones para organizaciones públicas y privadas.',
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
    privacyLink: 'Política de privacidad',
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
