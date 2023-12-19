import Image from 'next/image'
import Link from 'next/link';
import { InterestingProps } from '../Article.types';


export const Interesting: React.FC<InterestingProps> = ({blogPost}) => {
    return <>
            { blogPost && <div className="pb-6 border-b border-gray-medium flex-col justify-start items-start gap-8 inline-flex">
                <div className="text-primary text-2xl font-semibold font-['Lexend'] leading-7">Te podría interesar</div>
                {/* Need a generic image for posts without thumbnail? */}
                <div className="relative w-[85px] h-[100px] lg:w-[302px] lg:h-[190px]">
                    <Image className="col-span-1 object-contain"
                        src={blogPost.thumbnail_image_src}
                        alt={blogPost.title.rendered}
                        fill={true} />
                </div>
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
            </>
}

