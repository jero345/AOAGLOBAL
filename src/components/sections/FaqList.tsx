import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FaqListProps {
  items: Array<{ q: string; a: string }>;
  /** Prefijo de ids (varias listas pueden convivir en una página) */
  id: string;
  tone?: 'light' | 'dark';
}

/** Acordeón accesible: todas las preguntas cerradas al inicio, una abierta a la vez. */
export const FaqList: React.FC<FaqListProps> = ({ items, id, tone = 'light' }) => {
  const [open, setOpen] = useState<number | null>(null);
  const dark = tone === 'dark';

  return (
    <ul className={`divide-y border-y ${dark ? 'divide-white/15 border-white/15' : 'divide-line border-line'}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const key = `${id}-${i}`;
        return (
          <li key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`${key}-panel`}
                id={`${key}-button`}
                className={`flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-base font-semibold transition-colors duration-200 md:py-5 ${
                  dark ? 'text-white hover:text-accent' : 'text-ink hover:text-navy'
                }`}
              >
                {item.q}
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }} className="shrink-0 text-accent-hover">
                  <Plus size={20} aria-hidden />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${key}-panel`}
                  role="region"
                  aria-labelledby={`${key}-button`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className={`max-w-2xl pb-4 text-sm leading-relaxed md:pb-5 ${dark ? 'text-white/75' : 'text-slate'}`}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
};
