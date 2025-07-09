export interface KanjiDetail {
  kanji: string;
  kunyomi: string[];
  arti: string;
  onyomi: string[];
  bacaan: string;
}

export type KanjiLevel = 'N1' | 'N2' | 'N3' | 'N4' | 'N5';
