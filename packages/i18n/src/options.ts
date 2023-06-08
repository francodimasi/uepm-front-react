import LocalStorageBackend from "i18next-localstorage-backend";
import HttpApi from "i18next-http-backend";
import { InitOptions } from "i18next";

/**
 * @todo replace translation paths
 */
const LOCAL_TRANSLATIONS_PATH = "locales/{{lng}}/translation.json";
const EXTERNAL_TRANSLATIONS_PATH = `https://trialtech-qa.ams3.digitaloceanspaces.com/translations/{{lng}}.json`;

const cached = false;
const fallbackLang = 'en';
export const runsOnServerSide = typeof window === 'undefined';
export const namespace = "translation";

export const getOptions = (lng = fallbackLang) => {
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

  const i18nOptions: InitOptions = {
    backend: {
      backends,
      backendOptions,
    },
    fallbackLng: fallbackLang,
    lng,
    load: "languageOnly",
    ns: namespace,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  };

  return i18nOptions;
};
