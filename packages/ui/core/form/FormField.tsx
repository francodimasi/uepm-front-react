import clsx from 'clsx';
import { FormFieldProps } from './FormField.types';
import { P2 } from '../typography';

export const FormField: React.FC<FormFieldProps> = ({
  label,
  className,
  children,
}) => {
  return (
    <div className={clsx('w-full mt-2 flex flex-col', className)}>
      {label && <P2 label={label} />}
      {children}
    </div>
  );
};
