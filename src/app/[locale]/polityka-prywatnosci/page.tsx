import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Shield, FileText, Users, Eye, Lock, Mail, MapPin } from 'lucide-react';

const iconMap = {
  users: Users,
  shield: Shield,
  fileText: FileText,
  eye: Eye,
  lock: Lock,
  mapPin: MapPin,
  mail: Mail,
  doc: FileText,
} as const;

type IconKey = keyof typeof iconMap;

type HeroSection = {
  title: string;
  subtitle: string;
  description: string;
};

type DefinitionSection = {
  title: string;
  cards: Array<{ icon: IconKey; title: string; description: string }>;
};

type ControllerSection = {
  title: string;
  contactCard: {
    title: string;
    fields: Array<{ icon: IconKey; label: string; value: string }>;
  };
  dpoCard: {
    title: string;
    description: string;
    details: Array<{ label: string; value: string }>;
  };
};

type SourcesSection = {
  title: string;
  intro: string;
  items: string[];
  autoTitle: string;
  autoParagraphs: string[];
};

type PurposeSection = {
  title: string;
  cards: Array<{ title: string; description: string }>;
};

type RecipientsSection = {
  title: string;
  paragraphs: string[];
};

type RetentionSection = {
  title: string;
  intro: string;
  items: Array<{ label: string; description: string }>;
};

type RightsSection = {
  title: string;
  basic: { title: string; intro: string; items: string[] };
  withdrawal: { title: string; paragraphs: string[] };
  complaint: { title: string; description: string };
};

type CookiesSection = {
  title: string;
  cards: Array<{ title: string; paragraphs?: string[]; list?: string[] }>;
};

type FinalSection = {
  title: string;
  cards: Array<{ title: string; paragraphs: string[] }>;
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
  const t = await getTranslations({ locale, namespace: 'metadata.privacy' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://qonnectone.com/${locale === 'pl' ? '' : locale + '/'}polityka-prywatnosci`,
      languages: {
        'pl': 'https://qonnectone.com/polityka-prywatnosci',
        'en': 'https://qonnectone.com/en/polityka-prywatnosci',
        'uk': 'https://qonnectone.com/ua/polityka-prywatnosci',
      },
    },
  };
}

export default async function PolitykaPrywatnosciPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  const hero = t.raw('hero') as HeroSection;
  const definitions = t.raw('definitions') as DefinitionSection;
  const controller = t.raw('controller') as ControllerSection;
  const sources = t.raw('sources') as SourcesSection;
  const purposes = t.raw('purposes') as PurposeSection;
  const recipients = t.raw('recipients') as RecipientsSection;
  const retention = t.raw('retention') as RetentionSection;
  const rights = t.raw('rights') as RightsSection;
  const cookies = t.raw('cookies') as CookiesSection;
  const finalSection = t.raw('final') as FinalSection;

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />

      {/* Hero Section */}
      <section id="privacy-hero">
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

      {/* Definicje terminów */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              {definitions.title}
            </h2>
            <div className="space-y-6">
              {definitions.cards.map((card) => {
                const Icon = iconMap[card.icon];
                return (
                  <div className="bg-muted/30 border border-border rounded-xl p-6" key={card.title}>
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Icon className="w-5 h-5 text-primary mr-2" />
                      {card.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Informacje o Administratorze */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              {controller.title}
            </h2>
            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">{controller.contactCard.title}</h3>
                <div className="space-y-4">
                  {controller.contactCard.fields.map((field) => {
                    const Icon = iconMap[field.icon];
                    return (
                      <div className="flex items-start" key={field.label}>
                        <Icon className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">{field.label}</p>
                          <p className="text-foreground/70">{field.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bg-background border border-border rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">{controller.dpoCard.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {controller.dpoCard.description}
                </p>
                <div className="space-y-2">
                  {controller.dpoCard.details.map((detail) => (
                    <p className="text-foreground/70" key={detail.label}>
                      <strong>{detail.label}:</strong> {detail.value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Źródła danych */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              {sources.title}
            </h2>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {sources.intro}
                </p>
                <BulletList items={sources.items} />
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{sources.autoTitle}</h3>
                {sources.autoParagraphs.map((paragraph) => (
                  <p className="text-foreground/70 leading-relaxed mb-4 last:mb-0" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cele przetwarzania */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              {purposes.title}
            </h2>
            <div className="space-y-6">
              {purposes.cards.map((card) => (
                <div className="bg-background border border-border rounded-xl p-6" key={card.title}>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Odbiorcy danych */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              {recipients.title}
            </h2>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                {recipients.paragraphs.map((paragraph) => (
                  <p className="text-foreground/70 leading-relaxed mb-4 last:mb-0" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Okres przechowywania */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              {retention.title}
            </h2>
            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {retention.intro}
                </p>
                <ul className="space-y-3 text-foreground/70">
                  {retention.items.map((item) => (
                    <li className="flex items-start" key={item.label}>
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>{item.label}:</strong> {item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prawa podmiotu */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              {rights.title}
            </h2>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">{rights.basic.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {rights.basic.intro}
                </p>
                <BulletList items={rights.basic.items} />
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">{rights.withdrawal.title}</h3>
                {rights.withdrawal.paragraphs.map((paragraph) => (
                  <p className="text-foreground/70 leading-relaxed mb-4 last:mb-0" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">{rights.complaint.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {rights.complaint.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              {cookies.title}
            </h2>
            <div className="space-y-6">
              {cookies.cards.map((card) => (
                <div className="bg-background border border-border rounded-xl p-6" key={card.title}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{card.title}</h3>
                  {card.paragraphs?.map((paragraph) => (
                    <p className="text-foreground/70 leading-relaxed mb-4 last:mb-0" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                  {card.list && <BulletList items={card.list} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Postanowienia końcowe */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              {finalSection.title}
            </h2>
            <div className="space-y-6">
              {finalSection.cards.map((card) => (
                <div className="bg-muted/30 border border-border rounded-xl p-6" key={card.title}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{card.title}</h3>
                  {card.paragraphs.map((paragraph) => (
                    <p className="text-foreground/70 leading-relaxed mb-4 last:mb-0" key={paragraph}>
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
