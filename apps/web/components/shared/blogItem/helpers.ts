import clsx from 'clsx';
import {
  BlogItemImgPosition,
  BlogItemOrientation,
  BlogItemSize,
} from './BlogItem.types';

export const getTagClasses = (size: BlogItemSize): string => {
  switch (size) {
    case 'xs':
    case 'sm':
      return 'pb-1 text-xs font-medium leading-4 font-["DMSans"] uppercase';
    case 'md':
      return 'pb-1 text-sm font-medium leading-4 font-["DMSans"] uppercase';
    case 'lg':
    case 'xl':
      return 'pb-2 text-xs font-medium leading-4 font-["DMSans"] uppercase';
  }
};

export const getTitleClasses = (size: BlogItemSize): string => {
  switch (size) {
    case 'xs':
    case 'sm':
      return clsx(
        'text-sm leading-normal text-dark font-medium font-["Lexend"]',
      );
    case 'md':
      return clsx(
        'text-lg lg:text-[26px] leading-6 lg:leading-8 text-dark font-medium font-["Lexend"]',
      );
    case 'lg':
      return clsx(
        'text-base lg:text-[26px] leading-6 lg:leading-8 text-dark font-medium font-["Lexend"]',
      );
    case 'xl':
      return clsx(
        'text-2xl lg:text-[40px] leading-8 lg:leading-[48px] text-dark font-semibold font-["Lexend"]',
      );
  }
};

export const getDateClasses = (size: BlogItemSize): string => {
  switch (size) {
    case 'xs':
    case 'sm':
      return 'pt-1 text-medium text-xs font-light leading-6 font-["DMSans"] uppercase';
    case 'md':
      return 'pt-1 lg:pt-2 text-medium text-xs font-light leading-6 font-["DMSans"] uppercase';
    case 'lg':
      return 'pt-2 lg:pt-3 text-medium text-xs font-light leading-6 font-["DMSans"] uppercase';
    case 'xl':
      return 'pt-3 lg:pt-4 text-medium text-xs font-light leading-6 font-["DMSans"] uppercase';
  }
};

export const getDescriptionClasses = (size: BlogItemSize): string => {
  switch (size) {
    case 'xs':
      return 'hidden';
    case 'sm':
      return 'hidden';
    case 'md':
      return 'pt-1 lg:pt-2 text-dark text-sm font-light leading-6 font-["DMSans"] line-clamp-3';
    case 'lg':
      return 'pt-2 lg:pt-3 text-dark text-sm font-light leading-6 font-["DMSans"] line-clamp-2';
    case 'xl':
      return 'pt-3 lg:pt-4 text-dark text-base font-light leading-6 font-["DMSans"] line-clamp-4';
  }
};

export const getImgClasses = (
  size: BlogItemSize,
  orientation: BlogItemOrientation,
  imgPosition: BlogItemImgPosition,
): string => {
  switch (size) {
    case 'xs':
      switch (orientation) {
        case 'horizontal':
          switch (imgPosition) {
            case 'start':
              return 'w-20 h-24 shrink-0 me-4';
            case 'end':
              return 'w-20 h-24 shrink-0 ms-4';
          }
        case 'vertical':
          switch (imgPosition) {
            case 'start':
              return 'w-full h-20 shrink-0 mb-4';
            case 'end':
              return 'w-full h-20 shrink-0 mt-4';
          }
      }
    case 'sm':
      switch (orientation) {
        case 'horizontal':
          switch (imgPosition) {
            case 'start':
              return 'w-40 h-32 shrink-0 me-2';
            case 'end':
              return 'w-40 h-32 shrink-0 ms-2';
          }
        case 'vertical':
          switch (imgPosition) {
            case 'start':
              return 'w-full h-24 shrink-0 mb-2';
            case 'end':
              return 'w-full h-24 shrink-0 mt-2';
          }
      }
    case 'md':
      switch (orientation) {
        case 'horizontal':
          switch (imgPosition) {
            case 'start':
              return 'w-48 h-52 shrink-0 me-4';
            case 'end':
              return 'w-48 h-52 shrink-0 ms-4';
          }
        case 'vertical':
          switch (imgPosition) {
            case 'start':
              return 'w-full h-60 shrink-0 mb-4';
            case 'end':
              return 'w-full h-60 shrink-0 mt-4';
          }
      }
    case 'lg':
      switch (orientation) {
        case 'horizontal':
          switch (imgPosition) {
            case 'start':
              return 'w-64 h-64 shrink-0 me-6';
            case 'end':
              return 'w-64 h-64 shrink-0 ms-6';
          }
        case 'vertical':
          switch (imgPosition) {
            case 'start':
              return 'w-full h-60 shrink-0 mb-6';
            case 'end':
              return 'w-full h-60 shrink-0 mt-6';
          }
      }
    case 'xl':
      switch (orientation) {
        case 'horizontal':
          switch (imgPosition) {
            case 'start':
              return 'w-72 h-72 shrink-0 ms-8';
            case 'end':
              return 'w-72 h-72 shrink-0 me-8';
          }
        case 'vertical':
          switch (imgPosition) {
            case 'start':
              return 'w-full h-72 shrink-0 mb-6';
            case 'end':
              return 'w-full h-72 shrink-0 mt-10';
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
