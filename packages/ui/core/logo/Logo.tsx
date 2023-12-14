import Image from "next/image";
import { LogoProps } from "./Logo.types";
import { getLogo } from "./utils";

export const Logo: React.FC<LogoProps> = ({ className, brand, type }) => {
  return (
    <div className={className}>
      <Image
        height={100}
        width={100}
        priority
        src={getLogo(brand, type)}
        alt="Trialtech"
      />
    </div>
  );
};
