"use client";

import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { BREAKPOINTS } from "ui";
import { CaseCard, CaseCardProps } from "./CaseCard";
import { Swiper, SwiperSlide } from "swiper/react";

const cases: CaseCardProps[] = [
  {
    title: "Esclerosis Múltiple RR",
    text: "Aportamos el 50% del target país en solo 7 meses de campaña activa.",
    label: "Guatemala 7 meses",
    value: 50,
  },
  {
    title: "Crohn",
    text: "Aportamos el 75% del target país en solo 11 meses de campaña activa.",
    label: "Meximo 11 meses",
    value: 75,
  },
  {
    title: "Esquizofrenia",
    text: "Aportamos el 68% del target país en solo 5 meses de campaña activa.",
    label: "Latam 5 meses",
    value: 68,
  },
  {
    title: "Esclerosis Múltiple RR",
    text: "Aportamos el 92% del target país en solo 12 meses de campaña activa.",
    label: "Argentina 12 meses",
    value: 92,
  },
];

export const CasesContainer = () => {
  const [showSwiper, setShowSwiper] = useState<boolean>(false);

  const switchSlider = () => {
    const { clientWidth } = document.body;
    setShowSwiper(clientWidth < BREAKPOINTS.lg);
  };

  useEffect(() => {
    switchSlider();
    window.addEventListener("resize", switchSlider);

    return () => {
      window.removeEventListener("resize", switchSlider);
    };
  }, []);

  const SwiperContainer = () => {
    return (
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.25}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
          enabled: true,
          bulletClass: "swiper-pagination-bullet !top-1 !relative",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        breakpoints={{
          [BREAKPOINTS.md]: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        className="!pb-8"
      >
        {cases.map((item, index) => (
          <SwiperSlide className="!h-auto" key={index}>
            <CaseCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  const GridContainer = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 dark">
        {cases.map((item, index) => (
          <CaseCard key={index} {...item} />
        ))}
      </div>
    );
  };

  return <>{showSwiper ? <SwiperContainer /> : <GridContainer />}</>;
};
