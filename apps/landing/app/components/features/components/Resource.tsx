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
      className="group relative px-8 pt-10 pb-16 backdrop-blur"
    >
      <ResourcePattern mouseX={mouseX} mouseY={mouseY} />
      <Image src={icon} alt={name} width={48} />
      <h4 className="text-light text-2xl font-semibold my-4">{name}</h4>
      <p className="text-light">{description}</p>
    </div>
  );
};
