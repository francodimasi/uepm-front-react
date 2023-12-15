import { Tag } from "ui";

export const TrendingTopics = ({tags}: {tags: {id: number, text: string}[]}) => {

  return (
    <div className="flex-col justify-start items-start gap-8 flex">
      <div className="text-2xl font-mediu font-['Lexend'] leading-7 text-primary self-center sm:self-start">
        {/*@todo i18nPending translation*/}
        Temas más buscados
      </div>
      <div className=" relative overflow-hidden">
        <ul className=" flex flex-row flex-wrap justify-between -ml-px">
          {tags.map((tag) => (
            <Tag text={tag.text} key={tag.id} className=" text-sm lowercase" />
          ))}
        </ul>
      </div>      
    </div>
  );
};
