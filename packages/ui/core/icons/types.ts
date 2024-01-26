import { Theme } from '../../types/core';

export const IconStatus = {
  disabled: '#d9d9d9', // The already defined gray-medium
};

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
  disabled?: boolean;
};
