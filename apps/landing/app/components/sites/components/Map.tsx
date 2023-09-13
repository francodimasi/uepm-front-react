"use client";

import React from "react";
import { SvgLoader, SvgProxy } from "react-svgmt";

export const Map = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${className}`}>
      <SvgLoader path="images/sites/map.svg">

      </SvgLoader>
    </div>
  );
};
