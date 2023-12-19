import { ENDPOINTS } from '@api/endpoints.conts';
import { useRest } from 'rest';
import {
  BlogCategoryTag,
  BlogPost,
  BlogPostFilterParams,
  BlogPostParams,
  VotePostRequest,
} from './types/blog.types';
import { BlogAuthor } from './types/author.types';

export const useBlog = () => {
  const { get, post } = useRest();

  const getCategories = async () => {
    const response = await get<BlogCategoryTag[]>(ENDPOINTS.BLOG.CATEGORIES);
    return response;
  };

  const getTags = async () => {
    let data
    try {
      const res = await fetch(
        ENDPOINTS.BLOG.TAGS,
        {
          next: { revalidate: 3600 },// 60*60 = 1 hour
        }
      );
      data = await res.json()
    } catch (error) {
      console.log(error)
    }
    const newTags: {id: number, text: string}[] = data.map( (tag) => {
      return {id: tag.id, text: tag.name} 
    })
    return newTags
  };

  const getOnePost = async (slug: string) => {
    let response
    try {
      response = await get<BlogPost[]>(
        `${ENDPOINTS.BLOG.POSTS}?slug=${slug}&_embed=1&context=view`
      );
    } catch (error) {
      console.log(error)
    }
    
    const post = response[0];
    return post;
  };

  /**
   * @todo check if it is necessary
   */
  const ratePost = async (req: VotePostRequest) => {
    const response = await post<any, VotePostRequest>(
      `${ENDPOINTS.BLOG.VOTE}`,
      {
        data: req,
      },
    );
  };

  const getAuthorName = async () => {
    const response = await get<BlogAuthor>(`${ENDPOINTS.BLOG.USERS}`);
    return response;
  };

  const getPostList = async (params: BlogPostFilterParams) => {
    const defaultParams = {
      context: 'embed',
      status: 'publish',
      per_page: 3,
    };

    const allParams: BlogPostParams = { ...defaultParams, ...params };
    let queryParams = '?';
    const keys = Object.keys(allParams);

    keys.forEach((key, index) => {
      if (allParams[key]) {
        const and = index < keys.length - 1 ? '&' : '';
        let query = `${key}=${allParams[key]}`;
        queryParams += `${query}${and}`;
      }
    });

    let response
    try {
      response = await get<BlogPost[]>(
        `${ENDPOINTS.BLOG.POSTS}${queryParams}`,
      );
    } catch (error) {
      console.log(error) 
    }
    return response;
  };

  const getTagID = async (tagName : string) => {
    let data
    try {
      const res = await fetch(
        `${ENDPOINTS.BLOG.TAGS}?search=${tagName}&orderby=name`,
        {
          next: { revalidate: 86400 },// 1 day (should never change though)
        }
      );
      data = await res.json()
    } catch (error) {
      console.log(error);
    }

    if (data.length == 0) {
      return null
    }

    const id:number= data[0].id
    return id 
  }

  return {
    getCategories,
    getTags,
    getOnePost,
    ratePost,
    getPostList,
    getAuthorName,
    getTagID,
  };
};
