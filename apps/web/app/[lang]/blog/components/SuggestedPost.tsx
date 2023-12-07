import { PostList,  } from "./PostList";
import { PostItemProps } from "./PostItem";

type SuggestedPostProps = {
  posts: PostItemProps[]
};

export const SuggestedPost = ({ posts }: SuggestedPostProps) => {
  return (
    <div className="flex-col justify-start items-start gap-8 flex">
    <div className="text-2xl font-semibold font-['Lexend'] leading-7 text-primary">
        {/*@todo i18nPending translation*/}
        Selección del editor
    </div>
      {/*@todo Pending translation*/}
      <PostList
        posts = {posts}
        size = "small"
      />
    </div>
  );
};
