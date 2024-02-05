import { SiteHit, StudyHit } from '../Algolia.types';

export type TextHitProps = {
  hit: StudyHit & SiteHit;
};
