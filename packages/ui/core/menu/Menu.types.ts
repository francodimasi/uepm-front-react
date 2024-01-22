import { PropsWithClassName } from '../../types/core';

export type MenuItem = {
  label: string;
  icon?: any;
  href: string;
  outbound?: boolean;
};

export type MenuProps = PropsWithClassName & {
  popover?: boolean;
  items: MenuItem[];
};

export type MenuLinkProps = PropsWithClassName & {
  icon?: any;
  href: string;
};
