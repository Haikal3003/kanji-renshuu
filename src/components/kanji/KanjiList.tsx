import React, { useEffect, useState } from 'react';
import KanjiCard from './KanjiCard';
import { getKanjisByLevel } from '@/hooks/getKanjisByLevel';
import type { KanjiLevel } from '@/types/kanji';

const levels: KanjiLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

export default function KanjiList() {
  const [level, setLevel] = useState<KanjiLevel>('N5');
  const [kanjiList, setKanjiList] = useState<string[]>([]);

  useEffect(() => {
    const fetchKanji = async () => {
      const levelNumber = level.replace('N', '');
      const kanjis = await getKanjisByLevel(levelNumber);
      setKanjiList(kanjis || []);
    };

    fetchKanji();
  }, [level]);

  return (
    <div className="z-50">
      <div className="mb-12 flex items-center justify-center gap-4">
        {levels.map((lvl) => (
          <button key={lvl} className={`px-4 py-2 rounded-md border cursor-pointer ${level === lvl ? 'bg-yellow-400 text-black' : 'bg-white text-gray-700'}`} onClick={() => setLevel(lvl)}>
            {lvl}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-6 gap-4 max-lg:grid-cols-4 max-md:grid-cols-3">
        {kanjiList.length > 0 ? kanjiList.map((kanji, index) => <KanjiCard key={index} kanji={kanji} />) : <p className="col-span-4 text-center text-gray-500">Data untuk level {level} belum tersedia.</p>}
      </div>
    </div>
  );
}
