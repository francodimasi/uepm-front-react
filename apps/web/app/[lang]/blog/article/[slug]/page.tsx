import { useBlog } from "@api/blog/useBlog";
import { Layout } from "@components/core/layout/Layout";

import { SuggestedPost } from "../../components/SuggestedPost";
import { TrendingTopics } from "../../components/TrendingTopics";
import ArticleTags from "./components/ArticleTags";
import Title from "./components/Title";
import Highlights from "./components/Highlights";
import Recommended from "./components/Recommended";

export default async function Article({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const { getOnePost, getTags } = useBlog()
    const postBlog = await getOnePost(slug)


    return <Layout>
                <div className="container mb-10">
                    <div className="grid grid-cols-12">
                        <section className="col-span-9 pr-16 py-12">
                            <div>
                                <Title title={postBlog.title.rendered} date={postBlog.date} readingTime={postBlog.yoast_head_json.twitter_misc["Tiempo de lectura"]}/>
                                <div dangerouslySetInnerHTML={{__html: postBlog.content.rendered}} />
                                <ArticleTags articleTags={postBlog.tags}/>
                            </div>
                        </section>
                        <Highlights mainPost={postBlog}/>
                    </div>
                    <Recommended tag={postBlog.tags[0]}/>
                </div>
            </Layout>
}