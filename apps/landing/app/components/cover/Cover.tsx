"use client";

import { useEffect, useRef } from "react";
import { LandingButton } from "ui";
import { Molecules } from "./components/Molecules";
import { H1 } from "ui";
import { mouseParallax } from "@app/utils/animations/MouseParallax";

export const Cover = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, moleculesRef]);

  return (
    <section
      className="bg-cover bg-cover-page-mobile md:bg-cover-page h-screen relative overflow-hidden pt-28 flex items-center"
      ref={containerRef}
    >
      <div className="container mx-auto z-20 relative">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-8">
            <H1 className="text-light">
              Innovación y tecnología para revolucionar el reclutamiento de
              pacientes en Latinoamérica
            </H1>
            <span className="font-sans text-light mb-8 block">
              Nuestras soluciones combinan análisis de datos, comunicación
              especializada y gestión humanizada de pacientes en un entorno
              tecnológico moderno y seguro. <b>¡Trabajemos juntos!</b>
            </span>
            <LandingButton
              color="secondary"
              onClick={() => console.warn("@todo: add functionality")}
              className="w-full sm:w-auto"
            >
              Contáctanos ahora
            </LandingButton>
          </div>
        </div>
      </div>
      <Molecules className="hidden md:block" ref={moleculesRef} />
    </section>
  );
};
