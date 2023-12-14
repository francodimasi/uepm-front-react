import { Fragment } from 'react';
import { Tag } from 'ui';

export default function ArticleTags({articleTags}: {articleTags: string[]}) {
    return <div className="w-[736px] h-[58px] pt-10 border-t border-black border-opacity-20 flex-col justify-start items-start gap-10 inline-flex">
    <div className="self-stretch h-[18px] flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
            { articleTags.map((tag, index) => (
                <Fragment key={index}>
                    <div className="py-1 rounded-[100px] justify-end items-center gap-2 flex">
                        <Tag text={tag} className="text-black text-xs font-medium font-['DM Sans'] uppercase leading-none" /> 
                    </div>
                </Fragment>
            ))}
        </div>
    </div>
</div>
}