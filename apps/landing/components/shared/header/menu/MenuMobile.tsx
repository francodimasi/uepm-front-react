'use client';
import cx from 'classnames';
import Link from 'next/link';
import { useEffect } from 'react';
import { MenuProps } from './Menu.types';
import { LanguageSelector } from './LanguageSelector';

export const MenuMobile = ({ links, opened, breakpoint }: MenuProps) => {
  const menuClasses = cx('right-full transition-transform', {
    'translate-x-full': opened,
  });

  useEffect(() => {
    if (opened) {
      document.body.classList.add('overflow-hidden');
      document.body.classList.add(`${breakpoint}:overflow-visible`);
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove(`${breakpoint}:overflow-visible`);
    }
  }, [opened, breakpoint]);

  return (
    <div
      className={`bg-dark bg-menu bg-cover fixed h-screen w-screen top-0 ${menuClasses}`}
    >
      <div className="container h-full py-4">
        <div className="h-full flex flex-col">
          <ul className="pt-40 flex-1">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="block text-3xl text-light font-sans my-6"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};
