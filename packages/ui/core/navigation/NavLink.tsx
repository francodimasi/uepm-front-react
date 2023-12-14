import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { NavLinkProps } from "./NavLink.types";

export const NavLink: React.FC<NavLinkProps> = ({
  label,
  href,
  className,
  hovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Link
      href={href}
      className={clsx(
        "relative -mx-3 -my-2 rounded-lg px-3 py-2 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-100"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  );
};
