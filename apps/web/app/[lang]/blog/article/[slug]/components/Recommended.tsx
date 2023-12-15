import { BlogPost, BlogPostFilterParams } from "@api/blog/types/blog.types"
import Image from "next/image"
import Link from "next/link"


export default async function Recommended({posts, tag} : {posts: BlogPost[], tag: string}) {
    return <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
                <div className="flex justify-between items-center self-stretch">
                    <div className="text-dark text-2xl font-semibold font-['Lexend'] leading-7">Más sobre el tema</div>
                    {/* TODO: check this link. Can blog home filter by tag? */}
                    <Link href={`/en/blog?tag=${tag}`}> 
                        <div className="text-dark text-base font-bold font-['DMSans'] leading-none">Ver más →</div>
                    </Link>
                </div>
                <div className="flex gap-6">
                    { posts.map( (post) => { 
                        return <div key={post.id} className="pb-6 border-b border-gray-medium flex-col justify-start items-start gap-8 inline-flex">
                                    <Image 
                                        src={post._embedded["wp:featuredmedia"][0].link} 
                                        alt={post._embedded["wp:featuredmedia"][0].alt_text}
                                        width={post._embedded["wp:featuredmedia"][0].media_details.width}
                                        height={post._embedded["wp:featuredmedia"][0].media_details.height}
                                    />
                                    <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                                        <div className="self-stretch text-dark text-xs font-normal font-['DMSans'] uppercase leading-none tracking-tight">{post.tags.join(" | ")}</div>
                                        {/* TODO: review locale in link */}
                                        <Link href={`/en/blog/article/${post.slug}`}>
                                            <div className="self-stretch text-dark text-base font-semibold font-['Lexend'] leading-normal">{post.title.rendered}</div>
                                        </Link>
                                        <div className="self-stretch text-dark text-xs font-normal font-['DMSans'] uppercase leading-normal">{post.date}</div>
                                    </div>
                                </div>
                    })}
                </div>
            </div>
}