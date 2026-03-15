import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      verifyExpansion: 'Verify Expansion',
      detectLostCards: 'Detect Lost Cards',
      suggestionHint: 'Suggestion Hint',
    },
  },
  pt: {
    translation: {
      verifyExpansion: 'Verificar expansão',
      detectLostCards: 'Detectar cartas perdidas',
      suggestionHint: 'Sugestões de dica',
    },
  },
  es: {
    translation: {
      verifyExpansion: 'Verificar expansão',
      detectLostCards: 'Detectar cartas perdidas',
      suggestionHint: 'Sugerencias de pista',
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