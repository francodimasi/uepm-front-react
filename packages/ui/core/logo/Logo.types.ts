import { PropsWithClassName } from "../../types/core";

export type LogoProps = PropsWithClassName & {
  brand: "uepm" | "tt"; 
  type?: "color" | "dark" | "light";
};
