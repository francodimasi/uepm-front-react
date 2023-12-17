'use client';

import { PostList } from './PostList';

export const SuggestedPost = () => {
  return (
    <div className="flex-col justify-start items-start gap-8 inline-flex">
      {/*@todo Pending translation*/}
      <div className="text-teal-600 text-2xl font-semibold font-['Lexend'] leading-7 text-primary">
        Seleccion del Editor
      </div>
      <PostList
        queryKey="blog_suggested_posts"
        filter={{ page: 1, per_page: 3, categories: [37] }}
        size="small"
      />
    </div>
  );
};
