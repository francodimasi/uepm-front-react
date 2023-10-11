import { PostSearch } from "./PostSearch"
import { PostTabs } from "./PostTabs"

export const PostListHeader = () => {
    return (
       <div className="flex justify-between">
        <PostTabs />
        <PostSearch />
       </div>
    )
}