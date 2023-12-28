import { BlogPost } from '@api/blog/types/blog.types';
import { PostItemProps } from '../components/postItem/PostItem.types';

export const blogParser = () => {
  const postToPostItem = (post: BlogPost): PostItemProps => {
    const { title, date, featured_image_src, slug } = post;
    const content = post['yoast_head_json']['description'];
    const postItem: PostItemProps = {
      category: ['@todo categoria / tag'],
      content,
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
