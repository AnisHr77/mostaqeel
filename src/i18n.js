// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Or if you prefer without HTTP backend, use this:
import enTranslation from '../public/locales/en/translation.json';
import frTranslation from '../public/locales/fr/translation.json';
import arTranslation from '../public/locales/ar/translation.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    fr: {
        translation: frTranslation,
    },
    ar: {
        translation: arTranslation,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === 'development',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

export default i18n;