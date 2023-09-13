import { H2 } from "ui";
import { CounterWrapper } from "../../shared/counter/CounterWrapper";
import { Map } from "./Map";

export const Sites = () => {
  return (
    <section className="relative py-28">

      {/* <div className="grid grid-cols-12 absolute w-full h-full -top-12 right-0">
        <div className="col-span-6">
          <Map />
        </div>
      </div> */}
       <Map className="absolute left-0 -top-40 w-1/2" />

      <div className="container relative grid grid-cols-12 z-30">
          <div className="col-span-6"></div>

          <div className="col-span-6">
            <H2 className="text-light mb-16">
              De Latinoamérica para Latinoamérica
            </H2>
            <p className="text-light mb-16">
              Comprender la heterogeneidad cultural de la región, las
              características del sistema de salud y los desafíos de los
              pacientes en cada país es clave para la efectividad de nuestro
              trabajo.
            </p>
            <h3 className="text-light font-bold text-2xl">Argentina</h3>
            <CounterWrapper />
          </div>

      </div>
    </section>
  );
};
