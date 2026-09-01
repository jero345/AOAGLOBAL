import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';
import { Section } from '../components/ui/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { CtaBand } from '../components/sections/CtaBand';
import { CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const { language, t } = useTranslation('services');
  const { t: seo } = useTranslation('seo');

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{seo.servicesTitle}</title>
        <meta name="description" content={seo.servicesDesc} />
        <link rel="canonical" href="https://aoaglobalservices.com/services" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-[var(--color-line)] py-16 md:py-24 border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Eyebrow tone="navy" className="mb-4">
              {t.catalogEyebrow}
            </Eyebrow>
            <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
              {t.catalogTitle}
            </h1>
            <p className="mt-4 text-base text-[var(--color-slate)] md:text-lg leading-relaxed">
              {t.catalogDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List Breakdown with Images */}
      <Section tone="paper">
        <div className="space-y-16">
          {t.items.map((service, index) => (
            <motion.div
              key={service.slug}
              id={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-28"
            >
              <Card className="border-[var(--color-line)] p-0 overflow-hidden group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  {/* Visual Image Column */}
                  <div className="lg:col-span-4 relative min-h-[260px] lg:min-h-full overflow-hidden bg-slate-100 border-b lg:border-b-0 lg:border-r border-[var(--color-line)]">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                      width={500}
                      height={400}
                    />
                    <div className="absolute top-4 left-4 bg-[var(--color-navy)] text-white text-xs font-bold px-3 py-1 rounded-[var(--radius-btn)] uppercase tracking-wider">
                      {t.specialtyBadge} 0{index + 1}
                    </div>
                  </div>

                  {/* Service info column */}
                  <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[var(--color-slate)] uppercase tracking-wider">
                          {t.strategicAreaLabel}
                        </span>
                        <span className="text-xs font-semibold text-[var(--color-navy)] bg-slate-100 px-3 py-1 rounded-[var(--radius-btn)]">
                          {service.metrics}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-[var(--color-ink)] sm:text-3xl leading-snug">
                        {service.title}
                      </h2>

                      <p className="text-sm md:text-base text-[var(--color-slate)] leading-relaxed">
                        {service.summary}
                      </p>

                      {/* Deliverables Box */}
                      <div className="bg-slate-50/80 p-6 rounded-[var(--radius-card)] border border-[var(--color-line)] mt-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-navy)] mb-3">
                          {t.deliverablesScopeLabel}
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs text-[var(--color-ink)]">
                              <CheckCircle2 size={16} className="text-[var(--color-navy)] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button variant="primary" href={`/contact?service=${service.slug}`}>
                        {t.consultCta}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Methodology Section */}
      <ProcessSteps tone="line" />

      {/* Final Call to Action */}
      <CtaBand />
    </>
  );
};
