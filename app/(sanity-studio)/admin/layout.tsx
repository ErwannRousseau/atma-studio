import { Metadata } from 'next';

export const metadata: Metadata = {
  // title: "Dashboard",
  icons: {
    icon: '/favicon-admin.ico',
  },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <body>{children}</body>;
}
