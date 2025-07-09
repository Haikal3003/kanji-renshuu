import type { KanjiLevel } from '@/types/kanji';
import React, { useState } from 'react';
import kanji_level_n5_girl from '../../assets/levels/kanji_level_n5_girl.png';
import kanji_level_n4_girl from '../../assets/levels/kanji_level_n4_girl.png';
import kanji_level_n3_girl from '../../assets/levels/kanji_level_n3_girl.png';
import kanji_level_n2_girl from '../../assets/levels/kanji_level_n2_girl.png';
import kanji_level_n1_girl from '../../assets/levels/kanji_level_n1_girl.png';
import { kanji_grade_n2, kanji_grade_n3, kanji_grade_n4, kanji_grade_n5 } from '@/data/kanji';

const levels = [
  { level: 'N5', image: kanji_level_n5_girl },
  { level: 'N4', image: kanji_level_n4_girl },
  { level: 'N3', image: kanji_level_n3_girl },
  { level: 'N2', image: kanji_level_n2_girl },
  { level: 'N1', image: kanji_level_n1_girl },
];

const total_kanji_per_level: { [key: string]: number } = {
  N5: kanji_grade_n5.length,
  N4: kanji_grade_n4.length,
  N3: kanji_grade_n3.length,
  N2: kanji_grade_n2.length,
  N1: 0,
};

function KanjiQuizList() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleLevelClick = (level: string) => {
    setSelectedLevel(level);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedLevel(null);
  };

  const handleOptionClick = (option: string) => {
    console.log(`Level ${selectedLevel} - Pilihan: ${option}`);
    handleCloseModal();
  };

  return (
    <div className="p-8 z-50">
      <h1 className="text-3xl font-bold mb-8 text-center">Pilih level kanji</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {levels.map((item) => (
          <div key={item.level} className="cursor-pointer transform hover:scale-105 transition-transform" onClick={() => handleLevelClick(item.level)}>
            <img src={item.image.src} alt={`Level ${item.level}`} className="rounded-2xl" />
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-transparent  flex items-center justify-center z-[1000]">
          <div className="bg-yellow-100 p-6 rounded-2xl  w-80 flex flex-col justify-center border-2 border-yellow-400 text-center">
            <h2 className="text-xl font-bold mb-4 text-center">Level {selectedLevel}</h2>
            <div className="flex items-center gap-4"></div>
            <div>
              <h2>Total kanji: {selectedLevel ? total_kanji_per_level[selectedLevel] : 0}</h2>
            </div>
            <div className="space-x-2 mt-4">
              <a href={`renshu/${selectedLevel}`} className="bg-yellow-400 rounded-2xl py-3 px-6 cursor-pointer">
                Mulai
              </a>
              <button className="bg-red-500 text-white rounded-2xl py-3 px-6 cursor-pointer" onClick={handleCloseModal}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KanjiQuizList;
