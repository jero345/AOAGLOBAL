import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionTone } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { processSteps } from '../../data/process';

interface ProcessStepsProps {
  tone?: SectionTone;
  showEyebrow?: boolean;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({
  tone = 'paper',
  showEyebrow = true
}) => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <Section tone={tone} id="metodologia">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start mb-14 max-w-2xl"
      >
        {showEyebrow && (
          <Eyebrow tone="navy" className="mb-3">
            Metodología de Ejecución
          </Eyebrow>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl md:text-4xl">
          Un marco estructurado en cinco fases de alto rigor operacional.
        </h2>
        <p className="mt-4 text-base text-[var(--color-slate)] leading-relaxed">
          Desde el análisis de datos hasta la transferencia final, cada paso cuenta con entregables cuantificables y comités de control.
        </p>
      </motion.div>

      {/* 5-step interactive timeline */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
        {processSteps.map((step, index) => {
          const isCurrentActive = activeStep === step.number;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 300,
                damping: 24
              }}
              onMouseEnter={() => setActiveStep(step.number)}
              onMouseLeave={() => setActiveStep(null)}
              className={`flex flex-col justify-between pt-6 border-t-2 transition-all duration-300 ${
                isCurrentActive
                  ? 'border-[var(--color-navy)] bg-slate-50/70 p-4 -mt-4 rounded-[var(--radius-card)]'
                  : 'border-[var(--color-navy)]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-[var(--color-navy)] block">
                    {step.number}
                  </span>
                  <motion.div
                    animate={{ scale: isCurrentActive ? 1.2 : 1 }}
                    className="h-2 w-2 rounded-full bg-[var(--color-navy)]"
                  />
                </div>

                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-1">
                  {step.name}
                </h3>
                <p className="text-xs font-semibold text-[var(--color-slate)] mb-4">
                  {step.subtitle}
                </p>
                <p className="text-xs text-[var(--color-slate)] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="border-t border-[var(--color-line)] pt-3 mt-auto">
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-navy)] block mb-1.5">
                  Entregables:
                </span>
                <ul className="space-y-1 text-[0.7rem] text-[var(--color-ink)]">
                  {step.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className="text-[var(--color-navy)] font-bold">•</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
