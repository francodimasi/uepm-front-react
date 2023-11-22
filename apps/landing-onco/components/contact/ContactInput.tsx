import { type } from "os";
import { forwardRef } from "react";

type ContactInputProps = {
  label: string;
  name: string;
  type: string;
  className?: string;
};

export const ContactInput = forwardRef<any, ContactInputProps>(
  ({ label, name, type, className, ...props }, ref) => {
    return (
      <div className={`${className}`}>
        <div className="uppercase text-xs mb-1 h-4">{label}</div>
        <input
          ref={ref}
          className="border-2 border-primary-dark py-2 px-3 w-full outline-primary bg-transparent"
          type={type}
          name={name}
          {...props}
        />
      </div>
    );
  }
);
