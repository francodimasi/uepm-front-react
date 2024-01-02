import { PropsWithClassName, LogoTheme } from '../../types/core';

export type LogoProps = PropsWithClassName & {
  brand: 'uepm' | 'tt';
  type?: LogoTheme;
  width?: number;
  height?: number;
};
