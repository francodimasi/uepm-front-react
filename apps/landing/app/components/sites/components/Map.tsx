"use client";

import React, { useContext } from "react";
import { SvgLoader, SvgProxy } from "react-svgmt";
import { SitesContext } from "../SitesProvider";
import { SITES } from "../constants/sites.const";
import cx from "classnames";

export const Map = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const { selected, setSelected } = useContext(SitesContext);

  const classes = cx("px-4 pr-4 w-full z-30 right-1/2 -top-32", [
    "2xl:w-1/3", //2xl
    "xl:-top-40 xl:w-2/5", //xl
    "lg:pr-12", //lg
    "sm:absolute sm:w-1/2", //sm
  ]);

  return (
    <div className={`${classes} ${className}`}>
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
