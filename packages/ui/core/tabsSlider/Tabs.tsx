'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';

export type TabItem = {
  name: string;
  id: number;
};

export type TabsProps = {
  items: TabItem[];
  selected: number;
  onChange: (_id: number) => void;
  classes?: string;
};

export const Tabs = ({ items, selected, onChange, classes }: TabsProps) => {
  return (
    <Swiper
      slidesPerView={4}
      slidesPerGroup={1}
      resistanceRatio={1000}
      spaceBetween={30}
      className={clsx(
        classes,
        'w-100 border-b border-b-gray-light justify-start items-center',
      )}
    >
      {items?.map(({ name, id }) => (
        <SwiperSlide
          key={id}
          className={`font-['DMSans'] cursor-pointer ${
            id === selected
              ? 'border-b-2 border-dark font-bold'
              : 'font-normal hover:font-semibold hover:border-b-1 hover:border-gray-dark'
          } `}
          onClick={() => onChange(id)}
        >
          <div className="text-center text-dark text-base ms-1 leading-none whitespace-nowrap">
            {name}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
