import clsx from 'clsx';
import { FormFieldProps } from './FormField.types';

export const FormField: React.FC<FormFieldProps> = ({
  label,
  className,
  children,
}) => {
  return (
    <div className={clsx('w-full mt-2 flex flex-col', className)}>
      {label && <div className="text-base mb-1 sm:mb-2 text-dark">{label}</div>}
      {children}
    </div>
  );
};
