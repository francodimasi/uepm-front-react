import { AlgoliaSite } from '@models/site.types';
import { MouseEventHandler } from 'react';

export type SitePreviewContentProps = {
  site: AlgoliaSite;
  onClose?: MouseEventHandler;
};
