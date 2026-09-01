import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export type ButtonVariant = 'primary' | 'outline' | 'inverse';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  children,
  className = '',
  isExternal = false,
  ...props
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center rounded-[var(--radius-btn)] px-7 py-3.5 text-sm font-semibold transition-colors duration-200 cursor-pointer text-center select-none';

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-[var(--color-navy)] text-white hover:bg-[var(--color-ink)] focus-visible:outline-[var(--color-navy)]',
    outline: 'border border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white focus-visible:outline-[var(--color-navy)]',
    inverse: 'bg-white text-[var(--color-navy)] hover:bg-[var(--color-line)] focus-visible:outline-white'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (isExternal || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <motion.a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={combinedClasses}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className="inline-block"
      >
        <Link to={href} className={combinedClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={combinedClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
