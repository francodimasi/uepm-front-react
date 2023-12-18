import { PropsWithClassName } from '../../types/core';

export type NavLinkProps = PropsWithClassName & {
  label: string;
  href: string;
  hovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};
