import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BREAKPOINTS } from "ui";
import { RESOURCES } from "../constants/resources.const";
import { Resource } from "./Resource";

export const ResourcesContainer = () => {
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
        {RESOURCES.map((resource, index) => (
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
        {RESOURCES.map((resource, index) => (
          <Resource key={index} {...resource} />
        ))}
      </div>
    );
  };

  return <>{showSwiper ? <SwiperContainer /> : <GridContainer />}</>;
};
