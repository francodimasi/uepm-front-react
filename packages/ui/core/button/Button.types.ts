import { PropsWithClassName } from '../../types/core';

export type ButtonFill = 'solid' | 'outline' | 'clear';
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'light'
  | 'dark';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonShape = 'round' | 'square';

export type ButtonProps = PropsWithClassName & {
  type?: 'submit' | 'button';
  fill?: ButtonFill;
  shape?: ButtonShape;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
};
