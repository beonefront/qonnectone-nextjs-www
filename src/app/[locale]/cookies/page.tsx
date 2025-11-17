import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Cookie, Mail, MapPin, FileText, Clock, AlertTriangle } from 'lucide-react';

const iconMap = {
  cookie: Cookie,
  mail: Mail,
  mapPin: MapPin,
  fileText: FileText,
  clock: Clock,
  alertTriangle: AlertTriangle,
} as const;

type IconKey = keyof typeof iconMap;

type HeroSection = {
  title: string;
  subtitle: string;
  description: string;
};

type ContactMethod = {
  icon: IconKey;
  label: string;
  lines: string[];
};

type Card = {
  title: string;
  icon?: IconKey;
  paragraphs?: string[];
  list?: string[];
  intro?: string;
  methods?: ContactMethod[];
};

type Section = {
  title: string;
  cards: Card[];
};

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-foreground/70">
    {items.map((item) => (
      <li key={item} className="flex items-start">
        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.cookies' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://qonnectone.com/${locale === 'pl' ? '' : locale + '/'}cookies`,
      languages: {
        'pl': 'https://qonnectone.com/cookies',
        'en': 'https://qonnectone.com/en/cookies',
        'uk': 'https://qonnectone.com/ua/cookies',
      },
    },
  };
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cookiesPage' });

  const hero = t.raw('hero') as HeroSection;
  const companyInfo = t.raw('companyInfo') as Section;
  const personalData = t.raw('personalData') as Section;
  const cookiesSection = t.raw('cookiesSection') as Section;
  const retention = t.raw('retention') as Section;
  const recipients = t.raw('recipients') as Section;
  const rights = t.raw('rights') as Section;
  const contact = t.raw('contact') as Section;
  const updates = t.raw('updates') as Section;

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />

      {/* Hero Section */}
      <section id="cookies-hero">
        <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
          <div className="flex w-full max-w-4xl flex-col space-y-4 overflow-hidden py-8 pb-16">
            <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">{hero.title}</span>
            </h1>
            <p className="mx-auto max-w-3xl text-center text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 text-balance">
              {hero.subtitle}
            </p>
            <p className="mx-auto max-w-4xl text-center text-base leading-6 text-foreground/60 sm:text-base sm:leading-7 text-balance">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Informacje o Spółce */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              {companyInfo.title}
            </h2>
            <div className="space-y-6">
              {companyInfo.cards.map((card) => {
                const Icon = card.icon ? iconMap[card.icon] : null;
                return (
                  <div className="bg-muted/30 border border-border rounded-xl p-6" key={card.title}>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      {Icon && <Icon className="w-5 h-5 text-primary mr-2" />}
                      {card.title}
                    </h3>
                    {card.paragraphs?.map((paragraph, idx) => (
                      <p className="text-foreground/70 leading-relaxed" key={idx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Przetwarzanie danych osobowych */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">{personalData.title}</h2>
            <div className="space-y-6">
              {personalData.cards.map((card) => (
                <div className="bg-background border border-border rounded-xl p-6" key={card.title}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{card.title}</h3>
                  {card.paragraphs?.map((paragraph, idx) => (
                    <p className={`text-foreground/70 leading-relaxed ${idx !== card.paragraphs!.length - 1 ? 'mb-4' : ''}`} key={idx}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pliki cookies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">{cookiesSection.title}</h2>
            <div className="space-y-6">
              {cookiesSection.cards.map((card) => {
                const Icon = card.icon ? iconMap[card.icon] : null;
                return (
                  <div className="bg-muted/30 border border-border rounded-xl p-6" key={card.title}>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      {Icon && <Icon className="w-5 h-5 text-primary mr-2" />}
                      {card.title}
                    </h3>
                    {card.paragraphs?.map((paragraph, idx) => (
                      <p className={`text-foreground/70 leading-relaxed ${idx !== card.paragraphs!.length - 1 ? 'mb-4' : ''}`} key={idx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Okres przetwarzania danych */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">{retention.title}</h2>
            <div className="space-y-6">
              {retention.cards.map((card) => {
                const Icon = card.icon ? iconMap[card.icon] : null;
                return (
                  <div className="bg-background border border-border rounded-xl p-6" key={card.title}>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      {Icon && <Icon className="w-5 h-5 text-primary mr-2" />}
                      {card.title}
                    </h3>
                    {card.paragraphs?.map((paragraph, idx) => (
                      <p className={`text-foreground/70 leading-relaxed ${idx !== card.paragraphs!.length - 1 ? 'mb-4' : ''}`} key={idx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Odbiorcy danych */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">{recipients.title}</h2>
            <div className="space-y-6">
              {recipients.cards.map((card) => (
                <div className="bg-muted/30 border border-border rounded-xl p-6" key={card.title}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{card.title}</h3>
                  {card.paragraphs?.map((paragraph, idx) => (
                    <p className={`text-foreground/70 leading-relaxed ${idx !== card.paragraphs!.length - 1 ? 'mb-4' : ''}`} key={idx}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prawa użytkowników */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">{rights.title}</h2>
            <div className="space-y-6">
              {rights.cards.map((card) => (
                <div className="bg-background border border-border rounded-xl p-6" key={card.title}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{card.title}</h3>
                  {card.intro && (
                    <p className={`text-foreground/70 leading-relaxed ${card.list ? 'mb-4' : ''}`}>{card.intro}</p>
                  )}
                  {card.list && <BulletList items={card.list} />}
                  {card.paragraphs?.map((paragraph, idx) => (
                    <p className={`text-foreground/70 leading-relaxed ${idx !== card.paragraphs!.length - 1 ? 'mb-4' : ''}`} key={idx}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">{contact.title}</h2>
            <div className="space-y-6">
              {contact.cards.map((card) => (
                <div className="bg-muted/30 border border-border rounded-xl p-6" key={card.title}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{card.title}</h3>
                  {card.intro && <p className="text-foreground/70 leading-relaxed mb-4">{card.intro}</p>}
                  {card.methods && (
                    <div className="space-y-4">
                      {card.methods.map((method) => {
                        const Icon = method.icon ? iconMap[method.icon] : null;
                        return (
                          <div className="flex items-start" key={method.label}>
                            {Icon && <Icon className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />}
                            <div>
                              <p className="font-medium text-foreground">{method.label}</p>
                              <p className="text-foreground/70 whitespace-pre-line">{method.lines.join('\n')}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zmiany w dokumencie */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">{updates.title}</h2>
            <div className="space-y-6">
              {updates.cards.map((card) => (
                <div className="bg-background border border-border rounded-xl p-6" key={card.title}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{card.title}</h3>
                  {card.paragraphs?.map((paragraph, idx) => (
                    <p className={`text-foreground/70 leading-relaxed ${idx !== card.paragraphs!.length - 1 ? 'mb-4' : ''}`} key={idx}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
