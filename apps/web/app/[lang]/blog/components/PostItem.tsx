import clsx from 'clsx';
import dayjs from 'dayjs';
import { useCallback, useMemo } from 'react';

export type PostItemPropsSize = "small" | "large" | "vertical" | "bigger";
export type PostItemProps = {
  category: string[];
  title: string;
  date: string;
  content: string;
  image: string;
  slug: string;
  size?: PostItemPropsSize;
};
export const PostItem = ({
  category,
  content,
  date,
  image,
  size = 'large',
  title,
}: PostItemProps) => {
  const Title = useCallback(() => {
    switch (size) {
      case "large": {
        return <div className="sm:leading-10 leading-6 text-lg sm:text-3xl text-dark font-medium font-['Lexend'] line-clamp-2 my-2">{title}</div>;
      }
      case "small": {
        return (
          <div className="text-base font-medium font-['Lexend'] line-clamp-2 my-2">
            {title} 
          </div>
        );
      }
      case "vertical": {
        return <div className=" text-md sm:text-2xl text-dark font-medium font-['Lexend'] line-clamp-3  sm:line-clamp-2 my-2 sm:my-3">{title}</div>
      }
      case "bigger": {
        return <div className="text-2xl text-dark font-medium font-['Lexend'] font line-clamp-2 mt-3 mb-2 sm:mb-4 sm:mt-4 sm:text-4xl ">{title}</div>
      }
    }
  }, [title, size]);

  const formatedDate = useMemo(() => {
    return dayjs(date).format('d [de] MMMM, YYYY');
  }, [date]);

  const containerClasses = clsx("", {
    "border-b-1 border-gray-medium pb-4 h-28 justify-start items-start inline-flex": size === "small",
    "relative isolate flex flex-col gap-6 lg:flex-row ": size === "large",
    "inline-flex gap-6 sm:flex-col sm:gap-6": size === "vertical",
    "flex-col inline-flex  w-full sm:flex-col-reverse ": size === "bigger",
  });
  const imageContentClasses = clsx({
    "relative w-20 h-24 shrink-0 ":size === "small",
    "hidden sm:block  relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-52 lg:shrink-0 ": size === "large",
    "relative h-32 w-40 sm:w-full sm:h-64": size === "vertical",
    "relative w-full h-60 sm:h-96 mb-8 sm:mb-0": size === "bigger",
  });

  
  const contentClasses = clsx({
    hidden: size === "small" ,
    "hidden sm:block sm:mt-3 text-dark text-base font-normal font-['DMSans'] leading-normal line-clamp-2 md:line-clamp-3": size === "large",
    "hidden sm:block  sm:mt-3 text-dark text-base font-normal font-['DMSans'] leading-normal line-clamp-2 ": size === "vertical",
    "mt-3 text-dark font-normal font-['DMSans'] leading-normal line-clamp-2  sm:line-clamp-3 mb-5": size === "bigger",
  });

  const mainContent = clsx({
    "h-24 flex-col justify-between items-start inline-flex ps-4 pb-4 ": size === "small",
    "grow shrink basis-0 flex-col justify-start items-start inline-flex": size === "vertical"

  });

  return (
    <>
      {
      <article  className={containerClasses} >
        <div className={imageContentClasses}>
          <Image
            src={image}
            fill
            sizes="100%"
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className={mainContent}>
          <div className="flex items-center gap-x-4 text-xs">
            <div className=" text-primary-dark text-sm font-medium font-['DMSans'] uppercase leading-none tracking-normal">
              {(size !== "small" && size !== "vertical") ? (
                <ul className="list-none -ms-2">
                  {category.slice(0,3).map((key, index) => (
                    <li className=" first:border-l-0 inline px-2 py-0 border-l border-l-primary-dark"
                      key={index} >
                      {key}
                    </li>
                  ))}
                </ul>
              ) : (
                <span>{category[0]}</span>
              )}
            </div>
          </div>
          <div className="group relative">
            <Title />
          </div>
          <span className=" text-xs font-normal font-['DMSans'] uppercase leading-normal">
            {formatedDate}
          </span>
          <p className={contentClasses}>{content}</p>
        </div>
      </article>
      }
    </>
  );
};
