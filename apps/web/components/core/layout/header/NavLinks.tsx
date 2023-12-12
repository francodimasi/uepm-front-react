"use client";
import { useState } from "react";
import { NavLink } from "ui/core/navigation";

type NavLinksProps = {
  links: { label: string; href: string }[];
};

export const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  const [hovered, setHovered] = useState<number>(null);

  return (
    <>
      {links.map(({ label, href }, index) => (
        <NavLink
          key={`header-link-${index}`}
          className="text-base font-normal leading-4 font-['DMSans']"
          label={label}
          href={href}
          hovered={hovered === index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}
    </>
  );
};
