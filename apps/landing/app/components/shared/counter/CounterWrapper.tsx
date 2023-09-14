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
  const counterData: CounterItem[] = useMemo(
    () => [
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
    ],
    [id]
  );

  const CounterList = useCallback(() => (
    <>
      <h3 className="text-light font-bold text-2xl">{name}</h3>
      <div className="flex mt-10">
        {counterData.map((item, index) => (
          <div key={index} className="flex-1">
            <Counter {...item} />
          </div>
        ))}
      </div>
    </>
  ), [selected]);

  return <CounterList />
};
