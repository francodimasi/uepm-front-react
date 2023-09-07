import Link from "next/link";
export type MenuItemProps = {
  title: string;
  url: string;
};
export type MenuProps = {
  links: MenuItemProps[];
};

export const MenuDesktop = ({ links }: MenuProps) => {
  return (
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
  );
};
