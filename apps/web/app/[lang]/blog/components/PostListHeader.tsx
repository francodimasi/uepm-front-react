import { PostSearch } from "./PostSearch"
import { PostTabs } from "./PostTabs"

export const PostListHeader = () => {
    return (
        <div className="flex m-w-full">

            <PostTabs />

            <div className="w-24 pl-8">
                <PostSearch />
            </div>
        </div>
    )
}