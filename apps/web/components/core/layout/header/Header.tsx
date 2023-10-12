import Link from "next/link";
import { Button } from "ui/core/button";
import { Logo } from "ui/core/logo";
import { Menu } from "ui/core/menu/Menu";
import { NavLinks } from "./NavLinks";

const links = [
  { label: "Home", href: "/" },
  { label: "News", href: "/" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
];

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="container relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto flex" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks links={links} />
            </div>
          </div>
          <Menu items={links}>
            <div className="mt-8 flex flex-col gap-4">
              <Button href="#">I am a physician</Button>
            </div>
          </Menu>
          <Button className="hidden lg:block">I am a physician</Button>
        </div>
      </nav>
    </header>
  );
};
