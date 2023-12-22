import Link from 'next/link';
import React from 'react';
import { Logo, Social } from 'ui/components';
import { FooterSection } from './section';
import { FooterSectionLinkProps } from './section/FooterSection.types';
import { PrivacyPolicy, Terms } from './t&c';

const patientLinks: FooterSectionLinkProps[] = [
  { label: 'Sponsors', link: '' },
  { label: 'Physicians', link: '' },
];
const aboutUsLinks: FooterSectionLinkProps[] = [
  { label: 'Our mission', link: '' },
  { label: 'The team', link: '' },
  { label: 'FAQs', link: '' },
];
const newsLinks: FooterSectionLinkProps[] = [
  { label: 'Last news', link: '' },
  { label: 'Science', link: '' },
  { label: 'Studies', link: '' },
];
const productsLinks: FooterSectionLinkProps[] = [
  { label: 'UEPM Patients', link: '' },
  { label: 'UEPM Onco', link: '' },
  { label: 'UEPM Physicians', link: '' },
];

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col bg-primary-dark">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 pb-2 sm:p-20 sm:pb-8">
        <Link href="/" aria-label="Home">
          <Logo brand="uepm" type="dark" className="flex px-2" width={120} />
        </Link>
        <div className="grid grid-cols-2 sm:grid-cols-4 col-span-3 gap-4">
          <FooterSection
            className="bg-light"
            title="Patients"
            links={patientLinks}
          />
          <FooterSection
            className="bg-light"
            title="About us"
            links={aboutUsLinks}
          />
          <FooterSection
            className="bg-light"
            title="Medical news"
            links={newsLinks}
          />
          <FooterSection
            className="bg-light"
            title="Products"
            links={productsLinks}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 pb-2 sm:hidden">
        <div className="ps-2 text-light">Language selector</div>
        <Social className="ps-2" />
        <Terms className="mr-2" />
        <PrivacyPolicy />
      </div>
      <div className="sm:grid grid-cols-2 px-4 py-2 sm:px-20 sm:py-8 hidden">
        <div className="flex flex-row justify-start items-center">
          <div className="ms-2 me-4 p-2 text-light border border-solid">
            Language selector
          </div>
          <Terms className="mr-2" />
          <PrivacyPolicy />
        </div>
        <div className="flex flex-row justify-end">
          <Social size="sm" />
        </div>
      </div>
    </div>
  );
};
