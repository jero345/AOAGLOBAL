export interface Industry {
  id: string;
  name: string;
  description: string;
  iconName: 'Landmark' | 'Activity' | 'Factory' | 'Cpu' | 'ShoppingBag' | 'Zap' | 'Truck' | 'Radio';
  imageUrl: string;
}

export const industries: Industry[] = [
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
];
