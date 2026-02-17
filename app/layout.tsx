import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phil Timmermann | Stand Up Comedian aus Düsseldorf",
  description: "Your local Comedian. Phil Timmermann - Stand Up Comedy aus Düsseldorf. Direkt, ehrlich und verdammt unterhaltsam. Alle Termine und Tickets hier.",
  keywords: ["Phil Timmermann", "Comedian", "Stand Up Comedy", "Düsseldorf", "Comedy", "Open Mic", "Deutschland"],
  authors: [{ name: "Phil Timmermann" }],
  openGraph: {
    title: "Phil Timmermann | Stand Up Comedian",
    description: "Your local Comedian aus Düsseldorf. Direkt, ehrlich und verdammt unterhaltsam.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-zinc-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
