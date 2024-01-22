import clsx from 'clsx';
import { Size } from '../../types/core';

export const getClasses = (open: boolean) => {
  return clsx('py-4 px-2', {
    'bg-gray-light': open,
    'bg-transparent': !open,
  });
};

export const getTitleClasses = (size: Size) => {
  return clsx('font-["Lexend"] font-semibold text-dark px-2', {
    'text-xs leading-3 pb-1': size === 'xs',
    'text-sm leading-4 pb-1.5': size === 'sm',
    'text-base leading-5 pb-2': size === 'md',
    'text-xl leading-6 pb-2.5': size === 'lg',
    'text-[24px] leading-7 pb-3': size === 'xl',
  });
};

export const getContentClasses = (size: Size) => {
  return clsx('font-["DMSans"] text-dark py-0 px-2', {
    'text-xs leading-3': size === 'xs' || size === 'sm',
    'text-sm leading-4': size === 'md',
    'text-base leading-5': size === 'lg',
    'text-xl leading-6': size === 'xl',
  });
};
