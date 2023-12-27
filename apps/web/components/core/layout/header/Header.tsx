import { PropsWithChildren } from 'react';
import { Link } from '@intl/navigation';
import { Logo, Social } from 'ui/components';
import { Menu } from 'ui/core';
import { NavLinks } from '.';
import { LocaleProps } from 'intl';

const links = [
  { label: 'Patients', href: '/' },
  { label: 'Sponsors', href: '/partners' },
  { label: 'Physicians', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Products', href: '/' },
];

type HeaderProps = PropsWithChildren & LocaleProps;

export const Header: React.FC<HeaderProps> = ({ locale }) => (
  <header>
    <nav>
      <div className="relative z-50 flex justify-between px-4 py-4 lg:px-20 lg:py-8">
        <div className="relative z-10 w-full flex items-center gap-16">
          <Link href="/" aria-label="Home" locale={locale}>
            <Logo brand="uepm" className="h-10 w-auto flex" />
          </Link>
          <div className="hidden lg:flex lg:flex-1 lg:gap-10 lg:justify-end">
            <NavLinks links={links} locale={locale} />
          </div>
        </div>
        <Menu items={links} locale={locale}>
          <Social color="dark" />
        </Menu>
      </div>
    </nav>
  </header>
);
