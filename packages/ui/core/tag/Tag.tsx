import { TagProps } from "./Tag.types";
import clsx from "clsx";

export const Tag: React.FC<TagProps> = ({
  text,
  onClickHandler,
  className,
}) => {
  return (
    <li
      className=" flex-grow basis-auto my-3 mx-0 py-0 px-px text-center border-l-1 border-solid border-l-gray-medium bg-white leading-none"
      onClick={onClickHandler}
    >
      <span className={clsx(
        "text-black text-base font-normal font-['DMSans'] leading-none mx-px",
        className
      )}>
        {text}
      </span>
    </li>
  );
};
