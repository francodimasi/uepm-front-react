import { BlogPost } from "@api/blog/types/blog.types";
import Image from 'next/image'

export default function Interesting({blogPost} : {blogPost : BlogPost}) {
    return <div className="w-[302px] h-[339px] pb-6 border-b border-black border-opacity-10 flex-col justify-start items-start gap-8 inline-flex">
                <div className="w-[238px] text-teal-600 text-2xl font-semibold font-['Lexend'] leading-7">Te podría interesar</div>
                <div className="h-[266px] flex-col justify-start items-start gap-4 flex">
                    <div className="w-[302px] h-[190px] justify-center items-center inline-flex">
                        <Image 
                            className="grow shrink basis-0 self-stretch" 
                            src={blogPost._embedded["wp:featuredmedia"][0].link} 
                            alt={blogPost._embedded["wp:featuredmedia"][0].alt_text}
                            width={blogPost._embedded["wp:featuredmedia"][0].media_details.width}
                            height={blogPost._embedded["wp:featuredmedia"][0].media_details.height}
                        />
                    </div>
                    <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                            <div className="self-stretch h-11 flex-col justify-start items-start gap-1 flex">
                                <div className="py-1 rounded-[100px] justify-end items-center gap-2 inline-flex">
                                    <div className="text-black text-xs font-normal font-['DM Sans'] uppercase leading-none tracking-tight">{blogPost.tags}</div>
                                </div>
                                <div className="self-stretch text-black text-base font-semibold font-['Lexend'] leading-normal">{blogPost.title.rendered}</div>
                                <div className="self-stretch text-black text-xs font-normal font-['DM Sans'] uppercase leading-normal">{blogPost.date}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

