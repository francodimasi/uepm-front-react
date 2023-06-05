"use client"
import { useEffect, useRef, useState } from "react";
import clsx from 'clsx';
import { PartnerCard } from "./PartnerCard";
import { Partner } from "../types/partner.type";

type PartnersColumnProps = {
  className?: string;
  partners: Partner[];
  reviewClassName?: (index: number) => string;
  msPerPixel: number;
};
export const PartnersColumn = ({
  className,
  partners,
  reviewClassName = () => "",
  msPerPixel = 0,
}: PartnersColumnProps) => {
  let columnRef = useRef<HTMLDivElement>();
  let [columnHeight, setColumnHeight] = useState(0);
  let duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const style = { "--marquee-duration": duration } as any;

  return (
    <div
      ref={columnRef}
      className={clsx("animate-marquee space-y-8 py-4", className)}
      style={style}
    >
      {partners.concat(partners).map((partner, reviewIndex) => (
        <PartnerCard
          key={reviewIndex}
          aria-hidden={reviewIndex >= partners.length}
          className={reviewClassName(reviewIndex % partners.length)}
          partner={partner}
        />
      ))}
    </div>
  );
};
