import { SuggestedPost } from "@app/[lang]/blog/components/SuggestedPost";
import { TrendingTopics } from "@app/[lang]/blog/components/TrendingTopics";
import Interesting from "./Interesting";
import { BlogPost, BlogPostFilterParams } from "@api/blog/types/blog.types";


export default async function Highlights( {nextPost, newTags} : {nextPost: BlogPost, newTags: {
    id: number;
    text: string;
}[]
}) {
    return <>
                <SuggestedPost />
                <Interesting blogPost={nextPost}/>
                <TrendingTopics tags={newTags} />
            </>
}