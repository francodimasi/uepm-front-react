"use client";

import { Tabs } from "ui";

export const PostTabs = ({tabItems, selectedCategory, onChange}) => {
  return <Tabs items={tabItems} selected={selectedCategory} onChange={onChange} />;
};
