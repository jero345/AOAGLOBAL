import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { Chapter } from './Chapter';
import { Reveal } from '../ui/Reveal';
import { FaqList } from '../sections/FaqList';

/** Preguntas frecuentes: cinco preguntas, todas cerradas al inicio. */
export const FaqChapter: React.FC<{ label: string }> = ({ label }) => {
  const { language, t } = useTranslation('faq');
  return (
    <Chapter id="faq" label={label} title={t.title} tone="paper">
      <Reveal>
        <FaqList key={language} items={t.items} id="faq" />
      </Reveal>
    </Chapter>
  );
};
