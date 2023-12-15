import { useBlog } from "@api/blog/useBlog";
import { Layout } from "@components/core/layout/Layout";

import ArticleTags from "./components/ArticleTags";
import Title from "./components/Title";
import Highlights from "./components/Highlights";
import Recommended from "./components/Recommended";
import { ENDPOINTS } from "@api/endpoints.conts";
import { BlogPost, BlogPostFilterParams } from "@api/blog/types/blog.types";


const getRecommendedPosts = async function (
        tagName:string, 
        getPostList: (params: BlogPostFilterParams) => Promise<BlogPost[]>,
        getTagID:  (tagName: string) => Promise<number> ) {
    
    const getPostsParams : BlogPostFilterParams = { 
        per_page: 4, 
        page: 1, 
        context: "view", 
        order: "desc", 
        _embed: 1 
    }
    
    if (tagName) {
        const tagID = await getTagID(tagName)
        getPostsParams.tags=  [tagID]  
    }
    
    const recommendedPosts = await getPostList(getPostsParams)
    return recommendedPosts
}


const getNextPost = async function(
    //TODO: have to fetch next cronological post, this code gets the absolute newest one
    currentPost : BlogPost, 
    getPostsFn: (params: BlogPostFilterParams) => Promise<BlogPost[]> 
    ) {
        const nextPost = await getPostsFn({ _embed: 1, context: "view", page: 1, per_page: 1, categories: currentPost.categories, order: "desc" })
        if (nextPost.length === 0) {
            return null 
        }

        return nextPost[0]
}


export default async function Article({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const { getOnePost, getPostList, getTagID, getTags } = useBlog()

    const postBlog = await getOnePost(slug)
    const tagName = postBlog.tags[0]
    const recommendedPosts = await getRecommendedPosts(tagName, getPostList, getTagID)
    const nextPost = await getNextPost(postBlog, getPostList)
    const tags = await getTags()
    
    return <Layout>
                <div className="container px-4 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <section className="col-span-1 lg:col-span-12">
                            <Title title={postBlog.title.rendered} date={postBlog.date} readingTime={postBlog.yoast_head_json.twitter_misc["Tiempo de lectura"]}/>
                        </section>
                        <section className="col-span-1 lg:col-span-9">
                            <div className="mt-10 lg:mr-32">
                                <div dangerouslySetInnerHTML={{__html: postBlog.content.rendered}} />
                                <ArticleTags articleTags={postBlog.tags}/>
                            </div>
                        </section>
                        <aside className="col-span-1 lg:col-span-3 flex-col justify-start items-start gap-8 hidden lg:inline-flex">
                            <Highlights nextPost={nextPost} newTags={tags}/>
                        </aside>    
                    </div>
                    <Recommended tag={tagName} posts={recommendedPosts}/>
                </div>
            </Layout>
}



//TODO: check if wordpress rate limits these requests, seeing some Socket closed errors during build
//TODO: this may take a long time to build, maybe generate fewer static posts? 
export async function generateStaticParams() {
    let queryParams = "?"
    queryParams += "_fields=slug" //we only care about 'slug' here
    queryParams += "&status=publish"
    queryParams += "&per_page=100"  //maximum allowed
    queryParams += "&order=desc"

    const response = await fetch (`${ENDPOINTS.BLOG.POSTS}${queryParams}`,{
        next: { revalidate: 86400 },// 1 day
    })
    const data = await response.json()
    const postSlugs = data.map((post) => {
        return { slug: post.slug }
    });
    return postSlugs
}