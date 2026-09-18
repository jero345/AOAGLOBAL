import React, { useEffect, useState } from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { INTRO_TOTAL_MS, introWillPlay, markIntroSeen } from '../../lib/intro';

/**
 * Cortina de entrada: marca AOA, las tres palabras de la línea de marca y una regla dorada;
 * después la cortina se levanta y descubre el hero. Animación en CSS puro (index.css):
 * funciona aunque el JS tarde, y un script en index.html la oculta antes de pintar si ya se vio.
 */
export const IntroOverlay: React.FC = () => {
  const { t } = useTranslation('hero');
  const [mounted, setMounted] = useState(true);
  const words = t.eyebrow.split(' · ');

  useEffect(() => {
    if (!introWillPlay()) {
      setMounted(false);
      return;
    }
    const id = window.setTimeout(() => {
      markIntroSeen();
      setMounted(false);
    }, INTRO_TOTAL_MS);
    return () => window.clearTimeout(id);
  }, []);

  if (!mounted) return null;

  return (
    <div className="intro" aria-hidden>
      <div className="intro-inner">
        <span className="intro-mark">AOA</span>
        <p className="intro-words">
          {words.map((w, i) => (
            <React.Fragment key={w}>
              {i > 0 && <span className="intro-dot" style={{ animationDelay: `${0.45 + i * 0.22}s` }} />}
              <span className="intro-word" style={{ animationDelay: `${0.35 + i * 0.22}s` }}>
                {w}
              </span>
            </React.Fragment>
          ))}
        </p>
        <span className="intro-rule" />
      </div>
    </div>
  );
};
