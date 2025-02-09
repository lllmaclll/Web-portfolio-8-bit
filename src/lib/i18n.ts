import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import nextI18NextConfig from '../app/next-i18next.config';

const resources = {
  en: { translation: require('../app/locales/en/common.json') },
  th: { translation: require('../app/locales/th/common.json') },
};

i18n.use(initReactI18next).init({
  resources,
  lng: nextI18NextConfig.i18n.defaultLocale,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
