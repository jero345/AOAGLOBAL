import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, Lightbulb } from 'lucide-react';
import { Seo } from '../components/layout/Seo';
import { useTranslation } from '../context/LanguageContext';
import { company, SITE_URL, localePath, pages } from '../content';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Reveal } from '../components/ui/Reveal';
import { TextReveal } from '../components/ui/TextReveal';
import { Button } from '../components/ui/Button';
import { Faq } from '../components/sections/Faq';

/**
 * Página SEO: consultoría de inteligencia artificial.
 * Ataca la búsqueda "consultoría de IA" con contenido propio sin alterar la home:
 * la IA se presenta subordinada a un proceso de negocio (principio de marca).
 * Sus CTAs llevan al formulario de la home con el tipo de proyecto preseleccionado.
 */
export const AiConsulting: React.FC = () => {
  const { language, t } = useTranslation('aiPage');
  const { t: nav } = useTranslation('nav');
  const home = localePath(language);

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: t.title.replace(/\.$/, ''),
      serviceType: language === 'es' ? 'Consultoría de inteligencia artificial' : 'AI consulting',
      description: t.meta.description,
      provider: { '@type': 'Organization', name: company.name, url: SITE_URL },
      url: SITE_URL + pages.ai[language],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t.includes.title,
        itemListElement: t.includes.items.map((i) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: i.title, description: i.text } }))
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.items.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'AOA Global Services', item: SITE_URL + home },
        { '@type': 'ListItem', position: 2, name: t.breadcrumb, item: SITE_URL + pages.ai[language] }
      ]
    }
  ];

  return (
    <>
      <Seo title={t.meta.title} description={t.meta.description} paths={pages.ai} schemas={schemas} />

      {/* Cabecera */}
      <section className="bg-navy text-white lg:bg-gradient-to-br lg:from-paper lg:from-40% lg:to-navy lg:text-ink">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-white/70 lg:text-slate">
            <Link to={home} className="hover:underline">AOA Global Services</Link>
            <ChevronRight size={14} aria-hidden />
            <span className="font-semibold text-white lg:text-ink">{t.breadcrumb}</span>
          </nav>
          <Reveal immediate>
            <Eyebrow tone="navy" className="max-lg:text-accent">{t.eyebrow}</Eyebrow>
          </Reveal>
          <TextReveal as="h1" text={t.title} immediate delay={0.1} className="mt-4 max-w-[20ch] text-4xl text-white sm:text-5xl lg:text-display lg:text-ink" />
          <Reveal immediate delay={0.3} className="mt-6 max-w-2xl space-y-3">
            {t.intro.map((p) => (
              <p key={p} className="text-base leading-relaxed text-white/85 md:text-lg lg:text-slate">{p}</p>
            ))}
          </Reveal>
          <Reveal immediate delay={0.4} className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button variant="accent" href="#ai-contact" track="ai_hero_start">{t.cta.button}</Button>
            <Link to={{ pathname: home, hash: '#capabilities' }} className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:underline lg:text-navy">
              {t.cta.secondary} <ArrowRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Principio */}
      <Section tone="paper" id="ai-principle">
        <Reveal className="grid gap-6 rounded-[var(--radius-card)] border border-line bg-mist p-6 md:grid-cols-[auto_1fr] md:items-start md:p-8">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-navy">
            <Lightbulb size={22} aria-hidden />
          </span>
          <div>
            <h2 className="text-h3 text-ink md:text-h2">{t.principle.title}</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate">{t.principle.text}</p>
          </div>
        </Reveal>
      </Section>

      {/* Qué incluye */}
      <Section tone="line" id="ai-services">
        <SectionHeader eyebrow={t.includes.eyebrow} title={t.includes.title} />
        <ul className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {t.includes.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 0.08} className="flex gap-3 rounded-[var(--radius-card)] border border-line bg-paper p-5 md:p-6">
              <Check size={18} aria-hidden className="mt-0.5 shrink-0 text-accent-hover" />
              <div>
                <h3 className="text-base font-bold leading-snug text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Casos de uso */}
      <Section tone="paper" id="ai-use-cases">
        <SectionHeader eyebrow={t.useCases.eyebrow} title={t.useCases.title} description={t.useCases.intro} />
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:gap-5">
          {t.useCases.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.06} className="rounded-[var(--radius-card)] border-l-4 border-accent bg-mist p-5 md:p-6">
              <h3 className="text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Proceso */}
      <Section tone="line" id="ai-process">
        <SectionHeader eyebrow={t.process.eyebrow} title={t.process.title} />
        <ol className="mt-8 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3 md:gap-8">
          {t.process.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.1} className="flex gap-4 border-t-2 border-navy pt-4 md:block md:pt-6">
              <span className="text-2xl font-bold text-accent-hover tabular-nums md:text-3xl">0{i + 1}</span>
              <div>
                <h3 className="text-base font-bold uppercase tracking-[0.04em] text-ink md:mt-3 md:text-h3">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate md:mt-2">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-8">
          <p className="max-w-3xl text-sm text-slate">{t.process.note}</p>
        </Reveal>
      </Section>

      <Faq eyebrow={t.faq.eyebrow} title={t.faq.title} items={t.faq.items} id="ai-faq" tone="paper" />

      {/* CTA final → formulario de la home con el tipo de proyecto preseleccionado */}
      <Section tone="navy" id="ai-contact">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-white md:text-h2">{t.cta.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">{t.cta.text}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="accent" href={`${home}?service=automation#contact`} track="ai_cta_start">
              {nav.cta} <ArrowRight size={16} aria-hidden />
            </Button>
            <Link to={{ pathname: home, hash: '#capabilities' }} className="text-sm font-semibold text-white hover:underline">
              {t.cta.secondary}
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
};
