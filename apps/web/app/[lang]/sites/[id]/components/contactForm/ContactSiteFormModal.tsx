'use client';

import { Fragment, useCallback, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  ContactSiteFormModalProps,
  ContactSiteFormModalRequest,
  ContactUsSiteFormApiRequest,
} from './ContactSiteForm.types';
import { Controller, useForm } from 'react-hook-form';
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
import ReCAPTCHA from 'react-google-recaptcha';

const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY;

export const ContactSiteFormModal: React.FC<ContactSiteFormModalProps> = ({
  title = 'Contact us',
  isDoctor,
  open = false,
  onClose,
}) => {
  const t = useTranslations('sites.contactUs');

  const routeEndpoint = '/api/siteContactUs';
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [data, setData] = useState<ContactSiteFormModalRequest | null>();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<ContactSiteFormModalRequest>();

  const sendContactRequest = async (data: ContactSiteFormModalRequest) => {
    const body: ContactUsSiteFormApiRequest = { ...data, isDoctor: isDoctor };
    return await fetch(routeEndpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  };

  const recaptchaVerification = useCallback(async () => {
    if (data) {
      try {
        await sendContactRequest(data);
        setSent(true);
      } catch (error) {
        console.log(error);
      }
    }
    reset();
    setSending(false);
  }, [data]);

  const onSubmit = (data: ContactSiteFormModalRequest) => {
    if (!isValid) return;
    setSending(true);
    setData(data);
  };

  const handleOnClose = () => {
    setData(null);
    setSending(false);
    setSent(false);
    onClose();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleOnClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-dark/30" aria-hidden="true" />
        </Transition.Child>

        {/* Full screen container to center Dialog */}
        <div className="fixed inset-0 flex z-10 w-screen text-center items-center justify-center p-2">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {/* The actual dialog panel */}
            <Dialog.Panel className="relative p-0 transform overflow-hidden rounded-sm bg-light shadow-2xl transition-all mt-24 w-full h-4/5">
              <div className="text-center p-4 sm:p-8">
                {title && (
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-dark"
                  >
                    {title}
                  </Dialog.Title>
                )}

                {sent ? (
                  <div className="p-8 sm:p-20 text-center">
                    <H4>{t('thanks')}</H4>
                  </div>
                ) : (
                  <div className={'w-full'}>
                    <form
                      className="flex flex-col"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="flex flex-col gap-2">
                        <Controller
                          name="name"
                          control={control}
                          rules={{ required: true }}
                          disabled={sending}
                          render={({ field }) => (
                            <FormField>
                              <InputText
                                className="!py-2"
                                placeholder={t('name')}
                                {...field}
                              />
                            </FormField>
                          )}
                        />
                        {isDoctor ? (
                          <Controller
                            name="specialty"
                            control={control}
                            rules={{ required: isDoctor ? true : false }}
                            disabled={sending}
                            render={({ field }) => (
                              <FormField>
                                <InputText
                                  className="!py-2"
                                  placeholder={t('specialty')}
                                  {...field}
                                />
                              </FormField>
                            )}
                          />
                        ) : (
                          <Controller
                            name="sponsor"
                            control={control}
                            rules={{ required: !isDoctor ? true : false }}
                            disabled={sending}
                            render={({ field }) => (
                              <FormField>
                                <InputText
                                  className="!py-2"
                                  placeholder={t('sponsor')}
                                  {...field}
                                />
                              </FormField>
                            )}
                          />
                        )}
                        <Controller
                          name="email"
                          control={control}
                          rules={{ required: true }}
                          disabled={sending}
                          render={({ field }) => (
                            <FormField>
                              <InputEmail
                                className="!py-2"
                                placeholder={t('email')}
                                {...field}
                              />
                            </FormField>
                          )}
                        />
                        <Controller
                          name="phone"
                          control={control}
                          rules={{ required: true }}
                          disabled={sending}
                          render={({ field }) => (
                            <FormField>
                              <InputText
                                className="!py-2"
                                placeholder={t('phone')}
                                {...field}
                              />
                            </FormField>
                          )}
                        />
                        <Controller
                          name="query"
                          control={control}
                          rules={{ required: true }}
                          disabled={sending}
                          render={({ field }) => (
                            <FormField>
                              <Textarea
                                className="!py-2"
                                placeholder={t('query')}
                                {...field}
                              />
                            </FormField>
                          )}
                        />
                      </div>
                      <div className="mt-4 flex justify-end">
                        {sending ? (
                          <ReCAPTCHA
                            sitekey={recaptchaKey}
                            onChange={recaptchaVerification}
                          />
                        ) : (
                          <Button
                            type="submit"
                            color="dark"
                            disabled={!isValid}
                          >
                            {t('send')}
                            <ArrowForwardIcon color="light" />
                          </Button>
                        )}
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
