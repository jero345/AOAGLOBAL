import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

/** Bloque 2: el lector se reconoce en el problema antes de ver la solución. */
export const Diagnosis: React.FC = () => {
  const { t } = useTranslation('diagnosis');
  const reduce = useReducedMotion();

  return (
    <Section tone="line" id="diagnosis">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.intro} />

      <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((item, i) => (
          <motion.li
            key={item.problem}
            initial={reduce ? false : { opacity: 0, x: i % 2 === 0 ? -24 : 24, y: 12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduce ? undefined : { y: -4 }}
            className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-paper p-6 transition-colors duration-200 hover:border-accent"
          >
            <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-btn)] bg-mist text-accent-hover transition-colors duration-200 group-hover:bg-accent group-hover:text-navy">
              <motion.span
                aria-hidden
                className="flex"
                whileHover={reduce ? undefined : { rotate: [0, -12, 12, 0], transition: { duration: 0.5 } }}
              >
                <AlertTriangle size={18} />
              </motion.span>
            </span>
            <h3 className="text-h3 text-ink">{item.problem}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{item.cost}</p>
            <span aria-hidden className="mt-5 h-0.5 w-8 bg-line transition-all duration-300 group-hover:w-full group-hover:bg-accent" />
          </motion.li>
        ))}
      </ul>

      <Reveal className="mt-12 border-l-4 border-accent pl-5">
        <p className="text-lg font-semibold text-ink max-w-3xl">{t.transition}</p>
      </Reveal>
    </Section>
  );
};
