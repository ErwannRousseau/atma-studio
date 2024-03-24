import "@/styles/css/additional-styles/utility-patterns.css";
import "@/styles/css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Légal",
};

export default function LegalLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <body
      className={`${inter.variable}bg-black font-inter text-slate-100 tracking-tight antialiased`}
    >
      <div className="mx-auto flex max-w-4xl flex-col overflow-hidden text-justify">
        {children}
      </div>
    </body>
  );
}
