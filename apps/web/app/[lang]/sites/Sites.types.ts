import { Physician } from '@models/physician.types';
import { PropsWithClassName } from 'ui/types/core';

export type SitePerksProps = {
  title: string;
  perks: string[];
};

export type SitePhysiciansProps = {
  title: string;
  physicians: Physician[];
};

export type SiteSpecializationsProps = PropsWithClassName & {
  title: string;
  specializations: string[];
  titleClassName?: string;
};

export type SiteConditionsProps = {
  title: string;
  conditions: string[];
  locale: string;
  seeMore: string;
};
