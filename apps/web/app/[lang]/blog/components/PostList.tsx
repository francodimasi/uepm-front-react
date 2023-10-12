import { postMock } from "../blog.mock"
import { PostItem } from "./PostItem"

export const PostList = () => {
    
    return (
        <>
            <div className="py-12">
                <PostItem {...postMock} />
            </div>
        </>
    )
}