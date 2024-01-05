import { Language, LanguageContext, useClientTranslation } from 'i18n';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/uepm-onco-logo.svg';
import { ServerContext, useContext, useMemo } from 'react';
import { SwitchLanguage } from 'ui';
import instagram from 'ui/assets/icons/social/instagram-light.svg';
import linkedin from 'ui/assets/icons/social/linkedin-light.svg';

export const Footer = () => {
  const { lang } = useContext(LanguageContext as ServerContext<any>);
  const { t } = useClientTranslation(lang, { keyPrefix: 'footer' });
  const { t: tlang } = useClientTranslation(lang, { keyPrefix: 'language' });
  const links = useMemo(() => {
    return [
      {
        title: t('whoWeAre'),
        url: 'https://www.unensayoparami.org/noticias-medicas/un-ensayo-para-mi-buscador-ensayos-clinicos',
      },
      { title: t('uepm'), url: 'https://www.unensayoparami.org' },
      { title: t('researchers'), url: 'https://app.trialtech.es/auth/login' },
    ];
  }, []);

  const social = useMemo(() => {
    return [
      {
        icon: linkedin,
        alt: 'Linkedin',
        url: 'https://www.linkedin.com/company/unensayoparami/mycompany/',
      },
      {
        icon: instagram,
        alt: 'Instagram',
        url: 'https://www.instagram.com/unensayoparami_onco',
      },
    ];
  }, []);

  const languages: Language[] = useMemo(
    () => [
      {
        iso: 'en',
        name: tlang('en'),
      },
      {
        iso: 'es',
        name: tlang('es'),
      },
    ],
    [],
  );

  return (
    <footer className="py-20">
      <div className="container">
        <div className="flex justify-between items-end">
          <div>
            <Image src={logo} width={160} alt="Trialtech logo" />
            <div className="block sm:flex mt-9">
              {links.map(({ title, url }, index) => (
                <Link
                  key={index}
                  className="block mr-6 mt-2 sm:mt-0 sm:mr-4"
                  href={url}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between sm:block">
            <div className="invert flex sm:justify-end">
              {social.map(({ icon, alt, url }, index) => (
                <Link key={index} href={url} target="_blank">
                  <Image
                    className="mr-8 sm:mr-0 sm:ml-4 cursor-pointer"
                    src={icon}
                    alt={alt}
                  />
                </Link>
              ))}
            </div>
            <div className="flex flex-col justify-end mt-16 sm:items-end sm:flex-row sm:justify-end sm:mt-5">
              <Link href="/terms-and-conditions" target="_blank">
                {t('terms')}
              </Link>
              <Link
                href="/privacy-and-policy"
                target="_blank"
                className="mt-2 sm:mt-0 sm:ml-4"
              >
                {t('policy')}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex mt-6">
          <span className="mr-2">{t('language')}</span>
          <SwitchLanguage languages={languages} />
        </div>
      </div>
    </footer>
  );
};
