import { PropsWithClassName } from 'ui/types/core';

export type ContactUsProps = PropsWithClassName;

export type FormInitialValue = {
  value: any;
  label: string;
  required: boolean;
};

export type ContactUsFormProps = PropsWithClassName & {
  initialValues: {
    name: FormInitialValue;
    lastname: FormInitialValue;
    email: FormInitialValue;
    phone: FormInitialValue;
    query: FormInitialValue;
  };
  buttonText: string;
  onSend: Function;
};

export type ContactUsFormRequest = {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  query: string;
};
