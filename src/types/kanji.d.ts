export interface Kotoba {
  kata: string;
  arti: string[];
  bacaan: string[];
}

export interface KanjiDetail {
  kanji: string;
  kunyomi: string[];
  onyomi: string[];
  arti: string[];
  contoh_kotoba: Kotoba[];
}

export type KanjiLevel = 'N1' | 'N2' | 'N3' | 'N4' | 'N5';
