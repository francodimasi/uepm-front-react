import { AlgoliaSite } from '@models/site.types';
import { MouseEventHandler } from 'react';

export type SitePreviewProps = {
  site: AlgoliaSite;
  onClose?: MouseEventHandler;
};
