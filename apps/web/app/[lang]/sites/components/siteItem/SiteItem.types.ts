import { LocaleProps } from 'intl';
import { Site, SiteHit } from '@models/site.types';
import { HitProps } from 'ui/components/algolia/hits/Hits.types';

export type SiteItemProps = {
  site: Site;
} & LocaleProps;

export type SiteItemHitProps = HitProps & SiteHit;
