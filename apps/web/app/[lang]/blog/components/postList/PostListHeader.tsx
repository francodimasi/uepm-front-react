'use client';

import { PostSearch } from '../postSearch/PostSearch';
import { Select, Tabs } from 'ui';
import { PostListHeaderProp } from './PostList.types';

export const PostListHeader = ({
  category,
  categories,
  setCategory,
}: PostListHeaderProp) => {
  const tabItems = categories?.map(({ name, id }) => ({ name, id })) ?? [];

  const onChange = (catID: number) => {
    setCategory(catID);
  };

  return (
    <>
      <div className="hidden sm:flex w-full">
        <Tabs items={tabItems} selected={category} onChange={onChange} />
        <PostSearch />
      </div>
      <div className="block sm:hidden w-full">
        <Select items={tabItems} selected={category} onChange={onChange} />
      </div>
    </>
  );
};
