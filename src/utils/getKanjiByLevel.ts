import { kanji_grade_n3, kanji_grade_n4, kanji_grade_n5 } from '@/data/kanji';

export function getKanjiByLevel(level: string) {
  switch (level.toUpperCase()) {
    case 'N5':
      return kanji_grade_n5;
    case 'N4':
      return kanji_grade_n4;
    case 'N3':
      return kanji_grade_n3;
    default:
      return [];
  }
}
