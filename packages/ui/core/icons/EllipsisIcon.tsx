import { IconColor, IconProps } from './types';

export const EllipsisIcon = ({
  width = 6,
  height = 6,
  fill,
  color = 'dark',
}: IconProps) => {
  return (
    <svg
      id="ellipsis-icon"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        id="ellipsis-icon-circle"
        cx="2.5"
        cy="3.2998"
        r="2.5"
        fill={fill || IconColor[color]}
      />
    </svg>
  );
};
