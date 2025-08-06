import axios from 'axios';

const TRANSLATE_PUBLIC_API_URL = 'https://deep-translate1.p.rapidapi.com/language/translate/v2';

export async function translateToIndonesia(text: string) {
  const cached = localStorage.getItem(`id-meaning-${text}`);
  if (cached) return cached;

  try {
    const res = await axios.post(
      TRANSLATE_PUBLIC_API_URL,
      {
        q: text,
        source: 'en',
        target: 'id',
      },
      {
        headers: {
          'x-rapidapi-key': '5f17f1e40amsh8626ff2c006627ap1c30f7jsna2424ce9ff2f',
          'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
      }
    );

    const translated = res.data?.data?.translations?.translatedText;
    if (translated) {
      localStorage.setItem(`id-meaning-${text}`, translated);
      return translated;
    } else {
      throw new Error('No translated text returned');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
