"use client";
import Image from "next/image";
import logo from "public/images/uepm-onco-logo.svg";

import cx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { isMobile } from "utils";


export const Header = () => {
  const [minimized, setMinimized] = useState<boolean>(false);
  const scrollBreakpoint = isMobile() ? 50 : 150;

  const headerClasses = cx(
    "group fixed top-0 left-0 w-full z-[9999] transition-all",
    {
      "py-4 bg-opacity-70 backdrop-blur": minimized,
      "py-4 lg:py-12": !minimized,
    }
  );

  const bgHeaderClasses = cx(
    "bg-light transition-opacity ease-in-out absolute top-0 left-0 w-full h-full",
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

  return (
    <header className={headerClasses}>
      <div className={bgHeaderClasses}></div>
      <div className="container relative z-10">
        <nav className="flex items-center justify-between">
          <Image
            className="relative z-10 w-40 md:w-48"
            src={logo}
            width={180}
            alt="Trialtech logo"
          />
          <div></div>
        </nav>
      </div>
    </header>
  );
};
