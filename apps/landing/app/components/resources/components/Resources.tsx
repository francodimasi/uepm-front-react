"use client";
import Image from "next/image";
import bgResources from "public/images/bg/bg-resources.png";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BREAKPOINTS, H2 } from "ui";
import { RESOURCES } from "../constants/resources.const";
import { Resource } from "./Resource";
import { ResourcesContainer } from "./ResourcesContainer";

export function Resources() {
  return (
    <section className="bg-dark relative py-28 overflow-hidden">
      <div className="absolute w-full -top-1/2 opacity-70">
        <Image className="w-full" src={bgResources} alt="Background" />
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-7">
            <H2 className="text-light">
              La efectividad y precisión de nuestras soluciones integrales nos
              convierten en la empresa líder en la región.
            </H2>
          </div>
        </div>

        <ResourcesContainer />
        
      </div>
    </section>
  );
}
