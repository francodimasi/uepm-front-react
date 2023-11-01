"use client";
import { Footer } from "@components/shared/Footer";
import { Header } from "@components/shared/header/Header";
import { LanguageProvider } from "i18n";
import { PrivacyAndPolicy } from "./components/PrivacyAndPolicy";


export default function Page({ params }: { params: any }) {
  const { lang } = params;

  return (
    <LanguageProvider lang={lang}>
      <Header />
      <PrivacyAndPolicy />
      <Footer />
    </LanguageProvider>
  );
}
