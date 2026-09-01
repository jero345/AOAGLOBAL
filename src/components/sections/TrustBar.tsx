import React from 'react';
import { Marquee } from '../ui/Marquee';

export const TrustBar: React.FC = () => {
  const partners = [
    { name: "Vanguard Asset Management", label: "VANGUARD ASSETS" },
    { name: "Global Logistics Alliance", label: "NORDIC LOGISTICS" },
    { name: "Apex Financial Partners", label: "APEX PARTNERS" },
    { name: "Summit Industrial Corp", label: "SUMMIT INDUSTRIAL" },
    { name: "Horizon Health Systems", label: "HORIZON HEALTH" },
    { name: "Pacific Capital Group", label: "PACIFIC CAPITAL" },
    { name: "Atlas Infrastructure", label: "ATLAS INFRA" }
  ];

  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-line)] py-10 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 mb-6">
        <p className="text-center text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)]">
          Confianza de comités ejecutivos y fondos de inversión en múltiples mercados
        </p>
      </div>

      <Marquee speed={35} pauseOnHover={true}>
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center gap-2 border border-[var(--color-slate)]/30 px-5 py-2.5 rounded-[var(--radius-card)] bg-white/40 backdrop-blur-xs transition-colors duration-200 hover:border-[var(--color-navy)]"
          >
            <div className="h-2 w-2 bg-[var(--color-navy)] rounded-full"></div>
            <span className="text-xs font-bold tracking-widest text-[var(--color-ink)] uppercase">
              {partner.label}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
