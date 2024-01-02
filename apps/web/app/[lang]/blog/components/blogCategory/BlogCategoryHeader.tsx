'use client';

import { BlogSearch } from '../blogSearch';
import { Select, Tabs } from 'ui/core';
import { BlogCategoryHeaderProps } from './BlogCategory.types';

export const BlogCategoryHeader = ({
  category,
  categories,
  setCategory,
}: BlogCategoryHeaderProps) => {
  const tabItems = categories?.map(({ name, id }) => ({ name, id })) ?? [];

  const onChange = (catID: number) => {
    setCategory(catID);
  };

  return (
    <>
      <div className="hidden sm:flex w-full">
        <Tabs items={tabItems} selected={category} onChange={onChange} />
        <BlogSearch />
      </div>
      <div className="block sm:hidden w-full">
        <Select items={tabItems} selected={category} onChange={onChange} />
      </div>
    </>
  );
};
