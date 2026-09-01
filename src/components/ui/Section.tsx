import React from 'react';

export type SectionTone = 'paper' | 'line' | 'navy';

export interface SectionProps {
  tone?: SectionTone;
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
  tone = 'paper',
  children,
  id,
  className = '',
  containerClassName = ''
}) => {
  const toneClasses: Record<SectionTone, string> = {
    paper: 'bg-[var(--color-paper)] text-[var(--color-slate)]',
    line: 'bg-[var(--color-line)] text-[var(--color-slate)]',
    navy: 'bg-[var(--color-navy)] text-white'
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-30 ${toneClasses[tone]} ${className}`}
    >
      <div className={`mx-auto max-w-[1200px] px-6 md:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
