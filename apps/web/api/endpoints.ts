import { BASE_URL, BLOG_BASE_URL } from '@core/constants';

export const ENDPOINTS = {
  SITES: `${BASE_URL}/sites`,
  COUNTRIES: `${BASE_URL}/countries`,
  PARTNERS: `${BASE_URL}/partners`,
  DOCUMENTS: `${BASE_URL}/legal_documents`,
  BLOG: {
    CATEGORIES: `${BLOG_BASE_URL}/categories`,
    TAGS: `${BLOG_BASE_URL}/tags`,
    POSTS: `${BLOG_BASE_URL}/posts`,
    VOTE: `${BLOG_BASE_URL}/vote`,
    USERS: `${BLOG_BASE_URL}/users`,
  },
};
