import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import type { Metadata } from "next";

import GoogleAds from "@/components/utils/GoogleAds";

export const metadata: Metadata = {
  metadataBase: new URL("https://studio-atma.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | ATMA Studio",
    default: "ATMA Studio - Studio d'enregistrement de musique à Nantes",
  },
  description:
    "Explorez ATMA Studio, studio d'enregistrement à Nantes. Notre équipe experte enregistre, mixe, masterise et accompagne votre création musicale. L'union de l'art et de la technique chez ATMA Studio",
  icons: {
    icon: [
      { url: "https://studio-atma.com/favicon.ico", type: "image/x-icon" },
      new URL("/icon.png", "https://studio-atma.com"),
    ],
    shortcut: "/shortcut-icon.ico",
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  authors: [
    {
      name: "Erwann Rousseau",
      url: "https://www.linkedin.com/in/erwannrousseauwebdev/",
    },
  ],
  creator: "Erwann Rousseau",
  publisher: "Theo Payen, Bhimsen Rouillard",
  category: "musique",
  other: {
    "geo.region": "FR-44",
    "geo.placename": "Nantes",
    "geo.position": "47.203057;-1.576758",
    ICBM: "47.203057, -1.576758",
  },
  openGraph: {
    title: "ATMA Studio - Studio d'enregistrement de musique à Nantes",
    description:
      "Explorez ATMA Studio, studio d'enregistrement à Nantes. Notre équipe experte enregistre, mixe, masterise et accompagne votre création musicale. L'union de l'art et de la technique chez ATMA Studio",
    url: "https://studio-atma.com",
    siteName: "ATMA Studio",
    images: {
      url: "/images/og_image.png",
      alt: "Photo d'un enregistrement et mixage dans le studio de ATMA Studio",
    },
    locale: "fr_FR",
    type: "website",
  },
  generator: "Next.js",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <GoogleAds />
      {children}
      <Analytics />
    </html>
  );
}
