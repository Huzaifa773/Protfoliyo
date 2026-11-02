import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BackgroundGlow from '@/components/BackgroundGlow';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammed HuzaiFa | Junior Full-Stack Developer',
  description:
    'Personal portfolio of Muhammed HuzaiFa, a Junior Full-Stack Developer specializing in Next.js, React, TypeScript, Node.js, and database-driven e-commerce applications.',
  keywords: [
    'Muhammed HuzaiFa',
    'Junior Full-Stack Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'Prisma',
    'MySQL',
    'Portfolio',
  ],
  authors: [{ name: 'Muhammed HuzaiFa' }],
  creator: 'Muhammed HuzaiFa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/HuzaiFa773',
    title: 'Muhammed HuzaiFa | Junior Full-Stack Developer',
    description:
      'Motivated Junior Full-Stack Developer focused on building responsive, user-centric web applications with Next.js, React.js, and TypeScript.',
    siteName: 'Muhammed HuzaiFa Portfolio',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        <BackgroundGlow />
        <Navbar />
        <main className="relative z-10 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
