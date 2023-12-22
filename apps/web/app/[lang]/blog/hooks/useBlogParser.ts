import { BlogPost } from '@api/blog/types/blog.types';
import { PostItemProps } from '../components/postItem/PostItem';

export const blogParser = () => {
  const postToPostItem = (post: BlogPost): PostItemProps => {
    const { title, date, featured_image_src, slug, yoast_head_json, category } =
      post;
    const postItem: PostItemProps = {
      category,
      content: yoast_head_json.description,
      date,
      image: featured_image_src,
      slug,
      title: title.rendered,
    };

    return postItem;
  };

  return {
    postToPostItem,
  };
};
