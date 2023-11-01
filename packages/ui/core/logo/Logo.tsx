import Image from "next/image";
import colorLogo from "ui/assets/logo/tt-logo-color.svg";
import darkLogo from "ui/assets/logo/tt-logo-dark.svg";
import lightLogo from "ui/assets/logo/tt-logo-light.svg";
import { LogoProps } from "./Logo.types";

const getLogo = (type: string = "color") => {
  switch (type) {
    case "color":
      return colorLogo;
    case "dark":
      return darkLogo;
    case "light":
      return lightLogo;
  }
};

export const Logo: React.FC<LogoProps> = ({ className, type }) => {
  return (
    <div className={className}>
      <Image
        height={100}
        width={100}
        priority
        src={getLogo(type)}
        alt="Trialtech"
      />
    </div>
  );
};
