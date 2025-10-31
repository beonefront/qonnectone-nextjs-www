import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import CtaSection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import LogoSection from '@/components/LogoSection';
import Navigation from '@/components/Navigation';
import PricingSection from '@/components/PricingSection';
import ProblemComparisonSection from '@/components/ProblemComparisonSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: 'https://qonnectone.com/logo.png',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
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
      canonical: `https://qonnectone.com/${locale === 'pl' ? '' : locale + '/'}`,
      languages: {
        'pl': 'https://qonnectone.com',
        'pl-PL': 'https://qonnectone.com',
        'en': 'https://qonnectone.com/en',
        'en-US': 'https://qonnectone.com/en',
        'uk': 'https://qonnectone.com/ua',
        'uk-UA': 'https://qonnectone.com/ua',
      },
    },
  };
}

export default async function Home({ params }: Props) {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />
      <HeroSection />
      <LogoSection />
      <ProblemSection />
      <SolutionSection />
      <ProblemComparisonSection />
      <PricingSection />
      <FAQSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

