"use client";

import { BlogCategoryTag } from "@api/blog/types/blog.types";
import { useBlog } from "@api/blog/useBlog";
import { useBlogStore } from "@store/useBlogStore";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { Tabs } from "ui";

export const PostTabs = () => {
  const { category, setCategory } = useBlogStore();
  const { getCategories } = useBlog();

  const loadCategory = (data: BlogCategoryTag[]) => {
    setCategory(data[0].id);
  };

  const { data } = useQuery({
    queryKey: "post_categories",
    queryFn: getCategories,
    onSuccess: loadCategory,
  });

  const tabItems = useMemo(() => {
    return data?.map(({ name, id }) => ({ name, id })) ?? [];
  }, [data]);

  return <Tabs items={tabItems} selected={category} onChange={setCategory} />;
};
