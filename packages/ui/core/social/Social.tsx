import Link from "next/link";
import Image from "next/image";
import { SocialProps } from "./Social.types";
import { DEFAULT_NETWORKS } from "./constants";
import clsx from "clsx";

export const Social: React.FC<SocialProps> = ({
  networks,
  color = "light",
  className,
  size = "md",
}) => {
  const nets = networks ?? DEFAULT_NETWORKS[color];

  return (
    <div className={clsx("flex items-center", className)}>
      {nets.map(({ icon, alt, link }, index) => (
        <Link key={index} href={link}>
          <Image
            className="mr-4 sm:mr-0 sm:ml-4 cursor-pointer"
            src={icon}
            alt={alt}
            width={size === "sm" ? 24 : size === "md" ? 32 : 48}
          />
        </Link>
      ))}
    </div>
  );
};
