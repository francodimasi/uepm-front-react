import { Pagination } from "@components/pagination/Pagination"
import { PostList } from "./PostList"
import { PostListHeader } from "./PostListHeader"
import { useBlogStore } from "@store/useBlogStore"
import { useCallback } from "react"

export const MainPostList = () => {

    const { category } = useBlogStore();

    const PostListPagination = useCallback(() => {
        if (!category) return <></>;
        return (
            <>
                <PostList
                    queryKey="blog_post_list"
                    filter={{ page: 1, per_page: 6, categories: [category] }}
                />
                <Pagination />
            </>
        )
    }, [category])

    return (
        <>
            <div className="py-12">
                <PostListHeader />
                <PostListPagination />
            </div>
        </>
    )
}