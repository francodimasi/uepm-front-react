import { BlogItem, BlogTag } from '@models/blog.types';
import { ReactNode } from 'react';

export type FeaturedArticlesProps = {
  articles: BlogItem[];
  tag?: Partial<BlogTag>;
  alwaysVertical?: boolean;
  title?: ReactNode;
};
