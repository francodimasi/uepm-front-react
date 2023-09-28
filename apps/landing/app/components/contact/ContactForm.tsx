"use client";

import { Controller, useForm } from "react-hook-form";
import { LandingButton } from "ui";
import { ContactInput } from "./ContactInput";
import { ContactRequest } from "./contact.type";
import { useContext } from "react";
import { LanguageContext, useClientTranslation } from "i18n";
import { useContact } from "@app/api/useContact";

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
      telefono: ""
    },
  });

  const onSubmit = async (data: ContactRequest) => {
    await sendContact(data);
    reset();
    onSend(true);
  };

  const inputClasses = "col-span-2 sm:col-span-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className={inputClasses}>
          <Controller
            name="nombre"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <ContactInput label="Nombre" type="text" {...field} />
            )}
          />
        </div>
        <div className={inputClasses}>
          <Controller
            name="apellido"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <ContactInput label="Apellido" type="text" {...field} />
            )}
          />{" "}
        </div>

        <div className={inputClasses}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <ContactInput label="E-mail" type="email" {...field} />
            )}
          />
        </div>
        <div className={inputClasses}>
          <Controller
            name="telefono"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <ContactInput label="Telefono (Opcional)" type="tel" {...field} />
            )}
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <LandingButton type="submit" className="" color="secondary" disabled={!isValid} onClick={() => { }}>
          Quiero que me contacten
        </LandingButton>
      </div>
    </form>
  );
};
