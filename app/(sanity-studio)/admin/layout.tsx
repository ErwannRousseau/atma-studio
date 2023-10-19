import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin',
  icons: {
    icon: '/admin.ico',
  },
  robots: {
    index: false,
    googleBot: {
      index: false,
    },
  },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <body>{children}</body>;
}
