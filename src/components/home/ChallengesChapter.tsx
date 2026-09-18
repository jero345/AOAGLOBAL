import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from '../../context/LanguageContext';
import { Chapter } from './Chapter';
import { Rule } from '../ui/Rule';

/** 01 · Desafíos de negocio: tres situaciones como filas de una lista, no tarjetas. */
export const ChallengesChapter: React.FC<{ number: string; label: string }> = ({ number, label }) => {
  const { t } = useTranslation('challenges');
  const reduce = useReducedMotion();

  return (
    <Chapter id="challenges" number={number} label={label} title={t.title} tone="paper">
      <ol>
        {t.items.map((item, i) => {
          return (
            <li key={item.title}>
              <Rule delay={i * 0.1} />
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-3 py-6 md:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,1.3fr)] md:gap-x-8 md:py-8"
              >
                <span className="text-sm font-bold tabular-nums text-navy md:pt-1">0{i + 1}</span>
                <h3 className="text-xl font-bold leading-snug text-ink md:text-2xl md:tracking-[-0.01em]">{item.title}</h3>
                <p className="col-start-2 text-base leading-relaxed text-slate md:col-start-3 md:mt-1">{item.text}</p>
              </motion.div>
            </li>
          );
        })}
      </ol>
      <Rule delay={0.3} />
    </Chapter>
  );
};
