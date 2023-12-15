import { useBlog } from "@api/blog/useBlog";
import { Layout } from "@components/core/layout/Layout";

import { SuggestedPost } from "../../components/SuggestedPost";
import { TrendingTopics } from "../../components/TrendingTopics";
import ArticleTags from "./components/ArticleTags";
import Title from "./components/Title";
import Highlights from "./components/Highlights";
import Recommended from "./components/Recommended";
import { ENDPOINTS } from "@api/endpoints.conts";

export default async function Article({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const { getOnePost, getTags } = useBlog()
    const postBlog = await getOnePost(slug)
    const tagName = postBlog.tags[0]

    return <Layout>
                <div className="container mb-10">
                    <div className="grid grid-cols-12 px-10">
                        <section className="col-span-12 pr-16">
                            <Title title={postBlog.title.rendered} date={postBlog.date} readingTime={postBlog.yoast_head_json.twitter_misc["Tiempo de lectura"]}/>
                        </section>
                        <section className="col-span-9 pr-16">
                            <div>
                                <div dangerouslySetInnerHTML={{__html: postBlog.content.rendered}} />
                                <ArticleTags articleTags={postBlog.tags}/>
                            </div>
                        </section>
                        <aside className="col-span-3 flex-col justify-start items-start gap-8 inline-flex">
                            <Highlights mainPost={postBlog}/>
                        </aside>    
                    </div>
                    <Recommended tagName={tagName}/>
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