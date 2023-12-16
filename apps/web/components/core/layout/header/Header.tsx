import Link from "next/link";
import { Logo } from "ui/core/logo";
import { Menu } from "ui/core/menu";
import { Social } from "ui/core/social";
import { NavLinks } from ".";

const links = [
  { label: "Patients", href: "/" },
  { label: "Sponsors", href: "/partners" },
  { label: "Physicians", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Products", href: "/" },
];

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="relative z-50 flex justify-between px-4 py-4 lg:px-20 lg:py-8">
          <div className="relative z-10 w-full flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo brand="uepm" className="h-10 w-auto flex" />
            </Link>
            <div className="hidden lg:flex lg:flex-1 lg:gap-10 lg:justify-end">
              <NavLinks links={links} />
            </div>
          </div>
          <Menu items={links}>
            <Social color="dark" />
          </Menu>
        </div>
      </nav>
    </header>
  );
};
