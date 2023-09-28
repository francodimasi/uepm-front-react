"use client";

import { H2 } from "ui";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-5">
            <H2 className="text-light">Datos de contacto</H2>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-12">
          <div className="col-span-12 lg:col-span-6 mb-8 lg:mb-0">
            <div className="bg-light bg-opacity-5 p-8 sm:px-14 lg:table">
              <span className="block text-primary text-xl font-semibold mb-2">
                Sabrina Brignardello
              </span>
              <p className="text-light text-sm leading-6">
                Recruitment Department Head
                <br />
                sbrignardello@unensayoparami.org
                <br />
                +54 911 5564 9899
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <ContactForm onSend={() => {}} />
          </div>
        </div>
      </div>
    </section>
  );
};
