"use client";

import { H2 } from "ui";
import { ContactForm } from "./ContactForm";
import { LandingButton } from "../shared/button/LandingButton";

export const Contact = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <H2>Datos de contacto</H2>
        <div className="grid grid-cols-12 mt-12">
          <div className="col-span-12 lg:col-span-6 mb-8 lg:mb-0">
            <div className="bg-primary p-8 sm:px-14 lg:table">
              <span className="block text-light text-lg font-semibold mb-2">
                Sabrina Brignardello
              </span>
              <p className="text-light text-sm">
                Recruitment Department Head
                <br />
                sbrignardello@unensayoparami.org
                <br />
                +54 911 5564 9899
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ContactForm />
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <LandingButton className="w-full sm:w-auto" onClick={() => {}}>
            Quiero que me contacten
          </LandingButton>
        </div>
      </div>
    </section>
  );
};
