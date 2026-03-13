import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "#1 Salla Developer Dubai UAE | Salla Store Development & Redesign | SouqFlow",
  description:
    "Top Salla development agency in Dubai. Salla store development, redesign, theme customization, app development & integrations for UAE & GCC. Based in Dubai. Get a quote today.",
  keywords: [
    "Salla developer Dubai",
    "Salla development Dubai",
    "Salla store development UAE",
    "Salla partner Dubai",
    "Salla theme customization Dubai",
    "Salla app development UAE",
    "best Salla agency Dubai",
    "Salla ecommerce Dubai",
    "متجر سلة دبي",
    "مطور سلة دبي",
    "تطوير متاجر سلة الإمارات",
  ],
  alternates: {
    languages: {
      en: "/",
      ar: "/",
    },
  },
  openGraph: {
    title: "Salla Developer Dubai | Salla Store Development UAE | SouqFlow",
    description: "Leading Salla development studio in Dubai. Store development, redesign, integrations & support for UAE and GCC ecommerce brands.",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
