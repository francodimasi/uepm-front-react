import { BlogArticle, BlogFilterParams, BlogTag } from '@models/blog.types';
import { getArticles } from '@api/blog/requests';
import { BLOG } from '@api/blog/constants';

export const getArticlesByTag = async function (tag: BlogTag, lang: string) {
  const getArticlesParams: BlogFilterParams = {
    categories: [BLOG.LANG[lang.toUpperCase()]],
    tags: [tag.id],
    per_page: 4,
    page: 1,
    context: 'view',
    order: 'desc',
  };

  try {
    const res = await getArticles(getArticlesParams);
    return res?.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

/**
 * Gets next cronological article from the same category as current article
 * @param current
 * @returns
 */
export const getNextArticle = async function (
  current: BlogArticle,
  lang: string,
) {
  try {
    const res = await getArticles({
      categories: [BLOG.LANG[lang.toUpperCase()]],
      context: 'view',
      page: 1,
      per_page: 1,
      order: 'desc',
      before: current.date,
    });
    if (!res || res.data.length === 0) return null;
    return res.data[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
