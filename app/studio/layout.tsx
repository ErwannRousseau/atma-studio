import { Metadata } from 'next';

export const metadata: Metadata = {
  // title: "Dashboard",
  icons: {
    icon: '/favicon-admin.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
