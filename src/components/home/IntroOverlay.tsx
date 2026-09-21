import React, { useEffect, useRef, useState } from 'react';
import { useLanguage, useTranslation, type Language } from '../../context/LanguageContext';
import { LOCALES, content } from '../../content';
import { INTRO_AUTO_MS, INTRO_CHOOSE_MS, INTRO_DONE_EVENT, INTRO_LEAVE_MS, introWillPlay, markIntroSeen } from '../../lib/intro';

type Phase = 'brand' | 'choose' | 'leave' | 'done';

/**
 * Cortina de entrada: marca AOA y línea de marca; después ofrece elegir idioma
 * (Español / English). Se levanta al elegir o, si nadie elige, a los INTRO_AUTO_MS.
 * Una vez por sesión; con prefers-reduced-motion no se muestra (index.css).
 */
export const IntroOverlay: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation('hero');
  const [phase, setPhase] = useState<Phase>('brand');
  const timers = useRef<number[]>([]);
  const words = t.eyebrow.split(' · ');

  const leave = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    markIntroSeen();
    setPhase('leave');
    window.dispatchEvent(new Event(INTRO_DONE_EVENT));
    timers.current.push(window.setTimeout(() => setPhase('done'), INTRO_LEAVE_MS));
  };

  const choose = (lang: Language) => {
    leave();
    if (lang !== language) setLanguage(lang);
  };

  useEffect(() => {
    if (!introWillPlay()) {
      setPhase('done');
      return;
    }
    timers.current.push(window.setTimeout(() => setPhase('choose'), INTRO_CHOOSE_MS));
    timers.current.push(window.setTimeout(leave, INTRO_AUTO_MS));
    return () => timers.current.forEach((id) => window.clearTimeout(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`intro ${phase === 'leave' ? 'intro--leave' : ''}`} role="dialog" aria-label="Español / English">
      <div className="intro-inner">
        <span className="intro-mark" aria-hidden>AOA</span>
        <p className="intro-words" aria-hidden>
          {words.map((w, i) => (
            <React.Fragment key={w}>
              {i > 0 && <span className="intro-dot" style={{ animationDelay: `${0.45 + i * 0.22}s` }} />}
              <span className="intro-word" style={{ animationDelay: `${0.35 + i * 0.22}s` }}>
                {w}
              </span>
            </React.Fragment>
          ))}
        </p>
        <span className="intro-rule" aria-hidden />

        {/* Elección de idioma: aparece tras la marca y queda hasta que el visitante decide */}
        <div className={`intro-choose ${phase === 'choose' || phase === 'leave' ? 'intro-choose--in' : ''}`}>
          <p className="intro-choose__label">
            <span lang="es">Elija su idioma</span>
            <span aria-hidden> · </span>
            <span lang="en">Choose your language</span>
          </p>
          <div className="intro-choose__buttons">
            {LOCALES.map((lang) => (
              <button
                key={lang}
                type="button"
                lang={lang}
                onClick={() => choose(lang)}
                aria-pressed={lang === language}
                className={`intro-choose__btn ${lang === language ? 'intro-choose__btn--current' : ''}`}
              >
                {content[lang].meta.localeName}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
