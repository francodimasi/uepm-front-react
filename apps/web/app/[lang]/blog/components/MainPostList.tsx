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
  category?: number,
  itemsPerPage?: number
};

export const MainPostList = ({categories, category: categoryParam, itemsPerPage = 5} : MainPostList) => {

  const [category, setCategory] = useState(categoryParam ? categoryParam : 37);  
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const posts = await getPostList({
        page,
        categories:[category],
        per_page: itemsPerPage
      })
      setPosts(posts)
      setLoading(false)
    }

    fetchData()
  }, [category, page]);
  
  const pageCount = Math.ceil(categories.find((c) => c.id === category).count / itemsPerPage) 
  return (
    <div className="relative">
      {
        categoryParam ? (
          <div className="text-black text-4xl font-semibold font-['Lexend'] leading-10 text-center w-100 border-b-1 border-b-gray-medium pb-5">
            {
              categories.find((cat) => cat.id === categoryParam).name
            }
          </div>
        ) : (
          <PostListHeader  category={category}  setCategory={setCategory} categories={categories} setPage={setPage}/>
        )
      }
      {
        loading ? (
          <PostListSkeleton entries={itemsPerPage} />
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
