import { LocaleProps } from 'intl';
import { AlgoliaSite, SiteHit } from '@models/site.types';
import { HitProps } from 'ui/components/algolia/hits/Hits.types';

export type SiteItemProps = {
  site: AlgoliaSite;
  selectedSiteAction: string;
} & LocaleProps;

export type SiteItemHitProps = HitProps & SiteHit;
