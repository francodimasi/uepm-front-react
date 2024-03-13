'use client';

import { AlgoliaMapProps } from './Map.types';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

const MapContainer = dynamic(
  () => import('react-leaflet').then((module) => module.MapContainer),
  {
    ssr: false,
  },
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((module) => module.TileLayer),
  {
    ssr: false,
  },
);

const Markers = dynamic(() => import('./Markers'), { ssr: false });

//https://stackoverflow.com/questions/64665827/react-leaflet-center-attribute-does-not-change-when-the-center-state-changes
const ReCenter = ({
  center = [-34.61, -58.37],
  zoom,
}: {
  center?: LatLngExpression;
  zoom?: number;
}) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

export default function AlgoliaMap({
  className,
  center = [-34.61, -58.37],
  zoom,
  minZoom,
  scrollWheelZoom,
}: AlgoliaMapProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <MapContainer
        className={className}
        center={center}
        zoom={zoom}
        minZoom={minZoom}
        scrollWheelZoom={scrollWheelZoom}
      >
        <ReCenter center={center} zoom={zoom} />
        <Markers />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    )
  );
}
