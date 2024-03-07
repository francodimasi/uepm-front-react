'use client';

import { AlgoliaMapProps } from './Map.types';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

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

export default function AlgoliaMap({ className }: AlgoliaMapProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
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
    )
  );
}
