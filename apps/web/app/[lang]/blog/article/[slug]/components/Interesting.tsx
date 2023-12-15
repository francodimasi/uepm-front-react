import { BlogPost } from "@api/blog/types/blog.types";
import Image from 'next/image'
import Link from "next/link";


export default function Interesting({blogPost} : {blogPost : BlogPost}) {
    return <div className="pb-6 border-b border-gray-medium flex-col justify-start items-start gap-8 inline-flex">
                <div className="text-primary text-2xl font-semibold font-['Lexend'] leading-7">Te podría interesar</div>
                <Image 
                    src={blogPost._embedded["wp:featuredmedia"][0].link} 
                    alt={blogPost._embedded["wp:featuredmedia"][0].alt_text}
                    width={blogPost._embedded["wp:featuredmedia"][0].media_details.width}
                    height={blogPost._embedded["wp:featuredmedia"][0].media_details.height}
                />
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-dark text-xs font-normal font-['DMSans'] uppercase leading-none tracking-tight">{blogPost.tags}</div>
                    {/* TODO: review locale in link */}
                    <Link href={`/en/blog/article/${blogPost.slug}`}>
                        <div className="self-stretch text-dark text-base font-semibold font-['Lexend'] leading-normal">{blogPost.title.rendered}</div>
                    </Link>
                    <div className="self-stretch text-dark text-xs font-normal font-['DMSans'] uppercase leading-normal">{blogPost.date}</div>
                </div>
            </div>
}

