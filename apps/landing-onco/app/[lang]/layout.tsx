import type { Metadata } from "next";
import { dir } from "i18next";
import "ui/styles.css";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Trialtech",
  description:
    "Innovación y tecnología para revolucionar el reclutamiento de pacientes en Latinoamérica",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className="bg-light">{children}</body>
    </html>
  );
}
