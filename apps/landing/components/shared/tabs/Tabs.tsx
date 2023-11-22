import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { TabsButtons } from "./TabsButtons";
import { TabItem } from "./tabs.type";
import { useCallback, useMemo, useState } from "react";
import { EffectFade } from "swiper/modules";

type TabsProps = {
  items: TabItem[];
};

export const Tabs = ({ items }: TabsProps) => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [selected, setSelected] = useState(0);

  const swipeTo = useCallback(
    (index: number) => {
      if (swiper) {
        setSelected(index);
        swiper.slideTo(index);
      }
    },
    [swiper]
  );

  const buttonItems = useMemo(() => {
    return items.map(({ name }) => name);
  }, [items]);

  const contentItems = useMemo(() => {
    return items.map(({ content }) => content);
  }, [items]);

  return (
    <>
      <TabsButtons selected={selected} items={buttonItems} onChange={swipeTo} />
      <Swiper
        modules={[EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={1}
        className="!pb-8"
        onSwiper={setSwiper}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
      >
        {contentItems.map((content, index) => (
          <SwiperSlide className="!h-auto" key={index}>
            <>
              <div className="py-16">{content}</div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
