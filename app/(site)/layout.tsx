"use client";
import "@/styles/css/style.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";

import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import ScrollTopButton from "@/components/ui/ScrollTopButton";

export default function DefaultLayout({
  children,
}: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <body
      className={
        "bg-black font-inter text-slate-100 tracking-tight antialiased"
      }
    >
      <ScrollTopButton />
      <div className="flex min-h-screen flex-col overflow-hidden">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </div>
      <SpeedInsights />
    </body>
  );
}
