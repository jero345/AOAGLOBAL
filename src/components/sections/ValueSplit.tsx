import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { Divider } from '../ui/Divider';
import { Button } from '../ui/Button';

export const ValueSplit: React.FC = () => {
  const pillars = [
    {
      title: "Socios Ejecutivos en el Terreno",
      description: "No delegamos proyectos en equipos junior. Cada diagnóstico e implementación es liderada directamente por socios directivos con más de una década de experiencia en alta dirección."
    },
    {
      title: "Rigor Cuantitativo y Retorno de Inversión",
      description: "Rechazamos las recomendaciones genéricas. Cada propuesta parte de modelos financieros precisos, análisis de varianza y métricas de impacto económico verificables."
    },
    {
      title: "Transferencia Total de Capacidades",
      description: "No creamos dependencias permanentes. Diseñamos la gobernanza, formamos a sus equipos y establecemos protocolos para que la organización opere de forma autónoma."
    }
  ];

  return (
    <Section tone="navy">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left Column: Mission statement */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-start space-y-6"
        >
          <Eyebrow tone="white">
            Por Qué AOA Global Services
          </Eyebrow>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl leading-tight">
            Consultoría de alta dirección sin la fricción de las firmas tradicionales.
          </h2>

          <p className="text-base text-[var(--color-line)] leading-relaxed">
            Combinamos la profundidad analítica y los estándares metodológicos de las firmas globales con la agilidad, cercanía ejecutiva y foco pragmático que demandan las empresas modernas.
          </p>

          <div className="pt-2">
            <Button variant="inverse" href="/about">
              Conocer Nuestra Firma
            </Button>
          </div>
        </motion.div>

        {/* Right Column: 3 Pillars with staggered reveal */}
        <div className="lg:col-span-7 flex flex-col">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col group"
            >
              {index > 0 && <Divider tone="navy-line" className="my-8" />}
              <div className="space-y-3 pl-0 transition-transform duration-200 group-hover:translate-x-1.5">
                <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[var(--color-line)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
