import { FocusEventHandler } from 'react';
import { FormInputProps } from '../inputs/types';

export type FormTeaxtAreaProps = FormInputProps & {
  rows?: number;
  name: string;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onChange?: FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
};
