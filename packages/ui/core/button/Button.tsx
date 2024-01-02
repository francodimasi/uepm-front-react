import { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import { getClasses } from './helpers';

export const Button = forwardRef<any, ButtonProps>(
  (
    {
      variant = 'solid',
      color = 'primary',
      size = 'md',
      className = '',
      disabled = false,
      onClick,
      ...props
    },
    ref,
  ) => {
    const classes = getClasses(size, variant, color, className, disabled);

    return (
      <button
        ref={ref}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        {...props}
      />
    );
  },
);
