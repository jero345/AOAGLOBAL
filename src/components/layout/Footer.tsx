import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../context/LanguageContext';
import { company, localePath, pages } from '../../content';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useQuote } from '../../context/QuoteContext';

interface GroupProps {
  id: string;
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

/** En móvil el grupo es desplegable (cerrado por defecto); en escritorio siempre visible. */
const FooterGroup: React.FC<GroupProps> = ({ id, title, open, onToggle, children }) => (
  <div className="border-t border-white/10 sm:border-0">
    <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50 sm:mb-4">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="flex min-h-12 w-full items-center justify-between py-3 text-left uppercase cursor-pointer sm:hidden"
      >
        {title}
        <ChevronDown size={16} aria-hidden className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <span className="hidden sm:inline">{title}</span>
    </h2>
    <div id={id} className={`${open ? 'block' : 'hidden'} pb-4 sm:block sm:pb-0`}>
      {children}
    </div>
  </div>
);

export const Footer: React.FC = () => {
  const { language, t } = useTranslation('footer');
  const { requestQuote } = useQuote();
  const home = localePath(language);
  const [openGroup, setOpenGroup] = useState<'solutions' | 'company' | null>(null);
  const toggle = (g: 'solutions' | 'company') => setOpenGroup((cur) => (cur === g ? null : g));
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-deep text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-12">
          <div className="flex flex-col space-y-4 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center bg-white text-navy font-bold text-xs rounded-[var(--radius-btn)]">
                AOA
              </div>
              <span className="text-base font-bold tracking-tight text-white">{company.name}</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">{t.tagline}</p>
            <p className="text-xs uppercase tracking-[0.14em] text-accent-light">{t.brandLine}</p>
            <div className="pt-1 flex flex-col items-start gap-3">
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

          <FooterGroup id="footer-solutions" title={t.solutionsTitle} open={openGroup === 'solutions'} onToggle={() => toggle('solutions')}>
            <ul className="flex flex-col space-y-2.5">
              {t.solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={{ pathname: home, search: `?service=${s.slug}`, hash: '#contact' }}
                    onClick={() => requestQuote(s.slug)}
                    className="text-left text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to={pages.ai[language]} className="text-sm font-semibold text-white/85 transition-colors duration-200 hover:text-white">
                  {t.aiPageLink}
                </Link>
              </li>
              <li>
                <Link to={pages.aiMarket[language]} className="text-sm font-semibold text-white/85 transition-colors duration-200 hover:text-white">
                  {t.aiMarketPageLink}
                </Link>
              </li>
            </ul>
          </FooterGroup>

          <FooterGroup id="footer-company" title={t.companyTitle} open={openGroup === 'company'} onToggle={() => toggle('company')}>
            <ul className="flex flex-col space-y-2.5">
              {t.companyLinks.map((link) => (
                <li key={link.anchor}>
                  <a href={link.anchor} className="text-sm text-white/70 transition-colors duration-200 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterGroup>

          <div className="border-t border-white/10 pt-4 sm:border-0 sm:pt-0">
            <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50 mb-2 sm:mb-4">{t.contactTitle}</h2>
            <address className="not-italic text-sm text-white/70 leading-relaxed">
              <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
                {company.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <p>
            © {year} {company.name}. {t.rights}
          </p>
          <p className="text-white/55">{t.legal}</p>
        </div>
      </div>
    </footer>
  );
};
