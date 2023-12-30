import { Theme } from '../../types/core';

export const IconColor = {
  light: '#fcfcfc',
  dark: '#020001',
};

export type IconProps = {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
  color?: Theme;
};
