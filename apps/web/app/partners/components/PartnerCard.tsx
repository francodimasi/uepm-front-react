"use client";
import { useMemo } from "react";
import clsx from "clsx";
import { Partner } from "../types/partner.type";

type PartnerCardProps = {
  partner: Partner;
  className: string;
};
export const PartnerCard = ({ partner, className }: PartnerCardProps) => {
  const { name, description, image, link, type } = partner;

  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        "animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5",
        className
      )}
      style={{ animationDelay }}
    >
      <div className="flex justify-center">
        <img className="w-6/12" src={`/partners/${image}`} alt="" />
      </div>
      <blockquote className="text-gray-900">
        <p className="mt-4 text-lg font-semibold leading-6 text-center">
          {name}
        </p>
        <p className="mt-3 text-base text-center leading-7">{description}</p>
      </blockquote>
    </figure>
  );
};
