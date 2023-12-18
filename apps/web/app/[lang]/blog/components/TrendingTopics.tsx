import { Tag } from 'ui';

//TODO: the prop should be named something like topics, not tags 
export const TrendingTopics = ({
  tags,
}: {
  tags: { id: number; text: string }[];
}) => {
  return (
    <div className="flex-col justify-start items-start gap-8 flex">
      <div className="text-2xl font-semibold font-['Lexend'] leading-7 text-primary">
        {/*@todo i18nPending translation*/}
        Temas más buscados
      </div>
      <div className="flex flex-row flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag
            text={tag.text}
            key={tag.id}
            className="lowercase rounded-md bg-gray-light px-2 py-2 text-sm"
          />
        ))}
      </div>
    </div>
  );
};
