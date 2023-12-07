'use client';

import { BlogCategory } from "@api/blog/types/blog.types";
import { PostSearch } from "./PostSearch";
import { PostTabs } from "./PostTabs";

type PostListHeader = {
  category: BlogCategory,
  categories: BlogCategory[]
};

export const PostListHeader = ({category, categories} : PostListHeader) => {
  return (
    <div className="flex m-w-full">
      <PostTabs category={category} categories={categories}/>

      <PostSearch />
    </div>
  );
};
