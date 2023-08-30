import { Cover } from "./components/cover/Cover";
import { Features } from "./components/features/Features";
import { Header } from "./components/shared/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Cover />
      <Features />
    </>
  );
}
