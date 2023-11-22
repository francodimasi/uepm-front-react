"use client";

import Image from "next/image";
import { useMemo, useContext } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { BREAKPOINTS, H2 } from "ui";
import boehringer from "public/images/sponsors/boehringer.svg";
import bristol from "public/images/sponsors/bristol.svg";
import covance from "public/images/sponsors/covance.svg";
import iqvia from "public/images/sponsors/iqvia.svg";
import lilly from "public/images/sponsors/lilly.svg";
import roche from "public/images/sponsors/roche.svg";
import { Autoplay } from "swiper/modules";
import { LanguageContext, useClientTranslation } from "i18n";

export const Sponsors = () => {
  const { lang } = useContext(LanguageContext);
  const { t } = useClientTranslation(lang, { keyPrefix: "sponsors" });

  const sponsors = useMemo(() => {
    return [boehringer, bristol, lilly, covance, roche, iqvia];
  }, []);
  return (
    <section className="py-24">
      <div className="container">
        <H2 className="text-light mb-24">{t("title")}</H2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          loop={true}
          autoplay={{
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            delay: 2000,
          }}
          breakpoints={{
            [BREAKPOINTS.xl]: {
              slidesPerView: 5,
            },
            [BREAKPOINTS.lg]: {
              slidesPerView: 4,
            },
            [BREAKPOINTS.md]: {
              slidesPerView: 3,
            },
          }}
          className="!pb-8"
        >
          {sponsors.map((item, index) => (
            <SwiperSlide className="!h-auto" key={index}>
              <div className="h-full flex items-center justify-center">
                <Image key={index} src={item} alt="" />
              </div>
            </SwiperSlide>
          ))}
          {sponsors.map((item, index) => (
            <SwiperSlide className="!h-auto" key={index}>
              <div className="h-full flex items-center justify-center">
                <Image key={index} src={item} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
