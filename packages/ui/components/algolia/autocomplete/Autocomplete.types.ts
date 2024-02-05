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
  onQuery: Dispatch<SetStateAction<string>>;
};

export type AutocompleteHookProps = {
  searchClient: SearchClient;
  indexName: string;
  categories?: any[];
  setInstantSearchUiState: Dispatch<
    SetStateAction<SetInstantSearchUiStateOptions>
  >;
  onQuery: Dispatch<SetStateAction<string>>;
};

export type SetInstantSearchUiStateOptions = {
  query: string;
  category?: string;
};
