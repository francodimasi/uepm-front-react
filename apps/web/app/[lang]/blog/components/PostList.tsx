"use client";

import { useBlog } from "@api/blog/useBlog";
import { useMemo } from "react";
import { useQuery } from 'react-query';
import { useBlogParser } from "../hooks/useBlogParser";
import { PostItem } from "./PostItem";

export const PostList = () => {

    const { getPostList } = useBlog();
    const { postToPostItem } = useBlogParser();

    const { data } = useQuery({
        queryKey: 'blog_post_list',
        queryFn: () => getPostList({ page: 1, per_page: 6, categories: [37] })
    })

    const postItems = useMemo(() => {
        const items = data?.map(post => postToPostItem(post)) ?? []
        return items;
    }, [data])


    return (
        <>
            <div className="py-12">
                {postItems.map((postItem) => (
                    <PostItem {...postItem} />
                ))}
            </div>
        </>
    )
}