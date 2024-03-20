'use client';

import dynamic from 'next/dynamic';
import L from 'leaflet';
import { PropsWithClassName } from '../../../types/core';
import { LocaleProps } from 'intl';

const MarkerClusterGroup = dynamic(
  () => import('react-leaflet-cluster').then((module) => module.default),
  {
    ssr: false,
  },
);

const createClusterCustomIcon = function (cluster: any) {
  return L.divIcon({
    html: `<div class="bg-opacity-60 bg-primary-dark w-8 h-8 mx-1 my-1 rounded-md text-center"><span class="leading-8 text-white font-medium">${cluster.getChildCount()}</span></div>`,
    className:
      'bg-opacity-40 bg-primary rounded-md',
    iconSize: L.point(40, 40, true),
  });
};

export const MarkersClusters = ({
  children,
}: PropsWithClassName & LocaleProps) => {
  return (
    <MarkerClusterGroup
      chunkedLoading
      showCoverageOnHover={false}
      iconCreateFunction={createClusterCustomIcon}
    >
      {children}
    </MarkerClusterGroup>
  );
};
