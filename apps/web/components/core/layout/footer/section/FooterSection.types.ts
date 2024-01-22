import { LocaleProps } from 'intl';
import { PropsWithClassName } from 'ui/types/core';

export type FooterSectionLinkProps = PropsWithClassName & {
  id: string;
  href: string;
  outbound?: boolean;
  target?: '_blank' | '_self';
};

export type FooterSectionProps = PropsWithClassName &
  LocaleProps & {
    title: string;
    links: FooterSectionLinkProps[];
  };
