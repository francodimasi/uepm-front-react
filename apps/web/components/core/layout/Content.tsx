import React, { PropsWithChildren } from "react";

type ContentProps = PropsWithChildren<{}>;

export const Content: React.FC<ContentProps> = ({ children }) => (
  <div className="flex-1">{children}</div>
);
