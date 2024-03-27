'use client';

import { createElement, Fragment, useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';
import {
  autocomplete,
  // getAlgoliaResults,
  Render,
} from '@algolia/autocomplete-js';
import { useSearchBox } from 'react-instantsearch-core';
import { debounce } from '@algolia/autocomplete-shared';
import '@algolia/autocomplete-theme-classic';

import {
  AutocompleteProps,
  SetInstantSearchUiStateOptions,
} from './Autocomplete.types';
import usePlugins from './usePlugins';
// import { debouncePromise } from './helpers';

export const Autocomplete = ({
  searchClient,
  indexName,
  className,
  placeholder,
  initialValue,
  onQuery,
  ...autocompleteProps
}: AutocompleteProps) => {
  const autocompleteContainer = useRef<HTMLDivElement>(null);

  const { query, refine: setQuery } = useSearchBox();

  const [instantSearchUiState, setInstantSearchUiState] =
    useState<SetInstantSearchUiStateOptions>({ query });
  const debouncedSetInstantSearchUiState = debounce(
    setInstantSearchUiState,
    500,
  );

  useEffect(() => {
    setQuery(instantSearchUiState.query);
  }, [instantSearchUiState, setQuery]);

  const { plugins } = usePlugins({
    searchClient,
    indexName,
    setInstantSearchUiState,
    onQuery,
  });

  // const debounced = debouncePromise(
  //   (items: any) => Promise.resolve(items),
  //   1000,
  // );

  useEffect(() => {
    if (!autocompleteContainer.current) {
      return;
    }

    const autocompleteInstance = autocomplete({
      ...autocompleteProps,
      container: autocompleteContainer.current,
      initialState: { query: initialValue },
      placeholder,
      insights: true,
      plugins,
      onReset() {
        setInstantSearchUiState({ query: '' });
        onQuery('', 'free');
      },
      onSubmit({ state }) {
        setInstantSearchUiState({ query: state.query });
        onQuery(state.query, 'free');
      },
      renderer: {
        createElement,
        Fragment,
        render: render as unknown as Render,
      },
      // getSources({ query }) {
      //   return debounced([
      //     {
      //       sourceId: 'querySuggestionsPlugin',
      //       getItems() {
      //         return getAlgoliaResults({
      //           searchClient,
      //           queries: [
      //             {
      //               indexName,
      //               query,
      //             },
      //           ],
      //         });
      //       },
      //       templates: {
      //         item({ item }: { item: any }) {
      //           return item.conditions_ct[0];
      //         },
      //         noResults() {
      //           return 'No results';
      //         },
      //       },
      //     },
      //   ]);
      // },
    });

    return () => autocompleteInstance.destroy();
  }, [
    autocompleteProps,
    debouncedSetInstantSearchUiState,
    onQuery,
    placeholder,
    plugins,
    query,
    initialValue,
    // debounced,
    searchClient,
    indexName,
  ]);

  return <div className={className} ref={autocompleteContainer} />;
};
