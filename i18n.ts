import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationRU from './public/assets/i18n/translations/ru.json'
import translationEN from './public/assets/i18n/translations/en.json'


const resources = {
  ru: {
    translation: translationRU,
  },
  en: {
    translation: translationEN,
  },
};


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
