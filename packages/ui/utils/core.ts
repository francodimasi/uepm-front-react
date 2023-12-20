import { Size } from '../types/core';

export const getDimensions = (size: Size) => {
  switch (size) {
    case 'xs':
      return 16;
    case 'sm':
      return 24;
    case 'md':
      return 48;
    case 'lg':
      return 64;
    case 'xl':
      return 96;
    case '2xl':
      return 192;
  }
};
