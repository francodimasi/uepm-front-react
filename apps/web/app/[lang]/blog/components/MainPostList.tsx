import { Pagination } from "@components/pagination/Pagination";
import { useBlogStore } from "@store/useBlogStore";
import { PostList } from "./PostList";
import { PostListHeader } from "./PostListHeader";

export const MainPostList = () => {
  const { category } = useBlogStore();

  return (
    <>
      <div className="relative">
        <PostListHeader />
        {category && (
          <>
            <PostList
              queryKey="blog_post_list"
              filter={{ page: 1, per_page: 6, categories: [category] }}
            />
            <Pagination />
          </>
        )}
      </div>
    </>
  );
};
