'use client';

import { useEffect, useRef } from 'react';
import { useInfiniteHits } from 'react-instantsearch';
import { AlgoliaHitsProps } from './Hits.types';

export const AlgoliaHits = ({
  hit: HitComponent,
  onChange,
}: AlgoliaHitsProps) => {
  const { hits, isLastPage, showMore } =
    useInfiniteHits();
  const sentinelRef = useRef(null);

  useEffect(() => {
    onChange(hits);
  }, [hits, onChange]);

  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(sentinelRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isLastPage, showMore]);

  return (
    <div className="ais-InfiniteHits">
      <ul className="ais-InfiniteHits-list">
        {hits.map((hit) => (
          <li key={hit.objectID} className="ais-InfiniteHits-item">
            <HitComponent hit={hit} />
          </li>
        ))}
        <li className="ais-InfiniteHits-sentinel h-20" ref={sentinelRef} />
      </ul>
    </div>
  );
};
