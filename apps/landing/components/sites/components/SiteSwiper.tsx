import { useContext, useEffect, useState } from 'react';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { CounterWrapper } from '../../shared/counter/CounterWrapper';
import { SitesContext } from '../SitesProvider';
import { useSites } from '../hooks/useSites';

export const SiteSwiper = () => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const { selected } = useContext(SitesContext);
  const { sites } = useSites();

  useEffect(() => {
    if (swiper) {
      const current = sites.find((s) => s.id === selected);
      if (current) {
        swiper.slideTo(sites.indexOf(current));
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
      {sites.map((site, index) => (
        <SwiperSlide key={index} className="!h-auto">
          <CounterWrapper {...site} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
