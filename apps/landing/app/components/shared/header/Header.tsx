"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useEffect, useState, useCallback } from "react";
import cx from "classnames";
import { styled } from "styled-components";

import logo from "public/images/trialtech-logo.svg";
import menu from "public/images/icons/menu.svg";

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
      <div className="container mx-auto relative z-10">
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

          <div className="bg-dark bg-coverPage bg-cover fixed h-screen w-screen top-0 left-0 lg:h-auto lg:w-auto lg:bg-none lg:bg-transparent lg:static p-4 lg:p-0">
            <div className="flex-col lg:flex-row flex lg:items-center h-full">
              <ul className="lg:flex pt-40 lg:pt-0 flex-1">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="block text-2rem lg:text-base text-light font-sans my-6 lg:my-0 lg:px-3"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="table self-start lg:self-auto text-light lg:ml-3 px-5 py-3 border-light border-solid border-1 text-xs uppercase hover:bg-light hover:text-dark cursor-pointer">
                ENG
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const StyledMenu = styled.div``;
