import { useLanguage } from '../../context/LanguageContext';
import { content } from '../../content';

export interface ChapterRef {
  /** id de la sección (no cambia: anclas del menú, SEO) */
  id: 'challenges' | 'approach' | 'capabilities' | 'projects' | 'faq' | 'contact';
  /** Nombre del capítulo: el eyebrow aprobado de cada bloque */
  label: string;
}

/**
 * Los seis bloques de la home. Los nombres salen del contenido aprobado (no se inventa texto).
 * Sin numerales en los encabezados: la numeración vive en las filas de cada bloque.
 */
export function useChapters(): ChapterRef[] {
  const { language } = useLanguage();
  const t = content[language];
  return [
    { id: 'challenges', label: t.challenges.eyebrow },
    { id: 'approach', label: t.approach.eyebrow },
    { id: 'capabilities', label: t.capabilities.eyebrow },
    { id: 'projects', label: t.projects.eyebrow },
    { id: 'faq', label: t.faq.eyebrow },
    { id: 'contact', label: t.contact.eyebrow }
  ];
}
