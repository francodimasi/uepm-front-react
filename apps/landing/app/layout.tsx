import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "ui/styles.css";
import "./styles/globals.css";


export const metadata: Metadata = {
  title: "Trialtech",
  description:
    "Innovación y tecnología para revolucionar el reclutamiento de pacientes en Latinoamérica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
