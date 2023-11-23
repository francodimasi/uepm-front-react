import { TagProps } from "./Tag.types"
import clsx from "clsx";

export const Tag: React.FC<TagProps> = ({
    text,
    onClickHandler,
    className,
}) => {
    return (
        <span 
            className={clsx(
                "text-black text-base font-normal font-['DMSans'] leading-none",
                className
            )}
            onClick={onClickHandler}>
            {text}
        </span>
    );
};