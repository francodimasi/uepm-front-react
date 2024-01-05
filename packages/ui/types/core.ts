import { PropsWithChildren } from 'react';

export type PropsWithClassName = PropsWithChildren<{
  className?: string;
}>;

export type Theme = 'light' | 'dark';

export type LogoTheme = 'color' | Theme;

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
