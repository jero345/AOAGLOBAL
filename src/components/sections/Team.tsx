import React from 'react';
import { MapPin, ArrowLeftRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

const initials = (name: string) =>
  name
    .replace(/\{\{.*?\}\}/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('') || '?';

/**
 * Bloque 6: la alianza con rostro. Dos columnas AU / CO unidas por un puente.
 * Sin misión/visión/valores. Foto real cuando exista (photo); iniciales mientras tanto.
 */
export const Team: React.FC = () => {
  const { t } = useTranslation('team');

  return (
    <Section tone="line" id="team">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
        {t.sides.map((side, sideIdx) => (
          <React.Fragment key={side.region}>
            {sideIdx === 1 && (
              <Reveal className="flex items-center justify-center lg:flex-col">
                <div className="flex items-center gap-3 rounded-full border border-line bg-paper px-4 py-2 text-xs font-semibold text-navy lg:flex-col lg:rounded-[var(--radius-card)] lg:px-3 lg:py-6">
                  <ArrowLeftRight size={18} aria-hidden className="text-accent-hover lg:rotate-90" />
                  <span className="max-w-[10rem] text-center leading-snug">{t.bridge}</span>
                </div>
              </Reveal>
            )}

            <Reveal delay={sideIdx * 0.08} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-paper p-6 md:p-8">
              <div className="flex items-center gap-2 text-navy">
                <MapPin size={16} aria-hidden />
                <span className="text-eyebrow font-bold uppercase tracking-[0.08em]">{side.region}</span>
              </div>
              <h3 className="mt-2 text-h3 text-ink">{side.role}</h3>

              <ul className="mt-6 space-y-6">
                {side.members.map((m) => (
                  <li key={m.name} className="flex gap-4">
                    {m.photo ? (
                      <img
                        src={m.photo}
                        alt={m.name}
                        width={72}
                        height={72}
                        loading="lazy"
                        className="h-18 w-18 shrink-0 rounded-full object-cover grayscale"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-bold text-white"
                      >
                        {initials(m.name)}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p className="font-bold text-ink leading-snug">{m.name}</p>
                      <p className="text-sm text-slate">{m.role}</p>
                      <p className="mt-0.5 text-xs text-slate">{m.location}</p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {m.skills.map((skill) => (
                          <li key={skill} className="rounded-[var(--radius-btn)] bg-mist px-2 py-1 text-[0.7rem] font-medium text-ink">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
};
