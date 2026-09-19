import React from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'accent' | 'primary' | 'outline' | 'inverse';
export type ButtonSize = 'md' | 'sm';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
  /** Nombre del evento de analítica (cta_click) — ver lib/analytics.ts */
  track?: string;
}

/**
 * Transiciones CSS (no JS): color en 200 ms, pulsación a scale(0.97) en 160 ms.
 * El icono de flecha (si lo hay) se desplaza 2px al pasar el cursor.
 */
const baseClasses =
  'group/btn relative inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] font-semibold cursor-pointer text-center select-none whitespace-nowrap ' +
  'transition-[background-color,color,border-color,transform] duration-200 ease-[var(--ease-out-quart)] active:scale-[0.97] active:duration-100 ' +
  'disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100 ' +
  '[&>svg]:transition-transform [&>svg]:duration-200 [&>svg]:ease-[var(--ease-out-quart)] hover:[&>svg]:translate-x-0.5';

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-7 py-3.5 text-sm',
  sm: 'px-4 py-2.5 text-xs'
};

const variantClasses: Record<ButtonVariant, string> = {
  // Acento: reservado para la acción principal de cada bloque
  accent: 'bg-accent text-white hover:bg-accent-hover focus-visible:outline-navy',
  primary: 'bg-navy text-white hover:bg-ink focus-visible:outline-accent',
  outline: 'border border-navy text-navy hover:bg-navy hover:text-white focus-visible:outline-accent',
  inverse: 'bg-white text-navy hover:bg-line focus-visible:outline-accent'
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  isExternal = false,
  track,
  ...props
}) => {
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    const isAnchor = href.startsWith('#');
    const isOutbound = isExternal || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

    if (isAnchor || isOutbound) {
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className={combinedClasses}
          data-track={track}
        >
          {children}
        </a>
      );
    }

    return (
      <Link to={href} className={combinedClasses} data-track={track}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={combinedClasses} data-track={track} {...props}>
      {children}
    </button>
  );
};
