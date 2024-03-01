import { PropsWithClassName } from 'ui/types/core';
import { Hit } from '../hits/Hits.types';

export type AlgoliaMapProps = PropsWithClassName;

export type SiteMapHit = Hit & {
  id: string;
  name: string;
};
