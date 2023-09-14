"use client";

import automatization from "public/images/resources/automatization.svg";
import catchment from "public/images/resources/catchment.svg";
import innovation from "public/images/resources/innovation.svg";
import patient from "public/images/resources/patient.svg";
import precision from "public/images/resources/precision.svg";
import realTime from "public/images/resources/real-time.svg";
import { H2 } from "ui";
import { Resource } from "./components/Resource";
import { ResourceItem } from "./types/resource.type";

const resources: ResourceItem[] = [
  {
    name: "Honorarios",
    description:
      "Si los pacientes referidos son randomizados, se retribuirá el tiempo y dedicación destinado a buscar y derivar al paciente a un ensayo.",
    icon: patient,
  },
  {
    name: "Privacidad de datos",
    description:
      "Nuestra plataforma es un entorno electrónico seguro: los datos personales e información de contacto de los pacientes solo será compartida con el investigador médico.",
    icon: innovation,
  },
  {
    name: "Gestión integral",
    description:
      "En una misma plataforma es posible: referir y monitorear, en tiempo real, la evolución del paciente, contactarse con el investigador y cobrar honorarios.",
    icon: precision,
  },
  {
    name: "Seguimiento en tiempo real",
    description:
      "Se podrá monitorear el avance del paciente en el estudio en tiempo real.",
    icon: catchment,
  },
  {
    name: "Chat: comunicación directa",
    description:
      "A través de nuestra plataforma, médicos e investigadores pueden contactarse sin intermediarios en un entorno seguro.",
    icon: realTime,
  },
];

export function Resources() {
  return (
    <section className="bg-light relative py-12 lg:py-28 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-7">
            <H2>
              Conectamos pacientes y oncólogos con investigadores médicos de
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
