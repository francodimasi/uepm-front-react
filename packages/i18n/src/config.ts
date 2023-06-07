import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-chained-backend';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LocalStorageBackend from 'i18next-localstorage-backend';

/**
 * @todo replace translation paths
*/
const LOCAL_TRANSLATIONS_PATH = 'locales/{{lng}}/translation.json';
const EXTERNAL_TRANSLATIONS_PATH = `https://trialtech-qa.ams3.digitaloceanspaces.com/translations/{{lng}}.json`;

export const initi18nWithOptions = (cached: boolean) => {
  const backends = [LocalStorageBackend, HttpApi];
  const backendOptions = [
    {
      expirationTime: 12 * 60 * 60 * 1000, // 12 hours to expiration
    },
    {
      loadPath: cached ? EXTERNAL_TRANSLATIONS_PATH : LOCAL_TRANSLATIONS_PATH,
    },
  ];

  if (!cached) {
    backends.shift();
    backendOptions.shift();
  }

  const i18nOptions: any = {
    backend: {
      backends,
      backendOptions,
    },
    fallbackLng: 'en',
    load: 'languageOnly',
    debug: false,
    react: {
      useSuspense: false, // Definir necesidad de uso <Suspense>
    },
    interpolation: {
      escapeValue: false,
    },
  };

  i18next.init(i18nOptions);
};

i18next.use(Backend).use(LanguageDetector).use(initReactI18next);

export const i18n = i18next;