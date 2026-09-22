import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import { Seo } from '../components/layout/Seo';
import { useTranslation } from '../context/LanguageContext';
import { pages, localePath, SITE_URL, company } from '../content';
import { Reveal } from '../components/ui/Reveal';
import { TextReveal } from '../components/ui/TextReveal';
import { Rule } from '../components/ui/Rule';
import { useActiveSection } from '../lib/useActiveSection';

const sectionId = (i: number) => `privacy-${i + 1}`;

/**
 * Política de privacidad (ES/EN): cabecera en azul oscuro, índice fijo a la izquierda que
 * marca la sección en lectura, y veinte secciones numeradas con medida de lectura cómoda.
 * El texto es el documento de Andrea, sin cambios.
 */
export const PrivacyPolicy: React.FC = () => {
  const { language, t } = useTranslation('privacyPage');
  const ids = t.sections.map((_, i) => sectionId(i));
  const active = useActiveSection(ids);
  const home = localePath(language);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'AOA Global Services', item: SITE_URL + home },
      { '@type': 'ListItem', position: 2, name: t.title, item: SITE_URL + pages.privacy[language] }
    ]
  };

  return (
    <>
      <Seo title={t.meta.title} description={t.meta.description} paths={pages.privacy} schemas={[breadcrumb]} />

      {/* Cabecera */}
      <section className="bg-deep text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-8 md:py-20">
          <Reveal immediate>
            <Link to={home} className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors hover:text-white">
              <ArrowLeft size={16} aria-hidden className="transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover/link:-translate-x-0.5" />
              {t.backLabel}
            </Link>
          </Reveal>
          <Reveal immediate delay={0.1} className="mt-8">
            <span className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-accent-light">{t.eyebrow}</span>
          </Reveal>
          <TextReveal as="h1" immediate delay={0.15} text={t.title} className="mt-3 max-w-3xl text-4xl text-white sm:text-5xl lg:text-display" />
          <Reveal immediate delay={0.4} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span>{company.name}</span>
            <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
            <span>
              {t.updatedLabel}: <time>{t.updated}</time>
            </span>
          </Reveal>
        </div>
      </section>

      {/* Índice + contenido */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-16 lg:py-20">
          <div className="lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-24">
            {/* Índice: fijo en escritorio, desplegable en móvil */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <details className="group rounded-[var(--radius-card)] border border-line bg-mist lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {t.contentsLabel}
                  <span aria-hidden className="text-slate transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <ol className="border-t border-line px-4 py-2">
                  {t.sections.map((s, i) => (
                    <li key={s.title}>
                      <a href={`#${sectionId(i)}`} className="flex gap-3 py-2 text-sm text-slate hover:text-navy">
                        <span className="w-6 shrink-0 font-bold tabular-nums text-navy">{String(i + 1).padStart(2, '0')}</span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>

              <nav aria-label={t.contentsLabel} className="hidden lg:block">
                <p className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-slate">{t.contentsLabel}</p>
                <ol className="mt-4 max-h-[calc(100vh-11rem)] overflow-y-auto border-l border-line pr-2">
                  {t.sections.map((s, i) => {
                    const isActive = active === sectionId(i);
                    return (
                      <li key={s.title}>
                        <a
                          href={`#${sectionId(i)}`}
                          aria-current={isActive ? 'true' : undefined}
                          className={`-ml-px flex gap-3 border-l-2 py-1.5 pl-4 text-[0.8125rem] leading-snug transition-colors duration-200 ${
                            isActive ? 'border-navy font-semibold text-ink' : 'border-transparent text-slate hover:text-navy'
                          }`}
                        >
                          <span className={`w-5 shrink-0 tabular-nums ${isActive ? 'text-navy' : 'text-slate'}`}>{String(i + 1).padStart(2, '0')}</span>
                          {s.title}
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </aside>

            {/* Secciones */}
            <article className="mt-10 lg:mt-0">
              {t.sections.map((s, i) => (
                <section key={s.title} id={sectionId(i)} className="scroll-mt-28">
                  {i > 0 && <Rule className="my-10 md:my-12" />}
                  <Reveal>
                    <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 md:grid-cols-[3.5rem_1fr] md:gap-x-6">
                      <span className="pt-1 text-sm font-bold tabular-nums text-navy">{String(i + 1).padStart(2, '0')}</span>
                      <div className="max-w-[68ch]">
                        <h2 className="text-2xl font-bold leading-snug tracking-[-0.01em] text-ink md:text-3xl">{s.title}</h2>
                        {s.paragraphs.map((p) => (
                          <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-slate">
                            {p}
                          </p>
                        ))}
                        {s.contact && (
                          <address className="mt-6 not-italic">
                            <p className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-slate">{t.contactLabel}</p>
                            <div className="mt-3 rounded-[var(--radius-card)] border border-line bg-mist p-5 text-sm leading-relaxed text-ink">
                              {s.contact.map((line) =>
                                line.includes(company.email) ? (
                                  <p key={line} className="mt-2 flex items-center gap-2">
                                    <Mail size={14} aria-hidden className="shrink-0 text-navy" />
                                    <a href={`mailto:${company.email}`} className="font-semibold text-navy hover:underline">
                                      {company.email}
                                    </a>
                                  </p>
                                ) : (
                                  <p key={line}>{line}</p>
                                )
                              )}
                            </div>
                          </address>
                        )}
                      </div>
                    </div>
                  </Reveal>
                </section>
              ))}

              <Rule className="mt-12" />
              <Reveal className="mt-8">
                <Link to={home} className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:underline">
                  <ArrowLeft size={16} aria-hidden className="transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover/link:-translate-x-0.5" />
                  {t.backLabel}
                </Link>
              </Reveal>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
