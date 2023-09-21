import { H2 } from "ui";
import { Counter } from "../shared/counter/Counter";
import { CaseCard, CaseCardProps } from "./components/CaseCard";
import { CasesContainer } from "./components/CasesContainer";

export const SuccessCases = () => {
  return (
    <section className="bg-success-cases bg-bottom bg-no-repeat bg-[length:100%_70%] pb-24 pt-4">
      <div className="container">
        <H2 className="mb-16 text-light">Algunos casos de éxito</H2>
        <CasesContainer />
      </div>
    </section>
  );
};
