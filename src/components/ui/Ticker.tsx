import React from 'react';

interface TickerProps {
  items: string[];
  className?: string;
}

/**
 * Cinta continua (CSS puro, sin JS por frame). Se duplica la lista para el bucle.
 * Con prefers-reduced-motion se detiene (ver index.css).
 */
export const Ticker: React.FC<TickerProps> = ({ items, className = '' }) => {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden border-y border-line bg-navy text-white ${className}`} aria-hidden>
      <ul className="ticker flex w-max items-center gap-10 py-3 pr-10 text-xs font-semibold uppercase tracking-[0.12em] whitespace-nowrap">
        {row.map((item, i) => (
          <li key={i} className="flex items-center gap-10">
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </li>
        ))}
      </ul>
    </div>
  );
};
