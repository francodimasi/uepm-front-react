"use client";

import { H2 } from "ui";
import { SitesProvider } from "../SitesProvider";
import { Map } from "./Map";
import { SiteSwiper } from "./SiteSwiper";

export const Sites = () => {
  return (
    <SitesProvider>
      <section className="relative pt-32 pb-16 lg:pb-60 xl:pb-32 2xl:pb-80 ">
        <Map />

        <div className="container relative grid grid-cols-12 z-20">
          <div className="hidden md:block col-span-6 invisible"></div>
          <div className="col-span-12 md:col-span-6">
            <H2 className="text-light mb-16 md:mt-0 xl:mt-12">
              De Latinoamérica para Latinoamérica
            </H2>
            <p className="text-light mb-10 sm:mb-16">
              Comprender la heterogeneidad cultural de la región, las
              características del sistema de salud y los desafíos de los
              pacientes en cada país es clave para la efectividad de nuestro
              trabajo.
            </p>
            <SiteSwiper />
          </div>
        </div>

      </section>
    </SitesProvider>
  );
};
