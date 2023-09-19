'use client';
import '@/styles/css/style.css';
import AOS from 'aos';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import ScrollTopButton from '@/components/ui/ScrollTopButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  }, []);
  return (
    <body className={`${inter.variable} bg-black font-inter tracking-tight text-slate-100 antialiased`}>
      <ScrollTopButton />
      <div className="flex min-h-screen flex-col overflow-hidden">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </body>
  );
}
