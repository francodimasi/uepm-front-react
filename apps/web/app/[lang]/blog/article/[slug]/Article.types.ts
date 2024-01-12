import { BlogArticle, BlogItem, BlogTag } from '@models/blog.types';

export type ArticleProps = {
  params: { slug: string; lang: string };
};

export type ArticleTitleProps = {
  title: string;
  date: string;
  readingTime: string;
  tags: BlogTag[];
};

export type ArticleRelatedProps = {
  editorSelection: BlogItem[];
  nextArticle: BlogItem;
  trendingTags: BlogTag[];
};

export type ArticleContentProps = {
  article: BlogArticle;
};

export type ArticleOfInterestProps = {
  article: BlogItem;
};
