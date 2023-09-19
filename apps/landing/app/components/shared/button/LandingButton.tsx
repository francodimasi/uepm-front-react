"use client";

import Image from "next/image";
import arrow from "public/images/icons/arrow.svg";
import { PropsWithChildren } from "react";

export const LandingButton = ({
  children,
  onClick,
  className
}: PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      className={`flex items-center justify-between bg-secondary transition-all font-bold py-5 px-6 hover:bg-light ${className}`}
      onClick={onClick}
    >
      {children}
      <Image className="ml-5" src={arrow} alt="arrow"></Image>
    </button>
  );
};
