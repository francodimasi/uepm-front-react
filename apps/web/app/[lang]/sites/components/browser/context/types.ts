import { Site } from '@models/site.types';

export type SitesBrowserState = {
  selectedSite: Site;
  sites: Site[];
};
