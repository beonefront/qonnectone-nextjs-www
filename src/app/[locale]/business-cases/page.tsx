import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { Zap, Shield, DollarSign, Scale, Building, AlertTriangle, Clock, TrendingDown, MoreHorizontal, CheckCircle, Users, Lock, ChevronDown } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.businessCases' });

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
      canonical: `https://qonnectone.com/${locale === 'pl' ? '' : locale + '/'}business-cases`,
      languages: {
        'pl': 'https://qonnectone.com/business-cases',
        'en': 'https://qonnectone.com/en/business-cases',
        'uk': 'https://qonnectone.com/ua/business-cases',
      },
    },
  };
}

export default async function BusinessCasesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'businessCasesPage' });

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />

      {/* Hero Section */}
      <section id="hero">
        <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 md:pb-16 lg:px-8">
          <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8">
            <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">{t('hero.title1')}</span>
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">{t('hero.title2')}</span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 text-balance">
              {t('hero.description')}
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-6 max-w-3xl">
              <div className="flex items-center text-left bg-blue-50 border border-blue-100 rounded-lg p-4 hover:bg-blue-100 transition-colors">
                <Zap className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="font-inter text-gray-700">{t('hero.benefit1')}</span>
              </div>
              <div className="flex items-center text-left bg-green-50 border border-green-100 rounded-lg p-4 hover:bg-green-100 transition-colors">
                <Shield className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <span className="font-inter text-gray-700">{t('hero.benefit2')}</span>
              </div>
              <div className="flex items-center text-left bg-yellow-50 border border-yellow-100 rounded-lg p-4 hover:bg-yellow-100 transition-colors">
                <DollarSign className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
                <span className="font-inter text-gray-700">{t('hero.benefit3')}</span>
              </div>
              <div className="flex items-center text-left bg-purple-50 border border-purple-100 rounded-lg p-4 hover:bg-purple-100 transition-colors">
                <Scale className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                <span className="font-inter text-gray-700">{t('hero.benefit4')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="bg-neutral-100">
        <div className="relative container mx-auto px-4 pb-22 max-w-7xl">
          <div className="text-center space-y-4 pb-6 pt-28 mx-auto">
            <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">{t('section.title')}</h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              {t('section.subtitle')}
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-foreground/70 text-lg text-center">
              {t('section.description')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Case Study 1 Details */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                    <Building className="w-4 h-4 mr-1" />
                    {t('case1.badge')}
                  </div>
                  <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
                    {t('case1.title')}
                  </h2>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Wprowadzenie */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('case1.introTitle')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('case1.introText')}
                  </p>
                </div>

                {/* Wyzwania */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('case1.challengesTitle')}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case1.challenge1Title')}</div>
                        <div className="text-sm text-gray-600">{t('case1.challenge1Text')}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case1.challenge2Title')}</div>
                        <div className="text-sm text-gray-600">{t('case1.challenge2Text')}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case1.challenge3Title')}</div>
                        <div className="text-sm text-gray-600">{t('case1.challenge3Text')}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MoreHorizontal className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case1.challenge4Title')}</div>
                        <div className="text-sm text-gray-600">{t('case1.challenge4Text')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rozwiązanie */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('case1.solutionTitle')}</h3>
                  <p className="text-gray-600 text-sm mb-3">{t('case1.solutionIntro')}</p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case1.solution1Title')}</div>
                        <div className="text-sm text-gray-600">{t('case1.solution1Text')}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case1.solution2Title')}</div>
                        <div className="text-sm text-gray-600">{t('case1.solution2Text')}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case1.solution3Title')}</div>
                        <div className="text-sm text-gray-600">{t('case1.solution3Text')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rezultaty */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('case1.resultsTitle')}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{t('case1.result1Value')}</div>
                    <div className="text-sm text-gray-600">{t('case1.result1Label')}</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">{t('case1.result2Value')}</div>
                    <div className="text-sm text-gray-600">{t('case1.result2Label')}</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{t('case1.result3Value')}</div>
                    <div className="text-sm text-gray-600">{t('case1.result3Label')}</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-1">{t('case1.result4Value')}</div>
                    <div className="text-sm text-gray-600">{t('case1.result4Label')}</div>
                  </div>
                </div>
              </div>

              {/* Szczegółowe informacje - opcjonalnie ukryte */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                    <span>{t('case1.detailsTitle')}</span>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t('case1.benefitsTitle')}</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>{t('case1.benefit1Title')}</strong> {t('case1.benefit1Text')}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>{t('case1.benefit2Title')}</strong> {t('case1.benefit2Text')}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>{t('case1.benefit3Title')}</strong> {t('case1.benefit3Text')}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('case1.summaryTitle')}</h4>
                      <p>
                        {t('case1.summaryText')}
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Case Study 2 Details */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {t('case2.badge')}
                  </div>
                  <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
                    {t('case2.title')}
                  </h2>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Wprowadzenie */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('case2.introTitle')}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('case2.introText')}
                  </p>
                </div>

                {/* Wyzwania */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('case2.challengesTitle')}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case2.challenge1Title')}</div>
                        <div className="text-sm text-gray-600">{t('case2.challenge1Text')}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Lock className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case2.challenge2Title')}</div>
                        <div className="text-sm text-gray-600">{t('case2.challenge2Text')}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingDown className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case2.challenge3Title')}</div>
                        <div className="text-sm text-gray-600">{t('case2.challenge3Text')}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case2.challenge4Title')}</div>
                        <div className="text-sm text-gray-600">{t('case2.challenge4Text')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rozwiązanie */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('case2.solutionTitle')}</h3>
                  <p className="text-gray-600 text-sm mb-3">{t('case2.solutionIntro')}</p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case2.solution1Title')}</div>
                        <div className="text-sm text-gray-600">{t('case2.solution1Text')}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case2.solution2Title')}</div>
                        <div className="text-sm text-gray-600">{t('case2.solution2Text')}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">{t('case2.solution3Title')}</div>
                        <div className="text-sm text-gray-600">{t('case2.solution3Text')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rezultaty */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('case2.resultsTitle')}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">{t('case2.result1Value')}</div>
                    <div className="text-sm text-gray-600">{t('case2.result1Label')}</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{t('case2.result2Value')}</div>
                    <div className="text-sm text-gray-600">{t('case2.result2Label')}</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{t('case2.result3Value')}</div>
                    <div className="text-sm text-gray-600">{t('case2.result3Label')}</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-1">{t('case2.result4Value')}</div>
                    <div className="text-sm text-gray-600">{t('case2.result4Label')}</div>
                  </div>
                </div>
              </div>

              {/* Szczegółowe informacje - opcjonalnie ukryte */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                    <span>{t('case2.detailsTitle')}</span>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t('case2.benefitsTitle')}</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>{t('case2.benefit1Title')}</strong> {t('case2.benefit1Text')}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>{t('case2.benefit2Title')}</strong> {t('case2.benefit2Text')}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>{t('case2.benefit3Title')}</strong> {t('case2.benefit3Text')}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>{t('case2.benefit4Title')}</strong> {t('case2.benefit4Text')}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">{t('case2.summaryTitle')}</h4>
                      <p>
                        {t('case2.summaryText')}
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />

      <Footer />
    </div>
  );
}
