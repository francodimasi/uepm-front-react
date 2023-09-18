import { useContext, useEffect, useState } from "react";
import { EffectCreative, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { CounterWrapper } from "../../shared/counter/CounterWrapper";
import { SitesContext } from "../SitesProvider";
import { SITES } from "../constants/sites.const";

export const SiteSwiper = () => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const { selected } = useContext(SitesContext);

  useEffect(() => {
    if (swiper) {
      const current = SITES.find((s) => s.id === selected);
      if (current) {
        swiper.slideTo(SITES.indexOf(current));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  return (
    <Swiper
      modules={[EffectFade]}
      onSwiper={(swiper) => setSwiper(swiper)}
      effect="fade"
      speed={700}
      fadeEffect={{
        crossFade: true,
      }}
    >
      {SITES.map((site, index) => (
        <SwiperSlide key={index} className="!h-auto">
          <CounterWrapper {...site} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
