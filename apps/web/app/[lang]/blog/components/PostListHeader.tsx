import { PostSearch } from "./PostSearch";
import { PostTabs } from "./PostTabs";


export const PostListHeader = ({posts, categoriesToID, selectedCategory, setSelectedCategory, setSelectedPage}) => {

  const allCategories = getPostsAllCategories(posts)

  const tabItems = allCategories.map( (c) => {
    return {
      name: c,
      id: categoriesToID.get(c)
    }
  })

  return (
    <div className="m-w-full">
      <PostTabs tabItems={tabItems} selectedCategory={selectedCategory} setSelectedPage={setSelectedPage} setSelectedCategory={setSelectedCategory}/>
      <div className="w-24">
        <PostSearch />
      </div>
    </div>
  );
};


const getPostsAllCategories = (posts) => {
  const categories = []
  posts.map( (post) => {
    post.category.forEach(c => {
      if (!categories.includes(c)){
        categories.push(c)
      }        
    });
  })

  return categories
}