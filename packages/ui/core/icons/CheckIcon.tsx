import { IconColor, IconProps } from './types';

export const CheckIcon = ({
  width = 20,
  height = 20,
  fill,
  color = 'light',
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="check">
        <path
          id="check_path"
          d="M6 10.75L8.45455 13L15 7"
          stroke={fill || IconColor[color]}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
