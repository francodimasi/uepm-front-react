import { LocaleProps } from 'intl';
import { PropsWithClassName, Size } from 'ui/types/core';

export type Partner = {
  image?: string;
  name: string;
  about?: string;
};

export type PartnersProps = PropsWithClassName &
  LocaleProps & {
    id?: string;
    partners: Partner[];
  };

export type PartnerItemProps = PropsWithClassName &
  LocaleProps & {
    partner: Partner;
    size?: Size;
  };
