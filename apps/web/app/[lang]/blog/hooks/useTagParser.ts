import { BlogCategoryTag } from "@api/blog/types/blog.types";
import { TagItemProp } from "../components/TrendingTopics";

export const useTagParser = () => {
  const tagToTagItem = (tag: BlogCategoryTag): TagItemProp => {
    const {name, id} = tag;
    const postItem: TagItemProp = {
      name,
      id
    };

    return postItem;
  };

  return {
    tagToTagItem,
  };
};
