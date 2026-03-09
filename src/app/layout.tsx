import "./globals.css";

export const metadata = {
  title: "CS2 HUB - Aldento",
  description: "Trening calloutów i generator autoexec",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-black antialiased">
        {children}
      </body>
    </html>
  );
}