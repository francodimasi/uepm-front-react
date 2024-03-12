'use client';

import { useEffect } from 'react';
import { Hits, useHits } from 'react-instantsearch';
import { AlgoliaHitsProps } from './Hits.types';
import '../styles.css';

export const AlgoliaHits = ({ className, hit, onChange }: AlgoliaHitsProps) => {
  const { hits } = useHits();

  useEffect(() => {
    onChange(hits);
  }, [hits, onChange]);

  return <Hits className={className} hitComponent={hit} />;
};
