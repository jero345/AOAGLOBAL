import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

/** Preguntas frecuentes: acordeón accesible, todas cerradas al inicio. */
export const Faq: React.FC = () => {
  const { language, t } = useTranslation('faq');
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section tone="line" id="faq">
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-10">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} />

        <Reveal>
          <ul className="divide-y divide-line border-y border-line" key={language}>
            {t.items.map((item, i) => {
              const isOpen = open === i;
              const id = `faq-${i}`;
              return (
                <li key={item.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`${id}-panel`}
                      id={`${id}-button`}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-ink cursor-pointer hover:text-navy md:py-5"
                    >
                      {item.q}
                      <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }} className="shrink-0 text-accent-hover">
                        <Plus size={20} aria-hidden />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${id}-panel`}
                        role="region"
                        aria-labelledby={`${id}-button`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 text-sm leading-relaxed text-slate max-w-2xl md:pb-5">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
};
