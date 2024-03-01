import type { Hit as AlgoliaHit } from 'instantsearch.js/es/types';
import { PropsWithClassName } from '../../../types/core';

export const STUDY = 'Study';
export const SITE = 'Site';
export const ARTICLE = 'Article';

export type Hit = AlgoliaHit<{
  object_type: typeof STUDY | typeof SITE | typeof ARTICLE;
}>;

export type AlgoliaHitsProps = PropsWithClassName & {
  hit: AlgoliaHit<any>;
  onChange: (_hits: AlgoliaHit<any>[]) => void;
};

export type HitProps = {
  hit: Hit;
};
