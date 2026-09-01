import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../ui/Section';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    quote: "AOA Global Services transformó nuestra estructura operativa en menos de seis meses. Su capacidad para ejecutar sobre el terreno y comprometerse con el resultado financiero final superó ampliamente a cualquier consultora con la que hayamos trabajado.",
    author: "Guillermo Mendoza",
    role: "Director General de Operaciones",
    company: "Grupo Industrial Vanguard"
  },
  {
    id: 2,
    quote: "La precisión analítica y la velocidad con la que alinearon a nuestro equipo directivo permitieron consolidar la integración de tres subsidiarias transfronterizas sin interrumpir la operación ni perder margen.",
    author: "Elena Rostova",
    role: "Vicepresidenta de Estrategia Corporativa",
    company: "Nordic Logistics Alliance"
  },
  {
    id: 3,
    quote: "No nos presentaron un informe teórico de 200 páginas; diseñaron la solución técnica, formaron a nuestros gerentes y se quedaron hasta validar los primeros $12M en ahorros recurrentes.",
    author: "Marcus Thorne",
    role: "Managing Partner",
    company: "Apex Capital Partners"
  }
];

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <Section tone="paper" className="border-t border-[var(--color-line)] overflow-hidden">
      <div className="mx-auto max-w-[780px] text-center">
        <span className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)] block mb-6">
          Perspectiva Directiva
        </span>

        {/* Carousel Content Container */}
        <div className="min-h-[190px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <blockquote className="text-xl sm:text-2xl md:text-[28px] font-medium text-[var(--color-navy)] leading-snug tracking-tight">
                {current.quote}
              </blockquote>

              <div className="mt-8 flex flex-col items-center justify-center space-y-1">
                <p className="text-sm font-bold text-[var(--color-ink)]">
                  {current.author}
                </p>
                <p className="text-xs text-[var(--color-slate)] font-medium">
                  {current.role} — {current.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Controls & Indicator Pills */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Testimonio anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-slate)] transition-all duration-200 hover:border-[var(--color-navy)] hover:text-[var(--color-navy)] hover:scale-105 cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir al testimonio ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-[var(--color-navy)]'
                    : 'w-2 bg-[var(--color-line)] hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Siguiente testimonio"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-slate)] transition-all duration-200 hover:border-[var(--color-navy)] hover:text-[var(--color-navy)] hover:scale-105 cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </Section>
  );
};
