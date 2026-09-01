import React from 'react';

export interface DividerProps {
  className?: string;
  tone?: 'line' | 'navy-line' | 'dark-line';
}

export const Divider: React.FC<DividerProps> = ({
  className = '',
  tone = 'line'
}) => {
  const toneClasses = {
    line: 'border-[var(--color-line)]',
    'navy-line': 'border-white/15',
    'dark-line': 'border-white/10'
  };

  return <hr className={`w-full border-t ${toneClasses[tone]} ${className}`} />;
};
