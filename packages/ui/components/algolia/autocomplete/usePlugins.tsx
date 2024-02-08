'use client';

import { Fragment, useMemo } from 'react';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import { AutocompletePlugin } from '@algolia/autocomplete-js';

import { AutocompleteHookProps } from './Autocomplete.types';
import { HIERARCHICAL_ATTRIBUTES, QUERY_SUGGESTIONS } from './constants';

const usePlugins = ({
  searchClient,
  indexName,
  setInstantSearchUiState,
  onQuery,
}: AutocompleteHookProps): {
  plugins: AutocompletePlugin<any, any>[];
  currentCategory?: any;
} => {
  const plugins = useMemo(() => {
    const recentSearches = createLocalStorageRecentSearchesPlugin({
      key: 'instantsearch',
      limit: 3,
      transformSource({ source }) {
        return {
          ...source,
          onSelect({ item }) {
            setInstantSearchUiState({
              query: item.label,
              category: item.category,
            });
            onQuery(item.label, 'suggestion');
          },
        };
      },
    });

    const querySuggestions = createQuerySuggestionsPlugin({
      searchClient,
      indexName: `${indexName}${QUERY_SUGGESTIONS}`,
      getSearchParams() {
        return recentSearches.data!.getAlgoliaSearchParams({
          hitsPerPage: 10,
        });
      },
      categoryAttribute: [
        indexName,
        'facets',
        'exact_matches',
        HIERARCHICAL_ATTRIBUTES[0],
      ],
      transformSource({ source }) {
        return {
          ...source,
          sourceId: 'querySuggestionsPlugin',
          onSelect({ item }) {
            setInstantSearchUiState({
              query: item.query,
              category: item.__autocomplete_qsCategory || '',
            });
            onQuery(item.query, 'suggestion');
          },
          getItems(params) {
            if (!params.state.query) {
              return [];
            }
            return source.getItems(params);
          },
          templates: {
            ...source.templates,
            header() {
              return <Fragment />;
            },
          },
        };
      },
    });

    return [recentSearches, querySuggestions];
  }, [indexName, onQuery, searchClient, setInstantSearchUiState]);

  return { plugins };
};

export default usePlugins;
