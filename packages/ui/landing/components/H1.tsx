import { PropsWithChildren } from "react";

export const H1 = ({
  children,
  className,
}: PropsWithChildren & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <h1
      className={`font-serif font-medium mb-14 hmd:mb-14 text-4xl md:text-5xl lg:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
};
