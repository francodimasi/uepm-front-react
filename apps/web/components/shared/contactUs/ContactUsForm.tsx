'use client';

import { Controller, useForm } from 'react-hook-form';
import { ContactUsFormProps, ContactUsFormRequest } from './ContactUs.types';
import { useCallback, useState } from 'react';
import clsx from 'clsx';
import ReCAPTCHA from 'react-google-recaptcha';

import {
  ArrowForwardIcon,
  Button,
  FormField,
  H4,
  InputEmail,
  InputText,
  Textarea,
} from 'ui/core';
import { useTranslations } from 'intl';

const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY;

export const ContactUsForm = ({
  className,
  initialValues,
  buttonText,
}: ContactUsFormProps) => {
  const t = useTranslations('shared.contactUs');

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [data, setData] = useState<ContactUsFormRequest | null>();
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

  const recaptchaVerification = useCallback(async () => {
    const apiEndpoint = '/api/contactUs';

    if (data) {
      try {
        await fetch(apiEndpoint, {
          method: 'POST',
          body: JSON.stringify(data),
        });
        setSent(true);
      } catch (error) {
        console.log(error);
      }
    }
    reset();
    setSending(false);
  }, [data]);

  const onSubmit = (data: ContactUsFormRequest) => {
    if (!isValid) return;

    setSending(true);
    setData(data);
  };

  return (
    <>
      {sent ? (
        <div className="p-8 sm:p-20 bg-gradient-to-br border-primary border-2">
          <H4>{t('thanks')}</H4>
        </div>
      ) : (
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
                    <InputText
                      placeholder={initialValues.name.label}
                      {...field}
                    />
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
              <Controller
                name="query"
                control={control}
                rules={{ required: initialValues.query.required }}
                disabled={sending}
                render={({ field }) => (
                  <FormField>
                    <Textarea
                      placeholder={initialValues.query.label}
                      {...field}
                    />
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
                    <Textarea
                      placeholder={initialValues.query.label}
                      {...field}
                    />
                  </FormField>
                )}
              />
            </div>

            <div className="mt-8 lg:t-12 flex justify-end">
              {sending ? (
                <ReCAPTCHA
                  sitekey={recaptchaKey}
                  onChange={recaptchaVerification}
                />
              ) : (
                <Button type="submit" color="dark" disabled={!isValid}>
                  {buttonText}
                  <ArrowForwardIcon color="light" />
                </Button>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
};
