'use client';

import { BlogSearch } from '../blogSearch';
import { Select, Tabs } from 'ui/core';
import { BlogFilterHeaderProps } from './BlogFilter.types';
import { defaultLocale, LocaleProps } from 'intl';

export const BlogFilterHeader = ({
  category,
  categories,
  setCategory,
  locale = defaultLocale,
}: BlogFilterHeaderProps & LocaleProps) => {
  const tabItems = categories?.map(({ name, id }) => ({ name, id })) ?? [];

  const onChange = (catID: number) => {
    setCategory(catID);
  };

  return (
    <>
      <div className="hidden sm:flex w-full">
        <Tabs items={tabItems} selected={category} onChange={onChange} />
        <BlogSearch locale={locale} />
      </div>
      <div className="block sm:hidden w-full">
        <Select items={tabItems} selected={category} onChange={onChange} />
      </div>
    </>
  );
};
