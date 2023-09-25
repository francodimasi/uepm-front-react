import { ContactInput } from "./ContactInput";

export const ContactForm = () => {
  return (
    <form className="grid grid-cols-2 gap-4">
      <div className="col-span-2 sm:col-span-1">
        <ContactInput label="Nombre" type="text" name="nombre" />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <ContactInput label="Apellido" type="text" name="apellido" />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <ContactInput label="E-mail" type="text" name="email" />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <ContactInput label="Teléfono (Opcional)" type="text" name="telefono" />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <ContactInput label="Teléfono (Opcional)" type="text" name="telefono" />
      </div>
    </form>
  );
};
