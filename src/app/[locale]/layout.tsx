import type { Metadata } from 'next';
import './globals.css';
import Theme from '@/components/ThemeProvider';
import { useLocale, NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import PageTransitionEffect from './pageTransitionEffect';
import Footer from '@/components/Footer';
import Inner from '@/components/layouts/inner';
import { poppins } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'adit — frontend developer',
  description: "adit's personal website",
  keywords: [
    'portfolio',
    'portfolio website',
    'developer',
    'frontend',
    'frontend developer',
    'web developer',
    'web development',
    'react',
  ],
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/memoji-2.png',
        href: '/memoji-2.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/memoji-1.png',
        href: '/memoji-1.png',
      },
    ],
  },
  openGraph: {
    title: 'adit — frontend developer',
    type: 'website',
    images:
      'https://ucarecdn.com/b624aa7d-978f-44ef-8e45-bf3c12f1e846/memojilaptop1.png', // Same image as above
    url: 'https://adityahimaone.tech/',
    description: "adit's personal website",
  },
  twitter: {
    card: 'summary_large_image',
    site: '@adityahimaone',
    title: 'adit — frontend developer',
    description: "adit's personal website",
    images:
      'https://ucarecdn.com/b624aa7d-978f-44ef-8e45-bf3c12f1e846/memojilaptop1.png', // Same image as above
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale} suppressHydrationWarning>
        <body className={poppins.className}>
          <PageTransitionEffect>
            <Theme>
              <Inner>
                <div className="relative w-full bg-background-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]">
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
                  <div className="relative z-50">{children}</div>
                  <Footer />
                </div>
              </Inner>
            </Theme>
          </PageTransitionEffect>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
