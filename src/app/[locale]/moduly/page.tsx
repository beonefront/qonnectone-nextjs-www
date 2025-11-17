import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ModulyClient from '@/components/ModulyClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.modules' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [{ url: 'https://qonnectone.com/logo.png', width: 1200, height: 630, alt: t('title') }],
      locale: locale === 'pl' ? 'pl_PL' : locale === 'en' ? 'en_US' : 'uk_UA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['https://qonnectone.com/logo.png'],
    },
    alternates: {
      canonical: `https://qonnectone.com/${locale === 'pl' ? '' : locale + '/'}moduly`,
      languages: {
        'pl': 'https://qonnectone.com/moduly',
        'en': 'https://qonnectone.com/en/moduly',
        'uk': 'https://qonnectone.com/ua/moduly',
      },
    },
  };
}

export default async function ModulyPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />
      <ModulyClient />
      <Footer />
    </div>
  );
}
