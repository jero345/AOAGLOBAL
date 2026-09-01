export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/services" },
  { label: "Nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" }
];

export const footerLinks = {
  services: [
    { label: "Estrategia Corporativa", href: "/services#estrategia-corporativa" },
    { label: "Eficiencia Operativa", href: "/services#optimizacion-procesos" },
    { label: "Transformación Digital", href: "/services#transformacion-digital" },
    { label: "Gestión de Riesgos", href: "/services#gestion-riesgos" },
    { label: "Expansión Global", href: "/services#expansion-internacional" },
    { label: "Gestión del Cambio", href: "/services#gestion-cambio" }
  ],
  company: [
    { label: "Sobre Nosotros", href: "/about" },
    { label: "Metodología", href: "/about#metodologia" },
    { label: "Casos de Éxito", href: "/#casos" },
    { label: "Contacto", href: "/contact" }
  ],
  legal: [
    { label: "Aviso de Privacidad", href: "/privacy" },
    { label: "Términos de Servicio", href: "/terms" },
    { label: "Seguridad y Cumplimiento", href: "/compliance" }
  ]
};

export const companyDetails = {
  name: "AOA Global Services LLC",
  phone: "+1 (800) 555-0199",
  email: "contact@aoaglobalservices.com",
  address: "100 Pine Street, Suite 1250, San Francisco, CA 94111",
  linkedin: "https://www.linkedin.com/company/aoa-global-services"
};
