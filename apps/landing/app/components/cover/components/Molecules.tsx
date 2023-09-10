"use client";
import { forwardRef } from "react";

import Image from "next/image";
import elipses from "public/images/cover/elipses.png";

export const Molecules = forwardRef<any, any>((props, ref) => {
  return (
    <div className="h-full w-full absolute top-0 -right-6 overflow-hidden">
      <Image
        ref={ref}
        className="absolute top-0 right-0  w-7/12 xl:w-5/12"
        src={elipses}
        alt="elipses"
      />
    </div>
  );
});
