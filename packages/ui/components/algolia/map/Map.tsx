'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import { AlgoliaMapProps } from './Map.types';
import { Markers } from './Markers';
import 'leaflet/dist/leaflet.css';

export const AlgoliaMap = ({ className }: AlgoliaMapProps) => {
  return (
    <MapContainer
      className={className}
      center={[-34.61, -58.37]}
      zoom={10}
      minZoom={4}
      scrollWheelZoom={true}
    >
      <Markers />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
