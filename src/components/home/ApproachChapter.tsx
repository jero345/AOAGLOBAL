import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from '../../context/LanguageContext';
import { Chapter } from './Chapter';
import { Reveal } from '../ui/Reveal';
import { TextReveal } from '../ui/TextReveal';

/** 02 · Nuestro enfoque: comprender → diseñar → implementar, y la línea de cierre como cita. */
export const ApproachChapter: React.FC<{ number: string; label: string }> = ({ number, label }) => {
  const { t } = useTranslation('approach');
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <Chapter id="approach" number={number} label={label} title={t.title} tone="mist">
      <div className="relative">
        {/* La línea del método se dibuja de izquierda a derecha; cada paso "aterriza" sobre ella */}
        <motion.div
          aria-hidden
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease }}
          className="absolute left-0 top-0 hidden h-px w-full origin-left bg-navy md:block"
        />

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {t.steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={0.25 + i * 0.15} className="relative flex gap-5 border-t border-navy pt-5 md:block md:border-t-0 md:pt-8">
              <motion.span
                aria-hidden
                initial={reduce ? false : { scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 320, damping: 18, delay: 0.35 + i * 0.15 }}
                className="absolute -top-[7px] left-0 hidden h-3.5 w-3.5 rounded-full border-2 border-mist bg-accent md:block"
              />
              <span className="text-sm font-bold tabular-nums text-navy md:text-base">{step.number}</span>
              <div>
                <h3 className="text-xl font-bold text-ink md:mt-3 md:text-2xl md:tracking-[-0.01em]">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Cierre: una sola línea, en grande, con una regla dorada corta que se dibuja antes */}
      <div className="mt-14 md:mt-20">
        <motion.span
          aria-hidden
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease }}
          className="block h-0.5 w-14 origin-left bg-accent"
        />
        <TextReveal as="p" text={t.closing} delay={0.2} className="mt-6 max-w-3xl text-2xl font-bold leading-snug tracking-[-0.01em] text-navy md:text-[2rem]" />
      </div>
    </Chapter>
  );
};
