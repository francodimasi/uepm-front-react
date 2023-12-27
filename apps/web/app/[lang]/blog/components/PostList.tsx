'use client';

import { PostItem, PostItemPropsSize } from './PostItem';
import { BlogPostFilterParams } from '@api/blog/types/blog.types';

type PostListProps = {
  size?: PostItemPropsSize;
  queryKey: string;
  filter: BlogPostFilterParams;
};

export const PostList = ({ size }: PostListProps) => {
  return (
    <div className={size === 'vertical' ? 'flex justify-between' : ''}>
      {[].map((postItem) => (
        <div
          className={size === 'vertical' ? 'flex-1 mr-6 last:mr-0' : ''}
          key={postItem.slug}
        >
          <PostItem size={size} {...postItem} />
        </div>
      ))}
    </div>
  );
};
