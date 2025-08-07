import React, { useEffect, useState } from 'react';
import KanjiCard from './KanjiCard';
import { getKanjisByLevel } from '@/hooks/getKanjisByLevel';
import type { KanjiLevel } from '@/types/kanji';

const levels: KanjiLevel[] = ['Materi', 'N5', 'N4', 'N3', 'N2', 'N1'];
const ITEMS_PER_PAGE = 24;
const MAX_PAGE_BUTTONS = 5;

export default function KanjiList() {
  const [level, setLevel] = useState<KanjiLevel>('Materi');
  const [kanjiList, setKanjiList] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchKanji = async () => {
      const levelNumber = level.replace('N', '');
      const kanjis = await getKanjisByLevel(levelNumber);
      setKanjiList(kanjis || []);
      setCurrentPage(1);
    };

    fetchKanji();
  }, [level]);

  const totalPages = Math.ceil(kanjiList.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentKanjis = kanjiList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const getPageNumbers = () => {
    const pages = [];
    let start = Math.max(1, currentPage - Math.floor(MAX_PAGE_BUTTONS / 2));
    let end = start + MAX_PAGE_BUTTONS - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - MAX_PAGE_BUTTONS + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="z-50">
      <div className="mb-12 flex items-center justify-center gap-4 max-md:gap-2">
        {levels.map((lvl) => (
          <button key={lvl} className={`px-4 py-2 rounded-md border-2 border-yellow-400 cursor-pointer max-md:text-sm ${level === lvl ? 'bg-red-500 text-yellow-400 font-bold' : 'bg-white text-gray-700'}`} onClick={() => setLevel(lvl)}>
            {lvl}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-6 gap-4 max-md:grid-cols-3 max-lg:grid-cols-4">
        {currentKanjis.length > 0 ? currentKanjis.map((kanji, index) => <KanjiCard key={index} kanji={kanji} />) : <p className="col-span-6 flex justify-center items-center">Data untuk level {level} belum tersedia.</p>}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-10 overflow-x-auto px-2">
          <div className="flex gap-2 max-md:gap-1 items-center">
            {getPageNumbers()[0] > 1 && (
              <>
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`w-12 h-12 max-md:w-10 max-md:h-10 rounded-md text-sm  cursor-pointer border-2 border-yellow-400 ${currentPage === 1 ? 'bg-dark text-yellow-400 font-bold' : 'bg-white text-black'}`}
                >
                  1
                </button>
                {getPageNumbers()[0] > 2 && <span className="px-2">...</span>}
              </>
            )}

            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-12 h-12 max-md:w-10 max-md:h-10 rounded-md text-sm cursor-pointer border-2 border-yellow-400 ${currentPage === page ? 'bg-red-500 text-yellow-400 font-bold' : 'bg-white text-black'}`}
              >
                {page}
              </button>
            ))}

            {getPageNumbers().slice(-1)[0] < totalPages && (
              <>
                {getPageNumbers().slice(-1)[0] < totalPages - 1 && <span className="px-2">...</span>}
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`w-12 h-12 max-md:w-10 max-md:h-10 rounded-md text-sm  cursor-pointer border-2 border-yellow-400 ${currentPage === totalPages ? 'bg-dark text-yellow-400 font-bold' : 'bg-white text-black'}`}
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
