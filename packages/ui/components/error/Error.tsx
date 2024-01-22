import clsx from 'clsx';
import { ErrorProps } from './Error.types';

export const Error: React.FC<ErrorProps> = ({
  className,
  title,
  description,
}) => {
  return (
    <div className={clsx(className, 'w-full text-center')}>
      <div className=" text-dark text-xl font-medium font-['DMSans'] leading-normal">
        {title}
      </div>
      <div className=" w-100 opacity-50 text-black text-lg font-normal font-['DMSans'] leading-normal">
        {description}
      </div>
    </div>
  );
};
