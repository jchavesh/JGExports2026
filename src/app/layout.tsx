import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';
import { LanguageProvider } from '@/context/LanguageContext';

const siteConfig = {
  name: "J&G Exports",
  url: "https://jgexportscr.com",
  ogImage: "/logo.png",
  description: "Specialists in exporting medium-grade Costa Rican coffee. We offer reliable volume, consistent profiles, and competitive pricing for the global coffee market.",
  title: "J&G Exports | Costa Rica Coffee Export & Sourcing",
  keywords: ['Costa Rica coffee', 'coffee export', 'cafe de Costa Rica', 'green coffee beans', 'commercial coffee', 'coffee sourcing', 'J&G Exports', 'bulk coffee', 'exportadora de cafe'],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_CR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        alt: "J&G Exports Logo - Costa Rica Coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@jchavesh",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: '/',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')} suppressHydrationWarning>
        <LanguageProvider>
            {children}
            <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
