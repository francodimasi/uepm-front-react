"use client";
import Image from "next/image";
import bgResources from "public/images/bg/bg-resources.png";
import { H2 } from "ui";
import { ResourcesContainer } from "./ResourcesContainer";
import { useContext } from "react";
import { LanguageContext, useClientTranslation } from "i18n";

export function Resources() {
  const { lang } = useContext(LanguageContext)
  const { t } = useClientTranslation(lang, { keyPrefix: "resources" });

  return (
    <section className="bg-cover bg-cover-page md:bg-none relative pt-20 xl:pt-28">
      <div className="md:block hidden absolute w-full -top-1/2 opacity-70">
        <Image className="w-full" src={bgResources} alt="Background" />
      </div>
      <div className="container relative z-40">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-7">
            <H2 className="text-light mb-20">
              {t("title")}
            </H2>
          </div>
        </div>

        <ResourcesContainer />

      </div>
    </section>
  );
}
