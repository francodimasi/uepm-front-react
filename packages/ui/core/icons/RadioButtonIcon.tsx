import { IconProps } from './types';

export const RadioButtonIcon = ({
  width = 24,
  height = 24,
  className = 'w-full h-full scale-110',
  checked = false,
}: IconProps & { checked?: boolean }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${height} ${height}`}
      fill="white"
      stroke="white"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="circle"
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="#020001"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {checked && (
        <path
          id="tick"
          d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
          stroke="#020001"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};
