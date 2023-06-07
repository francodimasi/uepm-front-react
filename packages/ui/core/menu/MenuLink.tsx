import Link from "next/link";
import { Popover } from "@headlessui/react";
import { MenuLinkProps } from "./Menu.types";

export const MenuLink: React.FC<MenuLinkProps> = ({
  className,
  children,
  href,
  ...props
}) => {
  return (
    <Popover.Button as={Link} href={href} className={className} {...props}>
      {children}
    </Popover.Button>
  );
};
