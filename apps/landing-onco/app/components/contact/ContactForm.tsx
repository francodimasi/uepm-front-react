"use client";

import { Controller, useForm } from "react-hook-form";
import { LandingButton } from "../shared/button/LandingButton";
import { ContactInput } from "./ContactInput";
import { ContactRequest } from "./contact.type";
import { useContact } from "@/app/api/useContact";

type ContactFormProps = {
  onSend: (sent: boolean) => void; 
}
export const ContactForm = ({ onSend }: ContactFormProps) => {

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
          name="especialidad"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <ContactInput label="Especialidad" type="tel" {...field} />
          )}
        />
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
          name="whatsapp"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <ContactInput label="Whatsapp" type="text" {...field}/>
          )}
        />
      </div>
      <div className={inputClasses}></div>
      <div className={`col-span-2 md:col-span-1 xl:col-span-2 2xl:col-span-1 mt-2`}>
        <LandingButton type="submit" className="w-full" onClick={() => {}}>
          Quiero que me contacten
        </LandingButton>
      </div>
    </form>
  );
};
