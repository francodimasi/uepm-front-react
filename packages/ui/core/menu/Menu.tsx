"use client";
import clsx from "clsx";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuProps, MenuItem } from "./Menu.types";
import { MenuLink } from "./MenuLink";
import { ChevronUpIcon, MenuIcon } from "../icons";

export const Menu: React.FC<MenuProps> = ({ className, children, items }) => {
  return (
    <div className={clsx("flex items-center gap-6", className)}>
      <Popover className="lg:hidden">
        {({ open }) => (
          <>
            <Popover.Button
              className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-dark p-2 hover:bg-dark/50 hover:stroke-dark active:stroke-dark [&:not(:focus-visible)]:focus:outline-none"
              aria-label="Toggle site navigation"
            >
              {({ open }) =>
                open ? (
                  <ChevronUpIcon className="h-6 w-6" />
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
                    className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-light px-6 pb-6 pt-32 shadow-2xl shadow-dark/20"
                  >
                    <div className="flex flex-col space-y-4">
                      {items.map((item: MenuItem, index: number) => (
                        <MenuLink key={index} href={item.href}>
                          {item.label}
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
};
