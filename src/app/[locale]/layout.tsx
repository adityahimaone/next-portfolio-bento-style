import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Theme from '@/components/ThemeProvider';
import { useLocale, NextIntlClientProvider, useMessages } from 'next-intl';
import { notFound } from 'next/navigation';
import PageTransitionEffect from './pageTransitionEffect';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['devanagari'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

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
              <div className={cn('bg-background-2 dark:bg-background')}>
                {children}
              </div>
              <Footer />
            </Theme>
          </PageTransitionEffect>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
