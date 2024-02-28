'use client';

import { useTranslations } from 'intl';
import { useState } from 'react';
import { Button, P2, RadioGroup } from 'ui/core';
import { ContactSiteFormModal } from './ContactSiteFormModal';

const IS_DOCTOR_ID = 1;
const IS_SPONSOR_ID = 2;

export const ContactSiteForm: React.FC<{ buttonCaption: string }> = ({
  buttonCaption,
}) => {
  const t = useTranslations('sites.siteCard');
  const contactOptions = [
    { id: IS_DOCTOR_ID, title: t('iamDoctor') },
    { id: IS_SPONSOR_ID, title: t('iamSponsor') },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDoctor, setIsDoctorSelected] = useState(true);

  const handleContactOptionChange = (idSelected) => {
    idSelected == IS_DOCTOR_ID
      ? setIsDoctorSelected(true)
      : setIsDoctorSelected(false);
  };

  const handleOnClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <P2 className="text-base font-semibold font-['Lexend] !pb-0 !my-0">
        {t('chooseOption')}
      </P2>
      <RadioGroup
        items={contactOptions}
        disposition="inline"
        orientation="horizontal"
        titleClassName="ml-4 font-medium"
        onChange={handleContactOptionChange}
      />
      <Button
        fill="outline"
        color="dark"
        size="sm"
        bold
        onClick={() => setIsModalOpen(true)}
      >
        {buttonCaption}
      </Button>

      <ContactSiteFormModal
        open={isModalOpen}
        onClose={handleOnClose}
        isDoctor={isDoctor}
      />
    </div>
  );
};
