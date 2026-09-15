import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { company } from '../../content';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useQuote } from '../../context/QuoteContext';

export const Footer: React.FC = () => {
  const { t } = useTranslation('footer');
  const { t: services } = useTranslation('services');
  const { requestQuote } = useQuote();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center bg-white text-navy font-bold text-xs rounded-[var(--radius-btn)]">
                AOA
              </div>
              <span className="text-base font-bold tracking-tight text-white">{company.name}</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">{t.tagline}</p>
            <p className="text-xs uppercase tracking-[0.12em] text-white/45">{t.legalLine}</p>
            <div className="pt-2 flex flex-col items-start gap-3">
              <a
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 transition-colors hover:text-white"
              >
                LinkedIn <ArrowUpRight size={14} aria-hidden />
              </a>
              <LanguageSwitcher variant="dark" />
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50 mb-4">{t.servicesTitle}</h2>
            <ul className="flex flex-col space-y-2.5">
              {services.items.map((s) => (
                <li key={s.slug}>
                  <button
                    type="button"
                    onClick={() => requestQuote(s.slug)}
                    className="text-left text-sm text-white/70 transition-colors duration-200 hover:text-white cursor-pointer"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50 mb-4">{t.companyTitle}</h2>
            <ul className="flex flex-col space-y-2.5">
              {t.companyLinks.map((link) => (
                <li key={link.anchor}>
                  <a href={link.anchor} className="text-sm text-white/70 transition-colors duration-200 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50 mb-4">{t.contactTitle}</h2>
            <address className="not-italic text-sm text-white/70 leading-relaxed">
              <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
                {company.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-xs text-white/50">
          <p>
            © {year} {company.name}. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
