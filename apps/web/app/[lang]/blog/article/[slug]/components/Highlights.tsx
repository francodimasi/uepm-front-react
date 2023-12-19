import { SuggestedPost } from '@app/[lang]/blog/components/SuggestedPost';
import { TrendingTopics } from '@app/[lang]/blog/components/TrendingTopics';
import { Interesting } from './Interesting';
import { HighlightsProps } from '../Article.types';


export const Highlights: React.FC<HighlightsProps> = ({nextPost, newTags}) => {
    return <>
                <SuggestedPost />
                <Interesting blogPost={nextPost}/>
                <TrendingTopics tags={newTags} />
            </>
}