'use client';

import { useState } from 'react';
import { useMap } from 'react-leaflet';
import { DivIcon } from 'leaflet';
import {
  useSearchBox,
  useGeoSearch,
  GeoHit,
  useInfiniteHits,
} from 'react-instantsearch';
import { SiteMapHit } from './Map.types';
import dynamic from 'next/dynamic';
import { Button } from '../../../core';
import { useTranslations, LocaleProps } from 'intl';

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

export default function Markers({}: LocaleProps) {
  const t = useTranslations('sites.browser');
  const { query, refine: refineQuery } = useSearchBox();
  const { hits } = useInfiniteHits<GeoHit<SiteMapHit>>();
  const {
    items,
    refine: refineItems,
    currentRefinement,
    clearMapRefinement,
  } = useGeoSearch<SiteMapHit>();

  const [previousQuery, setPreviousQuery] = useState(query);
  const [skipViewEffect, setSkipViewEffect] = useState(false);

  const map = useMap();

  // When the user moves the map, we clear the query if necessary to only
  // refine on the new boundaries of the map.
  // const onViewChange = ({ target }: { target: any }) => {
  //   setSkipViewEffect(true);

  //   if (query.length > 0) {
  //     refineQuery('');
  //   }

  //   refineItems({
  //     northEast: target.getBounds().getNorthEast(),
  //     southWest: target.getBounds().getSouthWest(),
  //   });
  // };

  // const map = useMapEvents({
  //   zoomend: onViewChange,
  //   dragend: onViewChange,
  // });

  // When the query changes, we remove the boundary refinement if necessary and
  // we center the map on the first result.
  if (query !== previousQuery) {
    if (currentRefinement) {
      clearMapRefinement();
    }

    // `skipViewEffect` allows us to bail out of centering on the first result
    // if the query has been cleared programmatically.
    if (items.length > 0 && !skipViewEffect) {
      map.setView(items[0]._geoloc);
    }

    setSkipViewEffect(false);
    setPreviousQuery(query);
  }

  const onButtonClick = () => {
    setSkipViewEffect(true);

    clearMapRefinement();
    refineQuery('');

    refineItems({
      northEast: map.getBounds().getNorthEast(),
      southWest: map.getBounds().getSouthWest(),
    });
  };

  return (
    <>
      {hits.map((item) => (
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
      ))}
      <div className="absolute z-[1000] justify-end flex mt-3 w-full">
        <Button
          fill="solid"
          size="sm"
          className="!py-2 cursor-pointer me-5 "
          onClick={onButtonClick}
        >
          {t('searchInThisArea')}
        </Button>
      </div>
    </>
  );
}

//function createMarkertIcon(item: GeoHit<SiteMapHit>) {
function createMarkertIcon() {
  return new DivIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color:#4838cc;' class='marker-pin'></div>",
    iconSize: [30, 42],
    iconAnchor: [15, 42],
  });
}
