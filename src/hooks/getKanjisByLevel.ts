import axios from 'axios';

const PUBLIC_KANJI_API_URL = 'https://kanjiapi.dev/v1/kanji';

export async function getKanjisByLevel(jlpt_level: string = '5'): Promise<string[]> {
  try {
    const res = await axios.get(`${PUBLIC_KANJI_API_URL}/jlpt-${jlpt_level}`);
    return res.data;
  } catch (error) {
    console.error(`Failed to fetch kanji for JLPT level ${jlpt_level}:`, error);
    return [];
  }
}
