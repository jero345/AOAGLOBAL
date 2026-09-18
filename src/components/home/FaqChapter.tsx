import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { Chapter } from './Chapter';
import { Reveal } from '../ui/Reveal';
import { FaqList } from '../sections/FaqList';

/** 05 · Preguntas frecuentes: cinco preguntas, todas cerradas al inicio. */
export const FaqChapter: React.FC<{ number: string; label: string }> = ({ number, label }) => {
  const { language, t } = useTranslation('faq');
  return (
    <Chapter id="faq" number={number} label={label} title={t.title} tone="paper">
      <Reveal>
        <FaqList key={language} items={t.items} id="faq" />
      </Reveal>
    </Chapter>
  );
};
