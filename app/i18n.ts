import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      verifyExpansion: 'Verify Expansion',
      detectLostCards: 'Detect Lost Cards',
    },
  },
  pt: {
    translation: {
      verifyExpansion: 'Verificar expansão',
      detectLostCards: 'Detectar cartas perdidas',
    },
  },
  es: {
    translation: {
      verifyExpansion: 'Verificar expansión',
      detectLostCards: 'Detectar cartas perdidas',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;