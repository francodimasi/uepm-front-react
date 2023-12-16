import Link from "next/link";
import { FooterSectionLinkProps } from "./FooterSection.types";

export const FooterSectionLink: React.FC<FooterSectionLinkProps> = ({
  label,
  link,
}) => {
  return (
    <Link href={link} className="p-1">
      <span className="text-base text-light">{label}</span>
    </Link>
  );
};
