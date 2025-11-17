'use client';

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Modal } from "./ui/Modal";
import { EmailForm } from "./ui/EmailForm";
import { Check, Phone, Mail, Calendar } from "lucide-react";
import { openAppointmentScheduler } from '@/config/calendar';

export default function ModeleWspolpracyClient() {
  const t = useTranslations('cooperationPage');
  const tCommon = useTranslations('common');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
          <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8 pb-18">
            <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">{t('hero.title1')}</span>
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">{t('hero.title2')}</span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 text-balance">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Payment Models Section */}
      <section id="payment-models">
        <div className="bg-neutral-100 py-12">
          <div className="relative container mx-auto px-4 py-16 max-w-7xl">
            <div className="text-center space-y-4 pb-6 mx-auto">
              <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">{t('models.sectionTitle')}</h2>
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                {t('models.sectionSubtitle')}
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
                {t('models.sectionDescription')}
              </p>
            </div>

            <div className="mx-auto mt-16 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-500 max-w-7xl">
              {/* SaaS Model */}
              <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 py-10 rounded-2xl hover:bg-green-500/10 transition-all duration-500 ease-out border-2 border-primary/20 w-full max-w-sm">
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {t('models.saas.badge')}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">{t('models.saas.title')}</h3>
                  <p className="text-foreground mb-4">
                    {t('models.saas.description')}
                  </p>
                  <div className="space-y-2 mb-2">
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>{t('models.saas.feature1')}</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>{t('models.saas.feature2')}</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>{t('models.saas.feature3')}</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>{t('models.saas.feature4')}</span>
                    </div>
                  </div>
                </div>
                {/* SVG stays the same */}
                <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
              </div>

              {/* License Model */}
              <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 py-10 rounded-2xl hover:bg-purple-500/10 transition-all duration-500 ease-out w-full max-w-sm">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">{t('models.license.title')}</h3>
                  <p className="text-foreground mb-4">
                    {t('models.license.description')}
                  </p>
                  <div className="space-y-2 mb-2">
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>{t('models.license.feature1')}</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>{t('models.license.feature2')}</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>{t('models.license.feature3')}</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>{t('models.license.feature4')}</span>
                    </div>
                  </div>
                </div>
                {/* SVG stays the same */}
                <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta">
        <div className="bg-primary/10 rounded-xl py-16">
          <div className="relative container mx-auto px-4 py-16 max-w-7xl">
            <div className="text-center space-y-4 pb-6 mx-auto">
              <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
                {t('cta.title')}
              </h2>
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                {t('cta.subtitle')}
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
                {t('cta.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">{t('cta.call')}</h3>
                <p className="text-slate-600 text-sm">+48 72 88 02 000</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">{t('cta.write')}</h3>
                <p className="text-slate-600 text-sm">hello@qonnectone.com</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">{t('cta.schedule')}</h3>
                <p className="text-slate-600 text-sm">{t('cta.consultation')}</p>
              </div>
            </div>

            <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={openAppointmentScheduler}
                className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-primary/50 focus-visible:ring-[3px] bg-primary shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full sm:w-auto text-background flex gap-2 cursor-pointer"
              >
                <Calendar className="size-4 text-background" />
                {t('cta.scheduleButton')}
              </button>
              <button
                onClick={openModal}
                className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-white border border-input shadow-xs hover:bg-gray-50 h-9 px-4 py-2 has-[>svg]:px-3 w-full sm:w-auto text-foreground flex gap-2 cursor-pointer"
              >
                <Phone className="size-4" />
                {tCommon('contact')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={tCommon('contact')}>
        <EmailForm onSubmit={handleEmailSubmit} onClose={closeModal} />
      </Modal>
    </>
  );
}

