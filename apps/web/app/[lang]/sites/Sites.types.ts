import { Physician } from '@models/physician.types';

export type SitePerksProps = {
  title: string;
  perks: string[];
};

export type SitePhysiciansProps = {
  title: string;
  physicians: Physician[];
};

export type SiteSpecializationsProps = {
  title: string;
  specializations: string[];
};

export type SiteConditionsProps = {
  title: string;
  conditions: string[];
  locale?: string;
  seeMore?: string;
};
