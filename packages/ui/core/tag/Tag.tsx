import { TagProps } from './Tag.types';

export const Tag: React.FC<TagProps> = ({
  text,
  onClickHandler,
  className
}) => {
  return (
    <div
      className={className}
      onClick={onClickHandler}
    >
      <span className="mx-1.5 sm:mx-1" >{text}</span>
    </div>
  );
};
