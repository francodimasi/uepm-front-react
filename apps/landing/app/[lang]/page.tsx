"use client";
import { LanguageProvider } from "i18n";
import { ClinicalSearch } from "@components/clinical-search/ClinicalSearch";
import { Contact } from "@components/contact/Contact";
import { Cover } from "@components/cover/Cover"
import { MedicNetwork } from "@components/medic-network/MedicNetwork";
import { Resources } from "@components/resources/components/Resources";
import { Footer } from "@components/shared/footer/Footer";
import { Header } from "@components/shared/header/Header";
import { Sites } from "@components/sites/components/Sites";
import { Sponsors } from "@components/sponsors/Sponsors";
import { SuccessCases } from "@components/success-cases/SuccessCases";
import { Innovation } from "@components/innovation/Innovation";

export default function Home({ params }: { params: any }) {
  const { lang } = params;
  return (
    <>
    
    <LanguageProvider lang={lang}>
      <Header />
      <Cover />
      <Resources />
      <Sites />
      <SuccessCases />
      <Innovation />
      <MedicNetwork />
      <Sponsors />
      <div className="relative">
        <div className="absolute left-o top-0 w-full h-full bg-footer bg-cover opacity-60"></div>
        <div className="relative z-20">
          <ClinicalSearch />
          <Contact />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
    </>
  );
}
