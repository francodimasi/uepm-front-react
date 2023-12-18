'use client';

import { BlogCategory } from "@api/blog/types/blog.types";
import { PostSearch } from "./PostSearch";
import { Dispatch, SetStateAction } from "react";
import { Select } from "ui";
import { Tabs } from "ui";

type PostListHeader = {
  category: number,
  categories: BlogCategory[],
  setCategory: Dispatch<SetStateAction<number>>
};

export const PostListHeader = ({category, categories, setCategory} : PostListHeader) => {
  const tabItems = categories?.map(({ name, id }) => ({ name, id })) ?? [];

  const onChange = (catID) => {
    setCategory(catID)
  }

  return (
    <>
      <div className="hidden m-w-full sm:flex">
          <Tabs items={tabItems} selected={category} onChange={onChange} />
          <PostSearch />
      </div>
      <div className="block sm:hidden w-full">
        <Select items={tabItems} selected={category} onChange={onChange}/>
      </div>
    </>
  );
};
