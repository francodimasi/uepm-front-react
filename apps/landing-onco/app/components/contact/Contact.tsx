"use client";

import { H2 } from "ui";
import { ContactForm } from "./ContactForm";
import { LandingButton } from "../shared/button/LandingButton";
import { useState } from "react";

export const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-gray-light bg-opacity-70 relative">
      <div className="container py-16 sm:py-40">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-5 mb-14">
            <H2>
              Regístrese para recibir noticias sobre nuestra plataforma
              exclusiva
            </H2>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 lg:col-span-6 sm:pr-20">
            {sent ? (
              <div className="p-8 sm:p-20 bg-gradient-to-br bg- border-primary border-2">
                <p className="text-2xl">
                  ¡Muchas gracias por registrarse! En su casilla de mail
                  encontrará información importante.
                </p>
              </div>
            ) : (
              <ContactForm onSend={setSent} />
            )}
          </div>
        </div>
      </div>
      <div className="sm:absolute top-0 right-0 h-[50vh] sm:h-full bg-medic bg-cover bg-center w-full sm:w-2/6 lg:w-1/2"></div>
    </section>
  );
};
