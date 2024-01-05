import { IconColor, IconProps } from './types';

export const ChevronDownIcon = ({
  width = 16,
  height = 16,
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
      <g id="vuesax/linear/arrow-down">
        <g id="arrow-down">
          <path
            id="Vector"
            d="M13.28 5.96655L8.9333 10.3132C8.41997 10.8266 7.57997 10.8266 7.06664 10.3132L2.71997 5.96655"
            stroke={fill || IconColor[color]}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};
