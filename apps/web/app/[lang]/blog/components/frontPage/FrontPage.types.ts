import { BlogCategory } from '@api/blog/types/blog.types';
import { PostItemProps } from '../postItem/PostItem.types';

export type BlogFrontPageParam = {
  categories: BlogCategory[];
  posts: PostItemProps[];
  featuredPost: PostItemProps;
  defaultCategoryId: Number;
  suggestedPosts: PostItemProps[];
};
