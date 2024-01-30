import { ErrorProps } from './Error.types';
import { twMerge } from 'tailwind-merge';

export const Error: React.FC<ErrorProps> = ({
  className,
  title,
  description,
}) => {
  return (
    <div className={twMerge(`w-full text-center ${className}`)}>
      <div className="text-dark text-xl font-medium font-['DMSans'] leading-normal">
        {title}
      </div>
      <div className="w-100 opacity-50 text-black text-lg font-normal font-['DMSans'] leading-normal">
        {description}
      </div>
    </div>
  );
};
