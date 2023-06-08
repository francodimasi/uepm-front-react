import { Background, Text } from "../constants/colorStyles";

export const baseStyles = {
  solid:
    "inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  outline:
    "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
  clear:
    "inline-flex justify-center rounded-lg py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
};

export const variantStyles = {
  solid: {
    primary: `${Background.primary} ${Text.light}`,
    secondary: `${Background.secondary} ${Text.light}`,
    tertiary: `${Background.tertiary} ${Text.light}`,
    light: `${Background.light} ${Text.light}`,
    dark: `${Background.dark} ${Text.light}`,
  },
  outline: {
    primary: `${Background.light} ${Text.primary}`,
    secondary: `${Background.light} ${Text.secondary}`,
    tertiary: `${Background.light} ${Text.tertiary}`,
    light: `${Background.light} ${Text.dark}`,
    dark: `${Background.light} ${Text.dark}`,
  },
  clear: {
    primary: `${Background.light} ${Text.primary}`,
    secondary: `${Background.light} ${Text.secondary}`,
    tertiary: `${Background.light} ${Text.tertiary}`,
    light: `${Background.light} ${Text.dark}`,
    dark: `${Background.light} ${Text.dark}`,
  },
};
