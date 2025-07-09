import React, { useState } from 'react';
import KanjiCard from './KanjiCard';
import { kanji_grade_n2, kanji_grade_n3, kanji_grade_n4, kanji_grade_n5 } from '../../data/kanji';
import type { KanjiLevel } from '@/types/kanji';

const kanjiByLevel: Record<KanjiLevel, any[]> = {
  N1: [],
  N2: kanji_grade_n2,
  N3: kanji_grade_n3,
  N4: kanji_grade_n4,
  N5: kanji_grade_n5,
};

const levels: KanjiLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

export default function KanjiList() {
  const [level, setLevel] = useState<KanjiLevel>('N5');

  const kanjiList = kanjiByLevel[level] || [];

  const getUniqueKanji = (kanjiArray: any[]) => {
    const seen = new Set<string>();
    return kanjiArray.filter((item) => {
      if (seen.has(item.kanji)) {
        return false;
      }
      seen.add(item.kanji);
      return true;
    });
  };

  const uniqueKanjiList = getUniqueKanji(kanjiList);

  return (
    <div className="z-50">
      <div className="mb-12 flex items-center justify-center gap-4">
        {levels.map((lvl) => (
          <button key={lvl} className={`px-4 py-2 rounded-md border cursor-pointer ${level === lvl ? 'bg-yellow-400 text-black' : 'bg-white text-gray-700'}`} onClick={() => setLevel(lvl)}>
            {lvl}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2">
        {uniqueKanjiList.length > 0 ? uniqueKanjiList.map((kanji, index) => <KanjiCard key={index} kanji={kanji} />) : <p className="col-span-4 text-center text-gray-500">Data untuk level {level} belum tersedia.</p>}
      </div>
    </div>
  );
}
