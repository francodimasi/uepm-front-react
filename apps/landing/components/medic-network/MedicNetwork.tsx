import { H2 } from "ui";

export const MedicNetwork = () => {
  return (
    <section className="bg-light relative">
      <div className="container py-16 sm:py-60">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 lg:col-span-6 sm:pr-20">
            <H2 className="pb-12">Red de médicos referentes</H2>
            <p>
              Contamos con una red de médicos especialistas en diferentes áreas
              terapéuticas interesados en brindarles a sus pacientes la
              oportunidad de participar de ensayos clínicos. Estos
              profesionales, previamente informados acerca de los protocolos de
              investigación disponibles, tienen la posibilidad de derivar
              potenciales candidatos a través de nuestras plataformas
              electrónicas seguras y acceder a un seguimiento del paciente en
              cada instancia del protocolo en tiempo real.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:absolute top-0 right-0 h-[50vh] sm:h-full bg-medic bg-cover bg-center w-full sm:w-2/6 lg:w-1/2"></div>
    </section>
  );
};
