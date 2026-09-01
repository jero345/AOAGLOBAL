export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  deliverables: string[];
  metrics: string;
  imageUrl: string;
}

export const services: Service[] = [
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
];
