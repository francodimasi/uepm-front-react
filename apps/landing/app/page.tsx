import { ClinicalSearch } from "./components/clinical-search/ClinicalSearch";
import { Contact } from "./components/contact/Contact";
import { Cover } from "./components/cover/Cover"
import { MedicNetwork } from "./components/medic-network/MedicNetwork";
import { Resources } from "./components/resources/components/Resources";
import { Footer } from "./components/shared/footer/Footer";
import { Header } from "./components/shared/header/Header";
import { Sites } from "./components/sites/components/Sites";
import { SuccessCases } from "./components/success-cases/SuccessCases";

export default function Home() {
  return (
    <>
      <Header />
      <Cover />
      <Resources />
      <Sites />
      <SuccessCases />
      <MedicNetwork />
      <div className="relative">
        <div className="absolute left-o top-0 w-full h-full bg-footer bg-cover bg-[center_top_5rem] opacity-60"></div>
        <div className="relative z-20">
          <ClinicalSearch />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
