import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import logo from "public/images/trialtech-logo.svg";

export const Header = () => {
  const links = useMemo(() => {
    return [
      { title: "Dónde operamos", url: "" },
      { title: "Casos de éxito", url: "" },
      { title: "Productos", url: "" },
      { title: "Contacto", url: "" },
      { title: "UEPM", url: "" },
    ];
  }, []);

  return (
    <header className="px-12 py-12 fixed top-0 left-0 w-full">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Image src={logo} width={160} alt="Trialtech logo" />

          <div className="flex items-center">
            <ul className="flex">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="text-light font-sans px-3">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="text-light ml-3 px-5 py-3 border-light border-solid border-1 text-xs uppercase hover:bg-light hover:text-dark cursor-pointer">
              ENG
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
