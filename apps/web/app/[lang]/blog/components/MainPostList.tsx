'use client';

import { Pagination } from "@components/pagination/Pagination";
//import { useBlogStore } from "@store/useBlogStore";
import { PostList } from "./PostList";
import { PostListHeader } from "./PostListHeader";
import { useState, useEffect } from "react";
import {getPostList } from "@api/blog/requests";
import { BlogCategory } from "@api/blog/types/blog.types";

type MainPostList = {
  categories: BlogCategory[]
};

// export const MainPostList = ({ posts, category, categories, page, pagesCount }: MainPostList) => {
  export const MainPostList = ({categories} : MainPostList) => {
  const perPage = 10

  const [category, setCategory] = useState(1);  
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPostList({
        page,
        categories:[category],
        per_page: perPage
      })
      setPosts(posts)
    }

    fetchData()

  }, [category, page]);
  
  const pageCount = Math.ceil(categories.find((c) => c.id === category).count / perPage) 
  return (
    <>
      <div className="relative">
        <PostListHeader  category={category}  setCategory={setCategory} categories={categories} setPage={setPage}/>
        <PostList
          size="large"
          posts = {posts}
        />
        <Pagination actualPage={page} pagesCount={pageCount} onChange={setPage}/>
        
      </div>
    </>
  );
};
