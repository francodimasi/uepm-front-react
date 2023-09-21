"use client";

import { PropsWithChildren } from "react";
import arrow from "public/images/icons/arrow.svg";
import Image from "next/image";
import cx from "classnames";

type LoadingButtonProps = {
  onClick?: () => void;
  size?: "small" | "regular" | "large";
  outlined?: boolean;
  icon?: boolean;
};

export const LandingButton = ({
  children,
  size = "regular",
  icon = true,
  outlined = false,
  className,
  onClick,
}: PropsWithChildren<LoadingButtonProps> &
  React.HTMLAttributes<HTMLButtonElement>) => {
  const sizeClasses = cx({
    "py-2 px-3": size === "small",
    "py-5 px-6": size === "regular",
    "py-6 px-7": size === "large",
  });

  const customStyles = cx({
    "border-2 border-light bg-transparent hover:bg-light hover:text-dark":
      outlined,
  });

  const iconStyles = cx({
    "group-hover:brightness-0": outlined,
  });

  return (
    <button
      className={`table group ${sizeClasses} text-light bg-primary font-bold hover:bg-primary-dark transition-all ${customStyles} ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <span>{children}</span>
        <div className="pl-5">
          {icon && (
            <Image
              className={`block brightness-[100] transition-all min-w-[22px] ${iconStyles}`}
              src={arrow}
              alt="arrow"
              width={22}
            ></Image>
          )}
        </div>
      </div>
    </button>
  );
};
