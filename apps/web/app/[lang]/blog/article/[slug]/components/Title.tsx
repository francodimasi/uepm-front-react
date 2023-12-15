import ShareIcon from "public/images/search-normal.svg"
import Ellipsis from "public/images/Ellipse 1.svg"
import dayjs from 'dayjs'
import LeftArrow from "public/images/Arrow 1.svg"
import Image from 'next/image'
import Link from 'next/link'


export default function Title({title,date, readingTime} : {title:string, date:string, readingTime: string}) {
    return  <div className="w-full h-full flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch justify-between items-center inline-flex">
                {/* TODO: this link needs to consider locale */}
                <Link href="/en/blog/">
                    <Image src={LeftArrow} alt="Back to blog home"></Image>
                </Link>
                <div className="justify-start items-center flex">
                    {/* TODO: add functionality to Share link */}
                    <div className="text-dark text-xs font-normal font-['DMSans'] uppercase leading-normal">Compartir</div>
                    <div className="w-12 px-3 py-4 rounded-[100px] justify-start items-center gap-3 flex">
                        <div className="w-6 h-6 relative"><Image src={ShareIcon} alt="Share this article"></Image></div>
                    </div>
                </div>
            </div>
            <div className="h-full flex-col justify-start items-start gap-12 flex">
                <div className="self-stretch text-dark text-[56px] font-semibold font-['Lexend'] leading-[64px]">{title}</div>
                <div className="justify-start items-center gap-4 inline-flex">
                    <div className="text-dark text-xs font-normal font-['DMSans'] uppercase leading-normal">{dayjs(date).format("d [de] MMMM, YYYY")}</div>
                    <div className="w-[5px] h-[5px] bg-black rounded-full"><Image src={Ellipsis} alt="Ellipsis"></Image></div>
                    <div className="text-dark text-xs font-normal font-['DMSans'] uppercase leading-normal">{readingTime} de lectura</div>
                </div>
            </div>
        </div>
}