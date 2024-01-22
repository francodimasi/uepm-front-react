'use client';

import { Controller, useForm } from 'react-hook-form';
import { ContactUsFormProps, ContactUsFormRequest } from './ContactUs.types';
import { useState } from 'react';
import { useContactUs } from './useContactUs';
import clsx from 'clsx';
import {
  ArrowForwardIcon,
  Button,
  FormField,
  InputEmail,
  InputText,
  Textarea,
} from 'ui/core';

export const ContactUsForm = ({
  className,
  initialValues,
  buttonText,
}: ContactUsFormProps) => {
  const [sending, setSending] = useState(false);
  const { sendQuery } = useContactUs();
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<ContactUsFormRequest>({
    defaultValues: {
      name: initialValues.name.value,
      lastname: initialValues.lastname.value,
      email: initialValues.email.value,
      phone: initialValues.phone.value,
      query: initialValues.query.value,
    },
  });

  const onSubmit = async (data: ContactUsFormRequest) => {
    if (!isValid) return;
    setSending(true);
    try {
      await sendQuery(data);
      setSending(false);
      reset();
    } catch (error) {
      console.log(error);
      setSending(false);
    }
  };

  return (
    <div className={clsx('w-full h-auto lg:max-w-2xl', className)}>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 lg:hidden">
          <Controller
            name="name"
            control={control}
            rules={{ required: initialValues.name.required }}
            disabled={sending}
            render={({ field }) => (
              <FormField>
                <InputText placeholder={initialValues.name.label} {...field} />
              </FormField>
            )}
          />
          <Controller
            name="lastname"
            control={control}
            rules={{ required: initialValues.lastname.required }}
            disabled={sending}
            render={({ field }) => (
              <FormField>
                <InputText
                  placeholder={initialValues.lastname.label}
                  {...field}
                />
              </FormField>
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: initialValues.email.required }}
            disabled={sending}
            render={({ field }) => (
              <FormField>
                <InputEmail
                  placeholder={initialValues.email.label}
                  {...field}
                />
              </FormField>
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: initialValues.phone.required }}
            disabled={sending}
            render={({ field }) => (
              <FormField>
                <InputText placeholder={initialValues.phone.label} {...field} />
              </FormField>
            )}
          />
          <Controller
            name="query"
            control={control}
            rules={{ required: initialValues.query.required }}
            disabled={sending}
            render={({ field }) => (
              <FormField>
                <Textarea placeholder={initialValues.query.label} {...field} />
              </FormField>
            )}
          />
        </div>
        <div className="hidden lg:flex flex-col gap-6 mt-3.5 sm:mt-4 lg:mt-5 xl:mt-8">
          <div className="grid grid-cols-4 gap-6">
            <div className="col-span-2">
              <Controller
                name="name"
                control={control}
                rules={{ required: initialValues.name.required }}
                disabled={sending}
                render={({ field }) => (
                  <FormField>
                    <InputText
                      placeholder={initialValues.name.label}
                      {...field}
                    />
                  </FormField>
                )}
              />
            </div>
            <div className="col-span-2">
              <Controller
                name="lastname"
                control={control}
                rules={{ required: initialValues.lastname.required }}
                disabled={sending}
                render={({ field }) => (
                  <FormField>
                    <InputText
                      placeholder={initialValues.lastname.label}
                      {...field}
                    />
                  </FormField>
                )}
              />
            </div>
            <div className="col-span-2">
              <Controller
                name="email"
                control={control}
                rules={{ required: initialValues.email.required }}
                disabled={sending}
                render={({ field }) => (
                  <FormField>
                    <InputEmail
                      placeholder={initialValues.email.label}
                      {...field}
                    />
                  </FormField>
                )}
              />
            </div>
            <div className="col-span-2">
              <Controller
                name="phone"
                control={control}
                rules={{ required: initialValues.phone.required }}
                disabled={sending}
                render={({ field }) => (
                  <FormField>
                    <InputText
                      placeholder={initialValues.phone.label}
                      {...field}
                    />
                  </FormField>
                )}
              />
            </div>
          </div>
          <Controller
            name="query"
            control={control}
            rules={{ required: initialValues.query.required }}
            disabled={sending}
            render={({ field }) => (
              <FormField>
                <Textarea placeholder={initialValues.query.label} {...field} />
              </FormField>
            )}
          />
        </div>
        <div className="mt-8 lg:t-12 flex justify-end">
          <Button
            type="submit"
            color="dark"
            disabled={!isValid || sending}
            onClick={() => {}}
          >
            {buttonText}
            <ArrowForwardIcon color="light" />
          </Button>
        </div>
      </form>
    </div>
  );
};
