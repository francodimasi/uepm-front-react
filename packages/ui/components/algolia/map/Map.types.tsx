import { PropsWithClassName } from 'ui/types/core';
import { Hit } from '../hits/Hits.types';
import { LatLngExpression, Zoom } from 'leaflet';

export type AlgoliaMapProps = PropsWithClassName & {
  scrollWheelZoom?: Zoom | undefined;
  minZoom?: number | undefined;
  maxZoom?: number | undefined;
  zoom?: number | undefined;
  center?: LatLngExpression | undefined;
  clusters?: boolean;
};

export type MapMarkerProps = {
  clusters?: boolean;
};

export type MapSearchAreaProps = {
  disabled: boolean;
  onClick: () => void;
};

export type SiteMapHit = Hit & {
  id: string;
  name: string;
};
