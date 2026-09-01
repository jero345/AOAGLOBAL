import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../context/LanguageContext';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { BorderBeam } from '../ui/BorderBeam';

export const CtaBand: React.FC = () => {
  const { language, t } = useTranslation('ctaBand');

  return (
    <section className="relative bg-[var(--color-navy)] py-24 text-center text-white overflow-hidden">
      {/* Subtle ambient beam effect on background */}
      <BorderBeam size={400} duration={12} colorFrom="rgba(255,255,255,0.15)" />

      <div key={language} className="relative z-10 mx-auto max-w-[800px] px-6 md:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow tone="white" className="mb-4">
            {t.eyebrow}
          </Eyebrow>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-tight"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base text-[var(--color-line)] leading-relaxed max-w-xl"
        >
          {t.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button variant="inverse" href="/contact">
            {t.primaryBtn}
          </Button>
          <Button
            variant="outline"
            href="mailto:contact@aoaglobalservices.com"
            className="border-white/30 text-white hover:bg-white hover:text-[var(--color-navy)]"
          >
            contact@aoaglobalservices.com
          </Button>
        </motion.div>

        <p className="mt-6 text-xs text-white/60">
          {t.reassurance}
        </p>
      </div>
    </section>
  );
};
