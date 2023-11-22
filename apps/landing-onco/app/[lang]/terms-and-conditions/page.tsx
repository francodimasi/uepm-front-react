"use client";
import { Footer } from "@components/shared/Footer";
import { Header } from "@components/shared/header/Header";
import { LanguageProvider } from "i18n";
import { TermsAndConditions } from "./components/TermsAndConditions";

export default function Page({ params }: { params: any }) {
  const { lang } = params;

  return (
    <LanguageProvider lang={lang}>
      <Header />
      <TermsAndConditions />
      <Footer />
    </LanguageProvider>
  );
}
