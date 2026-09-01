import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonial: React.FC = () => {
  const { language, t } = useTranslation('testimonials');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Al cambiar de idioma reiniciamos el carrusel para evitar índices huérfanos
  useEffect(() => {
    setCurrentIndex(0);
  }, [language]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % t.items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + t.items.length) % t.items.length);
  };

  const current = t.items[currentIndex] ?? t.items[0];

  return (
    <Section tone="paper" className="border-t border-[var(--color-line)] overflow-hidden">
      <div className="mx-auto max-w-[780px] text-center">
        <span className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)] block mb-6">
          {t.eyebrow}
        </span>

        {/* Carousel Content Container */}
        <div className="min-h-[190px] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${language}-${current.id}`}
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
            aria-label={t.prevAria}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-slate)] transition-all duration-200 hover:border-[var(--color-navy)] hover:text-[var(--color-navy)] hover:scale-105 cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {t.items.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`${t.goToAria} ${idx + 1}`}
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
            aria-label={t.nextAria}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-slate)] transition-all duration-200 hover:border-[var(--color-navy)] hover:text-[var(--color-navy)] hover:scale-105 cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </Section>
  );
};
