"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useEffect, useState, useCallback } from "react";
import cx from "classnames";
import { styled } from "styled-components";

import logo from "public/images/trialtech-logo.svg";
import menu from "public/images/icons/menu.svg";
import { MenuDesktop } from "./menu/MenuDesktop";

export const Header = () => {
  const [minimized, setMinimized] = useState<boolean>(false);
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
    "group fixed top-0 left-0 w-full z-[9999] transition-all px-4 lg:px-0",
    {
      "py-4 bg-opacity-70 backdrop-blur": minimized,
      "py-4 lg:py-12": !minimized,
    }
  );

  const bgHeaderClasses = cx(
    "bg-dark transition-opacity absolute top-0 left-0 w-full h-full",
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
      setMinimized(scrollTop > 150);
    },
    [minimized]
  );

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
          <button className="lg:hidden relative z-10">
            <Image
              src={menu}
              width={24}
              alt="Menu"
            />
          </button>

          <MenuDesktop links={links}></MenuDesktop>
        </nav>
      </div>
    </header>
  );
};

const StyledMenu = styled.div``;
