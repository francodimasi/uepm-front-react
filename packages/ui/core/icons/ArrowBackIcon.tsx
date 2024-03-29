import { IconColor, IconProps, IconStatus } from './types';

export const ArrowBackIcon = ({
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
        id="arrow-back-icon"
        d="M0.292893 7.5927C-0.0976295 7.98322 -0.0976296 8.61638 0.292892 9.00691L6.65685 15.3709C7.04738 15.7614 7.68054 15.7614 8.07107 15.3709C8.46159 14.9803 8.46159 14.3472 8.07107 13.9567L2.41421 8.2998L8.07107 2.64295C8.46159 2.25242 8.46159 1.61926 8.07107 1.22873C7.68054 0.83821 7.04738 0.83821 6.65686 1.22873L0.292893 7.5927ZM33 7.2998L1 7.2998L1 9.2998L33 9.2998L33 7.2998Z"
        fill={disabled ? IconStatus.disabled : fill || IconColor[color]}
      />
    </svg>
  );
};
