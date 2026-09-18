import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useChapters } from './chapters';
import { useActiveSection } from '../../lib/useActiveSection';

/**
 * Índice de la "propuesta": los seis capítulos justo debajo de la portada.
 * Escritorio: una franja de seis columnas que marca el capítulo en pantalla.
 * Móvil: lista compacta en dos columnas (no fija: no roba pantalla al leer).
 */
export const ChapterIndex: React.FC = () => {
  const chapters = useChapters();
  const reduce = useReducedMotion();
  const active = useActiveSection(chapters.map((c) => c.id));

  return (
    <div className="border-b border-line bg-paper">
      <ol className="mx-auto grid max-w-[1200px] grid-cols-2 px-6 md:px-8 lg:grid-cols-6">
        {chapters.map((c, i) => {
          const isActive = active === c.id;
          return (
            <motion.li
              key={c.id}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-line odd:border-r lg:border-b-0 lg:border-l lg:odd:border-r-0 lg:first:border-l-0 [&:nth-last-child(-n+2)]:border-b-0"
            >
              <a
                href={`#${c.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`group/idx relative flex h-full flex-col gap-1 px-3 py-3.5 transition-colors duration-200 hover:bg-mist lg:gap-1.5 lg:px-4 lg:py-4
                  after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-navy
                  after:transition-transform after:duration-300 after:ease-[var(--ease-out-expo)]
                  ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`}
              >
                <span className={`flex items-center gap-1.5 text-xs font-bold tabular-nums ${isActive ? 'text-navy' : 'text-slate'}`}>
                  {c.number}
                  <ArrowDown
                    size={12}
                    aria-hidden
                    className="opacity-0 transition-[opacity,translate] duration-200 ease-[var(--ease-out-quart)] group-hover/idx:translate-y-0.5 group-hover/idx:opacity-100"
                  />
                </span>
                <span className={`text-[0.8125rem] font-semibold leading-snug ${isActive ? 'text-ink' : 'text-navy'}`}>{c.label}</span>
              </a>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
};
