import { Tag } from "ui";
import { useBlog } from "@api/blog/useBlog";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { useTagParser } from "../hooks/useTagParser";

export type TagItemProp = {
  name:string;
  id:number;
};

export const TrendingTopics = () => {
  const { getTags } = useBlog();
  const { tagToTagItem } = useTagParser();

  const { data } = useQuery({
    queryFn: () => getTags(),
  });

  const postTags = useMemo(() => {
    const tags = data?.map((tag) => tagToTagItem(tag)) ?? [];
    return tags;
  }, [data]);

  return (
    <div className="flex-col justify-start items-start gap-8 flex">
      <div className="text-2xl font-semibold font-['Lexend'] leading-7 text-primary">
        Temas más buscados
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {postTags.map((tag) => (
          <Tag text={tag.name} key={tag.id} className="lowercase rounded-md bg-gray-light px-2 py-2 text-sm" />
        ))}
      </div>
    </div>
  );
};
