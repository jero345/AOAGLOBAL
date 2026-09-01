export interface ProcessStep {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
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
];
