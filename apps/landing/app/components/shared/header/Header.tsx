"use client";

import cx from "classnames";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { isMobile } from "utils";

import close from "public/images/icons/close.svg";
import menu from "public/images/icons/menu.svg";
import logo from "public/images/trialtech-logo.svg";
import { MenuDesktop } from "./menu/MenuDesktop";
import { MenuMobile } from "./menu/MenuMobile";

const mobileBreakpoint = "lg";

export const Header = () => {
  const [minimized, setMinimized] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);
  const scrollBreakpoint = isMobile() ? 50 : 150;
  const links = useMemo(() => {
    return [
      { title: "Dónde operamos", url: "" },
      { title: "Casos de éxito", url: "" },
      { title: "Productos", url: "" },
      { title: "Contacto", url: "" },
      { title: "UEPM", url: "" },
    ];
  }, []);

  const headerClasses = cx(
    "group fixed top-0 left-0 w-full z-[9999] transition-all",
    {
      "py-4 bg-opacity-70 backdrop-blur": minimized,
      "py-4 lg:py-12": !minimized,
    }
  );

  const bgHeaderClasses = cx(
    "bg-dark transition-opacity ease-in-out absolute top-0 left-0 w-full h-full",
    {
      "opacity-0": !minimized,
      "opacity-70": minimized,
    }
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = useCallback(
    (event: Event) => {
      const target = event.target as Document;
      const scrollTop = target.scrollingElement?.scrollTop ?? 0;
      setMinimized(scrollTop > scrollBreakpoint);
    },
    [minimized]
  );

  const handleOpened = useCallback(() => setOpened((opened) => !opened), []);

  return (
    <header className={headerClasses}>
      <div className={bgHeaderClasses}></div>
      <div className="container relative z-10">
        <nav className="flex items-center justify-between">
          <Image
            className="relative z-10"
            src={logo}
            width={160}
            alt="Trialtech logo"
          />
          <div>
            <button className={`${mobileBreakpoint}:hidden relative z-10`} onClick={handleOpened}>
              <Image src={opened ? close : menu} width={24} alt="Menu" />
            </button>

            <div className={`lg:block hidden`}>
              <MenuDesktop links={links}></MenuDesktop>
            </div>
          </div>
        </nav>
      </div>
      <div className={`${mobileBreakpoint}:hidden`}>
        <MenuMobile links={links} opened={opened} breakpoint={mobileBreakpoint}></MenuMobile>
      </div>
    </header>
  );
};
