import { BlogArticle, BlogItem } from '@models/blog.types';
import { FormattedTag } from '@models/blog.types';

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
  editorSelection: BlogItem[];
  nextArticle: BlogItem;
  trendingTags: FormattedTag[];
};

export type ArticleContentProps = {
  article: BlogArticle;
};

export type ArticleOfInterestProps = {
  article: BlogItem;
};
