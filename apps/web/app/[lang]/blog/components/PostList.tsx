"use client";

import { PostItem, PostItemPropsSize, PostItemProps } from "./PostItem";

type PostListProps = {
  size?: PostItemPropsSize;
  posts: PostItemProps[]
};

export const PostList = ({size, posts}: PostListProps) => {
  return (
    <>
      <div className={size === "vertical" ? "flex justify-between" : (size === 'small' ? "h-96 flex-col justify-start items-start gap-4 inline-flex" : "mt-10 space-y-6 lg:space-y-6")}>
        {posts?.map((postItem) => (
          <div
            className={size === "vertical" ? "flex-1  last:mr-0" : ""}
            key={postItem.slug}
          >
            <PostItem size={size} {...postItem} />
          </div>
        ))}
      </div>
    </>
  );
};
