import { LanguageContext, useClientTranslation } from "i18n";
import { useContext, useMemo } from "react";
import { Site } from "../types/sites.type";

export const useSites = () => {
  const { lang } = useContext(LanguageContext);
  const { t } = useClientTranslation(lang, { keyPrefix: "common.countries" });

  const sites: Site[] = useMemo(
    () => [
      {
        id: "argentina",
        name: t("argentina"),
        specialists: 98,
        clinics: 52,
        cities: 26,
        specialities: 18,
      },
      {
        id: "brasil",
        name: t("brasil"),
        specialists: 87,
        clinics: 49,
        cities: 32,
        specialities: 21,
      },
      {
        id: "chile",
        name: t("chile"),
        specialists: 37,
        clinics: 39,
        cities: 12,
        specialities: 33,
      },
      {
        id: "peru",
        name: t("peru"),
        specialists: 34,
        clinics: 56,
        cities: 31,
        specialities: 13,
      },
      {
        id: "colombia",
        name: t("colombia"),
        specialists: 83,
        clinics: 42,
        cities: 37,
        specialities: 25,
      },
      {
        id: "mexico",
        name: t("mexico"),
        specialists: 67,
        clinics: 89,
        cities: 43,
        specialities: 35,
      },
    ],
    []
  );

  return {
    sites,
  };
};
