import React, { PropsWithChildren } from 'react';

type ContentProps = PropsWithChildren<{}>;

export const Content: React.FC<ContentProps> = ({ children }) => (
  <div className="flex-1 mx-4 py-4 lg:mx-20 bg-cover bg-origin-border">
    {children}
  </div>
);
