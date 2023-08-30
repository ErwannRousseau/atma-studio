import './globals.css';
import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Atma Studio',
  description:
    "Découvrez ATMA Studio, niché au cœur de la butte Sainte-Anne à Nantes. Notre équipe d'ingénieurs du son qualifiée, spécialisée dans l'ADN du rap, excelle dans une variété de styles musicaux. Enregistrement, mixage, mastering, composition et arrangement – nous offrons un accompagnement complet pour donner vie à vos créations musicales. Explorez l'union entre l'art et la technique chez ATMA Studio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
