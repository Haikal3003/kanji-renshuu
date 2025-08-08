import type { KanjiLevel } from '@/types/kanji';
import React, { useState } from 'react';
import kanji_level_n5_girl from '../../assets/levels/kanji_level_n5_girl.png';
import kanji_level_n4_girl from '../../assets/levels/kanji_level_n4_girl.png';
import kanji_level_n3_girl from '../../assets/levels/kanji_level_n3_girl.png';
import kanji_level_n2_girl from '../../assets/levels/kanji_level_n2_girl.png';
import kanji_level_n1_girl from '../../assets/levels/kanji_level_n1_girl.png';

const levels = [
  { level: 'N5', image: kanji_level_n5_girl },
  { level: 'N4', image: kanji_level_n4_girl },
  { level: 'N3', image: kanji_level_n3_girl },
  { level: 'N2', image: kanji_level_n2_girl },
  { level: 'N1', image: kanji_level_n1_girl },
];

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
    <div className="py-8 relative z-50">
      <h1 className="text-3xl font-bold mb-8 text-center">Pilih level kanji</h1>
      <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-md:gap-4">
        {levels.map((item) => (
          <div key={item.level} className="cursor-pointer transform hover:scale-105 transition-transform" onClick={() => handleLevelClick(item.level)}>
            <img src={item.image.src} alt={`Level ${item.level}`} className="rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanjiQuizList;
