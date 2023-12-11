'use client';

import { BlogCategory } from "@api/blog/types/blog.types";
import { PostSearch } from "./PostSearch";
import { PostTabs } from "./PostTabs";
import { Dispatch, SetStateAction } from "react";


type PostListHeader = {
  category: number,
  categories: BlogCategory[],
  setCategory: Dispatch<SetStateAction<number>>,
  setPage: Dispatch<SetStateAction<number>>,
};

export const PostListHeader = ({category, categories, setCategory, setPage} : PostListHeader) => {
  return (
    <div className="flex m-w-full">
      <PostTabs category={category} categories={categories} setCategory={setCategory} setPage={setPage}/>

      <PostSearch />
    </div>
  );
};
