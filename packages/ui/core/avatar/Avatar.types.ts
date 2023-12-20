import { PropsWithClassName, Size } from '../../types/core';

export type AvatarProps = PropsWithClassName & {
  imageUrl: string;
  alt: string;
  title?: string;
  description?: string;
  href?: string;
  size?: Size;
};
