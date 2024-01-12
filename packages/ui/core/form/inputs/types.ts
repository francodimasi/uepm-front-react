import { FocusEventHandler } from 'react';
import { PropsWithClassName } from '../../../types/core';

export type FormInputProps = PropsWithClassName & {
  name: string;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
};
