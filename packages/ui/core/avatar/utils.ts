import { Size } from '../../types/core';

export const getImgClasses = (size?: Size) => {
  switch (size) {
    case 'xs':
      return 'w-6 h-6';
    case 'sm':
      return 'w-10 h-10';
    case 'md':
      return 'w-16 h-16';
    case 'lg':
      return 'w-20 h-20';
    case 'xl':
      return 'w-28 h-28';
    case '2xl':
      return 'w-36 h-36';
    case '3xl':
      return 'w-48 h-48';
    case '4xl':
      return 'w-64 h-64';
    default:
      return 'w-full aspect-square';
  }
};
