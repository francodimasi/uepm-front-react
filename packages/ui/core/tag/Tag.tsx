import { TagProps } from './Tag.types';
import clsx from 'clsx';

export const Tag: React.FC<TagProps> = ({
  text,
  onClickHandler,
  className,
}) => {
  return (
    <span
      className={clsx(
        "text-dark font-['DMSans'] leading-none p-1 mx-2 sm:mx-px ",
        className,
      )}
      onClick={onClickHandler}
    >
      {text}
    </span>
  );
};
