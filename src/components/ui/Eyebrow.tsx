import React from 'react';

export interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  tone?: 'slate' | 'navy' | 'white';
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  className = '',
  tone = 'slate'
}) => {
  const toneClasses = {
    slate: 'text-[var(--color-slate)]',
    navy: 'text-[var(--color-navy)]',
    white: 'text-[var(--color-line)]'
  };

  return (
    <span
      className={`inline-block text-[0.75rem] font-semibold uppercase tracking-[0.08em] ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
};
