import type { KanjiDetail } from '@/types/kanji';
import React, { useState } from 'react';

export default function KanjiCard({ kanji }: { kanji: KanjiDetail }) {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const kunyomiFirst = Array.isArray(kanji.kunyomi) ? kanji.kunyomi[0] : kanji.kunyomi ?? '-';
  const onyomiFirst = Array.isArray(kanji.onyomi) ? kanji.onyomi[0] : kanji.onyomi ?? '-';

  return (
    <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onMouseMove={handleMouseMove}>
      {hovered && (
        <div
          className="fixed z-50 flex items-center justify-center rounded-full bg-dark text-white text-xs font-semibold pointer-events-none transition-transform duration-75"
          style={{
            top: cursorPos.y - 20,
            left: cursorPos.x - 20,
            width: 50,
            height: 50,
            transform: 'translate(-50%, -50%)',
          }}
        >
          Click
        </div>
      )}

      <div className="rounded-xl p-8 mb-4 duration-300 bg-white cursor-none">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <div className="text-6xl max-md:text-5xl font-bold text-yellow-500 mb-4">{kanji.kanji}</div>
          <div>
            <p className="text-md font-bold mb-4">{kanji.bacaan ? kanji.bacaan : kunyomiFirst ? kunyomiFirst : onyomiFirst}</p>
            <p className="capitalize bg-yellow-400 py-2 px-4 rounded-md font-normal  ">{Array.isArray(kanji.arti) ? kanji.arti[0] : kanji.arti ?? '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
