import { BlogPost } from '@api/blog/types/blog.types';

export type ArticleProps = {
    params: {slug: string} 
}

export type ArticleTagsProps = {
    articleTags: string[]
}

export type HighlightsProps = {
    nextPost: BlogPost, 
    newTags: {
        id: number;
        text: string;
    }[]
}

export type InterestingProps = { 
    blogPost : BlogPost
}

export type RecommendedProps = {
    posts: BlogPost[], 
    tag: string
}

export type TitleProps = {
    title:string,
    date:string,
    readingTime: string
}