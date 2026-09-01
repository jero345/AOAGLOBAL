import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';

type GalleryFilter = 'all' | 'financiero' | 'industrial' | 'tech';

export const GlobalGallery: React.FC = () => {
  const { language, t } = useTranslation('globalGallery');
  const [selectedFilter, setSelectedFilter] = useState<GalleryFilter>('all');

  const filters: Array<{ id: GalleryFilter; label: string }> = [
    { id: 'all', label: t.tabs.all },
    { id: 'financiero', label: t.tabs.financiero },
    { id: 'industrial', label: t.tabs.industrial },
    { id: 'tech', label: t.tabs.tech }
  ];

  const filteredItems = selectedFilter === 'all'
    ? t.items
    : t.items.filter((item) => item.category === selectedFilter);

  return (
    <Section tone="paper" className="border-t border-[var(--color-line)]">
      <div key={language} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-xl">
          <Eyebrow tone="navy" className="mb-3">
            {t.eyebrow}
          </Eyebrow>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl md:text-4xl">
            {t.title}
          </h2>
        </div>

        {/* Filter Tabs with animated indicator */}
        <div className="flex flex-wrap gap-2">
          {filters.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
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
