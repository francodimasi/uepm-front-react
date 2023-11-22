"use client";

import { useContext } from "react";
import { openUrl } from "utils";
import { LandingButton } from "ui";
import { LINKS } from "@constants/links.const";
import { LanguageContext, useClientTranslation } from "i18n";

export const ClinicalSearch = () => {
  const { lang } = useContext(LanguageContext);
  const { t } = useClientTranslation(lang, { keyPrefix: "clinicalSearch" });

  return (
    <section className="pb-32">
      <div className="container xl:px-28 2xl:px-48">
        <div className="lg:grid grid-cols-12 p-8 sm:p-16 bg-gradient-to-br to-primary from-primary-dark">
          <p className="text-light text-2xl col-span-9 md:pr-4">{t("text")}</p>
          <div className="col-span-3 mt-8 lg:mt-0 flex lg:justify-end items-center">
            <LandingButton
              outlined
              color="light"
              className="w-full sm:w-auto whitespace-nowrap"
              onClick={() => openUrl(LINKS.oncoLogin)}
            >
              {t("button")}
            </LandingButton>
          </div>
        </div>
      </div>
    </section>
  );
};
