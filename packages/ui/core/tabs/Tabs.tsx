'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { TabsProps } from './Tabs.types';

export const Tabs = ({ items, selected, onChange }: TabsProps) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={5.5}
      slidesPerGroup={1}
      resistanceRatio={1000}
    >
      {items?.map(({ name, id }, index) => (
        <SwiperSlide
          key={index}
          className={`cursor-pointer ${
            id === selected ? 'border-b-2' : 'border-b-1 border-gray-medium'
          } hover:border-b-2`}
          onClick={() => onChange(id)}
        >
          <div className="text-center whitespace-nowrap p-4">{name}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
