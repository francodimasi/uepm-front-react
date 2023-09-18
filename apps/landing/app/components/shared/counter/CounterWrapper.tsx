import { useCallback, useContext, useMemo } from "react";
import { Site } from "../../sites/constants/sites.const";
import { Counter } from "./Counter";
import { CounterItem } from "./types/counter.type";
import { SitesContext } from "../../sites/SitesProvider";

export const CounterWrapper = ({
  id,
  name,
  cities,
  clinics,
  specialists,
  specialties,
}: Site) => {
  const { selected } = useContext(SitesContext);
  const counterData: CounterItem[] = [
    {
      label: "Especialistas",
      value: specialists,
    },
    {
      label: "Sedes Clínicas",
      value: clinics,
    },
    {
      label: "Ciudades",
      value: cities,
    },
    {
      label: "Especialidades",
      value: specialties,
    },
  ];

  const CounterList = useCallback(
    () => (
      <>
        <h3 className="text-light font-bold text-base sm:text-2xl">{name}</h3>
        <div className="grid  grid-cols-2 sm:grid-cols-4 mt-2.5 sm:mt-10">
          {counterData.map((item, index) => (
            <div key={index} className="my-5 sm:my-0 col-span-1">
              <Counter {...item} />
            </div>
          ))}
        </div>
      </>
    ),
    [selected]
  );

  return <CounterList />;
};
