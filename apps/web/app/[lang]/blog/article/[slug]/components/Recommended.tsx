import Image from 'next/image'
import Link from 'next/link'
import { RecommendedProps } from '../Article.types'


export const Recommended : React.FC<RecommendedProps>= ({posts, tag} ) => {
    if (!posts) return null;

    return <div className="w-full flex-col gap-8 inline-flex pt-2">
                <div className="flex justify-between items-center self-stretch">
                    <div className="text-primary text-2xl font-semibold font-['Lexend'] leading-7">Más sobre el tema</div>
                    {/* TODO: check this link. Can blog home filter by tag? */}
                    <Link href={`/en/blog?tag=${tag}`}> 
                        <div className="text-dark text-base font-bold font-['DMSans'] leading-none">Ver más →</div>
                    </Link>
                </div>
                <div className="flex flex-col justify-between lg:flex-row gap-6">
                    { posts?.map( (post) => { 
                        return <div key={post.id} className="grid grid-cols-3 lg:flex lg:flex-col lg:basis-full pb-6 border-b border-gray-medium gap-6">
                                    {/* Need a generic image for posts without thumbnail? */}
                                    <div className="relative w-[85px] h-[100px] lg:w-full lg:h-[190px]">
                                        <Image className="col-span-1 object-contain"
                                            src={post.thumbnail_image_src}
                                            alt={post.title.rendered}
                                            fill={true}
                                        />
                                    </div>
                                    <div className="col-span-2 col-start-2 lg:flex lg:flex-col self-stretch gap-2">
                                        <div className="self-stretch text-primary text-xs font-normal font-['DMSans'] uppercase leading-none tracking-tight">{post.tags.join(' | ')}</div>
                                        {/* TODO: review locale in link */}
                                        <Link href={`/en/blog/article/${post.slug}`}>
                                            <div className="overflow-ellipsis self-stretch text-dark text-base font-semibold font-['Lexend'] leading-normal">{post.title.rendered}</div>
                                        </Link>
                                        <div className="self-stretch text-dark text-xs font-normal font-['DMSans'] uppercase leading-normal">{post.date}</div>
                                    </div>
                                </div>
                    })}
                </div>
            </div>
}