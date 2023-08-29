"use client";

import { LandingButton } from "../shared/button/LandingButton";
import { Molecules } from "./components/Molecules";

export const Cover = () => {
  return (
    <section className="bg-dark bg-cover pt-44 h-screen">
      <div className="container mx-auto z-20 relative">
        <div className="grid grid-cols-11">
          <div className="col-span-8">
            <h1 className="font-serif font-medium text-light text-4rem mb-14">
              Innovación y tecnología para revolucionar el reclutamiento de
              pacientes en Latinoamérica
            </h1>
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
      <Molecules />
    </section>
  );
};
