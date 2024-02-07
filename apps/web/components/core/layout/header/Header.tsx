import { PropsWithChildren } from 'react';
import { Link } from '@intl/navigation';
import { Logo, Social } from 'ui/components';
import { Menu } from 'ui/core';
import { NavLinks } from '.';
import { LocaleProps, useTranslations } from 'intl';

const links = [
  {
    id: 'patients',
    href: process.env.NEXT_PUBLIC_PRODUCT_PATIENTS,
    outbound: true,
  },
  {
    id: 'sponsors',
    href: process.env.NEXT_PUBLIC_PRODUCT_SPONSORS,
    outbound: true,
  },
  {
    id: 'physicians',
    href: process.env.NEXT_PUBLIC_PRODUCT_PHYSICIANS,
    outbound: true,
  },
  { id: 'aboutUs', href: '/about' },
  { id: 'blog', href: '/blog' },
];

type HeaderProps = PropsWithChildren & LocaleProps;

export const Header: React.FC<HeaderProps> = ({ locale }) => {
  const t = useTranslations('menu.links');
  const menuLinks = links.map((link) => ({ ...link, label: t(link.id) }));
  return (
    <header className="sticky top-0 z-50 bg-gray-light">
      <nav>
        <div className="relative z-50 flex justify-between px-4 py-4 lg:px-20 lg:py-8">
          <div className="relative z-10 w-full flex items-center gap-16">
            <Link href="/" aria-label="Home" locale={locale}>
              <Logo brand="uepm" className="h-10 w-auto flex sm:hidden" />
              <Logo
                brand="uepm"
                className="h-12 w-auto hidden sm:flex lg:hidden"
                height={125}
                width={125}
              />
              <Logo
                brand="uepm"
                className="h-14 w-auto hidden hidden lg:flex"
                height={140}
                width={140}
              />
            </Link>
            <div className="hidden lg:flex lg:flex-1 lg:gap-8 lg:justify-end">
              <NavLinks links={menuLinks} locale={locale} />
            </div>
          </div>
          <Menu items={menuLinks} locale={locale}>
            <Social color="dark" />
          </Menu>
        </div>
      </nav>
    </header>
  );
};
