import { LocaleProps } from 'intl';
import { Site } from '@models/site.types';

export type SiteCardProps = {
  site: Site;
} & LocaleProps;
