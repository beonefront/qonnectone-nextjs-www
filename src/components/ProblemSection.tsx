import { ShieldCheck, Network, CreditCard, Bot, Headphones, ShieldAlert } from 'lucide-react';
import { useTranslations } from 'next-intl';
import FadeIn from './animations/FadeIn';
import StaggerContainer from './animations/StaggerContainer';

export default function ProblemSection() {
  const t = useTranslations('problem');

  return (
    <section id="problem">
      <div className="bg-blue-50 transition-colors duration-300">
        <div className="relative container mx-auto px-4 py-32 pt-16 max-w-7xl">
          <FadeIn>
            <div className="text-center space-y-4 pb-6 mx-auto">
              <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">{t('sectionTitle')}</h2>
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">{t('sectionSubtitle')}</h3>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 mt-12">
            <div>
              <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
                <div data-slot="card-content" className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t('card1.title')}</h3>
                  <p className="text-muted-foreground">{t('card1.description')}</p>
                </div>
              </div>
            </div>

            <div>
              <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
                <div data-slot="card-content" className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t('card2.title')}</h3>
                  <p className="text-muted-foreground">{t('card2.description')}</p>
                </div>
              </div>
            </div>

            <div>
              <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
                <div data-slot="card-content" className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t('card3.title')}</h3>
                  <p className="text-muted-foreground">{t('card3.description')}</p>
                </div>
              </div>
            </div>

            <div>
              <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
                <div data-slot="card-content" className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t('card4.title')}</h3>
                  <p className="text-muted-foreground">{t('card4.description')}</p>
                </div>
              </div>
            </div>

            <div>
              <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
                <div data-slot="card-content" className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t('card5.title')}</h3>
                  <p className="text-muted-foreground">{t('card5.description')}</p>
                </div>
              </div>
            </div>

            <div>
              <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
                <div data-slot="card-content" className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldAlert className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t('card6.title')}</h3>
                  <p className="text-muted-foreground">{t('card6.description')}</p>
                </div>
              </div>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
