import { PropsWithClassName, Theme } from '../../types/core';

export type LogoProps = PropsWithClassName & {
  brand: 'uepm' | 'tt';
  type?: Theme;
  width?: number;
  height?: number;
};
