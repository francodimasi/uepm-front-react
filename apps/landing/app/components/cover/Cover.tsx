"use client";

import { useEffect, useRef } from "react";
import { LandingButton } from "../shared/button/LandingButton";
import { Molecules } from "./components/Molecules";
import { mouseParallax } from "@/app/utils/animations/MouseParallax";
import { H1 } from "ui";

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
      className="bg-dark bg-cover bg-coverPage h-screen relative overflow-hidden pt-28 flex items-center"
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
                onClick={() => console.warn("@todo: add functionality")}
              >
                Contáctanos ahora
              </LandingButton>
            </div>
          </div>
        </div>
        <Molecules ref={moleculesRef} />
    </section>
  );
};
