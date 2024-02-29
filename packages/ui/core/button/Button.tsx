import React, { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import { getClasses } from './helpers';

export const Button = forwardRef<any, ButtonProps>(
  (
    {
      type = 'button',
      fill = 'solid',
      shape = 'round',
      expand = 'default',
      iconOnly = false,
      color = 'primary',
      size = 'md',
      bold = false,
      className = '',
      disabled = false,
      onClick,
      children,
      ...props
    },
    ref,
  ) => {
    const childs = React.Children.count(children);
    const { buttonClasses, spanClasses } = getClasses({
      childs,
      classes: className,
      color,
      disabled,
      fill,
      shape,
      expand,
      iconOnly,
      size,
      bold,
    });

    return (
      <button
        type={type}
        ref={ref}
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        <span className={spanClasses}>{children}</span>
      </button>
    );
  },
);
