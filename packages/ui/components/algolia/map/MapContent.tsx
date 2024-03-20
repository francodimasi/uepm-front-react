'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import {
  GeoHit,
  useClearRefinements,
  useGeoSearch,
  useInfiniteHits,
  useSearchBox,
} from 'react-instantsearch';
import { useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { AlgoliaMapProps, SiteMapHit } from './Map.types';
import SearchArea from './SearchArea';

const Markers = dynamic(() => import('./Markers'), { ssr: false });

export const MapContent = ({ clusters = false }: Partial<AlgoliaMapProps>) => {
  const map = useMapEvents({
    zoomend: onViewChange,
    dragend: onViewChange,
  });
  const { query } = useSearchBox();
  const { refine: clearFacetsRefinement } = useClearRefinements({
    includedAttributes: ['country'],
  });
  const {
    items,
    refine: refineMap,
    clearMapRefinement,
  } = useGeoSearch<SiteMapHit>();
  const { hits } = useInfiniteHits<GeoHit<SiteMapHit>>();

  const [previousQuery, setPreviousQuery] = useState(query);
  const [showSearchArea, setShowSearchArea] = useState(false);

  /**
   * When the query changes, we remove the map refinement to find all new natching items.
   * After we have new results, we set the view again
   */
  useEffect(() => {
    if (previousQuery !== query) {
      clearMapRefinement();
      setShowSearchArea(false);
      setPreviousQuery(query);
    }
    if (items?.length > 0) {
      map.setView(items[0]?._geoloc);
    }
  }, [query, items, map, previousQuery, clearMapRefinement]);

  /**
   * Fit bounds to contain all markers and clusters
   */
  useEffect(() => {
    const layers = hits?.map((hit) =>
      L.marker({ lat: hit._geoloc.lat, lng: hit._geoloc.lng }).getLatLng(),
    );

    if (layers.length > 0) {
      map.fitBounds(L.latLngBounds(layers));
    }
  }, [map, hits]);

  /**
   * When the user interacts with the map, we let him search in the visible area
   */
  function onViewChange() {
    setShowSearchArea(true);
  }

  const handleMapSearch = () => {
    clearFacetsRefinement();
    clearMapRefinement();
    refineMap({
      northEast: map.getBounds().getNorthEast(),
      southWest: map.getBounds().getSouthWest(),
    });
  };

  return (
    <>
      <Markers clusters={clusters} />
      <SearchArea onClick={handleMapSearch} disabled={!showSearchArea} />
    </>
  );
};
