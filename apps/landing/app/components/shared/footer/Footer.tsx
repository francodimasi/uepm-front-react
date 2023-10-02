import Image from "next/image";
import Link from "next/link";
import { useContext, useMemo } from "react";
import facebook from "ui/assets/icons/facebook.svg";
import instagram from "ui/assets/icons/instagram.svg";
import linkedin from "ui/assets/icons/linkedin.svg";
import logo from "public/images/trialtech-logo.svg";
import { SwitchLanguage } from "ui";
import { Language, LanguageContext, useClientTranslation } from "i18n";

export const Footer = () => {
  const { lang } = useContext(LanguageContext)
  const { t } = useClientTranslation(lang, { keyPrefix: "footer" });
  const { t: tlang } = useClientTranslation(lang, { keyPrefix: "language" });

  const links = useMemo(() => {
    return [
      { title: "Dónde operamos", url: "" },
      { title: "Casos de éxito", url: "" },
      { title: "Productos", url: "" },
      { title: "Contacto", url: "" },
      { title: "UEPM", url: "" },
    ];
  }, []);

  const social = useMemo(() => {
    return [
      { icon: linkedin, alt: "Linkedin" },
      { icon: instagram, alt: "Instagram" },
      { icon: facebook, alt: "Facebook" },
    ];
  }, []);

  const languages: Language[] = useMemo(() => ([
    {
      iso: "en",
      name: tlang('en')
    },
    {
      iso: "es",
      name: tlang('es')
    }
  ]), [])

  return (
    <footer className="py-20">
      <div className="container">
        <div className="flex justify-between items-end">
        <div>
          <Image src={logo} width={160} alt="Trialtech logo" />
          <div className="block md:flex mt-9">
            {links.map(({ title, url }, index) => (
              <Link key={index} className="block mr-6 mt-2 sm:mt-0 sm:mr-4 text-light" href={url}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between sm:block">
          <div className="flex sm:justify-end">
            {social.map(({ icon, alt }, index) => (
              <Image key={index} className="mr-8 sm:mr-0 sm:ml-4 cursor-pointer" src={icon} alt={alt} />
            ))}
          </div>
          <div className="flex flex-col justify-end mt-16 sm:items-end lg:flex-row sm:mt-5 text-light">
            <Link href="">Términos y condiciones</Link>
            <Link className="mt-2 sm:mt-0 sm:ml-4" href="">
              Política de privacidad
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
