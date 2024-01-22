import Image from 'next/image';
import Link from 'next/link';
import { ServerContext, useContext, useMemo } from 'react';
import facebook from 'ui/assets/icons/social/facebook-light.svg';
import instagram from 'ui/assets/icons/social/instagram-light.svg';
import linkedin from 'ui/assets/icons/social/linkedin-light.svg';
import logo from 'public/images/trialtech-logo.svg';
import { SwitchLanguage } from 'ui';
import { Language, LanguageContext, useClientTranslation } from 'i18n';
import { useMenu } from '@hooks/useMenu';

export const Footer = () => {
  const { lang } = useContext(LanguageContext as ServerContext<any>);
  const { t } = useClientTranslation(lang, { keyPrefix: 'footer' });

  const { links, languages } = useMenu();

  const social = useMemo(() => {
    return [
      { icon: linkedin, alt: 'Linkedin' },
      { icon: instagram, alt: 'Instagram' },
      { icon: facebook, alt: 'Facebook' },
    ];
  }, []);

  return (
    <footer className="py-20">
      <div className="container">
        <div className="flex justify-between items-end">
          <div>
            <Image src={logo} width={160} alt="Trialtech logo" />
            <div className="block md:flex mt-9">
              {links.map(({ title, url }, index) => (
                <Link
                  key={index}
                  className="block mr-6 mt-2 sm:mt-0 sm:mr-4 text-light"
                  href={url}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between sm:block">
            <div className="flex sm:justify-end">
              {social.map(({ icon, alt }, index) => (
                <Image
                  key={index}
                  className="mr-8 sm:mr-0 sm:ml-4 cursor-pointer"
                  src={icon}
                  alt={alt}
                />
              ))}
            </div>
            <div className="flex flex-col justify-end mt-16 sm:items-end lg:flex-row sm:mt-5 text-light">
              <Link href="">{t('terms')}</Link>
              <Link className="mt-2 sm:mt-0 sm:ml-4" href="">
                {t('policy')}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex mt-6">
          <span className="mr-2 text-light">{t('language')}</span>
          <SwitchLanguage className="text-light" languages={languages} />
        </div>
      </div>
    </footer>
  );
};
