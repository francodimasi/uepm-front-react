'use client';

import dynamic from 'next/dynamic';
import { AlgoliaMapProps } from './Map.types';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(
  () => import('react-leaflet').then((module) => module.MapContainer),
  {
    ssr: false,
  },
);

const MapContent = dynamic(
  () => import('./MapContent').then((module) => module.MapContent),
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

export const AlgoliaMap = ({
  className,
  center,
  zoom,
  minZoom,
  maxZoom,
  scrollWheelZoom,
  clusters = false,
}: AlgoliaMapProps) => (
  <MapContainer
    className={className}
    center={center}
    zoom={zoom}
    minZoom={minZoom}
    maxZoom={maxZoom}
    scrollWheelZoom={scrollWheelZoom}
  >
    <MapContent clusters={clusters} />
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
);
