import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { FaqList } from './FaqList';

interface FaqProps {
  eyebrow?: string;
  title?: string;
  items?: Array<{ q: string; a: string }>;
  id?: string;
  tone?: 'paper' | 'line';
}

/** Preguntas frecuentes (páginas secundarias): cabecera estándar + acordeón. */
export const Faq: React.FC<FaqProps> = ({ eyebrow, title, items, id = 'faq', tone = 'line' }) => {
  const { language, t } = useTranslation('faq');
  const list = items ?? t.items;

  return (
    <Section tone={tone} id={id}>
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-10">
        <SectionHeader eyebrow={eyebrow ?? t.eyebrow} title={title ?? t.title} />
        <Reveal>
          <FaqList key={language} items={list} id={id} />
        </Reveal>
      </div>
    </Section>
  );
};
