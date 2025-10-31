import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter, Montserrat, Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { CookieConsent } from '@/components/CookieConsent';
import { AnalyticsProvider } from '@/components/AnalyticsProvider';
import { locales, type Locale } from '@/i18n/locales';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const localeNames: Record<string, string> = {
  pl: 'pl',
  en: 'en',
  ua: 'uk',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const baseUrl = 'https://qonnectone.com';
  const alternateUrls = {
    pl: baseUrl,
    en: `${baseUrl}/en`,
    ua: `${baseUrl}/ua`,
  };

  return {
    alternates: {
      languages: {
        'pl': alternateUrls.pl,
        'pl-PL': alternateUrls.pl,
        'en': alternateUrls.en,
        'en-US': alternateUrls.en,
        'uk': alternateUrls.ua,
        'uk-UA': alternateUrls.ua,
        'x-default': alternateUrls.pl,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const htmlLang = localeNames[locale] || locale;

  return (
    <html lang={htmlLang} className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="QonnectOne" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/favicon/favicon.ico" as="image" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon/favicon.png" sizes="96x96" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon.png" />
      </head>
      <body className="antialiased font-sans">
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieConsent />
          <AnalyticsProvider />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

