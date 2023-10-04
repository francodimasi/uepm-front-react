import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { TabsButtons } from "./TabsButtons";
import { TabItem } from "./tabs.type";
import { useCallback, useMemo, useState } from "react";

type TabsProps = {
    items: TabItem[];
}

export const Tabs = ({ items }: TabsProps) => {

    const [swiper, setSwiper] = useState<SwiperType>();
    const [selected, setSelected] = useState(0);

    const swipeTo = useCallback((index: number) => {
        if (swiper) {
            setSelected(index);
            swiper.slideTo(index);
        }
    }, [swiper])

    const buttonItems = useMemo(() => {
        return items.map(({ name }) => name);
    }, [items])

    const contentItems = useMemo(() => {
        return items.map(({ content }) => content);
    }, [items])

    return (
        <>
            <TabsButtons selected={selected} items={buttonItems} onChange={swipeTo} />
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                slidesPerGroup={1}
                className="!pb-8"
                onSwiper={setSwiper}
            >
                {contentItems.map((content, index) => (
                    <SwiperSlide className="!h-auto" key={index}>
                        <>
                            <div className="text-light p-32">
                                {content}
                            </div>
                        </>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}