import Link from 'next/link';
import { FooterSectionLinkProps } from './FooterSection.types';
import { useTranslations } from 'intl';

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
          <span className="text-base text-light">{t(id)}</span>
        </a>
      ) : (
        <Link href={href} className="p-1">
          <span className="text-base text-light">{t(id)}</span>
        </Link>
      )}
    </>
  );
};
