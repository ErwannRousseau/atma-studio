import '@/styles/css/style.css';
import '@/styles/css/additional-styles/utility-patterns.css';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Légal',
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className={`${inter.variable} bg-black font-inter tracking-tight text-slate-100 antialiased`}>
      <div className="mx-auto flex max-w-4xl flex-col overflow-hidden text-justify">{children}</div>
    </body>
  );
}
