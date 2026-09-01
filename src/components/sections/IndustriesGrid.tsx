import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import {
  Landmark,
  Activity,
  Factory,
  Cpu,
  ShoppingBag,
  Zap,
  Truck,
  Radio,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  Activity,
  Factory,
  Cpu,
  ShoppingBag,
  Zap,
  Truck,
  Radio
};

export const IndustriesGrid: React.FC = () => {
  const { language, t } = useTranslation('industries');

  return (
    <Section tone="line">
      <motion.div
        key={language}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start mb-12 max-w-2xl"
      >
        <Eyebrow tone="navy" className="mb-3">
          {t.eyebrow}
        </Eyebrow>
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl md:text-4xl">
          {t.title}
        </h2>
        <p className="mt-4 text-base text-[var(--color-slate)] leading-relaxed">
          {t.description}
        </p>
      </motion.div>

      {/* 8 immersive visual cards with image zoom & hover overlay */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {t.items.map((ind, index) => {
          const Icon = iconMap[ind.iconName];
          return (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 24,
                delay: index * 0.06
              }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-ink)] text-white shadow-xs transition-colors duration-300 hover:border-[var(--color-navy)] min-h-[280px] flex flex-col justify-between p-6 cursor-pointer"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 z-0">
                <img
                  src={ind.imageUrl}
                  alt={ind.name}
                  className="h-full w-full object-cover grayscale contrast-125 opacity-40 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-50"
                  loading="lazy"
                  width={400}
                  height={300}
                />
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-navy)]/80 to-transparent" />
              </div>

              {/* Card Content (z-10) */}
              <div className="relative z-10 flex flex-col items-start">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-btn)] bg-white/10 text-white backdrop-blur-xs transition-colors duration-300 group-hover:bg-white group-hover:text-[var(--color-navy)]">
                  {Icon ? <Icon size={20} strokeWidth={1.75} /> : null}
                </div>
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-white transition-colors">
                  {ind.name}
                </h3>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/15 mt-auto">
                <p className="text-xs text-[var(--color-line)] leading-relaxed line-clamp-3">
                  {ind.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
