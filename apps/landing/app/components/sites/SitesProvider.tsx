import { PropsWithChildren, createContext, useState } from "react";
import { SITES } from "./constants/sites.const";

export const SitesContext = createContext({} as any);

export const SitesProvider = ({ children }: PropsWithChildren) => {
  const [selected, setSelected] = useState(SITES[0].id);

  const value = {
    selected,
    setSelected,
  };

  return (
    <SitesContext.Provider value={value}>{children}</SitesContext.Provider>
  );
};
