'use client';

import { SearchBox } from 'react-instantsearch';
import { AlgoliaSearchProps } from './Search.types';

export const AlgoliaSearch = ({ placeholder = '' }: AlgoliaSearchProps) => {
  return <SearchBox placeholder={placeholder} className="searchbox" />;
};
