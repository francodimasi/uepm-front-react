"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";


export type TabItem = {
  name: string;
  id: number;
};

export type TabsProps = {
  items: TabItem[];
  selected: number;
  onChange: (id: number) => void;
};
export const Tabs = ({ items, selected, onChange }: TabsProps) => {
  return (
    <Swiper
      slidesPerView={5.5}
      slidesPerGroup={1}
      resistanceRatio={1000}
      spaceBetween= {40}
      className="w-100 border-b border-b-gray-light justify-center items-center inline-flex"
    >
      {items?.map(({ name, id }, index) => (
        <SwiperSlide
          key={id}
          className={`font-['DMSans'] grow ${
            id === selected ? "border-b-2 border-black font-bold" : " font-light hover:font-normal hover:border-b-1 hover:border-gray-dark"
          } `}
          onClick={() => onChange(id)}
        >
          <div className="text-center text-dark text-base  ms-1 leading-none w-full whitespace-nowrap">{name}</div>
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
};
