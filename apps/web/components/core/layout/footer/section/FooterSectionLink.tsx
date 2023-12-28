import Link from 'next/link';
import { FooterSectionLinkProps } from './FooterSection.types';

export const FooterSectionLink: React.FC<FooterSectionLinkProps> = ({
  label,
  href,
  outbound = false,
  target,
}) => {
  return (
    <>
      {outbound ? (
        <a href={href} target={target} className="p-1">
          <span className="text-base text-light">{label}</span>
        </a>
      ) : (
        <Link href={href} className="p-1">
          <span className="text-base text-light">{label}</span>
        </Link>
      )}
    </>
  );
};
