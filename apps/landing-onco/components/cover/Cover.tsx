"use client";

import { useContext, useEffect, useRef } from "react";
import { LandingButton } from "../shared/button/LandingButton";
import { Molecules } from "./components/Molecules";
import { mouseParallax } from "@utils/animations/MouseParallax";
import { H1 } from "ui";
import { openUrl } from "utils";
import { LanguageContext, useClientTranslation } from "i18n";

export const Cover = () => {
  const { lang } = useContext(LanguageContext)
  const { t } = useClientTranslation(lang, {keyPrefix: "cover"});
  const containerRef = useRef<HTMLDivElement>(null);
  const moleculesRef = useRef<HTMLDivElement>(null);

  let mouseMoveTimeOut: any;
  useEffect(() => {
    const molecules = moleculesRef?.current;
    const container = containerRef?.current;

    if (container && molecules) {
      container.addEventListener("mousemove", (e) => {
        if (mouseMoveTimeOut) clearTimeout(mouseMoveTimeOut);
        setTimeout(() => {
          mouseParallax(e, container, molecules, -30);
        }, 200);
      });
    }
  }, [containerRef, moleculesRef]);

  return (
    <section
      className="h-screen relative overflow-hidden flex items-center"
      ref={containerRef}
    >
      <div className="bg-cover bg-coverPage absolute h-full w-full top-0 left-0 opacity-50"></div>
      <div className="container z-20 relative pt-20 hmd:pt-28">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-11 xl:col-span-9">
            <H1 className="hsm:mb-4 hsm:text-3xl">
              {t('title')}
            </H1>
            <span className="font-sans sm:text-2xl mb-8 block w-full md:w-3/5">
             {t('subtitle')}
            </span>
            <LandingButton
              className="w-full sm:w-64"
              onClick={() => openUrl("#contact")}
              >
              {t('button')}
            </LandingButton>
          </div>
        </div>
      </div>
      <div className="hidden lg:block mix-blend-overlay">
        <Molecules ref={moleculesRef} />
      </div>
    </section>
  );
};
