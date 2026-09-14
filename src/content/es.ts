import type { SiteContent } from './types';

// DATOS DE EJEMPLO: testimonios, precios y plazos son ficticios.
// Reemplazar por los reales antes de publicar (ver docs/EDITAR-CONTENIDO.md).

/**
 * ES — escrito para LATAM. No es traducción literal del inglés.
 * Ángulo: estándar internacional y respaldo de una operación con presencia en Australia.
 * Tuteo, tono cercano pero ejecutivo.
 */
export const es: SiteContent = {
  meta: {
    title: 'AOA Global Services | Tecnología para tu empresa, cotizada y entregada rápido',
    description:
      'Cuéntanos qué necesita tu empresa. Recibe una cotización en 48 horas y un equipo full-stack que lo construye con estándar internacional. Un solo interlocutor, sin contratar a nadie más.',
    ogImageAlt: 'AOA Global Services — tecnología para tu empresa, cotizada y entregada rápido',
    localeName: 'Español'
  },

  nav: {
    links: [
      { label: 'Cómo funciona', anchor: '#how-it-works' },
      { label: 'Servicios', anchor: '#services' },
      { label: 'Precios', anchor: '#pricing' },
      { label: 'Preguntas', anchor: '#faq' }
    ],
    cta: 'Pedir cotización',
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
    floatingCta: 'Pedir cotización'
  },

  hero: {
    eyebrow: 'Tecnología para empresas que no pueden esperar',
    title: 'Tu empresa crece más rápido que su tecnología.',
    subtitle:
      'Cuéntanos qué necesitas. Recibes una cotización en 48 horas y un equipo que lo construye — sitio web, plataforma, automatización o SEO — con estándar internacional y un solo interlocutor.',
    primaryCta: 'Cuéntanos tu requerimiento',
    secondaryCta: 'Ver servicios y precios',
    card: {
      label: 'Qué pasa después de escribirnos',
      steps: [
        { title: 'Describes el requerimiento', detail: '5 campos. Sin llamadas obligatorias.' },
        { title: 'Recibes la cotización', detail: 'Alcance, rango de precio y plazo en 48 h.' },
        { title: 'Lo construimos en línea', detail: 'Demos semanales. Un solo interlocutor.' }
      ],
      footer: 'Sin compromiso hasta que apruebes la propuesta.'
    }
  },

  diagnosis: {
    eyebrow: '¿Te suena?',
    title: 'Si algo de esto te pasa, ya te está costando dinero.',
    intro: 'Son los seis problemas que más nos piden resolver. Cada uno tiene un costo, aunque no aparezca en ninguna factura.',
    items: [
      {
        problem: 'Tu equipo pierde horas en procesos manuales.',
        cost: 'Cada hora pasando datos entre planillas es una hora que no se dedica a vender ni a atender clientes.'
      },
      {
        problem: 'Tu sitio web no genera ni un solo lead.',
        cost: 'Es un folleto, no un activo. Los visitantes se van y compran a quien se lo puso fácil.'
      },
      {
        problem: 'En Google no apareces.',
        cost: 'Tu competencia sale primero en las búsquedas que hacen tus clientes.'
      },
      {
        problem: 'Tus datos viven en planillas regadas.',
        cost: 'Sin una sola fuente de verdad, las decisiones se toman por intuición — o no se toman.'
      },
      {
        problem: 'Tienes diseñador, programador y agencia por separado.',
        cost: 'Tres proveedores, tres facturas y nadie que responda por el resultado final.'
      },
      {
        problem: 'Los proyectos se cotizan en semanas y se entregan en meses.',
        cost: 'Mientras esperas, el problema que el proyecto iba a resolver sigue creciendo.'
      }
    ],
    transition: 'Nada de esto necesita un departamento de TI. Necesita un equipo que cotice rápido y entregue.'
  },

  howItWorks: {
    eyebrow: 'Cómo funciona',
    title: 'Del requerimiento a la solución funcionando en tres pasos.',
    steps: [
      {
        number: '01',
        title: 'Nos cuentas tu requerimiento',
        description: 'Llenas el formulario en lenguaje simple. Si una llamada corta ayuda, la agendamos cuando te convenga.'
      },
      {
        number: '02',
        title: 'Recibes cotización y propuesta',
        description: 'En 48 horas tienes alcance, rango de precio y plazo. Tú decides si avanzar — sin presión ni permanencia.'
      },
      {
        number: '03',
        title: 'Lo construimos y entregamos en línea',
        description: 'El equipo construye mientras ves demos semanales. Apruebas, entregamos, y todo queda a tu nombre.'
      }
    ],
    highlightTitle: 'Un solo interlocutor. Sin cadena de proveedores.',
    highlightText:
      'Hablas con una sola persona que entiende tu negocio. Detrás hay un equipo full-stack que diseña, construye y da soporte con el mismo estándar con el que atendemos clientes en Australia. No tienes que contratar a nadie más.',
    cta: 'Empezar con tu requerimiento'
  },

  services: {
    eyebrow: 'Servicios',
    title: 'Qué resolvemos — y qué obtienes.',
    description: 'Cinco servicios, cada uno definido por un resultado de negocio y no por una lista de entregables.',
    problemLabel: 'El problema',
    whatLabel: 'Qué hacemos',
    outcomeLabel: 'Qué obtienes',
    quoteCta: 'Cotizar este servicio',
    items: [
      {
        slug: 'web',
        name: 'Diseño y desarrollo de sitios web',
        problem: 'Tu sitio se ve bien, pero nadie te escribe por ahí.',
        what: 'Diseñamos y construimos un sitio rápido y mobile-first con un solo objetivo: convertir visitas en consultas.',
        outcome: 'Un sitio que carga en menos de dos segundos, posiciona y te envía leads calificados al correo.'
      },
      {
        slug: 'seo',
        name: 'SEO y posicionamiento',
        problem: 'Tus clientes buscan lo que haces y encuentran a otro.',
        what: 'Correcciones técnicas, optimización on-page y contenido enfocado en las búsquedas que traen compradores.',
        outcome: 'Crecimiento medible del tráfico orgánico calificado, con reporte mensual.'
      },
      {
        slug: 'software',
        name: 'Plataformas digitales y software a medida',
        problem: 'Las herramientas genéricas no encajan con cómo opera tu empresa.',
        what: 'Construimos plataformas web, portales y herramientas internas a la medida de tu proceso — del modelo de datos al despliegue.',
        outcome: 'Un sistema que tu equipo sí usa, con tus datos en un solo lugar.'
      },
      {
        slug: 'automation',
        name: 'Automatización e IA aplicada',
        problem: 'El trabajo repetitivo se come las horas que tu equipo debería dedicar a clientes.',
        what: 'Conectamos tus herramientas y automatizamos el flujo: captación, seguimientos, reportes, documentos, asistentes con IA.',
        outcome: 'Horas recuperadas cada semana, menos errores y procesos que corren sin perseguir a nadie.'
      },
      {
        slug: 'consulting',
        name: 'Consultoría de transformación digital',
        problem: 'Sabes que la tecnología debería ayudar, pero no por dónde empezar ni cuánto debería costar.',
        what: 'Un diagnóstico corto y estructurado de tu operación con hoja de ruta priorizada y presupuestos realistas.',
        outcome: 'Un plan claro que puedes ejecutar — con nosotros o con quien quieras.'
      }
    ]
  },

  pricing: {
    eyebrow: 'Precios',
    title: 'Precios de partida transparentes. Sin sorpresas.',
    subtitle:
      'Cada proyecto se cotiza según su alcance, pero contigo nunca empezamos desde cero. Estos son los puntos de partida reales.',
    fromLabel: 'Desde USD',
    secondaryCurrencyNote: '',
    timelineLabel: 'Entrega típica',
    deliverableLabel: 'Qué incluye',
    featuredBadge: 'El más solicitado',
    disclaimer: 'Precios en dólares (USD). Tu cotización queda fija antes de empezar.',
    cta: 'Cotizar este servicio',
    plans: [
      {
        slug: 'web',
        name: 'Diseño y desarrollo de sitios web',
        problem: 'Para empresas cuyo sitio no está generando consultas.',
        deliverables: [
          'Diseño orientado a conversión, mobile-first',
          'Hasta 8 páginas, formularios de contacto y cotización',
          'Base técnica de SEO y analítica',
          'Capacitación para editar el contenido tú mismo'
        ],
        priceUsd: '1,800',
        priceAud: '',
        timeline: '3–4 semanas',
        featured: false
      },
      {
        slug: 'seo',
        name: 'SEO y posicionamiento',
        problem: 'Para empresas a las que la competencia les gana en Google.',
        deliverables: [
          'Auditoría técnica y correcciones',
          'Estrategia de palabras clave con intención de compra',
          'Optimización on-page y plan de contenidos',
          'Reporte mensual de posiciones y tráfico'
        ],
        priceUsd: '900 / mes',
        priceAud: '',
        timeline: 'Primeros resultados en 60–90 días',
        featured: false
      },
      {
        slug: 'software',
        name: 'Plataformas y software a medida',
        problem: 'Para operaciones que ya no caben en planillas ni herramientas genéricas.',
        deliverables: [
          'Levantamiento y especificación funcional',
          'Plataforma web o herramienta interna a medida',
          'Roles de usuario, tableros e integraciones',
          'Despliegue, documentación y entrega'
        ],
        priceUsd: '6,500',
        priceAud: '',
        timeline: '6–10 semanas',
        featured: true
      },
      {
        slug: 'automation',
        name: 'Automatización e IA aplicada',
        problem: 'Para equipos que pierden horas en trabajo manual repetitivo.',
        deliverables: [
          'Mapeo del proceso a automatizar',
          'Integraciones entre tus herramientas actuales',
          'Asistentes con IA donde ahorran tiempo real',
          'Monitoreo y manual de operación para tu equipo'
        ],
        priceUsd: '2,500',
        priceAud: '',
        timeline: '2–4 semanas',
        featured: false
      },
      {
        slug: 'consulting',
        name: 'Consultoría de transformación digital',
        problem: 'Para líderes que necesitan un plan antes de invertir.',
        deliverables: [
          'Diagnóstico de procesos, herramientas y datos',
          'Hoja de ruta priorizada con presupuestos',
          'Recomendaciones sin compromiso con proveedores',
          'Resumen ejecutivo para quien decide'
        ],
        priceUsd: '1,500',
        priceAud: '',
        timeline: '2 semanas',
        featured: false
      }
    ]
  },


  socialProof: {
    eyebrow: 'Resultados',
    title: 'Lo que obtuvieron nuestros clientes — en sus palabras.',
    items: [
      {
        quote: 'Teníamos tres proveedores y ningún resultado. En seis semanas teníamos un solo equipo, un sitio nuevo y consultas llegando todos los días.',
        author: 'Sarah Whitfield',
        role: 'Directora de Operaciones',
        company: 'Coastline Freight, Brisbane',
        result: '+38% de consultas en 90 días'
      },
      {
        quote: 'La cotización llegó en dos días y la plataforma en siete semanas. Nuestro equipo por fin dejó de vivir en planillas.',
        author: 'Daniel Moreno',
        role: 'Gerente General',
        company: 'Andina Distribución',
        result: '15 horas ahorradas por semana'
      },
      {
        quote: 'Nos explicaron qué haría y qué no haría el SEO antes de cobrar un peso. Seis meses después salimos primeros para nuestro servicio principal.',
        author: 'Priya Nair',
        role: 'Fundadora',
        company: 'Harbour Dental Group, Melbourne',
        result: '#1 en Google en 4 búsquedas clave'
      }
    ]
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que la gente pregunta antes de escribirnos.',
    items: [
      {
        q: '¿Por qué trabajar con ustedes y no con una agencia local?',
        a: 'Porque obtienes el mismo equipo y el mismo estándar con el que atendemos empresas en Australia, con precios de partida claros y un interlocutor que responde por el resultado. No es una agencia más: es una operación internacional que cotiza en 48 horas.'
      },
      {
        q: '¿Con quién hablo durante el proyecto?',
        a: 'Con una sola persona. Es responsable de tu proyecto desde la cotización hasta la entrega, participa en las demos semanales y traduce lo que necesita tu negocio en decisiones técnicas. Nunca tienes que perseguir a un programador.'
      },
      {
        q: '¿Cuánto se demoran de verdad?',
        a: 'La cotización llega en 48 horas. La entrega depende del alcance — los rangos típicos están en cada tarjeta de precios — y el plazo queda acordado por escrito antes de empezar. No cotizamos en semanas para entregar en meses.'
      },
      {
        q: '¿Qué pasa si necesito cambios después de la entrega?',
        a: 'Todo proyecto incluye una ventana de ajustes posterior a la entrega (30 días). Después puedes pedir cambios puntuales o un plan de soporte mensual. Nada queda amarrado a nosotros: el código y las cuentas son tuyos.'
      },
      {
        q: '¿Cómo manejan husos horarios y comunicación?',
        a: 'El equipo de ingeniería trabaja en horario de Colombia, así que si estás en LATAM compartes casi toda la jornada. La dirección en Australia se conecta en la ventana de solape diaria: 16:00–19:00 hora de Colombia. Las demos y llamadas se agendan en tu horario.'
      },
      {
        q: '¿El sitio o la plataforma queda a mi nombre?',
        a: 'Sí. Dominio, hosting, repositorio de código y cualquier cuenta de terceros se registran a nombre de tu empresa desde el primer día. Si algún día quieres cambiar de proveedor, puedes hacerlo con todo lo que pagaste.'
      },
      {
        q: '¿Necesito contratar a alguien más para que esto funcione?',
        a: 'No. Diseño, desarrollo, despliegue y soporte los cubre el equipo. Si tu proyecto necesita un especialista que no tenemos, lo integramos nosotros y seguimos respondiendo por el resultado.'
      }
    ]
  },

  contact: {
    eyebrow: 'Pide tu cotización',
    title: 'Cuéntanos tu requerimiento. Cotización en 48 horas.',
    subtitle: 'Cinco campos. Sin llamada comercial, a menos que tú la quieras.',
    reassurance: ['Respuesta en 48 horas hábiles', 'Sin compromiso hasta que apruebes', 'Tus datos son confidenciales'],
    form: {
      name: { label: 'Tu nombre', placeholder: 'Ej. Carolina Restrepo', required: 'Escribe tu nombre' },
      company: { label: 'Empresa', placeholder: 'Ej. Restrepo Logística S.A.S.', required: 'Escribe el nombre de tu empresa' },
      email: {
        label: 'Correo de trabajo',
        placeholder: 'Ej. carolina@empresa.com',
        required: 'Escribe tu correo',
        invalid: 'Escribe un correo válido'
      },
      service: {
        label: '¿Qué necesitas?',
        placeholder: 'Selecciona un servicio',
        required: 'Selecciona un servicio',
        generalOption: 'Aún no lo sé — ayúdenme a decidir'
      },
      message: {
        label: 'Describe el requerimiento',
        placeholder: '¿Cuál es el problema, cómo se vería “resuelto” y para cuándo lo necesitas?',
        required: 'Cuéntanos qué necesitas',
        minLength: 'Unos detalles más nos ayudan a cotizar bien (mín. 20 caracteres)'
      },
      submit: 'Enviar mi requerimiento',
      submitting: 'Enviando…',
      success: {
        title: 'Recibido. Gracias.',
        text: 'Te respondemos con una cotización en menos de 48 horas hábiles. Revisa tu bandeja de entrada (y la carpeta de spam, por si acaso).'
      },
      error: {
        title: 'Algo salió mal.',
        text: 'Tu mensaje no se envió. Intenta de nuevo o escríbenos directamente al correo.'
      },
      missingKey: 'El formulario aún no está configurado (falta la clave de Web3Forms). Escríbenos directamente al correo.',
      privacy: 'Usamos tus datos únicamente para responder a esta solicitud.',
      subjectPrefix: 'Nueva solicitud de cotización'
    },
    direct: {
      title: '¿Prefieres escribir directo?',
      email: 'contact@aoaglobalservices.com'
    }
  },

  footer: {
    tagline: 'Tecnología para tu empresa, cotizada en 48 horas y entregada en línea. Presencia en Australia, equipo de ingeniería en Colombia.',
    servicesTitle: 'Servicios',
    companyTitle: 'Empresa',
    companyLinks: [
      { label: 'Cómo funciona', anchor: '#how-it-works' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Pedir cotización', anchor: '#contact' }
    ],
    contactTitle: 'Contacto',
    rights: 'Todos los derechos reservados.'
  }
};
