import type { Hit as AlgoliaHit } from 'instantsearch.js/es/types';
import { PropsWithClassName } from '../../types/core';

export const STUDY = 'Study';
export const SITE = 'Site';
export const ARTICLE = 'Article';

export type Hit = AlgoliaHit<{
  object_type: typeof STUDY | typeof SITE | typeof ARTICLE;
}>;

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

export type SiteHit = Hit & {
  id: string;
  name: string;
};

export type AlgoliaProps = PropsWithClassName & {
  appId: string;
  apiKey: string;
  indexName: string;
  placeholder?: string;
  initialValue?: string;
  onQuery: (_query: string, _format: string) => void;
};
