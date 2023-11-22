import Link from "next/link";
import { LanguageSelector } from "./LanguageSelector";
import { MenuProps } from "./Menu.types";

export const MenuDesktop = ({ links }: MenuProps) => {
  return (
    <div className="top-0 left-0 h-auto w-auto">
      <div className="flex items-center h-full">
        <ul className="flex flex-1">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className="block text-base text-light font-sans my-0 px-3"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <LanguageSelector />
      </div>
    </div>
  );
};
