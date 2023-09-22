"use client";

import { Controller, useForm } from "react-hook-form";
import { LandingButton } from "../shared/button/LandingButton";
import { ContactInput } from "./ContactInput";
import { ContactRequest } from "./contact.type";

type ContactFormProps = {
  onSend: (sent: boolean) => void; 
}
export const ContactForm = ({ onSend }: ContactFormProps) => {

  const { handleSubmit, control, reset, formState: { isValid } } = useForm<ContactRequest>({
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      whatsapp: "",
      especialidad: "",
    },
  });

  const onSubmit = (data: ContactRequest) => {
    console.log(data);
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
      <div className={`${inputClasses} mt-2`}>
        <LandingButton type="submit" className="w-full" onClick={() => {}}>
          Quiero que me contacten
        </LandingButton>
      </div>
    </form>
  );
};
