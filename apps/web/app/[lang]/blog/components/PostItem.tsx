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
        return <h2 className="text-3xl font-bold my-2">{title}</h2>;
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

  const containerClasses = clsx("inline-flex", {
    "border-b-1 border-gray-medium ": size === "small" || size === "large",
    "pb-4 h-28 justify-start items-start": size === "small",
    "py-10": size === "large",
    "flex-col": size === "vertical",
  });
  const imageContentClasses = clsx("bg-cover", {
    "w-20 h-24 flex-col justify-center items-center inline-flex":
      size === "small",
    "ml-12 order-last": size === "large",
    "w-full  mb-4": size === "vertical",
  });

  const imageClasses = clsx("bg-cover", {
    "w-20 h-24": size === "small",
    "w-[200px] h-[230px]": size === "large",
    "w-full h-[180px]": size === "vertical",
  });
  const contentClasses = clsx({
    hidden: size === "small" || size === "vertical",
    "mt-2": size === "large",
  });

  const mainContent = clsx({
    "h-24 flex-col justify-between items-start inline-flex ps-2": size === "small",
    "": size === "vertical",
  });

  const TitleAndDateContent = clsx(
    "flex-col justify-start items-start gap-2 inline-flex",
    {
      "h-24 ": size === "small",
    }
  );

  return (
    <>
      <div className={containerClasses}>
        <div className={imageContentClasses}>
          <div
            className={imageClasses}
            style={{ backgroundImage: `url('${image}'` }}
          ></div>
        </div>
        <div className={mainContent}>
          <div className={TitleAndDateContent}>
            <div className="h-4 py-1 rounded-full justify-end items-center gap-2 inline-flex">
              <div className=" text-primary-dark text-xs font-normal font-['DMSans'] uppercase leading-none ">
                {size !== "small" ? (
                  <ul className="list-none">
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
            <Title />
            <span className="w-52 opacity-70 text-xs font-normal font-['DMSans'] uppercase leading-normal">
              {formatedDate}
            </span>
          </div>
          <p className={contentClasses}>{content}</p>
        </div>
      </div>
    </>
  );
};
