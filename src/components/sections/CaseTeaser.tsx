import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const CaseTeaser: React.FC = () => {
  return (
    <Section tone="paper" id="casos">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Case Study Image with hover zoom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-line)] group">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
              alt="Operación industrial y logística optimizada por AOA Global Services"
              className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
              width={800}
              height={600}
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-[var(--color-navy)] px-3 py-1 text-white text-[0.65rem] font-bold uppercase tracking-wider rounded-[var(--radius-btn)]">
              Sector: Logística & Distribución
            </div>
          </div>
        </motion.div>

        {/* Right Column: Case Summary & Measurable Impact */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 flex flex-col items-start space-y-6"
        >
          <Eyebrow tone="navy">
            Caso de Estudio Destacado
          </Eyebrow>

          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl md:text-4xl leading-tight">
            Reestructuración operativa y optimización de cadena de suministro transfronteriza.
          </h2>

          <p className="text-sm text-[var(--color-slate)] leading-relaxed md:text-base">
            Un conglomerado multinacional con operaciones en 4 países requería rediseñar su modelo logístico para mitigar cuellos de botella arancelarios y reducir tiempos de entrega en un 30%.
          </p>

          {/* Results grid with animated counters */}
          <div className="grid grid-cols-2 gap-6 w-full py-4 border-y border-[var(--color-line)]">
            <div>
              <span className="block text-3xl font-bold text-[var(--color-navy)]">
                $<AnimatedCounter to={18.4} decimals={1} duration={2} />M
              </span>
              <span className="text-xs text-[var(--color-slate)] uppercase tracking-wider font-semibold">
                Ahorro anual en OPEX
              </span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-[var(--color-navy)]">
                -<AnimatedCounter to={42} duration={2} />%
              </span>
              <span className="text-xs text-[var(--color-slate)] uppercase tracking-wider font-semibold">
                Reducción de tiempos de ciclo
              </span>
            </div>
          </div>

          <div className="pt-2">
            <Button variant="primary" href="/contact">
              Evaluar un Proyecto Similar
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
