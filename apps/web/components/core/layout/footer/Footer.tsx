import { Link } from '@intl/navigation';
import { PropsWithChildren } from 'react';
import { Logo, Social } from 'ui/components';
import { FooterSection } from './section';
import { FooterSectionLinkProps } from './section/FooterSection.types';
import { PrivacyPolicy, Terms } from './t&c';
import { LocaleProps } from 'intl';
import { SwitchLocale } from '@intl/components/SwitchLocale';

const patientLinks: FooterSectionLinkProps[] = [
  { id: 'sponsors', href: '/partners' },
  { id: 'physicians', href: '' },
];
const aboutUsLinks: FooterSectionLinkProps[] = [
  { id: 'mission', href: '/about' },
  { id: 'team', href: '/about' },
  { id: 'faqs', href: '/about' },
];
const newsLinks: FooterSectionLinkProps[] = [
  { id: 'news', href: '/blog' },
  { id: 'science', href: '/blog' },
  { id: 'studies', href: '' },
];
const productsLinks: FooterSectionLinkProps[] = [
  { id: 'uepmPatients', href: '', outbound: true },
  {
    id: 'uepmOnco',
    href: 'https://onco.unensayoparami.org',
    outbound: true,
  },
  { id: 'uepmPhysicians', href: '', outbound: true },
];

type FooterProps = PropsWithChildren & LocaleProps;

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  return (
    <div className="flex flex-col bg-primary-dark">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 p-4 pb-2 sm:p-20 sm:pb-8">
        <Link href="/" aria-label="Home" locale={locale}>
          <Logo
            brand="uepm"
            type="dark"
            className="flex px-2 mb-6 pt-2 xl:pt-0"
            width={120}
          />
        </Link>
        <div className="grid grid-cols-2 lg:grid-cols-4 col-span-3 gap-4">
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
      <div className="grid grid-cols-2 gap-4 sm:px-20 pb-4 sm:py-8 lg:hidden">
        <div className="ps-2 text-light">
          <SwitchLocale locale={locale} />
        </div>
        <Social className="ps-2" />
        <Terms className="mr-2" />
        <PrivacyPolicy />
      </div>
      <div className="hidden lg:grid grid-cols-4 lg:grid-cols-3 px-20 py-8">
        <div className="flex flex-row justify-start items-center col-span-3 lg:col-span-2">
          <div className="me-4 pe-2 text-light">
            <SwitchLocale locale={locale} />
          </div>
          <Terms className="mr-2" locale={locale} />
          <PrivacyPolicy locale={locale} />
        </div>
        <div className="flex flex-row justify-end">
          <Social size="sm" />
        </div>
      </div>
    </div>
  );
};
