import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { CookieConsent } from '@/components/CookieConsent';
import { AnalyticsProvider } from '@/components/AnalyticsProvider';
import { locales, type Locale } from '@/i18n/locales';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {

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

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
      <CookieConsent />
      <AnalyticsProvider />
    </NextIntlClientProvider>
  );
}

