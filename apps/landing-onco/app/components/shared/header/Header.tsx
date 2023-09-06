import Image from "next/image";

import logo from "public/images/uepm-onco-logo.svg";

export const Header = () => {
  return (
    <header className="py-12 absolute top-0 left-0 w-full z-[9999]">
    <div className="container mx-auto px-4">
      <nav className="flex items-center justify-between">
        <Image src={logo} width={200} alt="Trialtech logo" />
      </nav>
    </div>
  </header>
  );
};
