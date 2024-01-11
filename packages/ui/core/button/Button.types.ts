import { PropsWithClassName } from '../../types/core';

export type ButtonVariant = 'solid' | 'outline' | 'clear';
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'light'
  | 'dark';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonProps = PropsWithClassName & {
  type?: 'submit' | 'button';
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
};
