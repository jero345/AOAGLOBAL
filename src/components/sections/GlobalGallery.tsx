import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';

interface GalleryItem {
  id: string;
  title: string;
  category: 'financiero' | 'industrial' | 'tech';
  categoryLabel: string;
  location: string;
  imageUrl: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
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
];

export const GlobalGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'financiero' | 'industrial' | 'tech'>('all');

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedFilter);

  return (
    <Section tone="paper" className="border-t border-[var(--color-line)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-xl">
          <Eyebrow tone="navy" className="mb-3">
            Presencia y Despliegue en Terreno
          </Eyebrow>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl md:text-4xl">
            Operaciones globales ejecutadas con precisión milimétrica.
          </h2>
        </div>

        {/* Filter Tabs with animated indicator */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'Todos los Frentes' },
            { id: 'financiero', label: 'Finanzas & Sede' },
            { id: 'industrial', label: 'Plantas & Logística' },
            { id: 'tech', label: 'Tecnología & Redes' }
          ].map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-[var(--radius-btn)] transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[var(--color-navy)] text-white'
                    : 'bg-slate-100 text-[var(--color-slate)] hover:bg-slate-200 hover:text-[var(--color-ink)]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated Image Mosaic Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-ink)] aspect-[4/3] flex flex-col justify-end p-6 cursor-pointer shadow-xs"
            >
              {/* Background Image with smooth zoom */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-75"
                loading="lazy"
                width={600}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-navy)]/60 to-transparent" />

              {/* Badges and Information Overlay */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-white/90 text-[var(--color-navy)] text-[0.65rem] font-bold px-2 py-0.5 rounded-[var(--radius-btn)] uppercase">
                    {item.location}
                  </span>
                  <span className="text-white/70 text-[0.65rem] font-medium uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug group-hover:text-slate-100 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[var(--color-line)] leading-relaxed line-clamp-2 opacity-90">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};
