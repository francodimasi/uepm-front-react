import { motion, useMotionTemplate } from "framer-motion";

export const ResourcePattern = ({ mouseX, mouseY }: any) => {
  let maskImage = useMotionTemplate`radial-gradient(350px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 mix-blend-overlay bg-gradient-to-r opacity-0 transition duration-300 group-hover:opacity-70 dark:from-primary/[0.15] dark:to-primary-light/[0.15]"
        style={style}
      />
    </div>
  );
};
