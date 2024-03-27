import { IconColor, IconProps } from './types';

export const CloseIcon = ({
  width = 24,
  height = 24,
  fill,
  color = 'dark',
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="18"
        y1="6"
        x2="6"
        y2="18"
        strokeWidth={2}
        strokeLinecap="round"
        stroke={fill || IconColor[color]}
      />
      <line
        x1="6"
        y1="6"
        x2="18"
        y2="18"
        strokeWidth={2}
        strokeLinecap="round"
        stroke={fill || IconColor[color]}
      />
    </svg>
  );
};
