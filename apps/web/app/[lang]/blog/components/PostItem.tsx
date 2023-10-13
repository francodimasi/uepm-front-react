import clsx from "clsx";
import dayjs from "dayjs";
import Image from "next/image";
import { useCallback, useMemo } from "react";

export type PostItemPropsSize = "small" | "large" | "vertical";
export type PostItemProps = {
    category: string;
    title: string;
    date: string;
    content: string;
    image: string;
    slug: string;
    size?: PostItemPropsSize;
}
export const PostItem = ({ category, content, date, image, size = "large", title }: PostItemProps) => {

    const Title = useCallback(() => {
        switch (size) {
            case "large": {
                return (
                    <h2 className="text-3xl font-bold my-2">{title}</h2>
                )
            }
            case "small": {
                return (
                    <h4 className="leading-6 font-bold my-1">{title}</h4>
                )
            }
            case "vertical": {
                return (
                    <h4 className="leading-6 font-bold my-2">{title}</h4>
                )
            }
        }
    }, [title, size])

    const formatedDate = useMemo(() => {
        return dayjs(date).format("d [de] MMMM, YYYY");
    }, [date])

    const containerClasses = clsx(
        "flex",
        {
            "border-b-1 border-gray-medium": size === "small" || size === "large",
            "py-4": size === "small",
            "py-10": size === "large",
            "flex-col": size === "vertical",
        }
    )
    const imageClasses = clsx(
        "rounded-lg bg-cover",
        {
            "w-[80px] h-[100px] mr-4": size === "small",
            "w-[200px] h-[230px] ml-12 order-last": size === "large",
            "w-full h-[180px] mb-4": size === "vertical",
        }
    )
    const contentClasses = clsx(
        {
            "hidden": size === "small" || size === "vertical",
            "mt-2": size === "large"
        }
    )


    return (
        <>
            <div className={containerClasses}>
                <div className={imageClasses} style={{ backgroundImage: `url('${image}'` }}></div>
                <div className="flex-1">
                    <span className="block uppercase text-xs">{category}</span>
                    <Title />
                    <span className="uppercase text-xs text-gray-dark">{formatedDate}</span>
                    <p className={contentClasses}>{content}</p>
                </div>
            </div>
        </>
    )
}