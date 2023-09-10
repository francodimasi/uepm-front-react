import Link from "next/link";
import { MenuProps } from "./Menu.types";
import cx from "classnames";

export const MenuMobile = ({ links, opened }: MenuProps) => {

  const menuClasses = cx('left-full');

  return (
    <div className={`bg-dark bg-coverPage bg-cover fixed h-screen w-screen top-0 ${menuClasses}`}>
      <div className="container h-full py-4">
        <div className="h-full flex flex-col">
          <ul className="pt-40 flex-1">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="block text-2rem text-light font-sans my-6"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="table self-start text-light px-5 py-3 border-light border-solid border-1 text-xs uppercase hover:bg-light hover:text-dark cursor-pointer">
            ENG
          </div>
        </div>
      </div>
    </div>
  );
};
