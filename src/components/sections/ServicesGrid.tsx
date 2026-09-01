import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { SpotlightCard } from '../ui/SpotlightCard';
import { services } from '../../data/services';
import { ArrowRight } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  return (
    <Section tone="paper" id="servicios">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start mb-12 max-w-2xl"
      >
        <Eyebrow tone="navy" className="mb-3">
          Nuestras Capacidades
        </Eyebrow>
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl md:text-4xl">
          Especialidades de consultoría diseñadas para generar valor mensurable.
        </h2>
        <p className="mt-4 text-base text-[var(--color-slate)] leading-relaxed">
          Abordamos desafíos estratégicos y operacionales con rigor metodológico, enfoque cuantitativo e implementación en el terreno.
        </p>
      </motion.div>

      {/* Grid with SpotlightCard, imagery header, and staggered entrance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 24,
              delay: index * 0.08
            }}
          >
            <SpotlightCard className="h-full flex flex-col justify-between group p-0 overflow-hidden">
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-[var(--color-line)]">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                    width={400}
                    height={225}
                  />
                  <div className="absolute top-3 left-3 bg-[var(--color-navy)] text-white text-[0.65rem] font-bold px-2.5 py-1 rounded-[var(--radius-btn)] uppercase tracking-wider">
                    0{index + 1}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[var(--color-navy)] text-[0.65rem] font-bold px-2 py-0.5 rounded-[var(--radius-btn)] border border-[var(--color-line)]">
                    {service.metrics}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2.5 leading-snug group-hover:text-[var(--color-navy)] transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[var(--color-slate)] mb-5 leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="space-y-1.5 mb-2">
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-slate)]">
                      Entregables Clave:
                    </p>
                    <ul className="space-y-1 text-xs text-[var(--color-ink)]">
                      {service.deliverables.slice(0, 2).map((item, dIndex) => (
                        <li key={dIndex} className="flex items-start gap-1.5">
                          <span className="text-[var(--color-navy)] font-bold">—</span>
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-[var(--color-line)]/50 mt-auto">
                <Link
                  to={`/services#${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-navy)] uppercase tracking-wider transition-all duration-200 group-hover:translate-x-1"
                >
                  Detalle del servicio <ArrowRight size={14} />
                </Link>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
