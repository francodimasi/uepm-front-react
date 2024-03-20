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
    html: `<span><b>${cluster.getChildCount()}</b></span>`,
    className: '!flex justify-center items-center text-light rounded bg-primary-dark',
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
