'use client';

import { InstantSearch } from 'react-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import { AlgoliaProps } from './Algolia.types';
import './styles.css';

export const Algolia = ({
  appId,
  apiKey,
  indexName,
  children,
}: AlgoliaProps) => {
  const searchClient = algoliasearch(appId, apiKey);

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indexName}
      future={{
        preserveSharedStateOnUnmount: true,
      }}
    >
      {children}
    </InstantSearch>
  );
};
