import Link from "next/link";
import { Container } from "ui/core/container";
import { NavLinks } from "./NavLinks";
import { Logo } from "ui/core/logo";
import { Menu } from "ui/core/menu/Menu";
import { Button } from "ui/core/button";

const links = [
  { label: "Home", href: "/" },
  { label: "News", href: "/" },
  { label: "Partners", href: "/partners" },
];

export const Header = () => {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
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
        </Container>
      </nav>
    </header>
  );
};
