import clsx from 'clsx';
import {
  ButtonColor,
  ButtonExpand,
  ButtonFill,
  ButtonShape,
  ButtonSize,
} from './Button.types';

const getSizeX = (size: ButtonSize) => {
  switch (size) {
    case 'xs':
      return 4;
    case 'sm':
      return 4;
    case 'md':
      return 6;
    case 'lg':
      return 6;
    case 'xl':
      return 6;
  }
};

const getSizeY = (size: ButtonSize) => {
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

export const getClasses = ({
  size,
  fill,
  shape,
  expand,
  iconOnly,
  color,
  classes,
  disabled,
  childs,
}: {
  size: ButtonSize;
  fill?: ButtonFill;
  shape?: ButtonShape;
  expand?: ButtonExpand;
  iconOnly?: boolean;
  color?: ButtonColor;
  classes?: string;
  disabled?: boolean;
  childs: number;
}) => {
  const buttonClasses = clsx(
    'rounded',
    'flex items-center',
    {
      'w-full sm:w-auto': !iconOnly && !(expand === 'none'),
      'w-auto': iconOnly || expand === 'none',
      'bg-primary text-light': color === 'primary' && fill === 'solid',
      'bg-secondary text-light': color === 'secondary' && fill === 'solid',
      'bg-tertiary text-light': color === 'tertiary' && fill === 'solid',
      'bg-light text-dark': color === 'light' && fill === 'solid',
      'bg-dark text-light': color === 'dark' && fill === 'solid',
      border: fill === 'outline',
      'border-primary text-primary': fill === 'outline' && color === 'primary',
      'border-secondary text-secondary':
        fill === 'outline' && color === 'secondary',
      'border-tertiary text-tertiary':
        fill === 'outline' && color === 'tertiary',
      'border-light text-light': fill === 'outline' && color === 'light',
      'border-dark text-dark': fill === 'outline' && color === 'dark',
      'border-transparent bg-transparent': fill === 'clear',
      'text-primary': fill !== 'solid' && color === 'primary',
      'text-secondary': fill !== 'solid' && color === 'secondary',
      'text-tertiary': fill !== 'solid' && color === 'tertiary',
      'text-light': fill !== 'solid' && color === 'light',
      'text-dark': fill !== 'solid' && color === 'dark',
      'disabled bg-opacity-50': disabled,
      'hover:bg-opacity-75': !disabled,
      'rounded-full': shape === 'round',
      'rounded-none': shape === 'square',
    },
    `text-${size}`,
    `px-${getSizeX(size)}`,
    `py-${getSizeY(size)}`,
    'font-medium',
    'border-2',
    classes,
  );

  const spanClasses = clsx('w-full items-center', {
    'gap-16': expand === 'full',
    'gap-8': expand === 'default',
    'gap-2': expand === 'none',
    'flex justify-between': childs > 1,
    block: childs <= 1,
  });

  return { buttonClasses, spanClasses };
};
