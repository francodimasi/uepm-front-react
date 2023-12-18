import { BlogPost } from '@api/blog/types/blog.types';
import { PostItemProps } from '../components/PostItem';

export const useBlogParser = () => {
  const postToPostItem = (post: BlogPost): PostItemProps => {
    const { title, date, featured_image_src, slug, yoast_head_json } = post;
    const postItem: PostItemProps = {
      category: '@todo categoria / tag',
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
