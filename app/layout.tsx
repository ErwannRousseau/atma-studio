import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://studio-atma.com'),
  title: {
    template: "%s | Atma Studio - Studio d'enregistrement de musique à Nantes",
    default: "Atma Studio - Studio d'enregistrement de musique à Nantes",
  },
  description:
    "Découvrez Atma Studio, studio d'enregistrement, niché au cœur de la butte Sainte-Anne à Nantes. Notre équipe d'ingénieurs du son qualifiée, excelle dans une variété de styles musicaux. Enregistrement, mixage, mastering, composition et arrangement – nous offrons un accompagnement complet pour donner vie à vos créations musicales. Explorez l'union entre l'art et la technique chez Atma Studio.",
  icons: {
    icon: [{ url: '/icon.png' }, new URL('/icon.png', 'https://studio-atma.com')],
    shortcut: '/shortcut-icon.ico',
    apple: [{ url: '/apple-icon.png' }, { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  authors: [{ name: 'Erwann Rousseau', url: 'https://www.linkedin.com/in/erwannrousseauwebdev/' }],
  creator: 'Erwann Rousseau',
  publisher: 'Theo Payen, Bhimsen Rouillard',
  category: 'musique',
  other: {
    'geo.region': 'FR-44',
    'geo.placename': 'Nantes',
    'geo.position': '47.203057;-1.576758',
    ICBM: '47.203057, -1.576758',
  },
  openGraph: {
    title: "Atma Studio - Studio d'enregistrement de musique à Nantes",
    description:
      "Découvrez Atma Studio, studio d'enregistrement, niché au cœur de la butte Sainte-Anne à Nantes. Notre équipe d'ingénieurs du son qualifiée, excelle dans une variété de styles musicaux. Enregistrement, mixage, mastering, composition et arrangement – nous offrons un accompagnement complet pour donner vie à vos créations musicales. Explorez l'union entre l'art et la technique chez Atma Studio.",
    url: 'https://studio-atma.com',
    siteName: 'ATMA Studio',
    images: '/images/logo.webp',
    locale: 'fr_FR',
    type: 'website',
  },
  generator: 'Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr">{children}</html>;
}
