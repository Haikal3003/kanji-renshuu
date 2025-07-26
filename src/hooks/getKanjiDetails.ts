import axios from 'axios';

const PUBLIC_KANJI_RAPIDAPI_URL = 'https://kanjialive-api.p.rapidapi.com/api/public/kanji';

export async function getKanjiDetails(kanji: string) {
  try {
    const res = await axios.get(`${PUBLIC_KANJI_RAPIDAPI_URL}/${kanji}`, {
      headers: {
        'x-rapidapi-key': '5f17f1e40amsh8626ff2c006627ap1c30f7jsna2424ce9ff2f',
        'x-rapidapi-host': 'kanjialive-api.p.rapidapi.com',
      },
    });

    return res.data;
  } catch (error) {
    console.error('Error fetching kanji details:', error);
    return null;
  }
}
