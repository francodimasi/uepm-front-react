import { useBlog } from '@api/blog/useBlog';
import { Layout } from '@components/core/layout/Layout';

import { ArticleTags } from './components/ArticleTags';
import { Title } from './components/Title';
import { Highlights } from './components/Highlights';
import { Recommended } from './components/Recommended';
import { ENDPOINTS } from '@api/endpoints.conts';
import { BlogPost, BlogPostFilterParams } from '@api/blog/types/blog.types';
import { ArticleProps } from './Article.types';

const DAY_IN_SECONDS  = 86400

const getRecommendedPosts = async function (
        tagName:string, 
        getPostListFn: Function, //(params: BlogPostFilterParams) => Promise<BlogPost[]>
        getTagIDFn:  Function) { //(tagName: string) => Promise<number> ) {
    
    const getPostsParams : BlogPostFilterParams = { 
        per_page: 4, 
        page: 1, 
        context: 'view', 
        order: 'desc', 
    }
    
    if (tagName) {
        const tagID = await getTagIDFn(tagName)
        getPostsParams.tags = [tagID]  
    }
    
    const recommendedPosts = await getPostListFn(getPostsParams)
    return recommendedPosts
}

// Gets next cronological post from the same category as current post 
const getNextPost = async function(
    currentPost : BlogPost, 
    getPostsFn: Function //(params: BlogPostFilterParams) => Promise<BlogPost[]> 
    ) {
        const nextPost = await getPostsFn(
            { 
                context: 'view', 
                page: 1, 
                per_page: 1, 
                categories: currentPost.categories, 
                order: 'desc',
                before: currentPost.date
            })
        
        if (nextPost.length === 0) {
            return null 
        }

        return nextPost[0]
}


const Article : React.FC<ArticleProps> = async ({ params }) => {
    const { slug } = params

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
                            <Title title={postBlog.title.rendered} date={postBlog.date} readingTime={postBlog.yoast_head_json.twitter_misc['Tiempo de lectura']}/>
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
    //Grab only the slug field for the 100 most recent posts
    const queryParams = '?_fields=slug&status=publish&per_page=100&order=desc'

    const response = await fetch (`${ENDPOINTS.BLOG.POSTS}${queryParams}`,{
        next: { revalidate: DAY_IN_SECONDS },
    })
    const data = await response.json()
    const postSlugs = data.map((post) => {
        return { slug: post.slug }
    });
    return postSlugs
}


export default Article;