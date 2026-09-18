import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../content';

export interface ChapterRef {
  /** id de la sección (no cambia: anclas del menú, SEO) */
  id: 'challenges' | 'approach' | 'capabilities' | 'projects' | 'faq' | 'contact';
  number: string;
  /** Nombre del capítulo: el eyebrow aprobado de cada bloque */
  label: string;
}

/**
 * La home se lee como las primeras páginas de una propuesta: seis capítulos numerados.
 * Los nombres salen del contenido aprobado (no se inventa texto).
 */
export function useChapters(): ChapterRef[] {
  const { language } = useLanguage();
  const t = content[language];
  return [
    { id: 'challenges', number: '01', label: t.challenges.eyebrow },
    { id: 'approach', number: '02', label: t.approach.eyebrow },
    { id: 'capabilities', number: '03', label: t.capabilities.eyebrow },
    { id: 'projects', number: '04', label: t.projects.eyebrow },
    { id: 'faq', number: '05', label: t.faq.eyebrow },
    { id: 'contact', number: '06', label: t.contact.eyebrow }
  ];
}
