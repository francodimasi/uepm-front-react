import { PropsWithChildren, createContext, useState } from "react";
import { useSites } from "./hooks/useSites";

export const SitesContext = createContext({} as any);

export const SitesProvider = ({ children }: PropsWithChildren) => {
  const { sites } = useSites();
  const [selected, setSelected] = useState(sites[0].id);

  const value = {
    selected,
    setSelected,
  };

  return (
    <SitesContext.Provider value={value}>{children}</SitesContext.Provider>
  );
};
