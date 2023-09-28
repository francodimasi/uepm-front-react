"use client";

import { Controller, useForm } from "react-hook-form";
import { LandingButton } from "ui";
import { ContactInput } from "./ContactInput";
import { ContactRequest } from "./contact.type";
import { useContext } from "react";
import { LanguageContext, useClientTranslation } from "i18n";
import { useContact } from "@/app/api/useContact";

type ContactFormProps = {
  onSend: (sent: boolean) => void;
}
export const ContactForm = ({ onSend }: ContactFormProps) => {

  const { lang } = useContext(LanguageContext)
  const { t } = useClientTranslation(lang, { keyPrefix: "contact.inputs" });
  const { sendContact } = useContact();

  const { handleSubmit, control, reset, formState: { isValid } } = useForm<ContactRequest>({
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      whatsapp: "",
      especialidad: "",
    },
  });

  const onSubmit = async (data: ContactRequest) => {
    await sendContact(data);
    reset();
    onSend(true);
  };

  const inputClasses = "col-span-2 sm:col-span-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
      <div className={inputClasses}>
        <Controller
          name="nombre"
          control={control}
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
          rules={{ required: true }}
          render={({ field }) => (
            <ContactInput label={t('lastName')} type="text" {...field} />
          )}
        />{" "}
      </div>
      <div className={inputClasses}>
        <Controller
          name="especialidad"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <ContactInput label={t('speciality')} type="tel" {...field} />
          )}
        />
      </div>
      <div className={inputClasses}>
        <Controller
          name="email"
          control={control}
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
          rules={{ required: true }}
          render={({ field }) => (
            <ContactInput label={t('whatsapp')} type="text" {...field} />
          )}
        />
      </div>
      <div className={inputClasses}></div>
      <div className={`col-span-2 md:col-span-1 xl:col-span-2 2xl:col-span-1 mt-2`}>
        <LandingButton type="submit" className="w-full" disabled={!isValid} onClick={() => { }}>
          {t('button')}
        </LandingButton>
      </div>
    </form>
  );
};
