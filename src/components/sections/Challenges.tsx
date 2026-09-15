import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Workflow, Unplug, Compass } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';

const icons = [Workflow, Unplug, Compass];

/** Desafíos de negocio: tres situaciones, sin introducción ni cierre. */
export const Challenges: React.FC = () => {
  const { t } = useTranslation('challenges');
  const reduce = useReducedMotion();

  return (
    <Section tone="line" id="challenges">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} />

      <ul className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
        {t.items.map((item, i) => {
          const Icon = icons[i] ?? Compass;
          return (
            <motion.li
              key={item.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="group flex flex-row items-start gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-4 transition-colors duration-200 hover:border-accent md:flex-col md:gap-0 md:p-6"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-btn)] bg-mist text-accent-hover transition-colors duration-200 group-hover:bg-accent group-hover:text-navy md:mb-4">
                <Icon size={18} aria-hidden />
              </span>
              <div className="flex min-w-0 flex-col">
                <p className="text-eyebrow font-bold tracking-[0.08em] text-accent-hover md:mb-1">0{i + 1}</p>
                <h3 className="text-base font-bold leading-snug text-ink md:text-h3">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate md:mt-2">{item.text}</p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
};
