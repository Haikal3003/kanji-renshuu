import { getKanjiDetails } from '@/hooks/getKanjiDetails';
import type { KanjiDetailsProps } from '@/types/kanji';
import React, { useEffect, useState } from 'react';

export default function KanjiDetails({ kanji }: { kanji: string }) {
  const [kanjiDetails, setKanjiDetails] = useState<KanjiDetailsProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKanjiDetails = async () => {
      setLoading(true);
      try {
        const details = await getKanjiDetails(kanji);
        console.log('Fetched Kanji Details:', details);
        setKanjiDetails(details);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchKanjiDetails();
  }, [kanji]);

  if (loading) return <p className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">Loading...</p>;
  if (!kanjiDetails || !kanjiDetails.kanji) return <p className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">Tidak ada data Kanji</p>;

  return (
    <div className="z-50 flex flex-col space-y-10">
      <div className="flex space-x-10 z-50">
        <div className="p-8 bg-red-500 text-yellow-400 font-bold rounded-md ">
          <h1 className="text-7xl max-md:text-6xl">{kanji}</h1>
        </div>
        <div>
          <div id="kunyomi" className="max-md:text-sm">
            <h2 className="font-bold">Kunyomi</h2>
            <p>{kanjiDetails?.kanji.kunyomi.hiragana || '-'}</p>
          </div>
          <div id="onyomi" className="max-md:text-sm">
            <h2 className="font-bold">Onyomi</h2>
            <p>{kanjiDetails?.kanji.onyomi.katakana || '-'}</p>
          </div>

          <div id="meanings" className="max-md:text-sm">
            <h2 className="font-bold">Arti</h2>
            <p>{kanjiDetails?.kanji.meaning.english || '-'}</p>
          </div>
        </div>
      </div>

      {/* Contoh Kotoba */}
      <div className="z-50">
        <h1 className="font-semibold text-red-600 mb-6 text-2xl max-md:text-xl">Contoh Kotoba</h1>
        <ul className="grid grid-cols-3 z-50 list-none gap-4 max-md:grid-cols-2 max-md:gap-6">
          {kanjiDetails?.examples.map((example, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <span className="mt-2 h-2 w-2 bg-red-600 rounded-full flex-shrink-0"></span>
              <div className="max-md:text-sm">
                <h1 className="font-normal">{example.japanese}</h1>
                <p className="text-sm text-gray-700">{example.meaning.english}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Cara Tulis */}
      <div className="z-50">
        <h1 className="font-semibold text-red-600 mb-6 text-2xl max-md:text-xl">Cara Tulis</h1>
        <ul className="flex flex-wrap gap-4 ">
          {kanjiDetails?.kanji.strokes.images.map((image, idx) => (
            <li key={idx} className="relative ">
              <span className="absolute top-2 left-2  text-red-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{idx + 1}</span>
              <img src={image} alt={`stroke-${idx}`} className="w-[150px] h-[150px] max-md:w-[100px] max-md:h-[100px] bg-yellow-400  rounded-md p-4" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
