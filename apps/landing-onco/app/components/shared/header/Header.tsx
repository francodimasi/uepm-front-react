import Image from "next/image";

import logo from "public/images/uepm-onco-logo.svg";

export const Header = () => {
  return (
    <header className="px-12 py-12 fixed top-0 left-0 w-full z-[9999]">
    <div className="container mx-auto">
      <nav className="flex items-center justify-between">
        <Image src={logo} width={160} alt="Trialtech logo" />
      </nav>
    </div>
  </header>
  );
};
