import { AlgoliaProps } from '../Algolia.types';

export type AlgoliaAutocompleteProps = AlgoliaProps & {
  placeholder?: string;
  initialValue?: string;
  onQuery: (_query: string, _format: string) => void;
};
