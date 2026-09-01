import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export const Metrics: React.FC = () => {
  const metricsData = [
    {
      prefix: "$",
      value: 450,
      suffix: "M+",
      label: "Valor Generado",
      detail: "En eficiencias operativas, reducción de costos y expansión de ingresos."
    },
    {
      prefix: "",
      value: 85,
      suffix: "+",
      label: "Proyectos Ejecutados",
      detail: "Implementaciones corporativas concluidas dentro de plazo y presupuesto."
    },
    {
      prefix: "",
      value: 14,
      suffix: "",
      label: "Mercados Globales",
      detail: "Presencia y capacidad de despliegue en América del Norte, Latam y Europa."
    },
    {
      prefix: "",
      value: 98,
      suffix: "%",
      label: "Tasa de Satisfacción",
      detail: "Clientes que extienden mandatos o nos recomiendan a sus comités directivos."
    }
  ];

  return (
    <Section tone="paper" className="border-b border-[var(--color-line)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)] block mb-2">
          Impacto Verificable
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl">
          Resultados que respaldan nuestra metodología.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-line)] border border-[var(--color-line)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-paper)]">
        {metricsData.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 text-center sm:text-left flex flex-col justify-between hover:bg-slate-50/60 transition-colors duration-200"
          >
            <div>
              <span className="block text-4xl sm:text-5xl font-bold text-[var(--color-navy)] tracking-tight mb-2">
                <AnimatedCounter
                  to={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  duration={2}
                />
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-ink)] mb-2">
                {item.label}
              </h3>
            </div>
            <p className="text-xs text-[var(--color-slate)] leading-relaxed mt-2">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
