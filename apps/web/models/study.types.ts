import { Hit } from 'ui/components/algolia/hits/Hits.types';


export type StudyHit = Hit & {
  id: string;
  brief_title: string;
  official_title: string;
  conditions_ct: string[];
  keywords: string[];
  nct_id: string;
  acronym: string;
  overall_status: string;
  sites: [];
  sponsors: { name: string }[];
  inclusion_criteria: string[];
  exclusion_criteria: string[];
};
