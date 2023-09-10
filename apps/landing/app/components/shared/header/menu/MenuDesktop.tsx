import Link from "next/link";
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

        <div className="table text-light ml-3 px-5 py-3 border-light border-solid transition-all border-1 text-xs uppercase hover:bg-light hover:text-dark cursor-pointer">
          ENG
        </div>
      </div>
    </div>
  );
};
