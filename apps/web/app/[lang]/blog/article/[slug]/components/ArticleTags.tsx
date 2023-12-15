import { Fragment } from 'react';
import { Tag } from 'ui';

export default function ArticleTags({articleTags}: {articleTags: string[]}) {
    return  <div className="flex gap-5 pt-10 mt-16 mb-20 border-t border-dark border-opacity-20">
                        { articleTags.map((tag, index) => (
                            <Tag key={index} text={tag} className="text-dark text-xs font-medium font-['DMSans'] uppercase leading-none" /> 
                        ))}
            </div>
}