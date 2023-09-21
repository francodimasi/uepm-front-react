import { Footer } from "ui";
import { Cover } from "./components/cover/Cover"
import { Resources } from "./components/resources/Resources";
import { Header } from "./components/shared/header/Header";
import logo from "public/images/uepm-onco-logo.svg";
import { ClinicalSearch } from "./components/clinical-search/ClinicalSearch";
import { Contact } from "./components/contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Cover />
      <Resources />
      <ClinicalSearch />
      <Contact />
      <Footer logo={logo}/>
    </>
  );
}
