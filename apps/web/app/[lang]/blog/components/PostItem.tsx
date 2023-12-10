import clsx from "clsx";
import dayjs from "dayjs";
import Image from "next/image";
import { useCallback, useMemo } from "react";

export type PostItemPropsSize = "small" | "large" | "vertical";
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
  size = "large",
  title,
}: PostItemProps) => {
  const Title = useCallback(() => {
    switch (size) {
      case "large": {
        return <h2 className="text-3xl text-dark font-semibold font-['Lexend'] leading-10 line-clamp-2">{title}</h2>;
      }
      case "small": {
        return (
          <div className="text-base font-semibold font-['Lexend'] line-clamp-2">
            {title} 
          </div>
        );
      }
      case "vertical": {
        return <h4 className="leading-6 font-bold my-2">{title}</h4>;
      }
    }
  }, [title, size]);

  const formatedDate = useMemo(() => {
    return dayjs(date).format("d [de] MMMM, YYYY");
  }, [date]);

  const containerClasses = clsx("", {
    "border-b-1 border-gray-medium pb-4 h-28 justify-start items-start inline-flex": size === "small",
    "relative isolate flex flex-col gap-6 lg:flex-row border-b border-gray-medium pb-6": size === "large",
    "flex-col inline-flex": size === "vertical",
  });
  const imageContentClasses = clsx("relative", {
    "w-20 h-24 shrink-0 ":size === "small",
    "relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-52 lg:shrink-0 ": size === "large",
    "w-full h-[180px]  mb-4": size === "vertical",
  });

  
  const contentClasses = clsx({
    hidden: size === "small" || size === "vertical",
    "mt-3 text-dark text-base font-light font-['DMSans'] leading-normal": size === "large",
  });

  const mainContent = clsx({
    "h-24 flex-col justify-between items-start inline-flex ps-4 pb-4": size === "small",
    "": size === "large",
    "": size === "vertical",
  });

  return (
    <>
      {
      <article  className={containerClasses} >
        <div className={imageContentClasses}>
          <Image
            src={image}
            fill
            alt={title}
            objectFit="cover"
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <div className={mainContent}>
          <div className="flex items-center gap-x-4 text-xs">
            <div className=" text-primary-dark text-xs font-medium font-['DMSans'] uppercase leading-none tracking-tight">
              {size !== "small" ? (
                <ul className="list-none -ms-2">
                  {category.map((key, index) => (
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
          <div className="group relative my-2">
            <Title />
          </div>
          <span className="text-xs font-normal font-['DMSans'] uppercase leading-normal">
            {formatedDate}
          </span>
          <p className={contentClasses}>{content}</p>
        </div>
      </article>
      }
    </>
  );
};
