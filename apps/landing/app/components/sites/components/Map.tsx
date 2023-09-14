"use client";

import React, { useContext } from "react";
import { SvgLoader, SvgProxy } from "react-svgmt";
import { SitesContext } from "../SitesProvider";
import { SITES } from "../constants/sites.const";

export const Map = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const { selected, setSelected } = useContext(SitesContext);

  return (
    <div className={`${className}`}>
      <SvgLoader path="images/sites/map.svg">
        {SITES.map(({ id }, index) => (
          <SvgProxy
            key={index}
            onClick={() => setSelected(id)}
            selector={`#${id}`}
            class={`map-marker ${selected === id ? "map-marker-selected" : ""}`}
          />
        ))}
      </SvgLoader>
    </div>
  );
};
