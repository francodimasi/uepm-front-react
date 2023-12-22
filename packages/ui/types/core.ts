import { PropsWithChildren } from 'react';

export type PropsWithClassName = PropsWithChildren<{
  className?: string;
}>;

export type Theme = 'color' | 'light' | 'dark';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
