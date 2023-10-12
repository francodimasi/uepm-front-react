import { postMock } from "../blog.mock"
import { PostItem } from "./PostItem"

export const SuggestedPost = () => {
    return (
        <>
            <PostItem size="small" {...postMock} />
        </>
    )
}