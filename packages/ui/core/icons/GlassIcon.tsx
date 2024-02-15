import { IconColor, IconProps } from './types';

export const GlassIcon = ({
  width = 24,
  height = 24,
  fill,
  color = 'dark',
}: IconProps) => {
  return (
    <svg
      id="glass-icon"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="glass-icon_path-1"
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke={fill || IconColor[color]}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="glass-icon_path-2"
        d="M22 22L20 20"
        stroke={fill || IconColor[color]}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="glass-icon_path-3"
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        fill="transparent"
      />
    </svg>
  );
};
