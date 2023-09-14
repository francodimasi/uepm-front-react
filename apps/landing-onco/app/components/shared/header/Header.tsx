"use client";
import Image from "next/image";
import logo from "public/images/uepm-onco-logo.svg";

import cx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { isMobile, openUrl } from "utils";
import { LandingButton } from "../button/LandingButton";
import { LINKS } from "@/app/constants/links.const";

export const Header = () => {
  const scrollBreakpoint = isMobile() ? 0 : 150;
  const [minimized, setMinimized] = useState<boolean>(false);
  const [headerButton, setHeaderButton] = useState<boolean>(false);

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
  const headerButtonClasses = cx(
    "transition-all",
    {
      "opacity-0": !headerButton,
      "opacity-100": headerButton,
    }
  );

  const loadPosition = (target: Document) => {
    const scrollTop = target.scrollingElement?.scrollTop ?? 0;
    setMinimized(scrollTop > scrollBreakpoint);
  };

  const handleHeaderButton = (target: Document) => {
    const scrollTop = target.scrollingElement?.scrollTop ?? 0;
    setHeaderButton(scrollTop > screen.height / 2);
  }

  useEffect(() => {
    loadPosition(document);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = useCallback(
    (event: Event) => {
      const target = event.target as Document;
      loadPosition(target);
      handleHeaderButton(target);
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
            <div className={headerButtonClasses}>
              <LandingButton
                size="small"
                icon={false}
                onClick={() => openUrl(LINKS.oncoLogin)}
              >
                Ingresar
              </LandingButton>
            </div>
        </nav>
      </div>
    </header>
  );
};
