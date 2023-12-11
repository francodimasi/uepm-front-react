import { BlogCategory, BlogCategoryTag } from "@api/blog/types/blog.types";
import { Tabs } from "ui";
import { Dispatch, SetStateAction } from "react";


type PostTabs = {
  category: number,
  categories: BlogCategory[],
  setCategory: Dispatch<SetStateAction<number>>,
  setPage: Dispatch<SetStateAction<number>>

};

export const PostTabs = ({category, categories, setCategory, setPage} : PostTabs) => {
  
  const onChange = (catID) => {
    setCategory(catID)
    setPage(1)
  }
  
  const tabItems = categories?.map(({ name, id }) => ({ name, id })) ?? [];
  return <Tabs items={tabItems} selected={category} onChange={onChange} />;
};