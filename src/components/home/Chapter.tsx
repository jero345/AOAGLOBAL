import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TextReveal } from '../ui/TextReveal';
import { Reveal } from '../ui/Reveal';

export type ChapterTone = 'paper' | 'mist' | 'navy' | 'deep';

interface ChapterProps {
  id: string;
  /** Numeral del capítulo; sin él, el encabezado muestra solo la regla y el nombre */
  number?: string;
  /** Nombre del capítulo (eyebrow aprobado) */
  label: string;
  /** H2 del capítulo */
  title: string;
  intro?: string;
  tone?: ChapterTone;
  /** Contenido fijo bajo el numeral en escritorio (p. ej. la imagen de la solución activa) */
  aside?: React.ReactNode;
  /** Columna izquierda ancha (~40%) para que la imagen tenga peso real */
  wideAside?: boolean;
  children: React.ReactNode;
}

const tones: Record<ChapterTone, { section: string; numeral: string; rule: string; label: string; title: string; intro: string }> = {
  paper: { section: 'bg-paper', numeral: 'text-navy', rule: 'bg-accent', label: 'text-slate', title: 'text-ink', intro: 'text-slate' },
  mist: { section: 'bg-mist', numeral: 'text-navy', rule: 'bg-accent', label: 'text-slate', title: 'text-ink', intro: 'text-slate' },
  navy: { section: 'bg-navy', numeral: 'text-white', rule: 'bg-accent-light', label: 'text-accent-light', title: 'text-white', intro: 'text-white/75' },
  // Azul tirando a negro (el del footer): último capítulo
  deep: { section: 'bg-deep', numeral: 'text-white', rule: 'bg-accent-light', label: 'text-accent-light', title: 'text-white', intro: 'text-white/75' }
};

/**
 * Numeral grande que sube desde abajo, regla dorada que se dibuja y nombre del capítulo.
 * El disparador (whileInView) va en el contenedor: el numeral arranca desplazado dentro de
 * un recorte y, si se observara a sí mismo, nunca "entraría" en pantalla.
 */
const ChapterHead: React.FC<{ number?: string; label: string; tone: ChapterTone }> = ({ number, label, tone }) => {
  const reduce = useReducedMotion();
  const c = tones[tone];
  const ease = [0.16, 1, 0.3, 1] as const;
  const numeralClass = `block text-[3.25rem] font-bold leading-[0.9] tracking-[-0.03em] tabular-nums lg:text-[5rem] ${c.numeral}`;
  const labelClass = `text-eyebrow font-semibold uppercase tracking-[0.08em] ${c.label}`;

  if (reduce) {
    return (
      <div className="flex items-end gap-4 lg:block">
        {number && <span className={numeralClass}>{number}</span>}
        <span className={`flex flex-col gap-2 pb-1 lg:pb-0 ${number ? 'lg:mt-5' : ''}`}>
          <span aria-hidden className={`h-0.5 w-10 ${number ? 'hidden lg:block' : 'block'} ${c.rule}`} />
          <span className={labelClass}>{label}</span>
        </span>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex items-end gap-4 lg:block"
    >
      {number && (
        <span className="block overflow-hidden">
          <motion.span
            variants={{ hidden: { y: '100%' }, visible: { y: 0, transition: { duration: 0.7, ease } } }}
            className={numeralClass}
          >
            {number}
          </motion.span>
        </span>
      )}
      <span className={`flex flex-col gap-2 pb-1 lg:pb-0 ${number ? 'lg:mt-5' : ''}`}>
        <motion.span
          aria-hidden
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.25, ease } } }}
          className={`h-0.5 w-10 origin-left ${number ? 'hidden lg:block' : 'block'} ${c.rule}`}
        />
        <motion.span
          variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3, ease } } }}
          className={labelClass}
        >
          {label}
        </motion.span>
      </span>
    </motion.div>
  );
};

/**
 * Capítulo de la home: numeral y nombre fijos a la izquierda mientras el contenido
 * pasa (escritorio); en móvil el encabezado va arriba y el resto fluye.
 */
export const Chapter: React.FC<ChapterProps> = ({ id, number, label, title, intro, tone = 'paper', aside, wideAside = false, children }) => {
  const c = tones[tone];
  const grid = wideAside
    ? 'lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 xl:gap-20'
    : 'lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-20';
  return (
    <section id={id} className={`py-14 md:py-20 lg:py-28 ${c.section}`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className={`lg:grid ${grid}`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ChapterHead number={number} label={label} tone={tone} />
            {aside && <div className="mt-10 hidden lg:block">{aside}</div>}
          </div>

          <div className="mt-8 lg:mt-1">
            <TextReveal as="h2" text={title} className={`max-w-2xl text-3xl md:text-h2 xl:text-[2.75rem] xl:leading-[1.1] ${c.title}`} />
            {intro && (
              <Reveal delay={0.15}>
                <p className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${c.intro}`}>{intro}</p>
              </Reveal>
            )}
            <div className="mt-10 md:mt-14">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
