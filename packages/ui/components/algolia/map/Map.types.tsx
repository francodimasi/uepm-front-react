import { PropsWithClassName } from 'ui/types/core';
import { Hit } from '../hits/Hits.types';
import { LatLngExpression, Zoom } from 'leaflet';

export type AlgoliaMapProps = PropsWithClassName & {
  scrollWheelZoom?: Zoom | undefined;
  minZoom?: number | undefined;
  zoom?: number | undefined;
  center?: LatLngExpression | undefined;
};

export type SiteMapHit = Hit & {
  id: string;
  name: string;
};
