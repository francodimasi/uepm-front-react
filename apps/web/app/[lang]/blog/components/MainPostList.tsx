'use client';

import { Pagination } from "@components/pagination/Pagination";
import { PostListHeader } from "./PostListHeader";
import { useState, useEffect } from "react";
import {getPostList } from "@api/blog/requests";
import { BlogCategory } from "@api/blog/types/blog.types";
import { MainPostListSkeleton } from "./MainPostListSkeleton";
import { Button } from "ui/core/button";
import { PostItem } from "./PostItem";

type MainPostList = {
  categories: BlogCategory[]
  category: number,
  itemsPerPage?: number
};

export const MainPostList = ({categories, category: categoryParam, itemsPerPage = 5} : MainPostList) => {
  const [category, setCategory] = useState(categoryParam);  
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
  const categoryObj = categories.find((cat) => cat.id === category)

  return (
    <div className="relative">
      <div className="text-black text-4xl font-semibold font-['Lexend'] leading-10 text-center w-100 border-b-1 border-b-gray-medium pb-5 mb-5">
        {
          categoryObj.name
        }
      </div>
      {
        loading ? (
          <MainPostListSkeleton entries={itemsPerPage}/>
        ) : (
          <>
            <div className="flex flex-col">
              {
                posts.map((postItem) => ( 
                  <div key={postItem.slug} className="border-b border-gray-medium mb-6 pb-6 sm:pb-10">
                    <PostItem size='large' {...postItem} />
                  </div>
                ))
              }
            </div>
          </>
        )
      }
      <div className="mt-5 text-center">
        {
          pageCount > 1 && ( 
            <>
            {
              categoryParam ? (
                <Pagination actualPage={page} pagesCount={pageCount} setPage={setPage} />
              ) : (
                <Button href={`/blog/${categoryObj.id}`}>Ver mas artículos</Button>
              )
            }
            </>
          )
        }
      </div>
      
    </div>
  );
};
