'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import ShareIcon from "public/images/search-normal.svg"
import Ellipsis from "public/images/Ellipse 1.svg"
import LeftArrow from "public/images/LeftArrow.svg"
import dayjs from 'dayjs'

export default function Title({title,date, readingTime} : {title:string, date:string, readingTime: string}) {
    const router = useRouter()

    return  <div className="w-full h-full flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch justify-between items-center inline-flex">
                    <Image src={LeftArrow} alt="Back" onClick={() => router.back()}></Image>
                    <div className="justify-start items-center flex">
                        <div className="text-black text-xs font-normal font-['DM Sans'] uppercase leading-normal">Compartir</div>
                        <div className="w-12 px-3 py-4 rounded-[100px] justify-start items-center gap-3 flex">
                            <div className="w-6 h-6 relative"><Image src={ShareIcon} alt="Share this article"></Image></div>
                        </div>
                    </div>
                </div>
                <div className="h-full flex-col justify-start items-start gap-12 flex">
                    <div className="self-stretch text-black text-[56px] font-semibold font-['Lexend'] leading-[64px]">{title}</div>
                    <div className="justify-start items-center gap-4 inline-flex">
                        <div className="text-black text-xs font-normal font-['DM Sans'] uppercase leading-normal">{dayjs(date).format("d [de] MMMM, YYYY")}</div>
                        <div className="w-[5px] h-[5px] bg-black rounded-full"><Image src={Ellipsis} alt="Ellipsis"></Image></div>
                        <div className="text-black text-xs font-normal font-['DM Sans'] uppercase leading-normal">{readingTime} de lectura</div>
                    </div>
                </div>
            </div>
}