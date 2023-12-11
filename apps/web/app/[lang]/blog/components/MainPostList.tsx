import { Pagination } from "@components/pagination/Pagination";
//import { useBlogStore } from "@store/useBlogStore";
import { PostList } from "./PostList";
import { PostListHeader } from "./PostListHeader";
import { BlogCategory } from "../../../../api/blog/types/blog.types";
import { PostItemProps } from "./PostItem"

type MainPostList = {
  posts: PostItemProps[]
  category: BlogCategory,
  categories: BlogCategory[]
  page: number
  pagesCount: number
};

export const MainPostList = ({ posts, category, categories, page, pagesCount }: MainPostList) => {

  return (
    <>
      <div className="relative">
        <PostListHeader  category={category}  categories={categories}/>
        {category && (
          <>
            <PostList
              posts = {posts}
            />
            <Pagination mainPath={`/blog/${category.id}`} actualPage={page} pagesCount={pagesCount} />
          </>
        )}
      </div>
    </>
  );
};
