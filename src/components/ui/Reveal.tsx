import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** true = anima al montar (hero). false = anima al entrar en viewport. */
  immediate?: boolean;
  as?: 'div' | 'li' | 'article';
  /** Con immediate: false mantiene el estado inicial hasta que pase a true (p. ej. tras la cortina) */
  play?: boolean;
}

/**
 * Entrada sutil al scroll. Sin blur ni retrasos largos: el contenido no espera.
 * Con prefers-reduced-motion el contenido se muestra directamente.
 */
export const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0, immediate = false, as = 'div', play = true }) => {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const hidden = { opacity: 0, y: 16 };
  const animate = { opacity: 1, y: 0 };
  return (
    <Comp
      initial={hidden}
      {...(immediate ? { animate: play ? animate : hidden } : { whileInView: animate })}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
};
