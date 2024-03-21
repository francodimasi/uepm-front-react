'use client';

import { LocaleProps } from 'intl';
import { Algolia } from 'ui/components';
import { StudiesBrowserProps } from './StudiesBrowser.types';

export const StudiesBrowser = ({
  apiKey,
  appId,
  indexName,
}: StudiesBrowserProps & LocaleProps) => {
  return (
    <Algolia appId={appId} apiKey={apiKey} indexName={indexName}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="flex flex-col col-span-1 lg:col-span-2 gap-1 mb-2">
          <div className="bg-primary-dark">Searchbar</div>
          <div className="bg-primary">Results</div>
          <div className="bg-primary">Results</div>
          <div className="bg-primary">Results</div>
          <div className="bg-primary">Results</div>
          <div className="bg-primary">Results</div>
          <div className="bg-tertiary text-center">Pagination</div>
        </div>
        <div className="hidden lg:flex col-span-1 bg-secondary">Filters</div>
      </div>
    </Algolia>
  );
};
