import { P2 } from 'ui/core';
import { FooterSectionProps } from './FooterSection.types';
import { FooterSectionLink } from './FooterSectionLink';

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  links,
  locale,
}) => {
  return (
    <div className="flex flex-col ps-2">
      <P2 className="text-light !font-bold p-1 pb-3">{title}</P2>
      {links?.map((link, index) => (
        <FooterSectionLink
          key={index}
          id={link.id}
          href={link.outbound ? link.href : `/${locale}${link.href}`}
          target={link.target || link.outbound ? '_blank' : '_self'}
          outbound={link.outbound}
        />
      ))}
    </div>
  );
};
