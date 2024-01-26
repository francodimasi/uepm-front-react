import { IconColor, IconProps, IconStatus } from './types';

export const ArrowForwardIcon = ({
  width = 33,
  height = 16,
  fill,
  color = 'dark',
  disabled = false,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="arrow-forward-icon"
        d="M33.2071 8.7071C33.5976 8.31658 33.5976 7.68341 33.2071 7.29289L26.8431 0.92893C26.4526 0.538406 25.8195 0.538406 25.4289 0.92893C25.0384 1.31945 25.0384 1.95262 25.4289 2.34314L31.0858 8L25.4289 13.6569C25.0384 14.0474 25.0384 14.6805 25.4289 15.0711C25.8195 15.4616 26.4526 15.4616 26.8431 15.0711L33.2071 8.7071ZM0.5 9L32.5 9L32.5 7L0.5 7L0.5 9Z"
        fill={disabled ? IconStatus.disabled : fill || IconColor[color]}
      />
    </svg>
  );
};
