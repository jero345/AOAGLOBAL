import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Workflow, Database, Unplug, Eye, Layers, Compass } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

const icons = [Workflow, Database, Unplug, Eye, Layers, Compass];

/** Desafíos de negocio: seis situaciones + cierre (la respuesta no siempre es más tecnología). */
export const Challenges: React.FC = () => {
  const { t } = useTranslation('challenges');
  const reduce = useReducedMotion();

  return (
    <Section tone="line" id="challenges">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.intro} />

      <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((item, i) => {
          const Icon = icons[i] ?? Layers;
          return (
            <motion.li
              key={item.title}
              initial={reduce ? false : { opacity: 0, x: i % 2 === 0 ? -24 : 24, y: 12 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="group flex flex-row items-start gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-4 transition-colors duration-200 hover:border-accent md:flex-col md:gap-0 md:p-6"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-btn)] bg-mist text-accent-hover transition-colors duration-200 group-hover:bg-accent group-hover:text-navy md:mb-4">
                <Icon size={18} aria-hidden />
              </span>
              <div className="flex min-w-0 flex-col">
                <h3 className="text-base font-bold leading-snug text-ink md:text-h3">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate md:mt-2 md:text-sm">{item.text}</p>
                <span aria-hidden className="mt-4 hidden h-0.5 w-8 bg-line transition-all duration-300 group-hover:w-full group-hover:bg-accent md:mt-5 md:block" />
              </div>
            </motion.li>
          );
        })}
      </ul>

      <Reveal className="mt-12 max-w-3xl border-l-4 border-accent pl-5">
        <p className="text-lg font-semibold text-ink">{t.closing[0]}</p>
        {t.closing.slice(1).map((p) => (
          <p key={p} className="mt-2 text-base leading-relaxed text-slate">
            {p}
          </p>
        ))}
      </Reveal>
    </Section>
  );
};
