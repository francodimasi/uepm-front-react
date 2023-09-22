"use client";

import money from "public/images/resources/money.png";
import tap from "public/images/resources/tap.png";
import efficiency from "public/images/resources/efficiency.png";
import team from "public/images/resources/team.png";
import personalData from "public/images/resources/personal-data.png";
import chat from "public/images/resources/chat.png";

import { H2 } from "ui";
import { Resource } from "./components/Resource";
import { ResourceItem } from "./types/resource.type";

const resources: ResourceItem[] = [
  {
    name: "Honorarios",
    description:
      "Referir a un paciente es un trabajo que requiere tiempo y dedicación por eso será retribuido directamente desde nuestra plataforma.",
    icon: money,
  },
  {
    name: "Privacidad de datos",
    description:
      "Nuestra plataforma es un entorno digital seguro: los datos personales e información de contacto de los pacientes solo será compartida con el investigador que usted elija.",
    icon: personalData,
  },
  {
    name: "Gestión Integral",
    description:
      "En una misma plataforma es posible: referir y seguir el estatus del paciente, contactarse con el investigador y cobrar honorarios.",
    icon: team,
  },
  {
    name: "Seguimiento en tiempo real",
    description:
      "Siga el estatus del paciente referido al estudio en tiempo real.",
    icon: efficiency,
  },
  {
    name: "Chat: comunicación directa",
    description:
      "A través de nuestra plataforma, oncólogos e investigadores pueden contactarse sin intermediarios en un entorno seguro.",
    icon: chat,
  },
  {
    name: "Estudios para cada paciente",
    description: "Descubra ensayos clínicos con reclutamiento activo y, utilizando nuestros filtros altamente específicos, encuentre el indicado para su paciente.",
    icon: tap,
  },
];

export function Resources() {
  return (
    <section className="relative py-12 lg:py-28 overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-success-cases bg-bottom bg-no-repeat bg-[length:100%_auto] opacity-10"></div> */}
      <div className="container relative z-10">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-7 mb-14">
            <H2>
              Conectamos oncólogos y a sus pacientes con ensayos clínicos de
              forma simple, accesible y segura.
            </H2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 dark">
          {resources.map((resource, index) => (
            <Resource key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
