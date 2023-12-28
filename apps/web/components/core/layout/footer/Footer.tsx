import { Link } from '@intl/navigation';
import { PropsWithChildren } from 'react';
import { Logo, Social } from 'ui/components';
import { FooterSection } from './section';
import { FooterSectionLinkProps } from './section/FooterSection.types';
import { PrivacyPolicy, Terms } from './t&c';
import { LocaleProps } from 'intl';

const patientLinks: FooterSectionLinkProps[] = [
  { label: 'Sponsors', href: '/partners' },
  { label: 'Physicians', href: '' },
];
const aboutUsLinks: FooterSectionLinkProps[] = [
  { label: 'Our mission', href: '/about' },
  { label: 'The team', href: '/about' },
  { label: 'FAQs', href: '/about' },
];
const newsLinks: FooterSectionLinkProps[] = [
  { label: 'Last news', href: '/blog' },
  { label: 'Science', href: '/blog' },
  { label: 'Studies', href: '' },
];
const productsLinks: FooterSectionLinkProps[] = [
  { label: 'UEPM Patients', href: '', outbound: true },
  {
    label: 'UEPM Onco',
    href: 'https://onco.unensayoparami.org',
    outbound: true,
  },
  { label: 'UEPM Physicians', href: '', outbound: true },
];

type FooterProps = PropsWithChildren & LocaleProps;

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  return (
    <div className="flex flex-col bg-primary-dark">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 pb-2 sm:p-20 sm:pb-8">
        <Link href="/" aria-label="Home" locale={locale}>
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
