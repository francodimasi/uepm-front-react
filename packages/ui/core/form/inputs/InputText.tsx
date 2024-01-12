import { forwardRef } from 'react';
import clsx from 'clsx';
import { FormInputProps } from './types';

export const InputText = forwardRef<any, FormInputProps>(
  ({ name, placeholder, value, disabled, className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        name={name}
        id={name}
        className={clsx(
          'block w-full border-b-1 border-gray-medium pe-4 py-4 text-dark placeholder:text-gray-dark focus:border-primary-dark text-xl leading-4 cursor-text outline-none',
          {
            'cursor-auto placeholder:text-gray-light border-gray-light':
              disabled,
          },
          className,
        )}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        {...rest}
      />
    );
  },
);
