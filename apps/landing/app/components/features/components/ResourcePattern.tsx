import { motion, useMotionTemplate } from "framer-motion";

export const ResourcePattern = ({ mouseX, mouseY }: any) => {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
     <motion.div
        className="absolute inset-0 mix-blend-lighten bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
    </div>
  );
};
