'use client';

import { PostListHeader } from './PostListHeader';
import { useState, useEffect } from 'react';
import { getFeaturedPost, getBlogCategoryPostList } from '@api/blog/requests';
import { BlogCategory } from '@api/blog/types/blog.types';
import { BlogFrontPageSkeleton } from './BlogFrontPageSkeleton';
import { PostItem, PostItemProps } from './PostItem';
import { Button } from 'ui/core/button';
import { PostListHeaderSkeleton } from './PostListHeaderSkeleton';

type BlogFrontPageParam = {
  categories: BlogCategory[];
  posts: PostItemProps[];
  featuredPost: PostItemProps;
  defaultCategoryId: Number;
  suggestedPosts: PostItemProps[];
};

export const BlogFrontPage = ({
  categories,
  featuredPost: featuredPostParam,
  suggestedPosts,
  posts: postsParam,
  defaultCategoryId,
}: BlogFrontPageParam) => {
  const defaultCategory = categories.find(
    (category) => category.id === defaultCategoryId,
  );
  const [category, setCategory] = useState(defaultCategory.id);
  const [posts, setPosts] = useState(postsParam);
  const [featuredPost, setFeaturedPost] = useState(featuredPostParam);
  const [loading, setLoading] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const posts = await getBlogCategoryPostList(category);
      setFeaturedPost(await getFeaturedPost(category));
      setPosts(posts);
      setLoading(false);
    };

    fetchData();
  }, [category]);

  useEffect(() => {
    setLoadingPage(false);
  }, []);

  return (
    <div className="relative">
      {loadingPage ? (
        <PostListHeaderSkeleton />
      ) : (
        <PostListHeader
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
      )}
      {loading ? (
        <BlogFrontPageSkeleton />
      ) : (
        <>
          {Object.keys(featuredPost).length > 0 && (
            <div className="col-span-12  mt-6 mb-5  sm:mt-10  border-b-1 border-gray-medium sm:border-0">
              <div>
                <PostItem size="bigger" {...featuredPost} />
              </div>
            </div>
          )}
          <div className="flex flex-col mb-t sm:flex-row sm:gap-12 sm:mt-10 ">
            {Object.keys(posts).length > 0 && (
              <div className="sm:basis-2/3 order-2 sm:order-1">
                <div className="flex flex-col ">
                  {
                    posts.map((post) => (
                      <div key={post.slug} className="sm:h-60 pb-6 mb-5 border-b border-gray-medium sm:mb-5 sm:mt-0 sm:pb-0">
                        <PostItem key={post.slug} size="large" {...post} />
                      </div>
                    ))
                  }
                </div>
              </div>
            )}

            {suggestedPosts.length > 0 && (
              <div className="sm:basis-1/3 order-1 sm:order-2">
                <div className="flex flex-col">
                  <div className=" border-b border-gray-medium mb-6 pb-6 sm:pb-10">
                    <PostItem size="vertical" {...suggestedPosts[0]} />
                  </div>
                  {suggestedPosts.length > 1 && (
                    <div className="sm:border-0 border-b border-gray-medium mb-6 pb-6 sm:pb-10">
                      <PostItem size="vertical" {...suggestedPosts[1]} />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
      <div className="mt-5 text-center ">
        {categories.find((cat) => cat.id === category)?.count > 7 && (
          <Button className="w-full sm:w-auto" href={`/blog/${category}`}>
            Ver mas artículos
          </Button>
        )}
      </div>
    </div>
  );
};
