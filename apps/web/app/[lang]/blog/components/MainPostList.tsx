'use client';

import { Pagination } from "@components/pagination/Pagination";
import { PostListHeader } from "./PostListHeader";
import { useState, useEffect } from "react";
import {getPostList } from "@api/blog/requests";
import { BlogCategory } from "@api/blog/types/blog.types";
import { PostListSkeleton } from "./PostListSkeleton";
import { PostList } from "./PostList";

type MainPostList = {
  categories: BlogCategory[]
};

export const MainPostList = ({categories} : MainPostList) => {
  const perPage = 5

  const [category, setCategory] = useState(37);  
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const posts = await getPostList({
        page,
        categories:[category],
        per_page: perPage
      })
      setPosts(posts)
      setLoading(false)
    }

    fetchData()
  }, [category, page]);
  
  const pageCount = Math.ceil(categories.find((c) => c.id === category).count / perPage) 
  return (
    <div className="relative">
      <PostListHeader  category={category}  setCategory={setCategory} categories={categories} setPage={setPage}/>
      {
        loading ? (
          <PostListSkeleton entries={perPage} />
        ) : (
          <PostList
            size="large"
            posts = {posts}
          />
        )
      }
      <div className="mt-5 ">
        <Pagination actualPage={page} pagesCount={pageCount} setPage={setPage}/>
      </div>
      
    </div>
  );
};
