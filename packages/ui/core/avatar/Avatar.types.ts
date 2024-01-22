import { PropsWithClassName, Size } from '../../types/core';

export type AvatarProps = PropsWithClassName & {
  imageUrl: string | undefined;
  alt: string;
  size?: Size;
};
