import { PropsWithChildren } from "react";

export const H2 = ({ children, className }: PropsWithChildren & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <h1 className={`font-serif font-medium mb-20 text-2xl sm:text-3xl md:text-4xl lg:text-2.5rem ${className}`}>
      {children}
    </h1>
  );
};
