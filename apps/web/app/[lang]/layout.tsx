import "ui/styles.css";

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {lang: string}
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}