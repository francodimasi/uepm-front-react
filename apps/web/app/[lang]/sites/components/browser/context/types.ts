import { AlgoliaSite, Site } from '@models/site.types';

export type SitesBrowserState = {
  selectedSite: AlgoliaSite;
  sites: Site[];
};
