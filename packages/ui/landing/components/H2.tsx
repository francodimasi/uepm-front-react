import { PropsWithChildren } from "react";

export const H2 = ({ children, className }: PropsWithChildren & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <h2 className={`font-serif font-medium text-2xl sm:text-3xl md:text-4xl ${className}`}>
      {children}
    </h2>
  );
};
