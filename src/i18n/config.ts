
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import zhTranslation from './locales/zh.json';

// Initialize i18next with optimized configuration
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      zh: {
        translation: zhTranslation
      }
    },
    lng: localStorage.getItem('language') || 'en', // Use saved language or default to English
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator']
    },
    // Performance optimizations
    load: 'languageOnly',
    ns: ['translation'],
    defaultNS: 'translation',
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    // Only initialize what's needed
    initImmediate: navigator.onLine,
    // Cache translations
    cache: {
      enabled: true
    }
  });

// Add language change handler to save preference
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
  document.documentElement.lang = lng;
  console.info(`Switching to ${lng === 'en' ? 'English' : 'Chinese'}`);
});

export default i18n;
