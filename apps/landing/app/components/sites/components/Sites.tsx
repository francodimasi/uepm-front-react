import { H2 } from "ui";

export const Sites = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-6"></div>
          <div className="col-span-6">
            <H2 className="text-light mb-16">De Latinoamérica para Latinoamérica</H2>
            <p className="text-light mb-16">
              Comprender la heterogeneidad cultural de la región, las
              características del sistema de salud y los desafíos de los
              pacientes en cada país es clave para la efectividad de nuestro
              trabajo.
            </p>
            <h3 className="text-light">Argentina</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
