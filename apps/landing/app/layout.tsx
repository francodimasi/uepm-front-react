import type { Metadata } from "next";
import "ui/styles.css";
import "./styles/globals.css";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { StyledComponentsRegistry } from "ui";

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
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
