import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site-config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Influencer Marketing & Custom Website Development Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Noxas connects D2C beauty and skincare brands with authentic creators and engineers bespoke, high-performance websites and e-commerce flagships.',
  keywords: [
    'NOXAS',
    'creative agency',
    'website development',
    'e-commerce development',
    'influencer marketing',
    'UGC campaigns',
    'creator marketing',
    'beauty marketing agency',
    'skincare influencer agency India',
    'custom web development',
    'luxury digital agency',
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.name,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} — Influencer Marketing & Custom Website Development Agency`,
    description:
      'Noxas connects D2C beauty and skincare brands with authentic creators and engineers bespoke, high-performance websites and e-commerce flagships.',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/hero-noxas.webp',
        width: 1376,
        height: 768,
        alt: 'NOXAS Influencer Marketing & Website Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Influencer Marketing & Custom Website Development Agency`,
    description:
      'Noxas connects D2C beauty and skincare brands with authentic creators and engineers bespoke, high-performance websites and e-commerce flagships.',
    images: ['/images/hero-noxas.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-[#FFFFFF] text-[#111111] selection:bg-[#D62545] selection:text-[#FFFFFF] min-h-screen flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
