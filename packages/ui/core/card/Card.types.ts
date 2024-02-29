import { PropsWithChildren } from 'react';

export type CardProps = PropsWithChildren & {
  displayClasses?: string;
  paddingClasses?: string;
  marginClasses?: string;
  borderClasses?: string;
  onClick?: () => void;
  disabled: boolean;
};