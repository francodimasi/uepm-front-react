import { LocaleProps } from 'intl';
import { AlgoliaStudy, StudyHit } from '@models/study.types';
import { HitProps } from 'ui/components/algolia/hits/Hits.types';

export type StudyItemProps = {
  study: AlgoliaStudy;
} & LocaleProps;

export type StudyItemHitProps = HitProps & StudyHit;
