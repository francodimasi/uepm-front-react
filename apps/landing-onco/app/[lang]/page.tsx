"use client";
import { Contact } from "@components/contact/Contact";
import { Cover } from "@components/cover/Cover";
import { Resources } from "@components/resources/Resources";
import { Header } from "@components/shared/header/Header";
import logo from "public/images/uepm-onco-logo.svg";
import { Footer } from "ui";
import { useClientTranslation } from "i18n";

export default function Page({ params }: { params: any }) {
  const { lang } = params;
  const { t } = useClientTranslation(lang);
  return (
    <>
      <Header />
      <Cover />
      <Resources />
      <div id="contact">
        <Contact />
      </div>
      <Footer logo={logo} />
    </>
  );
}
