"use client";

import { Pagination } from "@components/pagination/Pagination";
import { PostListHeader } from "./PostListHeader";
import { PostItem } from "./PostItem";

import { useState } from "react";


export const MainPostList = ({posts, categoriesToID}) => {  
  const initialCategory = posts.length > 0 ? categoriesToID.get(posts[0].category[0]) : 1
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPage, setSelectedPage] = useState(1)

  return (
    <>
      <div className="relative">
      <PostListHeader posts={posts} categoriesToID={categoriesToID} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        {selectedCategory && (
          <>
              <div>
                {posts.filter( (post) => {
                  return post.category.map(c => categoriesToID.get(c)).includes(selectedCategory) 
                }).map((post) => (
                  <div
                    key={post.slug}
                  >
                    <PostItem {...post} />
                  </div>
                ))}
              </div>
            <Pagination />
          </>
        )}
      </div>
    </>
  );
};
