import React from 'react';
import { Seo } from '../components/layout/Seo';
import { useTranslation } from '../context/LanguageContext';
import { company, SITE_URL, localePath } from '../content';
import { Hero } from '../components/sections/Hero';
import { Challenges } from '../components/sections/Challenges';
import { Approach } from '../components/sections/Approach';
import { Capabilities } from '../components/sections/Capabilities';
import { Projects } from '../components/sections/Projects';
import { Faq } from '../components/sections/Faq';
import { ContactSection } from '../components/sections/ContactSection';

/**
 * One-page. Orden: hero (+ de la necesidad al proyecto) → desafíos de negocio →
 * nuestro enfoque (+ dirección integrada) → capacidades → proyectos y soluciones →
 * preguntas frecuentes → nuevos proyectos (formulario).
 */
export const Home: React.FC = () => {
  const { language, t } = useTranslation('capabilities');
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
    <Hero />
    <Challenges />
    <Approach />
    <Capabilities />
    <Projects />
    <Faq />
    <ContactSection />
  </>
  );
};
