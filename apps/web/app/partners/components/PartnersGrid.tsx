"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "ui/core/container";
import { PartnersColumn } from "./PartnersColumn";
import clsx from "clsx";
import { Partner } from "../types/partner.type";

function splitArray(array, numParts) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

type PartnersGridProps = {
  partners: Partner[];
};
export const PartnersGrid = ({ partners }: PartnersGridProps) => {
  let containerRef = useRef();
  let isInView = useInView(containerRef, { once: true, amount: 0.4 });
  let columns = splitArray(partners, 3);
  columns = [columns[0], columns[1], splitArray(columns[2], 2)];

  return (
    <div className="relative">
      <Container>
        <div
          ref={containerRef}
          className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
        >
          {isInView && (
            <>
              <PartnersColumn
                partners={[...columns[0], ...columns[2].flat(), ...columns[1]]}
                reviewClassName={(reviewIndex) =>
                  clsx(
                    reviewIndex >= columns[0].length + columns[2][0].length &&
                      "md:hidden",
                    reviewIndex >= columns[0].length && "lg:hidden"
                  )
                }
                msPerPixel={10}
              />
              <PartnersColumn
                partners={[...columns[1], ...columns[2][1]]}
                className="hidden md:block"
                reviewClassName={(reviewIndex) =>
                  reviewIndex >= columns[1].length && "lg:hidden"
                }
                msPerPixel={15}
              />
              <PartnersColumn
                partners={columns[2].flat()}
                className="hidden lg:block"
                msPerPixel={10}
              />
            </>
          )}
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  );
};
