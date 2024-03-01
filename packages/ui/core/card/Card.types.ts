import { PropsWithChildren } from 'react';

export type CardProps = PropsWithChildren & {
  className?: string;
  onClick?: (_el: any) => void;
  disabled?: boolean;
};
