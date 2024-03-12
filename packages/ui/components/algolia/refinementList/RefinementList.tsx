'use client';

import { RefinementList } from 'react-instantsearch';
import { RefinementListProps } from './RefinementList.types';

const transformItems = (items: any[]) => {
  return items.map((item) => ({
    ...item,
    label: item.label.toUpperCase(),
  }));
};

export function AlgoliaRefinementList({
  attribute,
  escapeFacetValues,
  searchable,
  classNames,
}: RefinementListProps) {
  return (
    <RefinementList
      transformItems={transformItems}
      attribute={attribute}
      escapeFacetValues={escapeFacetValues}
      searchable={searchable}
      classNames={classNames}
    />
  );
}
