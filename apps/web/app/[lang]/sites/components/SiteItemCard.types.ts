import { LocaleProps } from 'intl';
import { Site } from '@models/site.types';

export type SiteItemCardProps = {
  site: Site;
} & LocaleProps;
