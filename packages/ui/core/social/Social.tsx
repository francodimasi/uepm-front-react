import Link from "next/link";
import Image from "next/image";
import { SocialProps } from "./Social.types";
import { DEFAULT_NETWORKS } from "./constants";

export const Social: React.FC<SocialProps> = ({
  networks = DEFAULT_NETWORKS,
}) => {
  return (
    <div className="flex flex-col justify-between sm:block">
      <div className="flex sm:justify-end">
        {networks.map(({ icon, alt, link }, index) => (
          <Link href={link}>
            <Image
              key={index}
              className="mr-4 sm:mr-0 sm:ml-4 cursor-pointer"
              src={icon}
              alt={alt}
              width={32}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
