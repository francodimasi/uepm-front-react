import { createInstance } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-chained-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions, namespace } from "./options";

const initI18next = async (lng: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(Backend)
    .use(LanguageDetector)
    .use(
      resourcesToBackend(
        (lng: string) => import(`/public/locales/${lng}/${namespace}.json`)
      )
    )
    .use(initReactI18next)
    .init(getOptions(lng));
  return i18nInstance;
};

export async function useServerTranslation(
  lng: string,
  options: { keyPrefix?: string } = { keyPrefix: "" }
) {
  const i18nextInstance = await initI18next(lng);
  return {
    t: i18nextInstance.getFixedT(lng, "", options.keyPrefix),
    i18n: i18nextInstance,
  };
}
