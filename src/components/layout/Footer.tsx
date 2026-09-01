import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks, companyDetails } from '../../data/nav';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ink)] text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center bg-white text-[var(--color-navy)] font-bold text-xs rounded-[var(--radius-btn)]">
                AOA
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                AOA GLOBAL SERVICES
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Consultoría estratégica, optimización de procesos y transformación empresarial para organizaciones globales de alto rendimiento.
            </p>
            <div className="pt-2">
              <a
                href={companyDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 transition-colors hover:text-white"
              >
                LinkedIn Institucional <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50 mb-4">
              Servicios
            </h4>
            <ul className="flex flex-col space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50 mb-4">
              Compañía
            </h4>
            <ul className="flex flex-col space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & HQ */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50 mb-4">
              Sede Global
            </h4>
            <address className="not-italic text-sm text-white/70 space-y-2 leading-relaxed">
              <p>{companyDetails.address}</p>
              <p>
                <a
                  href={`mailto:${companyDetails.email}`}
                  className="transition-colors hover:text-white"
                >
                  {companyDetails.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="transition-colors hover:text-white"
                >
                  {companyDetails.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-white/50">
          <p>© {currentYear} {companyDetails.name}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-6">
            {footerLinks.legal.map((item) => (
              <span key={item.label} className="hover:text-white/80 transition-colors">
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
