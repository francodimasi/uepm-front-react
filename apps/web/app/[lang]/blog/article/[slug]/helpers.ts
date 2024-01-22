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

/**
 * Add meta data to the page
 */
export const setMetadata = function ({
  meta,
  url,
  article,
}: {
  meta: any;
  url: string;
  article: BlogArticle;
}) {
  return {
    title: meta.title
      ? meta.title + ' - ' + process.env.NEXT_PUBLIC_COMPANY_NAME
      : article.title.rendered + ' - ' + process.env.NEXT_PUBLIC_COMPANY_NAME,
    description: meta.description
      ? meta.description
      : article['excerpt'].rendered,
    openGraph: {
      title: meta.og_title
        ? meta.og_title + ' - ' + process.env.NEXT_PUBLIC_COMPANY_NAME
        : article.title.rendered + ' - ' + process.env.NEXT_PUBLIC_COMPANY_NAME,
      description: meta.og_description
        ? meta.og_description
        : article['excerpt'].rendered,
      type: 'article',
      siteName: process.env.NEXT_PUBLIC_COMPANY_NAME,
      images:
        typeof meta.og_image !== typeof undefined && meta.og_image[0].url
          ? meta.og_image[0].url
          : process.env.NEXT_PUBLIC_COMPANY_LOGO,
      url: url,
    },
    other: {
      image: article.featured_image_src
        ? article.featured_image_src
        : process.env.NEXT_PUBLIC_COMPANY_LOGO,
    },
  };
};
