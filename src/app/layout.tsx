import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fontPrimary = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const fontSecondary = Inter({
  variable: "--font-secondary",
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROUL Architects | Luxury Residential Architecture",
  description: "A Delhi-based luxury residential architecture and interiors firm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable} antialiased bg-black text-white selection:bg-white selection:text-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
