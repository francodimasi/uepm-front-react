'use client';

import { Controller, useForm } from 'react-hook-form';
import { LandingButton } from 'ui';
import { ContactInput } from './ContactInput';
import { ContactRequest } from './contact.type';
import { useCallback, useContext, useState } from 'react';
import { LanguageContext, useClientTranslation } from 'i18n';
import { useContact } from '@api/useContact';
import ReCAPTCHA from 'react-google-recaptcha';

const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY;

type ContactFormProps = {
  onSend: (sent: boolean) => void;
};
export const ContactForm = ({ onSend }: ContactFormProps) => {
  const { lang } = useContext(LanguageContext);
  const { t } = useClientTranslation(lang, { keyPrefix: 'contact.inputs' });
  const { sendContact } = useContact();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ContactRequest | null>();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<ContactRequest>({
    defaultValues: {
      nombre: '',
      apellido: '',
      email: '',
      whatsapp: '',
      especialidad: '',
    },
  });

  const recaptchaVerification = useCallback(async () => {
    if (data) {
      await sendContact(data);
    }
    reset();
    onSend(true);
    setLoading(false);
  }, [data]);

  const onSubmit = async (data: ContactRequest) => {
    setLoading(true);
    setData(data);
  };

  const inputClasses = 'col-span-2 sm:col-span-1';

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <div className={inputClasses}>
          <Controller
            name="nombre"
            control={control}
            disabled={loading}
            rules={{ required: true }}
            render={({ field }) => (
              <ContactInput label={t('name')} type="text" {...field} />
            )}
          />
        </div>
        <div className={inputClasses}>
          <Controller
            name="apellido"
            control={control}
            disabled={loading}
            rules={{ required: true }}
            render={({ field }) => (
              <ContactInput label={t('lastName')} type="text" {...field} />
            )}
          />{' '}
        </div>
        <div className={inputClasses}>
          <Controller
            name="especialidad"
            control={control}
            disabled={loading}
            rules={{ required: true }}
            render={({ field }) => (
              <ContactInput label={t('speciality')} type="text" {...field} />
            )}
          />
        </div>
        <div className={inputClasses}>
          <Controller
            name="email"
            control={control}
            disabled={loading}
            rules={{ required: true }}
            render={({ field }) => (
              <ContactInput label={t('email')} type="email" {...field} />
            )}
          />
        </div>
        <div className={inputClasses}>
          <Controller
            name="whatsapp"
            control={control}
            disabled={loading}
            rules={{ required: true }}
            render={({ field }) => (
              <ContactInput label={t('whatsapp')} type="tel" {...field} />
            )}
          />
        </div>
        <div className={inputClasses}></div>
        <div
          className={`col-span-2 md:col-span-1 xl:col-span-2 2xl:col-span-1 mt-2`}
        >
          <LandingButton
            type="submit"
            className="w-full"
            disabled={!isValid || loading}
            onClick={() => {}}
          >
            {t('button')}
          </LandingButton>
        </div>
      </form>
      <div className="flex mt-6 w-full">
        {loading ? (
          <ReCAPTCHA sitekey={recaptchaKey} onChange={recaptchaVerification} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
