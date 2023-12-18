'use client';

import { PostListHeader } from "./PostListHeader";
import { useState, useEffect } from "react";
import { getPostList } from "@api/blog/requests";
import { BlogCategory } from "@api/blog/types/blog.types";
import { BlogFrontPageSkeleton } from "./BlogFrontPageSkeleton";
import { PostItem, PostItemProps } from "./PostItem";
import { Button } from "ui/core/button";
import { PostListHeaderSkeleton } from "./PostListHeaderSkeleton";

type BlogFrontPage = {
  categories: BlogCategory[]
  posts: PostItemProps[]
  defaultCategoryId: Number
};

export const BlogFrontPage = ({categories, posts: postsParam, defaultCategoryId} : BlogFrontPage) => {
  const defaultCategory = categories.find((category) => category.id === defaultCategoryId)
  const [category, setCategory] = useState(defaultCategory.id);  
  const [posts, setPosts] = useState(postsParam);
  const [loading, setLoading] = useState(true);
  const [loadingHeader, setLoadingHeader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPostList({
        page: 1,
        categories:[category],
        per_page: 7
      })
      setPosts(posts)
      setLoading(false)
    }
    
    fetchData()
  }, [category]);
  
  useEffect(() => {
    setLoadingHeader(false)
  }, []);

  return (
    <div className="relative">
      {
        loadingHeader ? (
          <PostListHeaderSkeleton />
        ) : ( 
          <PostListHeader  category={category}  setCategory={setCategory} categories={categories}/>
        )
      }
      {
        loading ? (
          <BlogFrontPageSkeleton/>
        ) : (
          <>
            <div className="col-span-12  mt-6 mb-6 sm:mt-10 sm:mb-10 border-b-1 border-gray-medium sm:border-0">
              <div>
                  <PostItem size="bigger"  {...posts[6]} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-12 mt-0 ">
              <div className="sm:basis-2/3 order-2 sm:order-1">
                <div className="flex flex-col ">
                  <div className="sm:h-64 pb-6 border-b border-gray-medium sm:mb-5 sm:mt-0 sm:pb-0">
                    <PostItem size="large"  {...posts[0]} />
                  </div>
                  <div className="py-6 sm:py-0 sm:h-64 border-b border-gray-medium sm:my-5">
                    <PostItem size="large"  {...posts[5]} />
                  </div>
                  <div className="py-6 sm:py-0  sm:h-64 border-b border-gray-medium sm:my-5">
                    <PostItem size="large"  {...posts[4]} />
                  </div>
                  <div className="py-6 sm:py-0  sm:h-64 sm:mt-5">
                    <PostItem size="large"  {...posts[3]} />
                  </div>
                </div>
              </div>
              <div className="sm:basis-1/3 order-1 sm:order-2">
                <div className="flex flex-col">
                  <div className=" border-b border-gray-medium mb-6 pb-6 sm:pb-10">
                    <PostItem size="vertical"  {...posts[2]} />
                  </div>
                  <div className="sm:border-0 border-b border-gray-medium mb-6 pb-6 sm:pb-10">
                    <PostItem size="vertical"  {...posts[1]} />
                  </div>
                </div>
              </div>
            </div>
            
            
          </>
        )
      }
      <div className="mt-5 text-center ">
        {
          categories.find((cat) => cat.id === category)?.count > 7 && ( 
            <Button className="w-full sm:w-auto"  href={`/blog/${category}`}>Ver mas artículos</Button>
          )
        }
      </div>
      
    </div>
  );
};
