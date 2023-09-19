"use client";

import { useEffect, useRef } from "react";
import { LandingButton } from "../shared/button/LandingButton";
import { Molecules } from "./components/Molecules";
import { mouseParallax } from "@/app/utils/animations/MouseParallax";
import { H1 } from "ui";
import { openUrl } from "utils";
import { LINKS } from "@/app/constants/links.const";

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
      className="h-screen relative overflow-hidden flex items-center"
      ref={containerRef}
    >
      <div className="bg-cover bg-coverPage absolute h-full w-full top-0 left-0 opacity-50"></div>
      <div className="container z-20 relative pt-20 hmd:pt-28">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-8">
            <H1>
              La primera plataforma para oncólogos que conecta pacientes con
              investigadores médicos
            </H1>
            <span className="font-sans mb-8 block w-full md:w-3/5">
              Un espacio para buscar ensayos clínicos, conectar con los
              investigadores médicos, derivar pacientes y monitorear su
              evolución en cada instancia del proceso.
            </span>
            <LandingButton
              className="w-full sm:w-auto"
              onClick={() => {}} // openUrl(LINKS.oncoLogin)
            >
              Comenzar a usar
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
