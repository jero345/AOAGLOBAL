import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** true = anima al montar (hero). false = anima al entrar en viewport. */
  immediate?: boolean;
  as?: 'div' | 'li' | 'article';
}

/** Entrada sutil al scroll. Sin blur ni retrasos largos: el contenido no espera. */
export const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0, immediate = false, as = 'div' }) => {
  const Comp = motion[as];
  const animate = { opacity: 1, y: 0 };
  return (
    <Comp
      initial={{ opacity: 0, y: 16 }}
      {...(immediate ? { animate } : { whileInView: animate })}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
};
