import { BlogItem, BlogItemType } from '@models/blog.types';
import { PropsWithClassName } from 'ui/types/core';

export type BlogItemSkeletonProps = {
  type?: BlogItemType;
};

export type BlogItemOrientation = 'horizontal' | 'vertical';
export type BlogItemSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BlogItemImgPosition = 'start' | 'end';

export type BlogItemContentProps = {
  article: BlogItem;
};

export type BlogItemLayoutProps = PropsWithClassName & {
  layout: {
    imgPosition?: BlogItemImgPosition;
    orientation?: BlogItemOrientation;
    showDescription?: boolean;
    showImg?: boolean;
    size?: BlogItemSize;
    contentClasses?: string;
    imgClasses?: string;
  };
};
