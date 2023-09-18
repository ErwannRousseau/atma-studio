import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Atma Studio',
  description:
    "Découvrez ATMA Studio, niché au cœur de la butte Sainte-Anne à Nantes. Notre équipe d'ingénieurs du son qualifiée, excelle dans une variété de styles musicaux. Enregistrement, mixage, mastering, composition et arrangement – nous offrons un accompagnement complet pour donner vie à vos créations musicales. Explorez l'union entre l'art et la technique chez ATMA Studio.",
  icons: {
    icon: '/favicon.ico',
  },
  authors: [{ name: 'Erwann Rousseau', url: 'https://www.linkedin.com/in/erwannrousseauwebdev/' }],
  category: 'musique',
  other: {
    'geo.region': 'FR-44',
    'geo.placename': 'Nantes',
    'geo.position': '47.203057;-1.576758',
    ICBM: '47.203057, -1.576758',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr">{children}</html>;
}
