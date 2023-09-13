"use client";

import React, { useState } from "react";
import { SvgLoader, SvgProxy } from "react-svgmt";

const selectors = [
  "argentina",
  "brasil",
  "chile",
  "colombia",
  "peru",
  "mexico",
];

export const Map = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  const [selected, setSelected] = useState(selectors[0]);

  return (
    <div className={`${className}`}>
      <SvgLoader path="images/sites/map.svg">
        {selectors.map((selector, index) => (
          <SvgProxy
            key={index}
            onClick={() => setSelected(selector)}
            selector={`#${selector}`}
            class={`map-marker ${
              selected === selector ? "map-marker-selected" : ""
            }`}
          />
        ))}
      </SvgLoader>
    </div>
  );
};
