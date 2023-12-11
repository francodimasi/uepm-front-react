import { BlogCategory, BlogCategoryTag } from "@api/blog/types/blog.types";
import { Tabs } from "ui";

type PostTabs = {
  category: BlogCategory,
  categories: BlogCategory[]
};

export const PostTabs = ({category, categories} : PostTabs) => {
  // const { category, setCategory } = useBlogStore();
  // const { getCategories } = useBlog();

  // const loadCategory = (data: BlogCategoryTag[]) => {
  //   setCategory(data[0].id);
  // };

  // const { data } = useQuery({
  //   queryKey: "post_categories",
  //   queryFn: getCategories,
  //   onSuccess: loadCategory,
  // });

  const tabItems = categories?.map(({ name, id }) => ({ name, id })) ?? [];
  
  return <Tabs items={tabItems} selected={category.id}/>;
};
