"use client";

import { useCallback, useContext, useMemo } from "react";
import { SitesContext } from "../../sites/SitesProvider";
import { Site } from "../../sites/constants/sites.const";
import { Counter } from "./Counter";
import { CounterItem } from "./types/counter.type";

export const CounterWrapper = ({
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
    [cities, clinics, specialists, specialties]
  );

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected]
  );

  return <CounterList />;
};
