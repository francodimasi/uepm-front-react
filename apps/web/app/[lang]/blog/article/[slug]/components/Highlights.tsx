import { useBlog } from "@api/blog/useBlog";
import { SuggestedPost } from "@app/[lang]/blog/components/SuggestedPost";
import { TrendingTopics } from "@app/[lang]/blog/components/TrendingTopics";
import Interesting from "./Interesting";
import { PostList } from "@app/[lang]/blog/components/PostList";
import { BlogPost, BlogPostFilterParams } from "@api/blog/types/blog.types";

async function getNextPost(
    //TODO: have to fetch next cronological post, this code gets the absolute newest one
    currentPost : BlogPost, 
    getPostsFn: (params: BlogPostFilterParams) => Promise<BlogPost[]>, 
    getOnePostFn: (slug: string) => Promise<BlogPost> 
    ) {
        const nextPost = await getPostsFn({ _embed: 1, context: "view", page: 1, per_page: 1, categories: currentPost.categories, order: "desc" })
        if (nextPost.length === 0) {
            return null 
        }

        return nextPost[0]
}

export default async function Highlights( {mainPost} : {mainPost: BlogPost}) {
    const { getOnePost, getTags, getPostList } = useBlog()
    const newTags = await getTags()
    const nextPost = await getNextPost(mainPost, getPostList, getOnePost)
    
    return <>
                <SuggestedPost />
                <Interesting blogPost={nextPost}/>
                <TrendingTopics tags={newTags} />
            </>


}

