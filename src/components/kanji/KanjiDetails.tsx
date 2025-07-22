import React, { useEffect, useState } from 'react';

export default function KanjiDetails({ kanji }: { kanji: string }) {
  const [kanjiDetails, setKanjiDetails] = useState<any>();

  useEffect(() => {});

  return <div>{kanji}</div>;
}
