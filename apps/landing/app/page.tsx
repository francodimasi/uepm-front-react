import { Cover } from "./components/cover/Cover"
import { MedicNetwork } from "./components/medic-network/MedicNetwork";
import { Resources } from "./components/resources/components/Resources";
import { Header } from "./components/shared/header/Header";
import { Sites } from "./components/sites/components/Sites";

export default function Home() {
  return (
    <>
      <Header />
      <Cover />
      <Resources />
      <Sites />
      <MedicNetwork />
    </>
  );
}
