import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { ValueSplit } from '../components/sections/ValueSplit';
import { Metrics } from '../components/sections/Metrics';
import { IndustriesGrid } from '../components/sections/IndustriesGrid';
import { CaseTeaser } from '../components/sections/CaseTeaser';
import { GlobalGallery } from '../components/sections/GlobalGallery';
import { Testimonial } from '../components/sections/Testimonial';
import { CtaBand } from '../components/sections/CtaBand';
import { companyDetails } from '../data/nav';
import { useTranslation } from '../context/LanguageContext';

export const Home: React.FC = () => {
  const { language, t } = useTranslation('seo');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": companyDetails.name,
    "legalName": companyDetails.name,
    "url": "https://aoaglobalservices.com",
    "logo": "https://aoaglobalservices.com/favicon.svg",
    "description": t.homeDesc,
    "telephone": companyDetails.phone,
    "email": companyDetails.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Pine Street, Suite 1250",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94111",
      "addressCountry": "US"
    },
    "sameAs": [
      companyDetails.linkedin
    ],
    "priceRange": "$$$$"
  };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{t.homeTitle}</title>
        <meta name="description" content={t.homeDesc} />
        <link rel="canonical" href="https://aoaglobalservices.com/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Ordered sections strictly following Table §5 with expanded visual gallery */}
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <ValueSplit />
      <Metrics />
      <IndustriesGrid />
      <CaseTeaser />
      <GlobalGallery />
      <Testimonial />
      <CtaBand />
    </>
  );
};
