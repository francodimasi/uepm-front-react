"use client";

import { openUrl } from "utils";
import { LandingButton } from "ui";
import { LINKS } from "@constants/links.const";


export const ClinicalSearch = () => {
  return (
    <section className="pb-32">
      <div className="container xl:px-28 2xl:px-48">
        <div className="lg:grid grid-cols-12 p-8 sm:p-16 bg-gradient-to-br to-primary from-primary-dark">
          <p className="text-light text-2xl col-span-9">
            Descubre el primer y único buscador online de ensayos  clínicos con
            lenguaje amigable para Latinoamérica.
          </p>
          <div className="col-span-3 mt-8 lg:mt-0 flex lg:justify-end items-center">
            <LandingButton
              outlined
              className="w-full sm:w-auto"
              onClick={() => openUrl(LINKS.oncoLogin)}
            >
              Un&nbsp;Ensayo&nbsp;Para&nbsp;Mí
            </LandingButton>
          </div>
        </div>
      </div>
    </section>
  );
};
