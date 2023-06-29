import { BlogPostLinks } from "./blog.types";
import { YoastHeadJson } from "./yoast.types";

export type BlogAuthor = {
    /**
     * @todo check for any types
     */
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    "avatar-urls": BlogAuthorAvatar;
    meta: any[];
    yoast_head: string;
    yoast_head_json: YoastHeadJson;
    _links: BlogPostLinks;
}

type BlogAuthorAvatar = {
    [key:number]: string;
}