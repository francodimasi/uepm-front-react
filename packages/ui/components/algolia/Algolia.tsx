'use client';

import { InstantSearch } from 'react-instantsearch';
import algoliasearch from 'algoliasearch/lite';
import { AlgoliaProps } from './Algolia.types';
import { Autocomplete } from './autocomplete';
import './styles.css';

export const Algolia = ({
  appId,
  apiKey,
  indexName,
  placeholder = '',
  initialValue = '',
  onQuery,
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
      <Autocomplete
        searchClient={searchClient}
        indexName={indexName}
        placeholder={placeholder}
        detachedMediaQuery="none"
        className="w-full"
        initialValue={initialValue}
        onQuery={onQuery}
      />
    </InstantSearch>
  );
};
