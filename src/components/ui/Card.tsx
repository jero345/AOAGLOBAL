import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  tone?: 'paper' | 'line';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  tone = 'paper'
}) => {
  const bgClass = tone === 'paper' ? 'bg-[var(--color-paper)]' : 'bg-[var(--color-line)]';

  return (
    <div
      className={`${bgClass} border border-[var(--color-line)] rounded-[var(--radius-card)] p-8 transition-colors duration-200 hover:border-[var(--color-navy)] ${className}`}
    >
      {children}
    </div>
  );
};
