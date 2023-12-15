import { BlogCategory, BlogCategoryTag } from "@api/blog/types/blog.types";
import { Tabs } from "ui";
import { Dispatch, SetStateAction } from "react";
import { Select } from "ui";

type PostTabs = {
  category: number,
  categories: BlogCategory[],
  setCategory: Dispatch<SetStateAction<number>>,
};

export const PostTabs = ({category, categories, setCategory} : PostTabs) => {
  
  const onChange = (catID) => {
    setCategory(catID)
  }
  
  const tabItems = categories?.map(({ name, id }) => ({ name, id })) ?? [];
  return (
    <>
      <div className="block sm:hidden w-full">
        <Select items={tabItems} selected={category} onChange={onChange}/>
      </div>
      <Tabs items={tabItems} selected={category} onChange={onChange} classes="hidden sm:block"/>
    </>
  ) 
  
};