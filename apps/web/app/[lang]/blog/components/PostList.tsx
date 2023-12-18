'use client';

import { useBlog } from '@api/blog/useBlog';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useBlogParser } from '../hooks/useBlogParser';
import { PostItem, PostItemPropsSize } from './PostItem';
import { BlogPostFilterParams } from '@api/blog/types/blog.types';

type PostListProps = {
  size?: PostItemPropsSize;
  queryKey: string;
  filter: BlogPostFilterParams;
};

export const PostList = ({ filter, queryKey, size }: PostListProps) => {
  const { getPostList } = useBlog();
  const { postToPostItem } = useBlogParser();

  const { data } = useQuery({
    queryKey: [queryKey, filter],
    queryFn: () => getPostList(filter),
  });

  const postItems = useMemo(() => {
    const items = data?.map((post) => postToPostItem(post)) ?? [];
    return items;
  }, [data]);

  return (
    <>
      <div className={size === 'vertical' ? 'flex justify-between' : ''}>
        {postItems.map((postItem) => (
          <div
            className={size === 'vertical' ? 'flex-1 mr-6 last:mr-0' : ''}
            key={postItem.slug}
          >
            <PostItem size={size} {...postItem} />
          </div>
        ))}
      </div>
    </>
  );
};
