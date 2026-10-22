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
    default: `${siteConfig.name} — Digital Growth, Website Development & Influencer Marketing`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.subheadline,
  keywords: [
    'NOXAS',
    'creative agency',
    'website development',
    'e-commerce development',
    'influencer marketing',
    'UGC campaigns',
    'creator marketing',
    'beauty marketing agency',
    'jewelry e-commerce',
    'luxury digital agency',
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} — Digital Growth, Website Development & Influencer Marketing`,
    description: siteConfig.subheadline,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Digital Growth, Website Development & Influencer Marketing`,
    description: siteConfig.subheadline,
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
