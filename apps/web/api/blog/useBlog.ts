import { ENDPOINTS } from "@api/endpoints.conts";
import { useRest } from "rest";
import {
  BlogCategoryTag,
  BlogPost,
  BlogPostFilterParams,
  BlogPostParams,
  VotePostRequest,
} from "./types/blog.types";
import { BlogAuthor } from "./types/author.types";

export const useBlog = () => {
  const { get, post } = useRest();

  const getCategories = async () => {
    const response = await get<BlogCategoryTag[]>(ENDPOINTS.BLOG.CATEGORIES);
    return response;
  };

  const getTags = async () => {
    const res = await fetch(
      ENDPOINTS.BLOG.TAGS,
      {
        next: { revalidate: 3600 },// 60*60 = 1 hour
      }
    );
    const data = await res.json()
    const newTags: {id: number, text: string}[] = data.map( (tag) => {
      return {id: tag.id, text: tag.name} 
    })
    return newTags
  };

  const getOnePost = async (slug: string) => {
    const response = await get<BlogPost[]>(
      `${ENDPOINTS.BLOG.POSTS}?slug=${slug}&_embed=1&context=view`
    );
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
      }
    );
  };

  const getAuthorName = async () => {
    const response = await get<BlogAuthor>(`${ENDPOINTS.BLOG.USERS}`);
    return response;
  };

  const getPostList = async (params: BlogPostFilterParams) => {
    const defaultParams = {
      context: "embed",
      status: "publish",
      per_page: 3,
    };

    const allParams: BlogPostParams = { ...defaultParams, ...params };
    let queryParams = "?";
    const keys = Object.keys(allParams);

    keys.forEach((key, index) => {
      if (allParams[key]) {
        const and = index < keys.length - 1 ? "&" : "";
        let query = `${key}=${allParams[key]}`;
        queryParams += `${query}${and}`;
      }
    });

        const response = await get<BlogPost[]>(
      `${ENDPOINTS.BLOG.POSTS}${queryParams}`
    );

    return response;
  };

  return {
    getCategories,
    getTags,
    getOnePost,
    ratePost,
    getPostList,
    getAuthorName,
  };
};
