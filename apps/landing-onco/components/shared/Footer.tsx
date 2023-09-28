import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useContext, useMemo } from "react";
import linkedin from "ui/assets/icons/linkedin.svg";
import instagram from "ui/assets/icons/instagram.svg";
import facebook from "ui/assets/icons/facebook.svg";
import { LanguageContext, useClientTranslation } from "i18n";

type FooterProps = {
  logo: string;
};

export const Footer = ({ logo }: PropsWithChildren<FooterProps>) => {
  const { lang } = useContext(LanguageContext)
  const { t } = useClientTranslation(lang, {keyPrefix: "footer"});
  const links = useMemo(() => {
    return [
      { title: t('whoWeAre'), url: "https://www.unensayoparami.org/noticias-medicas/un-ensayo-para-mi-buscador-ensayos-clinicos" },
      { title: t('uepm'), url: "https://www.unensayoparami.org" },
      { title: t('researchers'), url: "https://app.trialtech.es/auth/login" },
    ];
  }, []);

  const social = useMemo(() => {
    return [
      { icon: linkedin, alt: "Linkedin" },
      { icon: instagram, alt: "Instagram" },
      { icon: facebook, alt: "Facebook" },
    ];
  }, []);

  return (
    <footer className="py-20">
      <div className="container flex justify-between items-end">
        <div>
          <Image src={logo} width={160} alt="Trialtech logo" />
          <div className="block sm:flex mt-9">
            {links.map(({ title, url }, index) => (
              <Link key={index} className="block mr-6 mt-2 sm:mt-0 sm:mr-4" href={url}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between sm:block">
          <div className="invert flex sm:justify-end">
            {social.map(({ icon, alt }, index) => (
              <Image key={index} className="mr-8 sm:mr-0 sm:ml-4 cursor-pointer" src={icon} alt={alt} />
            ))}
          </div>
          <div className="flex flex-col justify-end mt-16 sm:items-end sm:flex-row sm:justify-end sm:mt-5">
            <Link href="">{t('terms')}</Link>
            <Link className="mt-2 sm:mt-0 sm:ml-4" href="">
              {t('policy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
