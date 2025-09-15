import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import vi from './locales/vi.json';
import en from './locales/en.json';
import ko from './locales/ko.json';
import ja from './locales/ja.json';

const resources = {
  vi: { translation: vi },
  en: { translation: en },
  ko: { translation: ko },
  ja: { translation: ja }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi', // default language
    fallbackLng: 'vi',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;