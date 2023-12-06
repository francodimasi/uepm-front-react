"use client";

import { Tabs } from "ui";

export const PostTabs = ({tabItems, selectedCategory, setSelectedCategory, setSelectedPage}) => {
  const onChange = (catID) => {
    setSelectedCategory(catID)
    setSelectedPage(1)
  }
  return <Tabs items={tabItems} selected={selectedCategory} onChange={onChange} />;
};
