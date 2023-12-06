"use client";

import { Pagination } from "@components/pagination/Pagination";
import { PostListHeader } from "./PostListHeader";
import { PostItem } from "./PostItem";

import { useState } from "react";


export const MainPostList = ({posts, categoriesToID}) => {
  const recordsPerPage = 2  
  const initialCategory = posts.length > 0 ? categoriesToID.get(posts[0].category[0]) : 1
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPage, setSelectedPage] = useState(1)

  const filteredPosts = posts.filter( (post) => {
    return post.category.map(c => categoriesToID.get(c)).includes(selectedCategory) 
  })

  const totalPages = Math.ceil(filteredPosts.length / recordsPerPage)

  const indexOfLastRecord = selectedPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  
  return (
    <>
      <div className="relative">
      <PostListHeader posts={posts} categoriesToID={categoriesToID} setSelectedPage={setSelectedPage} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        {selectedCategory && (
          <>
              <div>
                {filteredPosts.slice(indexOfFirstRecord, indexOfLastRecord).map((post) => (
                  <div
                    key={post.slug}
                  >
                    <PostItem {...post} category={post.category.join(' - ')} />
                  </div>
                ))}
              </div>
            <Pagination selectedPage={selectedPage} setSelectedPage={setSelectedPage} totalPages={totalPages}/>
          </>
        )}
      </div>
    </>
  );
};
