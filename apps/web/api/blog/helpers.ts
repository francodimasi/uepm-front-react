import { BlogArticle, BlogItem } from '@models/blog.types';

export const parseArticleItem = (article: BlogArticle): BlogItem => {
  const { title, date, featured_image_src, slug, category, tags } = article;
  const content = article['yoast_head_json']['description'];

  const item: BlogItem = {
    category: category,
    content,
    date,
    image: featured_image_src,
    slug,
    title: title.rendered,
    tags,
  };

  return item;
};
