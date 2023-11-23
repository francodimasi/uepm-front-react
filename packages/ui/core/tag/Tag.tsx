import { TagProps } from "./Tag.types";
import clsx from "clsx";

export const Tag: React.FC<TagProps> = ({
  text,
  onClickHandler,
  className,
}) => {
  return (
    <div
      className={clsx(
        "text-black text-base font-normal font-['DMSans'] leading-none p-1",
        className
      )}
      onClick={onClickHandler}
    >
      {text}
    </div>
  );
};