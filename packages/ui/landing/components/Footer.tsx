import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useMemo } from "react";
import linkedin from "ui/assets/icons/linkedin.svg";
import instagram from "ui/assets/icons/instagram.svg";
import facebook from "ui/assets/icons/facebook.svg";

type FooterProps = {
  logo: string;
};

export const Footer = ({ logo }: PropsWithChildren<FooterProps>) => {
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

  return (
    <footer className="py-20">
      <div className="container flex justify-between items-end">
        <div>
          <Image src={logo} width={160} alt="Trialtech logo" />
          <div className="block sm:flex mt-9">
            {links.map(({ title, url }) => (
              <Link className="block mr-6 mt-2 sm:mt-0 sm:mr-4" href={url}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between sm:block">
          <div className="invert flex sm:justify-end">
            {social.map(({ icon, alt }) => (
              <Image className="mr-8 sm:mr-0 sm:ml-4" src={icon} alt={alt} />
            ))}
          </div>
          <div className="flex flex-col justify-end mt-16 sm:items-end sm:flex-row sm:justify-end sm:mt-5">
            <Link href="">Términos y condiciones</Link>
            <Link className="mt-2 sm:mt-0 sm:ml-4" href="">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
