import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useTranslation } from '../../context/LanguageContext';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { TiltCard } from '../ui/TiltCard';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 24,
      stiffness: 260
    }
  }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const Hero: React.FC = () => {
  const { language, t } = useTranslation('hero');

  return (
    <section className="bg-[var(--color-paper)] py-12 md:py-20 border-b border-[var(--color-line)] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className="grid min-h-[75vh] items-center gap-12 md:grid-cols-[55fr_45fr] lg:gap-16">
          {/* Left Column: Staggered animated copy */}
          <motion.div
            key={language}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Eyebrow tone="navy">
                {t.eyebrow}
              </Eyebrow>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
            >
              {t.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base text-[var(--color-slate)] md:text-lg leading-relaxed max-w-xl"
            >
              {t.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 pt-2"
            >
              <Button variant="primary" href="/contact">
                {t.primaryCta}
              </Button>
              <Button variant="outline" href="/services">
                {t.secondaryCta}
              </Button>
            </motion.div>

            {/* Credibility highlights with AnimatedCounter */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-[var(--color-line)] w-full grid grid-cols-2 gap-6"
            >
              <div>
                <span className="block text-2xl font-bold text-[var(--color-navy)]">
                  +<AnimatedCounter to={12} duration={1.5} /> {t.yearsSuffix}
                </span>
                <span className="text-xs text-[var(--color-slate)] uppercase tracking-wider font-medium">
                  {t.stat1Label}
                </span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-[var(--color-navy)]">
                  $<AnimatedCounter to={450} duration={2} />M+
                </span>
                <span className="text-xs text-[var(--color-slate)] uppercase tracking-wider font-medium">
                  {t.stat2Label}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual with TiltCard 3D Physics */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full"
          >
            <TiltCard maxTilt={6}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-line)] group shadow-sm transition-shadow duration-300 hover:shadow-md">
                <motion.img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="AOA Global Services Executive Architecture"
                  className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                  width={800}
                  height={1000}
                  loading="eager"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-0 inset-x-0 bg-[var(--color-navy)] p-6 text-white border-t border-white/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70">
                    {t.imageBadgeTitle}
                  </p>
                  <p className="text-sm font-medium mt-1 text-white">
                    {t.imageBadgeText}
                  </p>
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
