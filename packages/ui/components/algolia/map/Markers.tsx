'use client';

import { useMemo } from 'react';
import { DivIcon } from 'leaflet';
import { GeoHit, useInfiniteHits } from 'react-instantsearch';
import dynamic from 'next/dynamic';
import { MapMarkerProps, SiteMapHit } from './Map.types';
import { MarkersClusters } from './Clusters';

const Marker = dynamic(
  () => import('react-leaflet').then((module) => module.Marker),
  {
    ssr: false,
  },
);
const Popup = dynamic(
  () => import('react-leaflet').then((module) => module.Popup),
  {
    ssr: false,
  },
);

export default function Markers({ clusters }: MapMarkerProps) {
  const { hits } = useInfiniteHits<GeoHit<SiteMapHit>>();

  const markers = useMemo(
    () =>
      hits?.map((item) => (
        <Marker
          key={item.objectID}
          position={item._geoloc}
          icon={createMarkertIcon()}
          opacity={0.8}
        >
          <Popup>
            <strong>{item.name}</strong>
            <br />
            {item.id}, {item.name}
          </Popup>
        </Marker>
      )),
    [hits],
  );

  return (
    <>{clusters ? <MarkersClusters>{markers}</MarkersClusters> : markers}</>
  );
}

//function createMarkertIcon(item: GeoHit<SiteMapHit>) {
function createMarkertIcon() {
  return new DivIcon({
    className: 'custom-div-icon',
    html: "<div class='marker-pin'></div>",
    iconSize: [30, 42],
    iconAnchor: [15, 42],
  });
}
