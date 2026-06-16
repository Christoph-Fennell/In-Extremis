import type { Metadata } from 'next';
import '../styles/globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'In Extremis Consulting',
    template: '%s | In Extremis Consulting',
  },
  description:
    'Strategic advisory for the defense, firearms, and aerospace industries. Two decades of hard-won experience, applied to the problems that decide whether a company wins or fades.',
  openGraph: {
    type: 'website',
    url: 'https://in-extremis.com',
    siteName: 'In Extremis Consulting',
    images: [{ url: '/og-share.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: [
      { url: '/icons/10_favicon_16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/09_favicon_32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/08_favicon_64.png', sizes: '64x64', type: 'image/png' },
      { url: '/icons/07_favicon_192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/05_mark_only.png', sizes: '800x800', type: 'image/png' },
      { url: '/icons/06_favicon_512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/icons/apple-touch-icon.png',
  },
  metadataBase: new URL('https://in-extremis.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
