import Link from 'next/link';
import { FooterSectionLinkProps } from './FooterSection.types';
import { useTranslations } from 'intl';
import { P2 } from 'ui/core';

export const FooterSectionLink: React.FC<FooterSectionLinkProps> = ({
  id,
  href,
  outbound = false,
  target,
}) => {
  const t = useTranslations('footer.links');
  return (
    <>
      {outbound ? (
        <a href={href} target={target} className="p-1">
          <P2 className="text-base text-light">{t(id)}</P2>
        </a>
      ) : (
        <Link href={href} className="p-1">
          <P2 className="text-base text-light">{t(id)}</P2>
        </Link>
      )}
    </>
  );
};
