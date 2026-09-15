import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';

/**
 * Bloque 3: requerimiento → propuesta → ejecución, y el modelo de trabajo
 * "Una sola dirección. Capacidades integradas." (sin países ni ubicaciones).
 */
export const HowItWorks: React.FC = () => {
  const { t } = useTranslation('howItWorks');
  const reduce = useReducedMotion();

  return (
    <Section tone="paper" id="how-it-works">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} />

      <div className="relative mt-12">
        <motion.div
          aria-hidden
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 hidden h-0.5 w-full origin-left bg-navy md:block"
        />

        <ol className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={0.25 + i * 0.15} className="relative border-t-2 border-navy pt-6 md:border-t-0">
              <motion.span
                initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.3 + i * 0.15 }}
                className="absolute -top-[9px] left-0 hidden h-4 w-4 rounded-full border-[3px] border-paper bg-accent md:block"
                aria-hidden
              />
              <span className="text-3xl font-bold text-accent-hover tabular-nums">{step.number}</span>
              <h3 className="mt-3 text-h3 text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Modelo de trabajo: capacidades integradas bajo una sola dirección */}
      <Reveal className="mt-14 overflow-hidden rounded-[var(--radius-card)] bg-navy text-white">
        <div className="grid lg:grid-cols-[3fr_2fr]">
          <div className="flex flex-col justify-center gap-6 p-8 md:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <Layers size={22} aria-hidden />
            </span>
            <div className="space-y-3">
              <h3 className="text-h3 text-white">{t.model.title}</h3>
              {t.model.paragraphs.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-white/75 max-w-2xl">
                  {p}
                </p>
              ))}
            </div>
            <p className="border-l-2 border-accent pl-4 text-base font-semibold text-white">{t.model.highlight}</p>
            <Button variant="accent" href="#contact" track="model_cta" className="self-start">
              {t.model.cta} <ArrowRight size={16} aria-hidden />
            </Button>
          </div>

          <ul className="grid grid-cols-2 gap-2 p-2 lg:grid-cols-1">
            {t.model.capabilities.map((cap, i) => (
              <motion.li
                key={cap.label}
                initial={reduce ? false : { opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-btn)] lg:aspect-[16/7]"
              >
                <img
                  src={cap.image}
                  alt={cap.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/85 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-accent">{cap.label}</p>
                  <p className="text-xs font-medium text-white">{cap.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
};
