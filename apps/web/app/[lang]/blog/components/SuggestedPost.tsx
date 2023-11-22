"use client";

import { PostList } from "./PostList";

export const SuggestedPost = () => {
  return (
    <div className="pt-12">
      <h3 className="text-2xl font-bold mb-2">Seleccion del Editor</h3>
      <PostList
        queryKey="blog_suggested_posts"
        filter={{ page: 1, per_page: 3, categories: [37] }}
        size="small"
      />
    </div>
  );
};
