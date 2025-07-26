export type KanjiLevel = 'N1' | 'N2' | 'N3' | 'N4' | 'N5' | 'Materi';

// Kanji Details

interface Example {
  japanese: string;
  meaning: {
    english: string;
  };
  audio: {
    opus: string;
    aac: string;
    ogg: string;
    mp3: string;
  };
}

interface Textbook {
  chapter: string;
  txt_bk: string;
}

interface KanjiInfo {
  character: string;
  meaning: {
    english: string;
  };
  strokes: {
    count: number;
    timings: number[];
    images: string[];
  };
  onyomi: {
    romaji: string;
    katakana: string;
  };
  kunyomi: {
    romaji: string;
    hiragana: string;
  };
  video: {
    poster: string;
    mp4: string;
    webm: string;
  };
}

interface RadicalInfo {
  character: string;
  strokes: number;
  image: string;
  position: {
    hiragana: string;
    romaji: string;
    icon: string;
  };
  name: {
    hiragana: string;
    romaji: string;
  };
  meaning: {
    english: string;
  };
  animation: string[];
}

interface Reference {
  grade: number;
  kodansha: string;
  classic_nelson: string;
}

export interface KanjiDetailsProps {
  _id: string;
  _rev: string;
  rad_name_ja: string;
  grade: number;
  hint_group: number;
  kunyomi: string;
  meaning: string;
  kstroke: number;
  examples: Example[];
  kunyomi_ja: string;
  ka_utf: string;
  luminous: string;
  rad_name_search: string[];
  rad_order: number;
  txt_books: Textbook[];
  kname: string;
  rad_utf: string;
  stroketimes: number[];
  kunyomi_ka_display: string;
  dick: string;
  rad_name: string;
  dicn: string;
  mn_hint: string;
  rad_stroke: number;
  onyomi_ja: string;
  rad_meaning: string;
  onyomi: string;
  ka_id: string;
  rad_position: string;
  rad_position_ja: string;
  rad_position_search: string[];
  onyomi_search: string[];
  kunyomi_search: string[];
  meaning_search: string[];
  onyomi_ja_search: string[];
  kunyomi_ja_search: string[];
  rad_meaning_search: string[];
  rad_position_ja_search: string[];
  rad_name_ja_search: string[];
  textbook_search: string[];
  rad_name_file: string;
  kanji: KanjiInfo;
  radical: RadicalInfo;
  references: Reference;
}
