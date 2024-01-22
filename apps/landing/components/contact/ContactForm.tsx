'use client';

import { Controller, useForm } from 'react-hook-form';
import { LandingButton } from 'ui';
import { ContactInput } from './ContactInput';
import { ContactRequest } from './contact.type';
import { ServerContext, useCallback, useContext, useState } from 'react';
import { LanguageContext, useClientTranslation } from 'i18n';
import { useContact } from '@api/useContact';
import ReCAPTCHA from 'react-google-recaptcha';

const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY;

type ContactFormProps = {
  onSend: (sent: boolean) => void;
};
export const ContactForm = ({ onSend }: ContactFormProps) => {
  const { lang } = useContext(LanguageContext as ServerContext<any>);
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
      telefono: '',
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className={inputClasses}>
          <Controller
            name="nombre"
            control={control}
            rules={{ required: true }}
            disabled={loading}
            render={({ field }) => (
              <ContactInput label={t('name')} type="text" {...field} />
            )}
          />
        </div>
        <div className={inputClasses}>
          <Controller
            name="apellido"
            control={control}
            rules={{ required: true }}
            disabled={loading}
            render={({ field }) => (
              <ContactInput label={t('lastName')} type="text" {...field} />
            )}
          />{' '}
        </div>

        <div className={inputClasses}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            disabled={loading}
            render={({ field }) => (
              <ContactInput label={t('email')} type="email" {...field} />
            )}
          />
        </div>
        <div className={inputClasses}>
          <Controller
            name="telefono"
            control={control}
            disabled={loading}
            render={({ field }) => (
              <ContactInput label={t('phone')} type="tel" {...field} />
            )}
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <LandingButton
          type="submit"
          className="w-full sm:w-auto"
          color="secondary"
          disabled={!isValid || loading}
          onClick={() => {}}
        >
          {t('button')}
        </LandingButton>
      </div>
      <div className="flex justify-end mt-6">
        {loading ? (
          <ReCAPTCHA sitekey={recaptchaKey} onChange={recaptchaVerification} />
        ) : (
          <></>
        )}
      </div>
    </form>
  );
};
