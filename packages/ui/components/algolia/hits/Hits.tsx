'use client';

import { useEffect } from 'react';
import { useInfiniteHits } from 'react-instantsearch';
import { AlgoliaHitsProps } from './Hits.types';
import '../styles.css';
import { CustomInfiniteHits } from './CustomInfiniteHits';

export const AlgoliaHits = ({ className, hit, onChange }: AlgoliaHitsProps) => {
  // const { hits } = useHits();
  const { hits } = useInfiniteHits();

  useEffect(() => {
    onChange(hits);
  }, [hits, onChange]);

  return (
    // <InfiniteHits showPrevious={false}  className={className} hitComponent={hit} />
    <CustomInfiniteHits className={className} hit={hit} onChange={onChange} />
  );
};
