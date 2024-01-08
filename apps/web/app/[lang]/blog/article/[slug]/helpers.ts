import { BlogArticle, BlogFilterParams, BlogItem } from '@models/blog.types';
import { getArticles, getTagID } from '@api/blog/requests';
import { BLOG } from '@api/blog/constants';

export const getArticlesByTag = async function (tagName: string, lang: string) {
  const getArticlesParams: BlogFilterParams = {
    categories: [BLOG.LANG[lang.toUpperCase()]],
    per_page: 4,
    page: 1,
    context: 'view',
    order: 'desc',
  };

  if (tagName) {
    const tagID = await getTagID(tagName);
    getArticlesParams.tags = [tagID];
  }

  try {
    const articleResponse = await getArticles(getArticlesParams);
    return articleResponse.data;
  } catch (error) {
    console.log(error);
    return null;
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
    const articleResponse = await getArticles({
      categories: [BLOG.LANG[lang.toUpperCase()]],
      context: 'view',
      page: 1,
      per_page: 1,
      order: 'desc',
      before: current.date,
    });
    const followingArticles: BlogItem[] = articleResponse
      ? articleResponse?.data
      : [];

    return followingArticles?.length > 0 ? followingArticles[0] : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
