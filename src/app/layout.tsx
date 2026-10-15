import type { Metadata } from 'next';
import { Fraunces, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT', 'WONK'],
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.storeName} — Brand-new Moen bath fixtures`,
  description:
    'Five boro deals: a curated catalog of brand-new Moen bathroom fixtures — towel bars, towel rings, showerheads and more. Ships everywhere in the US from New York.',
  openGraph: {
    title: siteConfig.storeName,
    description: 'Brand-new Moen bath fixtures at pallet-direct prices.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${grotesk.variable}`}>
      <body className="bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
