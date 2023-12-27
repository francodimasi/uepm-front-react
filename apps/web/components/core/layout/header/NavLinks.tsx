'use client';
import { LocaleProps } from 'intl';
import { useState } from 'react';
import { NavLink } from 'ui/core';

type NavLinksProps = {
  links: { label: string; href: string }[];
} & LocaleProps;

export const NavLinks: React.FC<NavLinksProps> = ({ links, locale }) => {
  const [hovered, setHovered] = useState<number>(null);
  return (
    <>
      {links.map(({ label, href }, index) => (
        <NavLink
          key={`header-link-${index}`}
          className="text-base font-normal leading-4 font-['DMSans']"
          label={label}
          href={locale ? `/${locale}${href}` : href}
          hovered={hovered === index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}
    </>
  );
};
