"use client";

import { useEffect, useState, useContext, useMemo } from "react";
import { Pagination } from "swiper/modules";
import { BREAKPOINTS } from "ui";
import { CaseCard, CaseCardProps } from "./CaseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { LanguageContext, useClientTranslation } from "i18n";

export const CasesContainer = () => {
  const { lang } = useContext(LanguageContext);
  const { t } = useClientTranslation(lang, { keyPrefix: "successCases.cases" });
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

  const cases: CaseCardProps[] = useMemo(
    () => [
      {
        title: t("esclerosis.title"),
        text: t("esclerosis.text"),
        label: t("esclerosis.label"),
        value: 50,
      },
      {
        title: t("crohn.title"),
        text: t("crohn.text"),
        label: t("crohn.label"),
        value: 75,
      },
      {
        title: t("esquizofrenia.title"),
        text: t("esquizofrenia.text"),
        label: t("esquizofrenia.label"),
        value: 68,
      },
      {
        title: t("esclerosis.title"),
        text: t("esclerosis.text"),
        label: t("esclerosis.label"),
        value: 92,
      },
    ],
    []
  );

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
