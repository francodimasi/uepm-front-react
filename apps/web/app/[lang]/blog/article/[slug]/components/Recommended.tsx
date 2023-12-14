import { useBlog } from "@api/blog/useBlog"

export default async function Recommended({tag} : {tag:string}) {

    const {getPostList} = useBlog()

    // const nextPosts = await getPostList({ 
    //     per_page: 4, 
    //     page: 1, 
    //     context: "view", 
    //     order: "desc", 
    //     tags: [tag],   //Tags need to be ID! Same with "categories"
    //     _embed: 1 
    // })

    return <div className="w-[1280px] h-[343px] flex-col justify-start items-start gap-8 inline-flex">
    <div className="self-stretch justify-between items-center inline-flex">
        <div className="w-[222px] text-black text-2xl font-semibold font-['Lexend'] leading-7">Más sobre el tema</div>
        <div className="text-black text-base font-bold font-['DM Sans'] leading-none">Ver más →</div>
    </div>
    <div className="justify-start items-start gap-6 inline-flex">
        <div className="w-[302px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-[190px] bg-stone-200 flex-col justify-center items-center flex">
                <img className="self-stretch grow shrink basis-0" src="https://via.placeholder.com/302x190" />
            </div>
            <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch h-[88px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch h-[68px] flex-col justify-start items-start gap-1 flex">
                        <div className="py-1 rounded-[100px] justify-end items-center gap-2 inline-flex">
                            <div className="text-teal-800 text-xs font-medium font-['DM Sans'] uppercase leading-none tracking-tight">Esclerosis</div>
                        </div>
                        <div className="self-stretch text-black text-base font-semibold font-['Lexend'] leading-normal">Lorem ipsum dolor sit, consectetur adipiscing elit</div>
                    </div>
                    <div className="self-stretch text-black text-xs font-normal font-['DM Sans'] uppercase leading-normal">23 DE SEPTIEMBRE, 2023</div>
                </div>
            </div>
        </div>
        <div className="w-[302px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-[190px] bg-stone-200 flex-col justify-center items-center flex">
                <img className="self-stretch grow shrink basis-0" src="https://via.placeholder.com/302x190" />
            </div>
            <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch h-[88px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch h-[68px] flex-col justify-start items-start gap-1 flex">
                        <div className="py-1 rounded-[100px] justify-end items-center gap-2 inline-flex">
                            <div className="text-teal-800 text-xs font-medium font-['DM Sans'] uppercase leading-none tracking-tight">Esclerosis</div>
                        </div>
                        <div className="self-stretch text-black text-base font-semibold font-['Lexend'] leading-normal">Lorem ipsum dolor sit, consectetur adipiscing elit</div>
                    </div>
                    <div className="self-stretch text-black text-xs font-normal font-['DM Sans'] uppercase leading-normal">23 DE SEPTIEMBRE, 2023</div>
                </div>
            </div>
        </div>
        <div className="w-[302px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-[190px] bg-stone-200 flex-col justify-center items-center flex">
                <img className="self-stretch grow shrink basis-0" src="https://via.placeholder.com/302x190" />
            </div>
            <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch h-[88px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch h-[68px] flex-col justify-start items-start gap-1 flex">
                        <div className="py-1 rounded-[100px] justify-end items-center gap-2 inline-flex">
                            <div className="text-teal-800 text-xs font-medium font-['DM Sans'] uppercase leading-none tracking-tight">Esclerosis</div>
                        </div>
                        <div className="self-stretch text-black text-base font-semibold font-['Lexend'] leading-normal">Lorem ipsum dolor sit, consectetur adipiscing elit</div>
                    </div>
                    <div className="self-stretch text-black text-xs font-normal font-['DM Sans'] uppercase leading-normal">23 DE SEPTIEMBRE, 2023</div>
                </div>
            </div>
        </div>
        <div className="w-[302px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-[190px] bg-stone-200 flex-col justify-center items-center flex">
                <img className="self-stretch grow shrink basis-0" src="https://via.placeholder.com/302x190" />
            </div>
            <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch h-[88px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch h-[68px] flex-col justify-start items-start gap-1 flex">
                        <div className="py-1 rounded-[100px] justify-end items-center gap-2 inline-flex">
                            <div className="text-teal-800 text-xs font-medium font-['DM Sans'] uppercase leading-none tracking-tight">Esclerosis</div>
                        </div>
                        <div className="self-stretch text-black text-base font-semibold font-['Lexend'] leading-normal">Lorem ipsum dolor sit, consectetur adipiscing elit</div>
                    </div>
                    <div className="self-stretch text-black text-xs font-normal font-['DM Sans'] uppercase leading-normal">23 DE SEPTIEMBRE, 2023</div>
                </div>
            </div>
        </div>
    </div>
</div>
}