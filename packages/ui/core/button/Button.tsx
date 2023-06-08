import { forwardRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import { baseStyles, variantStyles } from "./Button.const";
import { ButtonProps } from "./Button.types";

export const Button = forwardRef<any, ButtonProps>(
  ({ variant = "solid", color = "primary", className, href, ...props }, ref) => {
    className = clsx(
      baseStyles[variant],
      variantStyles[variant][color],
      className
    );

    return href ? (
      <Link ref={ref} href={href} className={className} {...props} />
    ) : (
      <button ref={ref} className={className} {...props} />
    );
  }
);
