import { BlogCategory, BlogItem } from '@models/blog.types';

export type BlogFrontPageParam = {
  categories: BlogCategory[];
  initialCategory: number;
  plainArticles: BlogItem[];
  promotedArticle: BlogItem;
  suggestedArticles: BlogItem[];
};
