import { useMotionValue } from "framer-motion";
import { ResourceItem } from "../types/resource.type";
import Image from "next/image";
import { ResourcePattern } from "./ResourcePattern";

export const Resource = ({ name, icon, description }: ResourceItem) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className="group relative backdrop-blur"
    >
      <div className="bg-dark absolute w-full h-full opacity-30 top-0 left-0"></div>
      <div className="relative z-10 p-8">
        <ResourcePattern mouseX={mouseX} mouseY={mouseY} />
        <Image
          src={icon}
          alt={name}
          width={48}
          className="opacity-90 group-hover:opacity-100 transition-opacity duration-200"
        />
        <h4 className="text-light text-2xl font-semibold my-4">{name}</h4>
        <p className="text-light">{description}</p>
      </div>
    </div>
  );
};
