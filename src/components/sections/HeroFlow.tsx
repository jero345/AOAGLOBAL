import React from 'react';

interface HeroFlowProps {
  /** Segundos de espera antes de dibujar la línea (tras la cortina y el revelado de la foto) */
  delay?: number;
  className?: string;
}

/** Ruta sobre la foto (viewBox 1000×750, mismo 4:3 que la imagen): tres nodos = estrategia → procesos → ejecución */
const PATH = 'M 95 335 C 240 250, 330 480, 490 405 S 720 300, 905 385';
const NODES: Array<[number, number]> = [
  [95, 335],
  [490, 405],
  [905, 385]
];

/**
 * "El plan cobra vida": una línea dorada se dibuja sola sobre el mapa de procesos,
 * tres nodos se encienden en secuencia y un pulso recorre la ruta en bucle.
 * Decorativo (aria-hidden); con prefers-reduced-motion queda la línea estática.
 */
export const HeroFlow: React.FC<HeroFlowProps> = ({ delay = 0, className = '' }) => {
  const style = { '--flow-delay': `${delay}s` } as React.CSSProperties;
  return (
    <svg
      aria-hidden
      viewBox="0 0 1000 750"
      preserveAspectRatio="xMidYMid slice"
      className={`hero-flow pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={style}
    >
      <defs>
        <filter id="flow-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Halo suave bajo la línea */}
      <path d={PATH} pathLength={1} className="flow-path flow-path--glow" filter="url(#flow-glow)" />
      {/* Línea principal que se dibuja */}
      <path d={PATH} pathLength={1} className="flow-path" />
      {/* Pulso que recorre la ruta */}
      <path d={PATH} pathLength={1} className="flow-pulse" />

      {NODES.map(([x, y], i) => (
        <g key={i} className="flow-node" style={{ animationDelay: `calc(var(--flow-delay) + ${0.35 + i * 0.5}s)` }}>
          <circle cx={x} cy={y} r={26} className="flow-node__ring">
            <animate attributeName="r" values="14;34" dur="2.4s" begin={`${delay + 0.9 + i * 0.5}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.55;0" dur="2.4s" begin={`${delay + 0.9 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={x} cy={y} r={11} className="flow-node__core" />
          <circle cx={x} cy={y} r={5} className="flow-node__dot" />
        </g>
      ))}
    </svg>
  );
};
