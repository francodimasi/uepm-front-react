'use client';
import clsx from 'clsx';
import { Popover } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuProps, MenuItem } from './Menu.types';
import { MenuLink } from './MenuLink';
import { CloseIcon, MenuIcon } from '../icons';
import { LocaleProps } from 'intl';
import { L1 } from '../typography';

export const Menu: React.FC<MenuProps & LocaleProps> = ({
  className,
  children,
  items,
  locale,
}) => (
  <div className={clsx('flex items-center gap-6', className)}>
    <Popover className="lg:hidden">
      {({ open }) => (
        <>
          <Popover.Button
            className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-dark p-2 focus:outline-none"
            aria-label="Toggle site navigation"
          >
            {({ open }) =>
              open ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )
            }
          </Popover.Button>
          <AnimatePresence initial={false}>
            {open && (
              <>
                <Popover.Overlay
                  static
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-0 bg-dark/60 backdrop-blur"
                />
                <Popover.Panel
                  static
                  as={motion.div}
                  initial={{ opacity: 0, y: -32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: -32,
                    transition: { duration: 0.2 },
                  }}
                  className="absolute inset-x-0 top-0 z-0 origin-top bg-light px-6 pb-6 pt-24 shadow-2xl shadow-dark/20 h-screen"
                >
                  <div className="flex flex-col space-y-4 pb-8">
                    {items.map((item: MenuItem, index: number) => (
                      <MenuLink
                        key={index}
                        href={
                          locale && !item.outbound
                            ? `/${locale}${item.href}`
                            : item.href
                        }
                      >
                        <L1 label={item.label} className="font-medium" />
                      </MenuLink>
                    ))}
                  </div>
                  {children}
                </Popover.Panel>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  </div>
);
