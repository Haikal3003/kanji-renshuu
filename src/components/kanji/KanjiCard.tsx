import React, { useState } from 'react';

interface KanjiCardProps {
  kanji: string;
}

export default function KanjiCard({ kanji }: KanjiCardProps) {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onMouseMove={handleMouseMove}>
      {hovered && (
        <div
          className="fixed z-50 flex items-center justify-center rounded-full bg-white text-black text-xs font-semibold pointer-events-none"
          style={{
            top: cursorPos.y - 20,
            left: cursorPos.x - 20,
            width: 60,
            height: 60,
            transform: 'translate(-50%, -50%)',
          }}
        >
          Detail
        </div>
      )}

      <div onClick={() => (window.location.href = `/details/kanji/${kanji}`)} className="rounded-xl p-8 mb-4 duration-300 bg-white cursor-none  hover:bg-black">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <div className="text-6xl max-md:text-5xl font-bold text-yellow-500 mb-2 ">{kanji}</div>
        </div>
      </div>
    </div>
  );
}
