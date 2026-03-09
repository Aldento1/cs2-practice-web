import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
<body className={`${inter.className} bg-black antialiased`}></body>

export const metadata: Metadata = {
  title: "CS2 PRO HUB",
  description: "CS2 tools: callout trainer, autoexec generator",
  keywords: ["cs2", "counter strike", "callouts", "autoexec", "training"],
  openGraph: {
    title: "CS2 PRO HUB",
    description: "Train CS2 callouts and generate autoexec configs",
    type: "website",
  }
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