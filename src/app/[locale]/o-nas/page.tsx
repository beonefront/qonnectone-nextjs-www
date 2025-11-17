import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Zap, Eye, Target, Users, Lightbulb, Shield, Award, Building, Server, Search } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.about' });

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
    alternates: {
      canonical: `https://qonnectone.com/${locale === 'pl' ? '' : locale + '/'}o-nas`,
      languages: {
        'pl': 'https://qonnectone.com/o-nas',
        'en': 'https://qonnectone.com/en/o-nas',
        'uk': 'https://qonnectone.com/ua/o-nas',
      },
    },
  };
}

export default async function ONasPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aboutPage' });

  const whyUsCards = [
    {
      key: 'specialization',
      icon: Building,
      iconBg: 'bg-blue-500/10',
      iconHoverBg: 'group-hover:bg-blue-500/20',
      iconColor: 'text-blue-600',
      title: t('whyUs.cards.specialization.title'),
      description: t('whyUs.cards.specialization.description'),
    },
    {
      key: 'innovation',
      icon: Lightbulb,
      iconBg: 'bg-purple-500/10',
      iconHoverBg: 'group-hover:bg-purple-500/20',
      iconColor: 'text-purple-600',
      title: t('whyUs.cards.innovation.title'),
      description: t('whyUs.cards.innovation.description'),
    },
    {
      key: 'flexibility',
      icon: Target,
      iconBg: 'bg-green-500/10',
      iconHoverBg: 'group-hover:bg-green-500/20',
      iconColor: 'text-green-600',
      title: t('whyUs.cards.flexibility.title'),
      description: t('whyUs.cards.flexibility.description'),
    },
    {
      key: 'experts',
      icon: Users,
      iconBg: 'bg-orange-500/10',
      iconHoverBg: 'group-hover:bg-orange-500/20',
      iconColor: 'text-orange-600',
      title: t('whyUs.cards.experts.title'),
      description: t('whyUs.cards.experts.description'),
    },
  ];

  const complianceItems = [
    {
      key: 'gdpr',
      icon: Shield,
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-600',
      title: t('compliance.items.gdpr.title'),
      description: t('compliance.items.gdpr.description'),
    },
    {
      key: 'dora',
      icon: Server,
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-600',
      title: t('compliance.items.dora.title'),
      description: t('compliance.items.dora.description'),
    },
    {
      key: 'audits',
      icon: Search,
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-600',
      title: t('compliance.items.audits.title'),
      description: t('compliance.items.audits.description'),
    },
    {
      key: 'knf',
      icon: Award,
      iconBg: 'bg-red-500/10',
      iconColor: 'text-red-600',
      title: t('compliance.items.knf.title'),
      description: t('compliance.items.knf.description'),
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />

      {/* Hero Section */}
      <section id="about-hero">
        <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
          <div className="flex w-full max-w-4xl flex-col space-y-4 overflow-hidden py-8 pb-16">
            <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">{t('hero.title')}</span>
            </h1>
            <p className="mx-auto max-w-3xl text-center text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 text-balance">
              {t('hero.description')}
            </p>
            <p className="mx-auto max-w-4xl text-center text-base leading-6 text-foreground/60 sm:text-base sm:leading-7 text-balance">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Czym jest QonnectOne */}
      {/* <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Czym jest QonnectOne?
            </h2>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                QonnectOne jest kompleksową platformą dostarczającą zaawansowane rozwiązania IT i ICT (Information and Communication Technology).
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Specjalizujemy się w obsłudze firm nadzorowanych oraz podmiotów obowiązanych zgodnie z Ustawą z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu (AML/CFT).
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Misja i Wizja */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground font-montserrat">
                    {t('mission.title')}
                  </h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {t('mission.description')}
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground font-montserrat">
                    {t('vision.title')}
                  </h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {t('vision.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rozumiemy biznes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-6 font-montserrat">
              {t('business.title')}
            </h2>
            <h3 className="text-xl text-foreground/80 mb-8">
              {t('business.subtitle')}
            </h3>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 text-left space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                {t('business.p1')}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                {t('business.p2')}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                {t('business.p3')}
              </p>
              <div className="bg-background border border-primary/30 rounded-lg p-6 border-l-4 border-l-primary">
                <p className="text-lg font-semibold text-foreground">
                  {t('business.highlight')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego my */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground mb-4 font-montserrat">
              {t('whyUs.sectionTitle')}
            </h2>
            <p className="text-xl text-foreground/70">
              {t('whyUs.sectionSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.key}
                  className="bg-background border border-border rounded-xl p-6 shadow-sm text-center group hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className={`w-16 h-16 ${card.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${card.iconHoverBg}`}
                  >
                    <Icon className={`w-8 h-8 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bezpieczeństwo i zgodność */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              {t('compliance.title')}
            </h2>
            <p className="text-lg text-foreground/70 text-center mb-10">
              {t('compliance.subtitle')}
            </p>
            <div className="space-y-6">
              {complianceItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.key}
                    className="bg-muted/30 border border-border rounded-xl p-6 flex items-start"
                  >
                    <div
                      className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}
                    >
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-foreground/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
