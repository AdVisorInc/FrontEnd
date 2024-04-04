import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ae } from './translations/ae';
import { de } from './translations/de';
import { es } from './translations/es';
import { fr } from './translations/fr';
import { zh } from './translations/zh';

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    es: { translation: es },
    fr: { translation: fr },
    ae: { translation: ae },
    zh: { translation: zh },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
