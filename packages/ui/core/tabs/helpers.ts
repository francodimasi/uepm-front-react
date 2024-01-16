import clsx from 'clsx';
import { Size } from '../../types/core';

export const getClasses = ({
  size,
  selected,
}: {
  size: Size;
  selected?: boolean;
}) => {
  return clsx(
    'flex whitespace-nowrap text-dark border-b-2 font-["Lexend"] cursor-pointer',
    {
      'font-semibold border-gray-dark': selected,
      'border-gray-light hover:border-gray-medium hover:font-medium': !selected,
      'text-xs leading-3 py-2 px-2': size === 'xs',
      'text-sm leading-4 py-2.5 px-3': size === 'sm',
      'text-base leading-5 py-3 px-4': size === 'md',
      'text-[24px] leading-7 py-4 px-5': size === 'lg',
      'text-[36px] leading-9 py-5 px-6': size === 'xl',
    },
  );
};
