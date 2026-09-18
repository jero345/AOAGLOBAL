import React from 'react';
import { Seo } from '../components/layout/Seo';
import { useTranslation } from '../context/LanguageContext';
import { company, SITE_URL, localePath } from '../content';
import { Hero } from '../components/sections/Hero';
import { Ticker } from '../components/ui/Ticker';
import { ChapterIndex } from '../components/home/ChapterIndex';
import { IntroOverlay } from '../components/home/IntroOverlay';
import { useChapters } from '../components/home/chapters';
import { ChallengesChapter } from '../components/home/ChallengesChapter';
import { ApproachChapter } from '../components/home/ApproachChapter';
import { CapabilitiesChapter } from '../components/home/CapabilitiesChapter';
import { ProjectsChapter } from '../components/home/ProjectsChapter';
import { FaqChapter } from '../components/home/FaqChapter';
import { ContactChapter } from '../components/home/ContactChapter';

/**
 * One-page leída como una propuesta: portada (hero) → índice → seis capítulos numerados:
 * 01 desafíos de negocio → 02 nuestro enfoque → 03 soluciones → 04 ejemplos →
 * 05 preguntas frecuentes → 06 nuevos proyectos (formulario).
 * Los ids de sección y las anclas del menú no cambian.
 */
export const Home: React.FC = () => {
  const { language, t } = useTranslation('capabilities');
  const { t: hero } = useTranslation('hero');
  const [challenges, approach, capabilities, projects, faq, contact] = useChapters();
  const services = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: t.items.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        provider: { '@type': 'Organization', name: company.name },
        url: `${SITE_URL}${localePath(language)}#capabilities`
      }
    }))
  };

  return (
    <>
      <Seo homeFaq schemas={[services]} />
      <IntroOverlay />
      <Hero />
      <ChapterIndex />
      <Ticker items={hero.ticker} />
      <ChallengesChapter number={challenges.number} label={challenges.label} />
      <ApproachChapter number={approach.number} label={approach.label} />
      <CapabilitiesChapter number={capabilities.number} label={capabilities.label} />
      <ProjectsChapter number={projects.number} label={projects.label} />
      <FaqChapter number={faq.number} label={faq.label} />
      <ContactChapter number={contact.number} label={contact.label} />
    </>
  );
};
