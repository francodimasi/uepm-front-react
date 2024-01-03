import {
  BlogItemImgPosition,
  BlogItemOrientation,
  BlogItemSize,
} from './BlogItem.types';

export const getTagClasses = (size: BlogItemSize): string => {
  switch (size) {
    case 'xs':
    case 'sm':
    case 'md':
      return 'pb-1 text-xs font-medium leading-4 font-["DMSans"] uppercase';
    case 'lg':
    case 'xl':
      return 'pb-2 text-xs font-medium leading-4 font-["DMSans"] uppercase';
  }
};

export const getTitleClasses = (size: BlogItemSize): string => {
  switch (size) {
    case 'xs':
    case 'sm':
      return 'text-sm leading-6 text-dark font-semibold font-["Lexend"] line-clamp-2';
    case 'md':
      return 'text-base leading-6 text-dark font-semibold font-["Lexend"] line-clamp-2';
    case 'lg':
      return 'text-base lg:text-[32px] leading-6 lg:leading-10 text-dark font-semibold font-["Lexend"] line-clamp-2';
    case 'xl':
      return 'text-2xl lg:text-[40px] leading-8 lg:leading-[48px] text-dark font-semibold font-["Lexend"] line-clamp-3';
  }
};

export const getDateClasses = (size: BlogItemSize): string => {
  switch (size) {
    case 'xs':
    case 'sm':
      return 'pt-1 text-medium text-xs font-normal leading-6 font-["DMSans"] uppercase';
    case 'md':
      return 'pt-2 lg:pt-3 text-medium text-xs font-normal leading-6 font-["DMSans"] uppercase';
    case 'lg':
      return 'pt-3 lg:pt-4 text-medium text-xs font-normal leading-6 font-["DMSans"] uppercase';
    case 'xl':
      return 'pt-4 lg:pt-6 text-medium text-xs font-normal leading-6 font-["DMSans"] uppercase';
  }
};

export const getDescriptionClasses = (size: BlogItemSize): string => {
  switch (size) {
    case 'xs':
    case 'sm':
    case 'md':
      return 'pt-2 lg:pt-3 text-dark text-base font-normal leading-6 font-["DMSans"] line-clamp-2';
    case 'lg':
      return 'pt-3 lg:pt-4 text-dark text-base font-normal leading-6 font-["DMSans"] line-clamp-3';
    case 'xl':
      return 'pt-4 lg:pt-6 text-dark text-base font-normal leading-6 font-["DMSans"] line-clamp-4';
  }
};

export const getImgClasses = (
  size: BlogItemSize,
  orientation: BlogItemOrientation,
  imgPosition: BlogItemImgPosition,
): string => {
  switch (size) {
    case 'xs':
    case 'sm':
      switch (orientation) {
        case 'horizontal':
          switch (imgPosition) {
            case 'start':
              return 'pe-2';
            case 'end':
              return 'ps-2';
          }
        case 'vertical':
          switch (imgPosition) {
            case 'start':
              return 'pb-2';
            case 'end':
              return 'pt-2';
          }
      }
    case 'md':
      switch (orientation) {
        case 'horizontal':
          switch (imgPosition) {
            case 'start':
              return 'pe-4';
            case 'end':
              return 'ps-4';
          }
        case 'vertical':
          switch (imgPosition) {
            case 'start':
              return 'pb-4';
            case 'end':
              return 'pt-4';
          }
      }
    case 'lg':
      switch (orientation) {
        case 'horizontal':
          switch (imgPosition) {
            case 'start':
              return 'pe-6';
            case 'end':
              return 'ps-6';
          }
        case 'vertical':
          switch (imgPosition) {
            case 'start':
              return 'pb-8';
            case 'end':
              return 'pt-8';
          }
      }
    case 'xl':
      switch (orientation) {
        case 'horizontal':
          switch (imgPosition) {
            case 'start':
              return '';
            case 'end':
              return '';
          }
        case 'vertical':
          switch (imgPosition) {
            case 'start':
              return '';
            case 'end':
              return '';
          }
      }
  }
};

export const getImgDimensions = (
  size: BlogItemSize,
): { width: number; height: number } => {
  switch (size) {
    case 'xs':
      return { width: 64, height: 96 };
    case 'sm':
      return { width: 96, height: 128 };
    case 'md':
      return { width: 192, height: 224 };
    case 'lg':
      return { width: 296, height: 296 };
    case 'xl':
      return { width: 1024, height: 512 };
  }
};
