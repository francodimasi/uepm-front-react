import { AlgoliaSite } from '@models/site.types';

export type SitePreviewProps = {
  site: AlgoliaSite;
  onClose: () => void;
};
