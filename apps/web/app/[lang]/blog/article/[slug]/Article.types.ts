import { BlogPost } from '@api/blog/types/blog.types';
import { PropsWithClassName } from 'ui/types/core';

export type ArticleProps = {
  params: { slug: string; lang: string };
};

export type ArticleTitleProps = {
  title: string;
  date: string;
  readingTime: string;
  tag: string;
};

export type ArticleRelatedProps = {
  nextArticle: BlogPost;
  trendingTags: FormattedTag[];
};

export type ArticleContentProps = {
  article: BlogPost;
};

export type ArticleTagsProps = PropsWithClassName & {
  tags: string[];
};

export type ArticleOfInterestProps = {
  article: BlogPost;
};

export type FeaturedArticlesProps = {
  articles: BlogPost[];
  tag: string;
};

export type FormattedTag = {
  id: number;
  text: string;
};
