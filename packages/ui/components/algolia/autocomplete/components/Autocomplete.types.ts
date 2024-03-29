import { Dispatch, SetStateAction } from 'react';
import type { SearchClient } from 'algoliasearch/lite';
import type { BaseItem } from '@algolia/autocomplete-core';
import type { AutocompleteOptions } from '@algolia/autocomplete-js';

export type AutocompleteProps = Partial<AutocompleteOptions<BaseItem>> & {
  searchClient: SearchClient;
  indexName: string;
  className?: string;
  placeholder: string;
  initialValue: string;
  onQuery: (_query: string, _format: string) => void;
};

export type AutocompleteHookProps = {
  searchClient: SearchClient;
  indexName: string;
  categories?: any[];
  setInstantSearchUiState: Dispatch<
    SetStateAction<SetInstantSearchUiStateOptions>
  >;
  onQuery: (_query: string, _format: string) => void;
};

export type SetInstantSearchUiStateOptions = {
  query: string;
  category?: string;
};
