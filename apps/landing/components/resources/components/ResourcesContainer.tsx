import { useContext, useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BREAKPOINTS } from "ui";
// import { RESOURCES } from "../constants/resources.const";
import { Resource } from "./Resource";

import patient from "public/images/resources/patient.svg";
import precision from "public/images/resources/precision.svg";
import automatization from "public/images/resources/automatization.svg";
import innovation from "public/images/resources/innovation.svg";
import realTime from "public/images/resources/real-time.svg";
import catchment from "public/images/resources/catchment.svg";
import { ResourceItem } from "../types/resource.type";
import { LanguageContext, useClientTranslation } from "i18n";

export const ResourcesContainer = () => {
  const { lang } = useContext(LanguageContext);
  const { t } = useClientTranslation(lang, { keyPrefix: "resources" });

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

  const resources: ResourceItem[] = [
    {
      name: t("cards.patient.name"),
      description: t("cards.patient.description"),
      icon: patient,
    },
    {
      name: t("cards.innovation.name"),
      description: t("cards.innovation.description"),
      icon: innovation,
    },
    {
      name: t("cards.precision.name"),
      description: t("cards.precision.description"),
      icon: precision,
    },
    {
      name: t("cards.catchment.name"),
      description: t("cards.catchment.description"),
      icon: catchment,
    },
    {
      name: t("cards.realTime.name"),
      description: t("cards.realTime.description"),
      icon: realTime,
    },
    {
      name: t("cards.automatization.name"),
      description: t("cards.automatization.description"),
      icon: automatization,
    },
  ];

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
        {resources.map((resource, index) => (
          <SwiperSlide className="!h-auto" key={index}>
            <Resource {...resource} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  const GridContainer = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 dark">
        {resources.map((resource, index) => (
          <Resource key={index} {...resource} />
        ))}
      </div>
    );
  };

  return <>{showSwiper ? <SwiperContainer /> : <GridContainer />}</>;
};
