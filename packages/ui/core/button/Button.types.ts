import { PropsWithClassName } from "../../types/core";

export type ButtonProps = PropsWithClassName & {
  variant?: "solid" | "outline" | "clear";
  color?: "primary" | "secondary" | "tertiary" | "light" | "dark";
  href?: string;
};
