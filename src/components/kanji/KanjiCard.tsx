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
          className="fixed z-50 flex items-center justify-center rounded-full bg-red-500 text-yellow-400 font-bold text-xs pointer-events-none "
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

      <div onClick={() => (window.location.href = `/details/kanji/${kanji}`)} className="rounded-xl p-8 duration-300 bg-white cursor-none  hover:bg-dark">
        <div className=" text-center gap-4">
          <div className="text-6xl max-md:text-5xl font-bold text-yellow-500 mb-2 ">{kanji}</div>
        </div>
      </div>
    </div>
  );
}
