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
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  color?: 'primary' | 'secondary'
};

export const LandingButton = ({
  children,
  size = "regular",
  icon = true,
  outlined = false,
  type = 'button',
  disabled = false,
  color = 'primary',
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
    "border-2 border-light bg-transparent text-light hover:bg-light hover:text-dark":
      outlined,
  });

  const iconStyles = cx({
    "group-hover:brightness-0": outlined,
    "brightness-[100]": color === 'primary',
  });

  const colorStyles = cx({
    "bg-primary hover:bg-primary-dark text-light": color === 'primary' && !outlined,
    "bg-secondary hover:bg-light": color === 'secondary' && !outlined,
  })

  return (
    <button
      className={`table group ${sizeClasses} ${colorStyles} font-bold transition-all disabled:opacity-20 disabled:pointer-events-none ${customStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <div className="flex items-center justify-between">
        <span>{children}</span>
        {icon && (
          <div className="pl-5">
            <Image
              className={`block transition-all min-w-[22px] ${iconStyles}`}
              src={arrow}
              alt="arrow"
              width={22}
            ></Image>
          </div>
        )}
      </div>
    </button>
  );
};