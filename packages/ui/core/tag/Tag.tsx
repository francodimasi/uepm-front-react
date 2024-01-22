import { TagProps } from './Tag.types';

export const Tag: React.FC<TagProps> = ({
  text,
  onClickHandler,
  className,
}) => {
  return (
    <div className={className} onClick={onClickHandler}>
      {text}
    </div>
  );
};
