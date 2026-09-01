export interface TranslationDict {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    scheduleCta: string;
    mobileNavTitle: string;
    floatingCta: string;
    openMenu: string;
    closeMenu: string;
    mainNavLabel: string;
    mobileNavLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stat1Label: string;
    stat2Label: string;
    imageBadgeTitle: string;
    imageBadgeText: string;
    yearsSuffix: string;
  };
  trustBar: {
    title: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    deliverablesLabel: string;
    detailLink: string;
    catalogTitle: string;
    catalogDescription: string;
    consultCta: string;
    catalogEyebrow: string;
    specialtyBadge: string;
    strategicAreaLabel: string;
    deliverablesScopeLabel: string;
    items: Array<{
      slug: string;
      title: string;
      shortTitle: string;
      summary: string;
      deliverables: string[];
      metrics: string;
      imageUrl: string;
    }>;
  };
  valueSplit: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;
  };
  metrics: {
    eyebrow: string;
    title: string;
    items: Array<{
      prefix: string;
      value: number;
      suffix: string;
      label: string;
      detail: string;
    }>;
  };
  industries: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      id: string;
      name: string;
      description: string;
      iconName: 'Landmark' | 'Activity' | 'Factory' | 'Cpu' | 'ShoppingBag' | 'Zap' | 'Truck' | 'Radio';
      imageUrl: string;
    }>;
  };
  caseStudy: {
    eyebrow: string;
    sectorBadge: string;
    title: string;
    description: string;
    stat1Value: number;
    stat1Prefix: string;
    stat1Suffix: string;
    stat1Label: string;
    stat2Value: number;
    stat2Prefix: string;
    stat2Suffix: string;
    stat2Label: string;
    cta: string;
  };
  globalGallery: {
    eyebrow: string;
    title: string;
    tabs: {
      all: string;
      financiero: string;
      industrial: string;
      tech: string;
    };
    items: Array<{
      id: string;
      title: string;
      category: 'financiero' | 'industrial' | 'tech';
      categoryLabel: string;
      location: string;
      imageUrl: string;
      description: string;
    }>;
  };
  testimonials: {
    eyebrow: string;
    prevAria: string;
    nextAria: string;
    goToAria: string;
    items: Array<{
      id: number;
      quote: string;
      author: string;
      role: string;
      company: string;
    }>;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    deliverablesLabel: string;
    steps: Array<{
      number: string;
      name: string;
      subtitle: string;
      description: string;
      deliverables: string[];
    }>;
  };
  ctaBand: {
    eyebrow: string;
    title: string;
    description: string;
    primaryBtn: string;
    reassurance: string;
  };
  footer: {
    brandTagline: string;
    linkedin: string;
    servicesTitle: string;
    companyTitle: string;
    hqTitle: string;
    allRightsReserved: string;
    servicesLinks: Array<{ label: string; href: string }>;
    companyLinks: Array<{ label: string; href: string }>;
    legalLinks: Array<{ label: string; href: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    philosophyEyebrow: string;
    philosophyTitle: string;
    philosophyP1: string;
    philosophyP2: string;
    imageBadge: string;
    infraEyebrow: string;
    infraTitle: string;
    principlesEyebrow: string;
    principlesTitle: string;
    principles: Array<{
      title: string;
      description: string;
    }>;
    photos: Array<{
      url: string;
      caption: string;
      location: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formTitle: string;
    formRequiredNote: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    fullNameRequired: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailRequired: string;
    emailInvalid: string;
    companyLabel: string;
    companyPlaceholder: string;
    companyRequired: string;
    serviceLabel: string;
    servicePlaceholder: string;
    serviceRequired: string;
    serviceGeneralOption: string;
    messageLabel: string;
    messagePlaceholder: string;
    messageRequired: string;
    messageMinLength: string;
    submitBtn: string;
    submittingBtn: string;
    successMessage: string;
    errorMessage: string;
    disclaimer: string;
    directContactTitle: string;
    directContactSubtitle: string;
    emailTitle: string;
    phoneTitle: string;
    hqTitle: string;
    hoursTitle: string;
    hoursP1: string;
    hoursP2: string;
  };
  seo: {
    homeTitle: string;
    homeDesc: string;
    servicesTitle: string;
    servicesDesc: string;
    aboutTitle: string;
    aboutDesc: string;
    contactTitle: string;
    contactDesc: string;
  };
}

export const translations: Record<'es' | 'en', TranslationDict> = {
  es: {
    nav: {
      home: "Inicio",
      floatingCta: "Agendar Consulta",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      mainNavLabel: "Navegación principal",
      mobileNavLabel: "Navegación móvil",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      scheduleCta: "Agendar Consulta",
      mobileNavTitle: "Navegación"
    },
    hero: {
      yearsSuffix: "Años",
      eyebrow: "Consultoría Estratégica & Operaciones Globales",
      title: "Transformamos complejidad operativa en ventaja competitiva.",
      description: "Asesoramos a comités de dirección y líderes empresariales en el diseño, estructuración y despliegue de modelos operativos de alto rendimiento, optimización de capital y gobernanza corporativa.",
      primaryCta: "Solicitar Diagnóstico",
      secondaryCta: "Explorar Servicios",
      stat1Label: "Experiencia en gestión ejecutiva",
      stat2Label: "Valor generado en operaciones",
      imageBadgeTitle: "Gobernanza & Escalabilidad",
      imageBadgeText: "Soluciones estructuradas para corporaciones en América y Europa."
    },
    trustBar: {
      title: "Confianza de comités ejecutivos y fondos de inversión en múltiples mercados"
    },
    services: {
      eyebrow: "Nuestras Capacidades",
      catalogEyebrow: "Portafolio de Especialidades",
      specialtyBadge: "Especialidad",
      strategicAreaLabel: "Área Estratégica",
      deliverablesScopeLabel: "Entregables y Alcance del Mandato",
      title: "Especialidades de consultoría diseñadas para generar valor mensurable.",
      description: "Abordamos desafíos estratégicos y operacionales con rigor metodológico, enfoque cuantitativo e implementación en el terreno.",
      deliverablesLabel: "Entregables Clave:",
      detailLink: "Detalle del servicio",
      catalogTitle: "Servicios de Consultoría de Alta Dirección",
      catalogDescription: "Combinamos metodología rigurosa, análisis cuantitativo y experiencia sectorial para resolver los desafíos operacionales más complejos de su organización.",
      consultCta: "Consultar sobre este servicio",
      items: [
        {
          slug: "estrategia-corporativa",
          title: "Consultoría Estratégica Corporativa",
          shortTitle: "Estrategia Corporativa",
          summary: "Diseñamos hojas de ruta estratégicas para líderes empresariales enfocadas en crecimiento sostenible, ventaja competitiva y alineación de recursos en mercados complejos.",
          deliverables: [
            "Diagnóstico competitivo y análisis de posicionamiento de mercado",
            "Plan estratégico quinquenal con metas cuantitativas y OKRs",
            "Modelado financiero y asignación de capital estratégico",
            "Estructuración de comités de gobernanza y seguimiento directivo"
          ],
          metrics: "+35% incremento en retorno de capital",
          imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
        },
        {
          slug: "optimizacion-procesos",
          title: "Optimización de Procesos y Eficiencia Operativa",
          shortTitle: "Eficiencia Operativa",
          summary: "Reingeniería integral de operaciones para eliminar fricciones, reducir costos directos y maximizar el rendimiento productivo mediante metodologías Lean y Six Sigma.",
          deliverables: [
            "Mapeo de cadena de valor y detección de cuellos de botella",
            "Estandarización de procedimientos operativos (SOPs)",
            "Reducción de tiempos de ciclo y eliminación de mermas",
            "Cuadro de mando integral (KPIs) en tiempo real"
          ],
          metrics: "28% reducción promedio en costos operativos",
          imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
        },
        {
          slug: "transformacion-digital",
          title: "Transformación Digital e Integración Tecnológica",
          shortTitle: "Transformación Digital",
          summary: "Modernización de arquitecturas empresariales, automatización inteligente de flujos de trabajo e integración de herramientas tecnológicas orientadas al negocio.",
          deliverables: [
            "Auditoría de deuda técnica y arquitectura de sistemas",
            "Estrategia de adopción cloud y migración de plataformas críticas",
            "Automatización de procesos robóticos y flujos de datos (RPA)",
            "Implementación de analítica avanzada y business intelligence"
          ],
          metrics: "4.2x aceleración en entrega de servicios",
          imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
        },
        {
          slug: "gestion-riesgos",
          title: "Gestión de Riesgos y Cumplimiento Regulatorio",
          shortTitle: "Gestión de Riesgos",
          summary: "Identificación proactiva, mitigación de riesgos operativos, financieros y tecnológicos, garantizando el cumplimiento normativo en múltiples jurisdicciones.",
          deliverables: [
            "Matriz integral de riesgos y planes de contingencia operacional",
            "Evaluación de cumplimiento normativo (Compliance & Governance)",
            "Políticas de ciberseguridad y continuidad de negocio (BCP/DRP)",
            "Auditorías internas de control y reporting para reguladores"
          ],
          metrics: "100% de cumplimiento en auditorías",
          imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
        },
        {
          slug: "expansion-internacional",
          title: "Expansión Internacional y Estrategia de Mercado",
          shortTitle: "Expansión Global",
          summary: "Estructuración de proyectos de entrada a nuevos mercados globales, fusiones y adquisiciones, y articulación de cadenas de suministro transfronterizas.",
          deliverables: [
            "Estudio de viabilidad regulatoria, fiscal y arancelaria por país",
            "Due diligence operacional y comercial para transacciones M&A",
            "Desarrollo de alianzas estratégicas y redes de distribución local",
            "Plan de aterrizaje corporativo (Soft-landing & Entity Setup)"
          ],
          metrics: "14 países con presencia directa y socios",
          imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
        },
        {
          slug: "gestion-cambio",
          title: "Gestión del Cambio y Liderazgo Organizacional",
          shortTitle: "Gestión del Cambio",
          summary: "Alineación de equipos ejecutivos, evolución cultural y programas de capacitación especializada para sostener transformaciones de gran escala.",
          deliverables: [
            "Evaluación de madurez cultural y disposición al cambio",
            "Diseño de estructuras organizacionales ágiles y responsabilidades",
            "Programas de liderazgo ejecutivo y coaching de alto impacto",
            "Estrategia de comunicación interna y mitigación de resistencia"
          ],
          metrics: "92% índice de adopción organizacional",
          imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    valueSplit: {
      eyebrow: "Por Qué AOA Global Services",
      title: "Consultoría de alta dirección sin la fricción de las firmas tradicionales.",
      description: "Combinamos la profundidad analítica y los estándares metodológicos de las firmas globales con la agilidad, cercanía ejecutiva y foco pragmático que demandan las empresas modernas.",
      cta: "Conocer Nuestra Firma",
      pillars: [
        {
          title: "Socios Ejecutivos en el Terreno",
          description: "No delegamos proyectos en equipos junior. Cada diagnóstico e implementación es liderada directamente por socios directivos con más de una década de experiencia en alta dirección."
        },
        {
          title: "Rigor Cuantitativo y Retorno de Inversión",
          description: "Rechazamos las recomendaciones genéricas. Cada propuesta parte de modelos financieros precisos, análisis de varianza y métricas de impacto económico verificables."
        },
        {
          title: "Transferencia Total de Capacidades",
          description: "No creamos dependencias permanentes. Diseñamos la gobernanza, formamos a sus equipos y establecemos protocolos para que la organización opere de forma autónoma."
        }
      ]
    },
    metrics: {
      eyebrow: "Impacto Verificable",
      title: "Resultados que respaldan nuestra metodología.",
      items: [
        {
          prefix: "$",
          value: 450,
          suffix: "M+",
          label: "Valor Generado",
          detail: "En eficiencias operativas, reducción de costos y expansión de ingresos."
        },
        {
          prefix: "",
          value: 85,
          suffix: "+",
          label: "Proyectos Ejecutados",
          detail: "Implementaciones corporativas concluidas dentro de plazo y presupuesto."
        },
        {
          prefix: "",
          value: 14,
          suffix: "",
          label: "Mercados Globales",
          detail: "Presencia y capacidad de despliegue en América del Norte, Latam y Europa."
        },
        {
          prefix: "",
          value: 98,
          suffix: "%",
          label: "Tasa de Satisfacción",
          detail: "Clientes que extienden mandatos o nos recomiendan a sus comités directivos."
        }
      ]
    },
    industries: {
      eyebrow: "Sectores de Especialidad",
      title: "Experiencia profunda en industrias de alta regulación e intensidad operativa.",
      description: "Adaptamos nuestros marcos estratégicos a las particularidades normativas, tecnológicas y comerciales de cada vertical.",
      items: [
        {
          id: "banca-finanzas",
          name: "Servicios Financieros y Banca",
          description: "Modernización de modelos de riesgo, banca digital y cumplimiento regulatorio bancario.",
          iconName: "Landmark",
          imageUrl: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "salud-farmaceutica",
          name: "Salud y Farmacéutica",
          description: "Optimización de cadenas clínicas, trazabilidad farmacéutica y transformación digital médica.",
          iconName: "Activity",
          imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "manufactura",
          name: "Manufactura e Industria 4.0",
          description: "Automatización de plantas, lean manufacturing y resiliencia en la cadena de suministros.",
          iconName: "Factory",
          imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "tecnologia",
          name: "Tecnología y Software",
          description: "Escalabilidad de plataformas SaaS, optimización de infraestructura y gobierno técnico.",
          iconName: "Cpu",
          imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "retail-consumo",
          name: "Retail y Gran Consumo",
          description: "Integración omnicanal, optimización de inventarios y fidelización de clientes.",
          iconName: "ShoppingBag",
          imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "energia",
          name: "Energía y Recursos",
          description: "Transición energética, eficiencia operativa y gestión de activos críticos intensivos.",
          iconName: "Zap",
          imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "logistica",
          name: "Logística y Transporte",
          description: "Ruteo dinámico, automatización de almacenes y visibilidad de extremo a extremo.",
          iconName: "Truck",
          imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "telecomunicaciones",
          name: "Telecomunicaciones y Redes",
          description: "Despliegue de infraestructura de conectividad, optimización de OPEX y nuevos modelos de monetización.",
          iconName: "Radio",
          imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    caseStudy: {
      eyebrow: "Caso de Estudio Destacado",
      sectorBadge: "Sector: Logística & Distribución",
      title: "Reestructuración operativa y optimización de cadena de suministro transfronteriza.",
      description: "Un conglomerado multinacional con operaciones en 4 países requería rediseñar su modelo logístico para mitigar cuellos de botella arancelarios y reducir tiempos de entrega en un 30%.",
      stat1Value: 18.4,
      stat1Prefix: "$",
      stat1Suffix: "M",
      stat1Label: "Ahorro anual en OPEX",
      stat2Value: 42,
      stat2Prefix: "-",
      stat2Suffix: "%",
      stat2Label: "Reducción de tiempos de ciclo",
      cta: "Evaluar un Proyecto Similar"
    },
    globalGallery: {
      eyebrow: "Presencia y Despliegue en Terreno",
      title: "Operaciones globales ejecutadas con precisión milimétrica.",
      tabs: {
        all: "Todos los Frentes",
        financiero: "Finanzas & Sede",
        industrial: "Plantas & Logística",
        tech: "Tecnología & Redes"
      },
      items: [
        {
          id: "sf-hq",
          title: "Sede Directiva & Centro de Estrategia",
          category: "financiero",
          categoryLabel: "Finanzas & Gobernanza",
          location: "San Francisco, EE.UU.",
          imageUrl: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=800&q=80",
          description: "Comité de supervisión y modelado de inversiones transfronterizas."
        },
        {
          id: "industrial-plant",
          title: "Modernización de Planta de Manufactura",
          category: "industrial",
          categoryLabel: "Industria & Manufactura",
          location: "Monterrey, México",
          imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
          description: "Despliegue de metodologías Lean y automatización de líneas de ensamble."
        },
        {
          id: "london-office",
          title: "Oficina de Enlace Europeo",
          category: "financiero",
          categoryLabel: "Finanzas & Gobernanza",
          location: "Londres, Reino Unido",
          imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
          description: "Estructuración de cumplimiento normativo y arbitraje regulatorio UE-EE.UU."
        },
        {
          id: "cloud-center",
          title: "Arquitectura Cloud & Centro de Datos",
          category: "tech",
          categoryLabel: "Tecnología & Infraestructura",
          location: "Frankfurt, Alemania",
          imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
          description: "Migración de plataformas core bancarias con alta redundancia."
        },
        {
          id: "logistics-hub",
          title: "Hub Logístico de Carga Aérea y Terrestre",
          category: "industrial",
          categoryLabel: "Industria & Manufactura",
          location: "Panamá, Panamá",
          imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
          description: "Consolidación de cadena de distribución multirregional."
        },
        {
          id: "telecom-node",
          title: "Infraestructura de Conectividad y Redes",
          category: "tech",
          categoryLabel: "Tecnología & Infraestructura",
          location: "Santiago, Chile",
          imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
          description: "Optimización de red troncal de fibra y despliegue de telecomunicaciones."
        }
      ]
    },
    testimonials: {
      eyebrow: "Perspectiva Directiva",
      prevAria: "Testimonio anterior",
      nextAria: "Siguiente testimonio",
      goToAria: "Ir al testimonio",
      items: [
        {
          id: 1,
          quote: "AOA Global Services transformó nuestra estructura operativa en menos de seis meses. Su capacidad para ejecutar sobre el terreno y comprometerse con el resultado financiero final superó ampliamente a cualquier consultora con la que hayamos trabajado.",
          author: "Guillermo Mendoza",
          role: "Director General de Operaciones",
          company: "Grupo Industrial Vanguard"
        },
        {
          id: 2,
          quote: "La precisión analítica y la velocidad con la que alinearon a nuestro equipo directivo permitieron consolidar la integración de tres subsidiarias transfronterizas sin interrumpir la operación ni perder margen.",
          author: "Elena Rostova",
          role: "Vicepresidenta de Estrategia Corporativa",
          company: "Nordic Logistics Alliance"
        },
        {
          id: 3,
          quote: "No nos presentaron un informe teórico de 200 páginas; diseñaron la solución técnica, formaron a nuestros gerentes y se quedaron hasta validar los primeros $12M en ahorros recurrentes.",
          author: "Marcus Thorne",
          role: "Managing Partner",
          company: "Apex Capital Partners"
        }
      ]
    },
    process: {
      eyebrow: "Metodología de Ejecución",
      title: "Un marco estructurado en cinco fases de alto rigor operacional.",
      description: "Desde el análisis de datos hasta la transferencia final, cada paso cuenta con entregables cuantificables y comités de control.",
      deliverablesLabel: "Entregables:",
      steps: [
        {
          number: "01",
          name: "Discover",
          subtitle: "Inmersión y Alineación Estratégica",
          description: "Evaluamos el contexto del negocio, objetivos directivos y condiciones del mercado para establecer metas cuantitativas claras.",
          deliverables: ["Entrevistas con stakeholders clave", "Auditoría preliminar de capacidades", "Definición de alcance y KPIs de éxito"]
        },
        {
          number: "02",
          name: "Diagnose",
          subtitle: "Diagnóstico Cuantitativo y Brechas",
          description: "Analizamos datos operativos, flujos de procesos y estructuras de costos para detectar ineficiencias críticas y áreas de oportunidad.",
          deliverables: ["Mapeo de procesos as-is", "Análisis de varianza y cuellos de botella", "Informe de viabilidad técnica y financiera"]
        },
        {
          number: "03",
          name: "Design",
          subtitle: "Arquitectura de Solución y Hoja de Ruta",
          description: "Diseñamos modelos operativos futuros, seleccionamos tecnologías y construimos el plan de implementación detallado por hitos.",
          deliverables: ["Diseño de procesos to-be", "Business case de inversión y ROI esperado", "Cronograma de ejecución y matriz RACI"]
        },
        {
          number: "04",
          name: "Deploy",
          subtitle: "Ejecución Controlada y Gestión del Cambio",
          description: "Implementamos las soluciones en fases controladas junto con los equipos internos, asegurando adopción y continuidad operativa.",
          deliverables: ["Pruebas piloto y validación en terreno", "Capacitación y transferencia de conocimiento", "Manuales operativos y protocolos estándar"]
        },
        {
          number: "05",
          name: "Scale",
          subtitle: "Escalabilidad y Mejora Continua",
          description: "Desplegamos la solución a escala global, establecemos tableros de control continuo y transferimos la gobernanza al cliente.",
          deliverables: ["Tableros de control directivo en tiempo real", "Auditorías de seguimiento a 90/180 días", "Plan de optimización y evolución continua"]
        }
      ]
    },
    ctaBand: {
      eyebrow: "Comience su Transformación",
      title: "Hablemos sobre los desafíos estratégicos de su organización.",
      description: "Coordinemos una sesión confidencial de diagnóstico inicial para evaluar viabilidad, alcance y retorno proyectado.",
      primaryBtn: "Agendar Sesión Inicial",
      reassurance: "Respuesta en menos de 24 horas laborables. Tratamiento bajo estricto acuerdo de confidencialidad (NDA)."
    },
    footer: {
      brandTagline: "Consultoría estratégica, optimización de procesos y transformación empresarial para organizaciones globales de alto rendimiento.",
      linkedin: "LinkedIn Institucional",
      servicesTitle: "Servicios",
      companyTitle: "Compañía",
      hqTitle: "Sede Global",
      allRightsReserved: "Todos los derechos reservados.",
      servicesLinks: [
        { label: "Estrategia Corporativa", href: "/services#estrategia-corporativa" },
        { label: "Eficiencia Operativa", href: "/services#optimizacion-procesos" },
        { label: "Transformación Digital", href: "/services#transformacion-digital" },
        { label: "Gestión de Riesgos", href: "/services#gestion-riesgos" },
        { label: "Expansión Global", href: "/services#expansion-internacional" },
        { label: "Gestión del Cambio", href: "/services#gestion-cambio" }
      ],
      companyLinks: [
        { label: "Sobre Nosotros", href: "/about" },
        { label: "Metodología", href: "/about#metodologia" },
        { label: "Casos de Éxito", href: "/#casos" },
        { label: "Contacto", href: "/contact" }
      ],
      legalLinks: [
        { label: "Aviso de Privacidad", href: "/privacy" },
        { label: "Términos de Servicio", href: "/terms" },
        { label: "Seguridad y Cumplimiento", href: "/compliance" }
      ]
    },
    about: {
      eyebrow: "Nuestra Firma",
      title: "Asesoría de Alta Dirección Basada en Resultados Concretos",
      subtitle: "Nacimos para brindar una alternativa ágil, rigurosa y comprometida a las estructuras burocráticas de las consultoras multinacionales tradicionales.",
      philosophyEyebrow: "Nuestra Filosofía",
      philosophyTitle: "Un enfoque práctico que une estrategia de directorio con ejecución en la planta.",
      philosophyP1: "En AOA Global Services entendemos que la mejor estrategia carece de valor si no puede implementarse con éxito en la realidad diaria de la organización. Por ello, nuestros mandatos abarcan desde la conceptualización directiva hasta la puesta en marcha de nuevos protocolos operativos.",
      philosophyP2: "Trabajamos junto a juntas directivas, directores generales y fondos de capital privado en América y Europa, optimizando operaciones críticas, gestionando transiciones complejas y diseñando estrategias de expansión internacional.",
      imageBadge: "Liderazgo Ejecutivo en Acción",
      infraEyebrow: "Infraestructura & Frentes de Trabajo",
      infraTitle: "Presencia ejecutiva en centros neurálgicos de negocio",
      principlesEyebrow: "Pilares de Trabajo",
      principlesTitle: "Principios que rigen cada uno de nuestros mandatos",
      principles: [
        {
          title: "Rigor Cuantitativo",
          description: "Toda recomendación se sustenta en modelos financieros robustos y datos empíricos de la operación real."
        },
        {
          title: "Involucramiento Directo",
          description: "Los socios fundadores y consultores senior participan directamente en cada sesión de trabajo y toma de decisiones."
        },
        {
          title: "Independencia y Ética",
          description: "Garantizamos total objetividad profesional, orientando cada estrategia exclusivamente al beneficio del cliente."
        },
        {
          title: "Transferencia de Valor",
          description: "Nuestro objetivo es fortalecer las capacidades internas del cliente para que sostenga el crecimiento sin dependencia externa."
        }
      ],
      photos: [
        {
          url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
          caption: "Centro de Modelado Estratégico",
          location: "San Francisco"
        },
        {
          url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80",
          caption: "Sesión de Directorio y Gobernanza",
          location: "Nueva York"
        },
        {
          url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
          caption: "Alineación de Equipos Ejecutivos",
          location: "Londres"
        }
      ]
    },
    contact: {
      eyebrow: "Canales Corporativos",
      title: "Inicie una Consulta Confidencial",
      subtitle: "Complete el formulario para coordinar una sesión de evaluación inicial con nuestros socios directores.",
      formTitle: "Formulario de Solicitud Directiva",
      formRequiredNote: "Todos los campos marcados con asterisco (*) son obligatorios.",
      fullNameLabel: "Nombre Completo *",
      fullNamePlaceholder: "Ej. Roberto Valenzuela",
      fullNameRequired: "Por favor ingrese su nombre completo",
      emailLabel: "Correo Corporativo *",
      emailPlaceholder: "Ej. rvalenzuela@empresa.com",
      emailRequired: "Por favor ingrese su correo corporativo",
      emailInvalid: "Ingrese una dirección de correo válida",
      companyLabel: "Empresa / Organización *",
      companyPlaceholder: "Ej. Grupo Industrial Andino S.A.",
      companyRequired: "Por favor ingrese el nombre de su empresa",
      serviceLabel: "Servicio de Interés Principal *",
      servicePlaceholder: "-- Seleccionar servicio --",
      serviceRequired: "Seleccione un área de especialidad",
      serviceGeneralOption: "Evaluación Estratégica General",
      messageLabel: "Resumen del Desafío o Contexto *",
      messagePlaceholder: "Describa brevemente la situación actual de la empresa, objetivos esperados y cronograma estimado...",
      messageRequired: "Por favor comparta un resumen de su proyecto",
      messageMinLength: "El mensaje debe contener al menos 15 caracteres",
      submitBtn: "Enviar Solicitud Confidencial",
      submittingBtn: "Enviando solicitud...",
      successMessage: "Gracias por contactar a AOA Global Services. Un socio director se comunicará con usted en menos de 24 horas laborables.",
      errorMessage: "Ocurrió un error al procesar su solicitud. Por favor contáctenos directamente vía correo a contact@aoaglobalservices.com",
      disclaimer: "Sus datos están protegidos bajo estricto secreto profesional y confidencialidad comercial.",
      directContactTitle: "Atención Directa",
      directContactSubtitle: "Si requiere asistencia inmediata o desea remitir documentación corporativa bajo NDA previo:",
      emailTitle: "Correo Institucional",
      phoneTitle: "Línea Ejecutiva",
      hqTitle: "Oficina Principal",
      hoursTitle: "Horario de Atención",
      hoursP1: "Lunes a Viernes: 08:30 – 18:30 (PST / EST / CET)",
      hoursP2: "Atención a comités de crisis disponible 24/7 para clientes con mandato activo."
    },
    seo: {
      homeTitle: "AOA Global Services | Consultoría Estratégica y Operativa",
      homeDesc: "AOA Global Services ofrece consultoría estratégica, optimización de procesos y transformación empresarial para organizaciones globales de alto rendimiento.",
      servicesTitle: "Servicios | AOA Global Services",
      servicesDesc: "Conozca nuestras 6 áreas de especialidad en consultoría estratégica, optimización de procesos, transformación digital y gobernanza corporativa.",
      aboutTitle: "Nosotros | AOA Global Services",
      aboutDesc: "Conozca el equipo directivo, principios operativos y trayectoria de AOA Global Services en consultoría estratégica y gestión empresarial.",
      contactTitle: "Contacto | AOA Global Services",
      contactDesc: "Inicie una conversación confidencial con nuestros socios directores. Solicite una sesión de diagnóstico estratégico para su empresa."
    }
  },
  en: {
    nav: {
      home: "Home",
      floatingCta: "Schedule Consultation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainNavLabel: "Main navigation",
      mobileNavLabel: "Mobile navigation",
      services: "Services",
      about: "About Us",
      contact: "Contact",
      scheduleCta: "Schedule Advisory",
      mobileNavTitle: "Navigation"
    },
    hero: {
      eyebrow: "Strategic Advisory & Global Operations",
      yearsSuffix: "Years",
      title: "Transforming operational complexity into sustainable competitive advantage.",
      description: "We advise boards of directors and C-level executives in designing, structuring, and executing high-performance operating models, capital allocation, and corporate governance.",
      primaryCta: "Request Initial Diagnostic",
      secondaryCta: "Explore Services",
      stat1Label: "Executive leadership experience",
      stat2Label: "Value generated across mandates",
      imageBadgeTitle: "Governance & Scalability",
      imageBadgeText: "Structured solutions for corporations across North America and Europe."
    },
    trustBar: {
      title: "Trusted by executive boards and private equity funds across global markets"
    },
    services: {
      eyebrow: "Our Capabilities",
      catalogEyebrow: "Practice Portfolio",
      specialtyBadge: "Practice",
      strategicAreaLabel: "Strategic Practice",
      deliverablesScopeLabel: "Deliverables & Mandate Scope",
      title: "Management consulting practices designed for measurable enterprise value.",
      description: "We solve complex strategic and operational mandates through rigorous quantitative methodology and on-the-ground deployment.",
      deliverablesLabel: "Key Deliverables:",
      detailLink: "Service details",
      catalogTitle: "Executive Management Consulting Services",
      catalogDescription: "We combine rigorous analytics, financial modeling, and sector expertise to resolve the most critical operational challenges of your enterprise.",
      consultCta: "Inquire about this practice",
      items: [
        {
          slug: "estrategia-corporativa",
          title: "Corporate Strategy & Advisory",
          shortTitle: "Corporate Strategy",
          summary: "We design strategic roadmaps for executive leaders focused on sustainable growth, competitive positioning, and capital resource alignment in complex markets.",
          deliverables: [
            "Competitive diagnostic and market positioning audit",
            "5-year corporate strategic plan with quantitative OKRs",
            "Financial modeling and strategic capital allocation",
            "Board governance and executive oversight committees"
          ],
          metrics: "+35% increase in capital return (ROIC)",
          imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
        },
        {
          slug: "optimizacion-procesos",
          title: "Process Optimization & Operational Excellence",
          shortTitle: "Operational Excellence",
          summary: "Comprehensive operational reengineering to eliminate bottlenecks, reduce direct costs, and maximize productivity using Lean and Six Sigma frameworks.",
          deliverables: [
            "Value stream mapping and friction point audit",
            "Standard operating procedure (SOP) formalization",
            "Cycle time reduction and scrap minimization",
            "Real-time executive performance dashboard (KPIs)"
          ],
          metrics: "28% average reduction in OPEX",
          imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
        },
        {
          slug: "transformacion-digital",
          title: "Digital Transformation & Technology Architecture",
          shortTitle: "Digital Transformation",
          summary: "Enterprise architecture modernization, intelligent workflow automation, and seamless integration of business-driven technology platforms.",
          deliverables: [
            "Technical debt and core architecture audit",
            "Enterprise cloud adoption and migration roadmap",
            "Robotic process automation & data workflows (RPA)",
            "Advanced business intelligence & predictive analytics"
          ],
          metrics: "4.2x service delivery acceleration",
          imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
        },
        {
          slug: "gestion-riesgos",
          title: "Risk Management & Regulatory Governance",
          shortTitle: "Risk & Governance",
          summary: "Proactive identification and mitigation of operational, financial, and technological risks, ensuring multi-jurisdictional regulatory compliance.",
          deliverables: [
            "Comprehensive risk matrix and contingency plans",
            "Regulatory compliance & governance audit",
            "Cybersecurity & business continuity policies (BCP/DRP)",
            "Internal controls and statutory regulatory reporting"
          ],
          metrics: "100% statutory audit compliance",
          imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
        },
        {
          slug: "expansion-internacional",
          title: "Global Expansion & Market Entry Strategy",
          shortTitle: "Global Expansion",
          summary: "Cross-border entity structuring, international M&A due diligence, and global supply chain integration across North America, Latam, and Europe.",
          deliverables: [
            "Jurisdictional tax, tariff, and regulatory feasibility study",
            "Commercial and operational M&A due diligence",
            "Strategic alliance and local distribution network setup",
            "Corporate soft-landing and multi-entity governance"
          ],
          metrics: "14 countries with direct partners",
          imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
        },
        {
          slug: "gestion-cambio",
          title: "Change Management & Organizational Leadership",
          shortTitle: "Change Management",
          summary: "Executive team alignment, cultural transformation, and specialized training programs to sustain large-scale corporate reorganizations.",
          deliverables: [
            "Cultural maturity and change readiness assessment",
            "Agile organizational design and accountability matrices",
            "Executive leadership coaching and alignment programs",
            "Internal communication strategy and friction mitigation"
          ],
          metrics: "92% organizational adoption rate",
          imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    valueSplit: {
      eyebrow: "Why AOA Global Services",
      title: "Executive management consulting without the friction of legacy firms.",
      description: "We combine the analytical rigor and methodological depth of tier-one global consultancies with the speed, senior partner presence, and pragmatic execution demanded by modern corporations.",
      cta: "About Our Firm",
      pillars: [
        {
          title: "Senior Executive Partners On-Site",
          description: "We never delegate assignments to junior analysts. Every diagnostic and implementation is directly spearheaded by managing partners with 10+ years of executive leadership."
        },
        {
          title: "Quantitative Rigor & Measurable ROI",
          description: "We reject generic recommendations. Every strategy is rooted in robust financial models, variance analytics, and verifiable bottom-line impact."
        },
        {
          title: "End-to-End Capability Transfer",
          description: "We do not build perpetual client dependencies. We establish governance, train internal teams, and deploy protocols so the organization operates autonomously."
        }
      ]
    },
    metrics: {
      eyebrow: "Verifiable Impact",
      title: "Results that validate our strategic methodology.",
      items: [
        {
          prefix: "$",
          value: 450,
          suffix: "M+",
          label: "Value Generated",
          detail: "Across operational efficiencies, direct cost reductions, and top-line growth."
        },
        {
          prefix: "",
          value: 85,
          suffix: "+",
          label: "Projects Completed",
          detail: "Corporate implementations delivered on-time and within allocated budget."
        },
        {
          prefix: "",
          value: 14,
          suffix: "",
          label: "Global Markets",
          detail: "Active operational reach and deployment across North America, Latam, and Europe."
        },
        {
          prefix: "",
          value: 98,
          suffix: "%",
          label: "Client Satisfaction",
          detail: "Clients who extend ongoing mandates or recommend our firm to their boards."
        }
      ]
    },
    industries: {
      eyebrow: "Sector Expertise",
      title: "Deep domain competence in high-regulation and capital-intensive verticals.",
      description: "We tailor our analytical frameworks to the regulatory, technological, and commercial requirements of each specific industry.",
      items: [
        {
          id: "banca-finanzas",
          name: "Financial Services & Banking",
          description: "Risk model modernization, digital banking architecture, and statutory compliance.",
          iconName: "Landmark",
          imageUrl: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "salud-farmaceutica",
          name: "Healthcare & Pharmaceuticals",
          description: "Clinical supply chain optimization, pharma traceability, and digital health workflows.",
          iconName: "Activity",
          imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "manufactura",
          name: "Manufacturing & Industry 4.0",
          description: "Plant automation, lean production systems, and supply chain resilience.",
          iconName: "Factory",
          imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "tecnologia",
          name: "Technology & Software",
          description: "SaaS platform scaling, cloud infrastructure optimization, and technical governance.",
          iconName: "Cpu",
          imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "retail-consumo",
          name: "Retail & Consumer Goods",
          description: "Omnichannel integration, automated inventory planning, and customer loyalty models.",
          iconName: "ShoppingBag",
          imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "energia",
          name: "Energy & Natural Resources",
          description: "Energy transition, operational efficiency, and capital asset management.",
          iconName: "Zap",
          imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "logistica",
          name: "Logistics & Supply Chain",
          description: "Dynamic routing, warehouse automation, and end-to-end freight visibility.",
          iconName: "Truck",
          imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
        },
        {
          id: "telecomunicaciones",
          name: "Telecommunications & Networks",
          description: "Connectivity infrastructure rollout, OPEX rationalization, and monetization models.",
          iconName: "Radio",
          imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    caseStudy: {
      eyebrow: "Featured Case Study",
      sectorBadge: "Sector: Logistics & Distribution",
      title: "Cross-border operational restructuring and supply chain optimization.",
      description: "A multinational conglomerate with active operations across 4 jurisdictions required a full logistics overhaul to mitigate tariff bottlenecks and reduce lead times by 30%.",
      stat1Value: 18.4,
      stat1Prefix: "$",
      stat1Suffix: "M",
      stat1Label: "Annual OPEX savings",
      stat2Value: 42,
      stat2Prefix: "-",
      stat2Suffix: "%",
      stat2Label: "Cycle time reduction",
      cta: "Evaluate a Similar Project"
    },
    globalGallery: {
      eyebrow: "Global Reach & On-Site Deployments",
      title: "Cross-border operations delivered with tactical precision.",
      tabs: {
        all: "All Locations",
        financiero: "Finance & Advisory",
        industrial: "Plants & Logistics",
        tech: "Tech & Networks"
      },
      items: [
        {
          id: "sf-hq",
          title: "Executive Advisory & Strategy Hub",
          category: "financiero",
          categoryLabel: "Finance & Governance",
          location: "San Francisco, USA",
          imageUrl: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=800&q=80",
          description: "Cross-border investment oversight and executive modeling center."
        },
        {
          id: "industrial-plant",
          title: "Manufacturing Plant Modernization",
          category: "industrial",
          categoryLabel: "Manufacturing & Industry",
          location: "Monterrey, Mexico",
          imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
          description: "Lean manufacturing implementation and assembly line robotics."
        },
        {
          id: "london-office",
          title: "European Strategy Liaison",
          category: "financiero",
          categoryLabel: "Finance & Governance",
          location: "London, United Kingdom",
          imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
          description: "Regulatory compliance structuring and EU-US commercial arbitration."
        },
        {
          id: "cloud-center",
          title: "Cloud Infrastructure & Data Center",
          category: "tech",
          categoryLabel: "Technology & Infrastructure",
          location: "Frankfurt, Germany",
          imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
          description: "Core banking platform migration with high-redundancy failover."
        },
        {
          id: "logistics-hub",
          title: "Air & Ground Freight Logistics Hub",
          category: "industrial",
          categoryLabel: "Manufacturing & Industry",
          location: "Panama City, Panama",
          imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
          description: "Regional distribution center consolidation and customs automation."
        },
        {
          id: "telecom-node",
          title: "Fiber Backbone & Connectivity Node",
          category: "tech",
          categoryLabel: "Technology & Infrastructure",
          location: "Santiago, Chile",
          imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
          description: "Telecommunications backbone optimization and regional routing."
        }
      ]
    },
    testimonials: {
      eyebrow: "Executive Perspective",
      prevAria: "Previous testimonial",
      nextAria: "Next testimonial",
      goToAria: "Go to testimonial",
      items: [
        {
          id: 1,
          quote: "AOA Global Services overhauled our operational architecture in under six months. Their capability to execute directly on the ground and commit to the bottom-line financial outcome far exceeded any traditional consulting firm we have engaged.",
          author: "Guillermo Mendoza",
          role: "Chief Operating Officer",
          company: "Vanguard Industrial Group"
        },
        {
          id: 2,
          quote: "The analytical speed and executive alignment they delivered allowed us to consolidate three cross-border subsidiaries without operational downtime or margin erosion.",
          author: "Elena Rostova",
          role: "VP of Corporate Strategy",
          company: "Nordic Logistics Alliance"
        },
        {
          id: 3,
          quote: "They did not deliver a theoretical 200-page slide deck; they designed the operational solution, coached our leadership, and remained engaged until validating our first $12M in recurring savings.",
          author: "Marcus Thorne",
          role: "Managing Partner",
          company: "Apex Capital Partners"
        }
      ]
    },
    process: {
      eyebrow: "Execution Methodology",
      title: "A disciplined five-phase framework for operational excellence.",
      description: "From quantitative discovery to final capability handover, every phase features verifiable milestones and governance checkpoints.",
      deliverablesLabel: "Deliverables:",
      steps: [
        {
          number: "01",
          name: "Discover",
          subtitle: "Strategic Immersion & Alignment",
          description: "We evaluate the corporate context, executive objectives, and market dynamics to establish quantifiable success targets.",
          deliverables: ["Key stakeholder interviews", "Preliminary capability audit", "Scope definition and target KPIs"]
        },
        {
          number: "02",
          name: "Diagnose",
          subtitle: "Quantitative Diagnostic & Gap Audit",
          description: "We analyze operational data, process workflows, and cost structures to identify critical friction points and value opportunities.",
          deliverables: ["As-is workflow mapping", "Variance & bottleneck analytics", "Technical and financial feasibility study"]
        },
        {
          number: "03",
          name: "Design",
          subtitle: "Solution Architecture & Roadmap",
          description: "We design target operating models, select appropriate technology platforms, and build a milestone-driven implementation roadmap.",
          deliverables: ["To-be process blueprints", "Investment business case & ROI model", "Execution schedule and RACI matrix"]
        },
        {
          number: "04",
          name: "Deploy",
          subtitle: "Controlled Execution & Change Management",
          description: "We roll out solutions in controlled phases alongside internal teams, ensuring organizational adoption and business continuity.",
          deliverables: ["Pilot testing & field validation", "Executive training & capability transfer", "Standard operating procedures (SOPs)"]
        },
        {
          number: "05",
          name: "Scale",
          subtitle: "Enterprise Scaling & Governance",
          description: "We deploy the validated solution across global units, implement continuous analytics dashboards, and transfer governance to the client.",
          deliverables: ["Real-time executive oversight dashboards", "90/180-day audit checkpoints", "Continuous optimization framework"]
        }
      ]
    },
    ctaBand: {
      eyebrow: "Initiate Your Transformation",
      title: "Let us discuss your organization's critical strategic priorities.",
      description: "Schedule a confidential preliminary diagnostic session to assess project scope, feasibility, and projected ROI.",
      primaryBtn: "Schedule Advisory Session",
      reassurance: "Response within 24 business hours. Handled under strict Non-Disclosure Agreement (NDA)."
    },
    footer: {
      brandTagline: "Strategic advisory, process optimization, and enterprise transformation for high-performance global organizations.",
      linkedin: "Institutional LinkedIn",
      servicesTitle: "Practices",
      companyTitle: "Company",
      hqTitle: "Global Headquarters",
      allRightsReserved: "All rights reserved.",
      servicesLinks: [
        { label: "Corporate Strategy", href: "/services#estrategia-corporativa" },
        { label: "Operational Excellence", href: "/services#optimizacion-procesos" },
        { label: "Digital Transformation", href: "/services#transformacion-digital" },
        { label: "Risk & Governance", href: "/services#gestion-riesgos" },
        { label: "Global Expansion", href: "/services#expansion-internacional" },
        { label: "Change Management", href: "/services#gestion-cambio" }
      ],
      companyLinks: [
        { label: "About Us", href: "/about" },
        { label: "Methodology", href: "/about#metodologia" },
        { label: "Case Studies", href: "/#casos" },
        { label: "Contact", href: "/contact" }
      ],
      legalLinks: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Compliance & Security", href: "/compliance" }
      ]
    },
    about: {
      eyebrow: "Our Practice",
      title: "Executive Advisory Grounded in Verifiable Outcomes",
      subtitle: "Established to provide an agile, analytical, and committed alternative to the bureaucratic overhead of legacy multinational consultancies.",
      philosophyEyebrow: "Our Philosophy",
      philosophyTitle: "A pragmatic approach connecting board strategy with frontline plant execution.",
      philosophyP1: "At AOA Global Services, we believe the sharpest strategy is worthless if it cannot be executed flawlessly in day-to-day operations. Our engagements span from board-level conceptualization to standard operating protocols on the floor.",
      philosophyP2: "We work alongside boards of directors, chief executives, and private equity funds across North America and Europe, optimizing mission-critical operations, managing complex reorganizations, and structuring global market expansion.",
      imageBadge: "Executive Leadership in Action",
      infraEyebrow: "Infrastructure & Operating Hubs",
      infraTitle: "Executive presence in key global business hubs",
      principlesEyebrow: "Core Operating Principles",
      principlesTitle: "Guiding principles governing every client engagement",
      principles: [
        {
          title: "Quantitative Rigor",
          description: "Every strategic recommendation is grounded in robust financial modeling and empirical operational data."
        },
        {
          title: "Direct Senior Involvement",
          description: "Founding partners and senior advisors participate directly in every working session and strategic milestone."
        },
        {
          title: "Independence & Integrity",
          description: "We guarantee absolute professional objectivity, aligning our guidance exclusively with the client's long-term value."
        },
        {
          title: "Capability Transfer",
          description: "Our objective is to strengthen internal client capabilities so growth is sustained without external reliance."
        }
      ],
      photos: [
        {
          url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
          caption: "Strategic Modeling & Advisory Center",
          location: "San Francisco"
        },
        {
          url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80",
          caption: "Board Governance & Oversight Session",
          location: "New York"
        },
        {
          url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
          caption: "Executive Leadership Alignment",
          location: "London"
        }
      ]
    },
    contact: {
      eyebrow: "Corporate Inquiries",
      title: "Initiate a Confidential Discussion",
      subtitle: "Complete the inquiry form to schedule an initial diagnostic discussion with our managing partners.",
      formTitle: "Executive Advisory Inquiry Form",
      formRequiredNote: "All fields marked with an asterisk (*) are required.",
      fullNameLabel: "Full Name *",
      fullNamePlaceholder: "e.g. Robert Vance",
      fullNameRequired: "Please enter your full name",
      emailLabel: "Corporate Email *",
      emailPlaceholder: "e.g. rvance@enterprise.com",
      emailRequired: "Please enter your corporate email",
      emailInvalid: "Please enter a valid email address",
      companyLabel: "Company / Organization *",
      companyPlaceholder: "e.g. Vance Global Industries Ltd.",
      companyRequired: "Please enter your organization name",
      serviceLabel: "Primary Practice of Interest *",
      servicePlaceholder: "-- Select practice --",
      serviceRequired: "Please select an advisory practice",
      serviceGeneralOption: "General Strategic Assessment",
      messageLabel: "Project Scope & Context Summary *",
      messagePlaceholder: "Briefly outline current operational context, expected objectives, and anticipated timeline...",
      messageRequired: "Please provide a brief project summary",
      messageMinLength: "Message must contain at least 15 characters",
      submitBtn: "Submit Confidential Request",
      submittingBtn: "Submitting request...",
      successMessage: "Thank you for contacting AOA Global Services. A managing partner will respond within 24 business hours.",
      errorMessage: "An error occurred while submitting your request. Please contact us directly at contact@aoaglobalservices.com",
      disclaimer: "Your information is protected under strict professional confidentiality and trade secret standards.",
      directContactTitle: "Direct Channels",
      directContactSubtitle: "For immediate assistance or to share documentation under prior mutual NDA:",
      emailTitle: "Institutional Email",
      phoneTitle: "Executive Line",
      hqTitle: "Global Headquarters",
      hoursTitle: "Business Hours",
      hoursP1: "Monday to Friday: 08:30 – 18:30 (PST / EST / CET)",
      hoursP2: "Crisis committee response available 24/7 for clients with active advisory mandates."
    },
    seo: {
      homeTitle: "AOA Global Services | Strategic & Operational Management Consulting",
      homeDesc: "AOA Global Services provides executive strategy, process optimization, and corporate transformation for high-performance global organizations.",
      servicesTitle: "Practices & Services | AOA Global Services",
      servicesDesc: "Explore our 6 management consulting practices spanning corporate strategy, operational excellence, digital transformation, and risk governance.",
      aboutTitle: "About Us | AOA Global Services",
      aboutDesc: "Meet the executive leadership, principles, and strategic methodology behind AOA Global Services.",
      contactTitle: "Contact Us | AOA Global Services",
      contactDesc: "Initiate a confidential discussion with our managing partners. Schedule a preliminary strategic diagnostic for your enterprise."
    }
  }
};
