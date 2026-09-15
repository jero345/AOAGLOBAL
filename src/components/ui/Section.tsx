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
    paper: 'bg-paper text-slate',
    line: 'bg-mist text-slate',
    navy: 'bg-navy text-white'
  };

  return (
    <section
      id={id}
      className={`scroll-mt-20 py-12 md:py-20 ${toneClasses[tone]} ${className}`}
    >
      <div className={`mx-auto max-w-[1200px] px-6 md:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
