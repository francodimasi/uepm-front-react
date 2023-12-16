import Link from "next/link";
import clsx from "clsx";
import { PropsWithClassName } from "ui/types/core";

export const PrivacyPolicy: React.FC<PropsWithClassName> = ({ className }) => {
  return (
    <Link href="" className={clsx("p-2 text-light", className)}>
      Privacy Policy
    </Link>
  );
};
