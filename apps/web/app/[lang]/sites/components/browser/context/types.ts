import { AlgoliaSite, Site } from '@models/site.types';

export type SitesBrowserState = {
  showSitePreview: boolean;
  selectedSite: AlgoliaSite;
  sites: Site[];
};
