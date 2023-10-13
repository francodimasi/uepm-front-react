import { Pagination } from "@components/pagination/Pagination"
import { PostList } from "./PostList"
import { PostListHeader } from "./PostListHeader"

export const MainPostList = () => {
    return (
        <>
            <div className="py-12">
                <PostListHeader />
                <PostList
                    queryKey="blog_post_list"
                    filter={{ page: 1, per_page: 6, categories: [37] }}
                />
                <Pagination />
            </div>
        </>
    )
}