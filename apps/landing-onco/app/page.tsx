import { Footer } from "ui";
import { Cover } from "./components/cover/Cover"
import { Resources } from "./components/resources/Resources";
import { Header } from "./components/shared/header/Header";
import logo from "public/images/uepm-onco-logo.svg";

export default function Home() {
  return (
    <>
      <Header />
      <Cover />
      <Resources />
      <Footer logo={logo}/>
    </>
  );
}
