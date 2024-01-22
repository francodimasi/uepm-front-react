import { BlogItem, BlogTag } from '@models/blog.types';

export type FeaturedArticlesProps = {
  articles: BlogItem[];
  tag: Partial<BlogTag>;
};
