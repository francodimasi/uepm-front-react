'use client';

import { useCallback, useState } from 'react';
import {
  ContactSiteFormModalProps,
  ContactSiteFormModalRequest,
  ContactUsSiteFormApiRequest,
} from './ContactSiteForm.types';
import { Controller, useForm } from 'react-hook-form';
import {
  Modal,
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
  title = '',
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
    <Modal
      title={title}
      onClose={handleOnClose}
      open={open}
      showClose
      className="w-5/6"
    >
      {sent ? (
        <div className="p-8 sm:p-20 text-center">
          <H4>{t('thanks')}</H4>
        </div>
      ) : (
        <div className="w-full">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
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
                <Button type="submit" color="dark" disabled={!isValid}>
                  {t('send')}
                  <ArrowForwardIcon color="light" />
                </Button>
              )}
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
};
