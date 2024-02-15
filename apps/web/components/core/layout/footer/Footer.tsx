import { Link } from '@intl/navigation';
import { PropsWithChildren } from 'react';
import { Logo, Social } from 'ui/components';
import { FooterSection } from './section';
import { FooterSectionLinkProps } from './section/FooterSection.types';
import { PrivacyPolicy, Terms } from './t&c';
import { LocaleProps, useTranslations } from 'intl';
import { SwitchLocale } from '@intl/components/SwitchLocale';

const aboutUsLinks: FooterSectionLinkProps[] = [
  { id: 'mission', href: '/about' },
  { id: 'team', href: '/about#team-section' },
  { id: 'partners', href: '/about#partners-section' },
  { id: 'faqs', href: '/about#faqs-section' },
];
const newsLinks: FooterSectionLinkProps[] = [
  { id: 'news', href: '/blog/category/3' },
  { id: 'studies', href: '/blog/category/4' },
  { id: 'interviews', href: '/blog/category/5' },
  { id: 'testimonies', href: '/blog/category/2' },
];
const productsLinks: FooterSectionLinkProps[] = [
  {
    id: 'uepmPatients',
    href: process.env.NEXT_PUBLIC_PRODUCT_PATIENTS,
    outbound: true,
  },
  {
    id: 'uepmOnco',
    href: process.env.NEXT_PUBLIC_PRODUCT_ONCO,
    outbound: true,
  },
  {
    id: 'uepmPhysicians',
    href: process.env.NEXT_PUBLIC_PRODUCT_PHYSICIANS,
    outbound: true,
  },
];

type FooterProps = PropsWithChildren & LocaleProps;

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = useTranslations('footer.sections');

  return (
    <div className="flex flex-col bg-primary-dark">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 p-4 pb-2 sm:p-20 pb-8">
        <Link href="/" aria-label="Home" locale={locale} className="col-span-2">
          <Logo
            brand="uepm"
            type="dark"
            className="flex px-2 mb-6 pt-2 xl:pt-0"
            width={120}
          />
        </Link>
        <div className="grid grid-cols-2 lg:grid-cols-3 col-span-2 gap-4">
          <FooterSection
            className="bg-light"
            title={t('about')}
            links={aboutUsLinks}
          />
          <FooterSection
            className="bg-light"
            title={t('news')}
            links={newsLinks}
          />
          <FooterSection
            className="bg-light"
            title={t('products')}
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
