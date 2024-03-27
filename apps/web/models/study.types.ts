import { Hit } from 'ui/components/algolia/hits/Hits.types';
import { AlgoliaSite, Site } from './site.types';
import { Country } from './country.types';
import { Sponsor } from './sponsor.types';

export type Study = {
  id: string;
  published: boolean;
  nct_id: string;
  acronym?: string;
  condition_mutations: string[];
  study_type: string;
  overall_status: string;
  official_title: string;
  phase: string;
  enrollment_type: string;
  enrollment: number;
  sponsored: boolean;
  last_update_posted_date: string;
  first_posted_date: string;
  brief_title: string;
  friendly_url?: string;
  keywords: string[];
  conditions_ct: string[];
  brief_summary?: string;
  condition_browse: string[];
  detailed_description: string;
  meta_title: string;
  meta_description: string;
  sites: Site[];
  translations: { [key: string]: Partial<Study> }[];
  hours: number;
  paid_by: string;
  screening_hours: number;
  show_in_referrals_app: boolean;
  id_information: {
    id: string;
    study_id: string;
    org_study_id: string;
    secondary_ids: string[];
    nct_aliases: string[];
  };
  sponsors: Sponsor[];
  countries: Country[];
  conditions: string[];
};

export type AlgoliaStudy = {
  id: string;
  brief_title: string;
  official_title: string;
  conditions_ct: string[];
  keywords: string[];
  nct_id: string;
  acronym: string;
  overall_status: string;
  sites: AlgoliaSite[];
  sponsors: { name: string }[];
  inclusion_criteria: string[];
  exclusion_criteria: string[];
  show_in_referrals_app: boolean;
  sponsored: boolean;
  minimum_age_years: number;
  maximum_age_years: number;
  gender: string;
  last_update_posted_date: string;
};

export type StudyHit = Hit & AlgoliaStudy;
