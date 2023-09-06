"use client";

import { useEffect, useRef } from "react";
import { LandingButton } from "../shared/button/LandingButton";
import { Molecules } from "./components/Molecules";
import { mouseParallax } from "@/app/utils/animations/MouseParallax";

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
  }, [containerRef, moleculesRef]);

  return (
    <section
      className="bg-light h-screen relative overflow-hidden pt-28 flex items-center"
      ref={containerRef}
    >
      <div className="bg-cover bg-coverPage absolute h-full w-full top-0 left-0 opacity-50"></div>
      <div className="container z-20 relative">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-8">
            <h1 className="font-serif font-medium mb-14 text-4xl md:text-5xl lg:text-4rem">
              Innovación y tecnología para revolucionar el reclutamiento de
              pacientes en Latinoamérica
            </h1>
            <span className="font-sans mb-8 block">
              Nuestras soluciones combinan análisis de datos, comunicación
              especializada y gestión humanizada de pacientes en un entorno
              tecnológico moderno y seguro. <b>¡Trabajemos juntos!</b>
            </span>
            <LandingButton
              onClick={() => console.warn("@todo: add functionality")}
            >
              Contáctanos ahora
            </LandingButton>
          </div>
        </div>
      </div>
      <div className="mix-blend-overlay">
        <Molecules ref={moleculesRef} />
      </div>
    </section>
  );
};
