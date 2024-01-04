import { TagProps } from './Tag.types';
import clsx from 'clsx';

export const Tag: React.FC<TagProps> = ({
  text,
  onClickHandler,
  className,
}) => {
  return (
    <div
      className=" flex-grow basis-auto my-1 text-center sm:text-left sm:my-2 mx-0 py-0 px-0 sm:px-2 border-l-1 border-solid border-l-gray-medium bg-white leading-none"
      onClick={onClickHandler}
    >
      <span className={clsx('mx-1.5 sm:mx-1', className)}>{text}</span>
    </div>
  );
};
