import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export type ButtonVariant = 'accent' | 'primary' | 'outline' | 'inverse';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
  /** Nombre del evento de analítica (cta_click) — ver lib/analytics.ts */
  track?: string;
}

const baseClasses =
  'relative inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] px-7 py-3.5 text-sm font-semibold transition-colors duration-200 cursor-pointer text-center select-none';

const variantClasses: Record<ButtonVariant, string> = {
  // Acento: reservado para la acción principal de cada bloque
  accent: 'bg-accent text-navy hover:bg-accent-hover focus-visible:outline-navy',
  primary: 'bg-navy text-white hover:bg-ink focus-visible:outline-accent',
  outline: 'border border-navy text-navy hover:bg-navy hover:text-white focus-visible:outline-accent',
  inverse: 'bg-white text-navy hover:bg-line focus-visible:outline-accent'
};

const spring = { type: 'spring', stiffness: 400, damping: 20 } as const;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  children,
  className = '',
  isExternal = false,
  track,
  ...props
}) => {
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    const isAnchor = href.startsWith('#');
    const isOutbound = isExternal || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

    if (isAnchor || isOutbound) {
      return (
        <motion.a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={combinedClasses}
          data-track={track}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={spring}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={spring} className="inline-block">
        <Link to={href} className={combinedClasses} data-track={track}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={combinedClasses}
      data-track={track}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={spring}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
