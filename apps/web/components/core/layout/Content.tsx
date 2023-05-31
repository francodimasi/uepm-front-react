import React, { PropsWithChildren } from "react";

type ContentProps = PropsWithChildren<{}>;

export const Content: React.FC<ContentProps> = ({ children }) => (
  <div className="flex-grow p-4">
    {children}
  </div>
);
