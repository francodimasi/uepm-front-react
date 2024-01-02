import clsx from 'clsx';
import { ButtonColor, ButtonSize, ButtonVariant } from './Button.types';

const getSize = (size: ButtonSize) => {
  switch (size) {
    case 'xs':
      return 2;
    case 'sm':
      return 3;
    case 'md':
      return 4;
    case 'lg':
      return 6;
    case 'xl':
      return 8;
  }
};

export const getClasses = (
  size: ButtonSize,
  variant?: ButtonVariant,
  color?: ButtonColor,
  classes?: string,
  disabled?: boolean,
) => {
  const buttonClasses = clsx(
    'rounded',
    {
      'bg-primary text-light': color === 'primary' && variant === 'solid',
      'bg-secondary text-light': color === 'secondary' && variant === 'solid',
      'bg-tertiary text-light': color === 'tertiary' && variant === 'solid',
      'bg-light text-dark': color === 'light' && variant === 'solid',
      'bg-dark text-light': color === 'dark' && variant === 'solid',
      border: variant === 'outline',
      'border-primary text-primary':
        variant === 'outline' && color === 'primary',
      'border-secondary text-secondary':
        variant === 'outline' && color === 'secondary',
      'border-tertiary text-tertiary':
        variant === 'outline' && color === 'tertiary',
      'border-light text-light': variant === 'outline' && color === 'light',
      'border-dark text-dark': variant === 'outline' && color === 'dark',
      'border-transparent': variant === 'clear',
      'text-primary': variant !== 'solid' && color === 'primary',
      'text-secondary': variant !== 'solid' && color === 'secondary',
      'text-tertiary': variant !== 'solid' && color === 'tertiary',
      'text-light': variant !== 'solid' && color === 'light',
      'text-dark': variant !== 'solid' && color === 'dark',
      'disabled opacity-50': disabled,
      'hover:opacity-75': !disabled,
    },
    `text-${size}`,
    `px-${getSize(size)}`,
    `py-${getSize(size)}`,
    'font-medium',
    'border-2',
    classes,
  );

  return buttonClasses;
};
