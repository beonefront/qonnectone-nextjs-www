'use client';

import { useTranslations } from 'next-intl';
import { Zap, Shield, DollarSign, FileCheck } from 'lucide-react';

export default function BusinessCasesClient() {
  const t = useTranslations('businessCasesPage');

  return (
    <>
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
                <FileCheck className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                <span className="font-inter text-gray-700">{t('hero.benefit4')}</span>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm text-foreground/70">Case Studies</p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Wkrótce
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-montserrat">
              Przygotowujemy szczegółowe case studies
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Trwają prace nad kompleksowymi studiami przypadków pokazującymi praktyczne zastosowania naszych rozwiązań w różnych branżach. Wróć wkrótce, aby poznać historie sukcesu naszych klientów.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

