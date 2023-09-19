"use client";

import patient from "public/images/resources/patient.svg";
import precision from "public/images/resources/precision.svg";
import automatization from "public/images/resources/automatization.svg";
import innovation from "public/images/resources/innovation.svg";
import realTime from "public/images/resources/real-time.svg";
import catchment from "public/images/resources/catchment.svg";
import bgResources from "public/images/bg/bg-resources.png";
import { ResourceItem } from "./types/resource.type";
import { Resource } from "./components/Resource";
import Image from "next/image";
import { H2 } from "ui";

const resources: ResourceItem[] = [
  {
    name: "Patient Centricity",
    description:
      "Nos aseguramos de tener en cuenta las necesidades y de abordar nuestras estrategias desde su perspectiva.",
    icon: patient,
  },
  {
    name: "Innovación tecnológica",
    description:
      "Aceleramos el reclutamiento de pacientes gracias a soluciones tecnológicas completamente innovadoras.",
    icon: innovation,
  },
  {
    name: "Precisión y eficiencia",
    description:
      "Nuestro enfoque tecnológico garantiza la efectividad y la calidad de nuestro reclutamiento.",
    icon: precision,
  },
  {
    name: "Captación selectiva",
    description:
      "Nuestra gestión y análisis de datos nos permite una captación y selección precisa y efectiva de pacientes reduciendo la tasa de falla.",
    icon: catchment,
  },
  {
    name: "Seguimiento en tiempo real",
    description:
      "Registramos, supervisamos y analizamos métricas de capacitación y gestión de pacientes en tiempo real, lo que nos permite ser reactivos y estratégicos.",
    icon: realTime,
  },
  {
    name: "Automatización y rapidez",
    description:
      "Optimizamos nuestros procesos e implementamos novedosas herramientas digitales para ahorrar tiempos y costes.",
    icon: automatization,
  },
];

export function Resources() {
  return (
    <section className="bg-light relative py-12 lg:py-28 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-7 mb-14">
            <H2>
              La efectividad y precisión de nuestras soluciones integrales nos
              convierten en la empresa líder en la región.
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
