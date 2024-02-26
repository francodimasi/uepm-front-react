'use client';

import { Button } from 'ui/core';

export const ContactSiteButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Button fill="outline" color="dark" size="sm" bold onClick={() => {}}>
      {text}
    </Button>
  );
};
