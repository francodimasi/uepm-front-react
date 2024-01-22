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
      <div className="hidden xl:flex w-full relative">
        <Tabs
          items={tabItems}
          selected={category}
          onChange={onChange}
          className="flex-1"
        />
        <BlogSearch locale={locale} />
      </div>
      <div className="w-full flex flex-1 relative xl:hidden">
        <div className="flex-1">
          <Select items={tabItems} selected={category} onChange={onChange} />
        </div>
        <BlogSearch locale={locale} />
      </div>
    </>
  );
};
