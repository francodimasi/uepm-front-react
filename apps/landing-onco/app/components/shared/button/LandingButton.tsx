"use client";

import { PropsWithChildren } from "react";
import arrow from "public/images/icons/arrow.svg";
import Image from "next/image";
import cx from "classnames";

type LoadingButtonProps = {
  onClick: () => void;
  size?: "small" | "regular" | "large";
  icon?: boolean;
};

export const LandingButton = ({
  children,
  size = "regular",
  icon = true,
  onClick,
}: PropsWithChildren<LoadingButtonProps> &
  React.HTMLAttributes<HTMLButtonElement>) => {
  const sizeClasses = cx({
    "py-2 px-3": size === "small",
    "py-5 px-6": size === "regular",
    "py-6 px-7": size === "large",
  });

  return (
    <button
      className={`${sizeClasses} flex text-light items-center bg-primary font-bold hover:bg-primary-dark transition-all`}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && <Image className="ml-5 brightness-[100]" src={arrow} alt="arrow"></Image>}
    </button>
  );
};
