import { BlogTag } from '@models/blog.types';

export type TrendingTopicsProps = {
  topics: BlogTag[];
  orientation?: 'horizontal' | 'vertical';
};
