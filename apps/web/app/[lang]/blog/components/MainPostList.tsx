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
};

export const MainPostList = ({ posts, category, categories }: MainPostList) => {
  //const { category } = useBlogStore();

  return (
    <>
      <div className="relative">
        <PostListHeader  category={category}  categories={categories}/>
        {category && (
          <>
            <PostList
              posts = {posts}
            />
            <Pagination />
          </>
        )}
      </div>
    </>
  );
};
