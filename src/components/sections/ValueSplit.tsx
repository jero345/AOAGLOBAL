import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { Divider } from '../ui/Divider';
import { Button } from '../ui/Button';

export const ValueSplit: React.FC = () => {
  const { language, t } = useTranslation('valueSplit');

  return (
    <Section tone="navy">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left Column: Mission statement */}
        <motion.div
          key={language}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-start space-y-6"
        >
          <Eyebrow tone="white">
            {t.eyebrow}
          </Eyebrow>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl leading-tight">
            {t.title}
          </h2>

          <p className="text-base text-[var(--color-line)] leading-relaxed">
            {t.description}
          </p>

          <div className="pt-2">
            <Button variant="inverse" href="/about">
              {t.cta}
            </Button>
          </div>
        </motion.div>

        {/* Right Column: 3 Pillars with staggered reveal */}
        <div className="lg:col-span-7 flex flex-col">
          {t.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col group"
            >
              {index > 0 && <Divider tone="navy-line" className="my-8" />}
              <div className="space-y-3 pl-0 transition-transform duration-200 group-hover:translate-x-1.5">
                <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[var(--color-line)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
