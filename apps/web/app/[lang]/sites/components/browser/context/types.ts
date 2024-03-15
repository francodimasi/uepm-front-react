import { AlgoliaSite, Site } from '@models/site.types';

export type SitesBrowserState = {
  showSitePreviewModal: boolean;
  showSitePreview: boolean;
  selectedSite: AlgoliaSite;
  sites: Site[];
};
