import { PropsWithClassName } from '../../types/core';

export type FormInputType =
  | 'email'
  | 'number'
  | 'search'
  | 'tel'
  | 'text'
  | 'textarea'
  | 'url';

export type FormFieldProps = PropsWithClassName & {
  type?: FormInputType;
  label?: string;
};
