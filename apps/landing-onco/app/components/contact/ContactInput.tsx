import { type } from "os";

type ContactInputProps = {
  label: string;
  name: string;
  type: string;
  className?: string;
};

export const ContactInput = ({ label, name, type, className }: ContactInputProps) => {
  return (
    <div className={`${className}`}>
      <div className="uppercase text-xs mb-1 h-4">{label}</div>
      <input
        className="border-2 border-primary-dark py-2 px-3 w-full outline-primary"
        type={type}
        name={name}
      />
    </div>
  );
};
