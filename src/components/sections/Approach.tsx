import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

/** Nuestro enfoque: comprender → diseñar → implementar. La metodología se explica solo aquí. */
export const Approach: React.FC = () => {
  const { t } = useTranslation('approach');
  const reduce = useReducedMotion();

  return (
    <Section tone="paper" id="approach">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} />

      <div className="relative mt-8 md:mt-12">
        <motion.div
          aria-hidden
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 hidden h-0.5 w-full origin-left bg-navy md:block"
        />

        <ol className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
          {t.steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={0.2 + i * 0.12} className="relative flex gap-4 border-t-2 border-navy pt-4 md:block md:pt-6">
              <motion.span
                initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.3 + i * 0.12 }}
                className="absolute -top-[9px] left-0 hidden h-4 w-4 rounded-full border-[3px] border-paper bg-accent md:block"
                aria-hidden
              />
              <span className="text-2xl font-bold text-accent-hover tabular-nums md:text-3xl">{step.number}</span>
              <div>
                <h3 className="text-base font-bold uppercase tracking-[0.04em] text-ink md:mt-3 md:text-h3">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate md:mt-2">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <Reveal className="mt-8 border-l-4 border-accent pl-4 md:mt-10">
        <p className="text-base font-semibold text-ink">{t.closing}</p>
      </Reveal>
    </Section>
  );
};
