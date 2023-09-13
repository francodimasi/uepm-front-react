import { Cover } from "./components/cover/Cover"
import { Resources } from "./components/resources/Resources";
import { Header } from "./components/shared/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Cover />
      <Resources />
    </>
  );
}