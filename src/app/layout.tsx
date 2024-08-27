import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Billions Group",
  description:
    "Established in 2020, Billions Group is a diversified conglomerate with primary focus on ready-made garments manufacturing, E-commerce & Retail. Billions Group is expending dramatically & building a remarkable distinction as an industrial giant in this challenging part of the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Separator />
        <Footer />
      </body>
    </html>
  );
}
