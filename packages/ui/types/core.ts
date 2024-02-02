import { PropsWithChildren } from 'react';

export type PropsWithClassName = PropsWithChildren<{
  className?: string;
}>;

export type Theme = 'light' | 'dark' | 'primary' | 'primaryDark';

export type LogoTheme = 'color' | Theme;

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
