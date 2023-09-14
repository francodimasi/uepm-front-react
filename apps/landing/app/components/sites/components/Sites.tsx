"use client";

import { useContext, useEffect } from "react";
import { SitesContext, SitesProvider } from "../SitesProvider";
import { Map } from "./Map";
import { SiteSwiper } from "./SiteSwiper";
import { H2 } from "ui";

export const Sites = () => {
  return (
    <SitesProvider>
      <section className="relative py-28">
        <div className="container relative grid grid-cols-12 z-20">
          <div className="col-span-6 invisible"></div>
          <div className="col-span-6">
            <H2 className="text-light mb-16">
              De Latinoamérica para Latinoamérica
            </H2>
            <p className="text-light mb-16">
              Comprender la heterogeneidad cultural de la región, las
              características del sistema de salud y los desafíos de los
              pacientes en cada país es clave para la efectividad de nuestro
              trabajo.
            </p>
            <SiteSwiper />
          </div>
        </div>

        <Map className="absolute left-0 -top-40 w-1/2 z-30" />
      </section>
    </SitesProvider>
  );
};
