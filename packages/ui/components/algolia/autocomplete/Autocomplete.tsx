'use client';

import algoliasearch from 'algoliasearch/lite';
import { AlgoliaAutocompleteProps } from './Autocomplete.types';
import { Autocomplete } from './components';
import '../styles.css';

export const AlgoliaAutocomplete = ({
  appId,
  apiKey,
  indexName,
  placeholder = '',
  initialValue = '',
  onQuery,
}: AlgoliaAutocompleteProps) => {
  const searchClient = algoliasearch(appId, apiKey);

  return (
    <Autocomplete
      searchClient={searchClient}
      indexName={indexName}
      placeholder={placeholder}
      detachedMediaQuery="none"
      className="w-full"
      initialValue={initialValue}
      onQuery={onQuery}
    />
  );
};
