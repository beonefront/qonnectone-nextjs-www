'use client';

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Modal } from "./ui/Modal";
import { EmailForm } from "./ui/EmailForm";
import { Cloud, Award } from "lucide-react";

export default function ModulyClient() {
  const t = useTranslations('modulesPage');
  const tCommon = useTranslations('common');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
  };

  const closeModal = () => setIsModalOpen(false);

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
          </div>
          <p className="mt-5 text-sm text-foreground/70">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="bg-neutral-100">
        <div className="relative container bg mx-auto px-4 pb-22 max-w-7xl">
          <div className="text-center space-y-4 pb-6 pt-28 mx-auto">
            <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">{t('section.title')}</h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              {t('section.subtitle')}
            </h3>
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
              {t('section.description')}
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-500">
            {/* Transaction Module */}
            <div className="group relative overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-blue-500/10 transition-all duration-500 ease-out md:col-span-2">
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-primary">{t('transaction.title')}</h3>
                <p className="text-foreground text-sm mb-4">
                  {t('transaction.description')}
                </p>
              </div>

              {/* Payment Methods Grid */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {/* Cards */}
                <div className="bg-white p-2 rounded-lg border border-gray-200 hover:border-blue-300 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="2"/>
                        <path d="M2 10h20" strokeWidth="2"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-xs text-gray-900">{t('transaction.cards')}</h4>
                  </div>
                  <p className="text-[10px] text-gray-600">{t('transaction.cardsDesc')}</p>
                </div>

                {/* BLIK */}
                <div className="bg-white p-2 rounded-lg border border-gray-200 hover:border-green-300 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-xs text-gray-900">{t('transaction.blik')}</h4>
                  </div>
                  <p className="text-[10px] text-gray-600">{t('transaction.blikDesc')}</p>
                </div>

                {/* Bank Transfers */}
                <div className="bg-white p-2 rounded-lg border border-gray-200 hover:border-yellow-300 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-xs text-gray-900">{t('transaction.transfers')}</h4>
                  </div>
                  <p className="text-[10px] text-gray-600">{t('transaction.transfersDesc')}</p>
                </div>

                {/* Digital Wallets */}
                <div className="bg-white p-2 rounded-lg border border-gray-200 hover:border-purple-300 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-xs text-gray-900">{t('transaction.wallets')}</h4>
                  </div>
                  <p className="text-[10px] text-gray-600">{t('transaction.walletsDesc')}</p>
                </div>

                {/* Installments */}
                <div className="bg-white p-2 rounded-lg border border-gray-200 hover:border-indigo-300 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-xs text-gray-900">{t('transaction.installments')}</h4>
                  </div>
                  <p className="text-[10px] text-gray-600">{t('transaction.installmentsDesc')}</p>
                </div>

                {/* Crypto */}
                <div className="bg-white p-2 rounded-lg border border-gray-200 hover:border-orange-300 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-xs text-gray-900">{t('transaction.crypto')}</h4>
                  </div>
                  <p className="text-[10px] text-gray-600">{t('transaction.cryptoDesc')}</p>
                </div>
              </div>
            </div>

            {/* Other Modules - using existing module tiles with translations */}
            {/* AML Module */}
            <div className="group relative overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-red-500/10 transition-all duration-500 ease-out">
              <h3 className="font-semibold mb-2 text-primary">{t('aml.title')}</h3>
              <p className="text-foreground text-sm">{t('aml.description')}</p>
            </div>

            {/* Crypto Module */}
            <div className="group relative overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-green-500/10 transition-all duration-500 ease-out">
              <h3 className="font-semibold mb-2 text-primary">{t('cryptoModule.title')}</h3>
              <p className="text-foreground text-sm">{t('cryptoModule.description')}</p>
            </div>

            {/* Reporting */}
            <div className="group relative overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-orange-500/10 transition-all duration-500 ease-out">
              <h3 className="font-semibold mb-2 text-primary">{t('reporting.title')}</h3>
              <p className="text-foreground text-sm">{t('reporting.description')}</p>
            </div>

            {/* Accounting */}
            <div className="group relative overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-purple-500/10 transition-all duration-500 ease-out md:col-span-2">
              <h3 className="font-semibold mb-2 text-primary">{t('accounting.title')}</h3>
              <p className="text-foreground text-sm">{t('accounting.description')}</p>
            </div>

            {/* Admin Module */}
            <div className="group relative overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-blue-500/10 transition-all duration-500 ease-out">
              <h3 className="font-semibold mb-2 text-primary">{t('admin.title')}</h3>
              <p className="text-foreground text-sm">{t('admin.description')}</p>
            </div>

            {/* Backoffice */}
            <div className="group relative overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-indigo-500/10 transition-all duration-500 ease-out">
              <h3 className="font-semibold mb-2 text-primary">{t('backoffice.title')}</h3>
              <p className="text-foreground text-sm">{t('backoffice.description')}</p>
            </div>

            {/* API / Plugin */}
            <div className="group relative overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-pink-500/10 transition-all duration-500 ease-out md:col-span-2">
              <h3 className="font-semibold mb-2 text-primary">{t('apiPlugin.title')}</h3>
              <p className="text-foreground text-sm">{t('apiPlugin.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Models */}
      <section id="cta" className="bg-background">
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center space-y-4 pb-6 mx-auto">
            <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
              {t('cta.title')}
            </h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              {t('cta.subtitle')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {/* SaaS Model */}
            <Link href="/modele-wspolpracy">
              <div className="rounded-2xl flex flex-col justify-between border border-gray-300 p-8 bg-background text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Cloud className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('cta.saasTitle')}</h3>
                  <p className="text-muted-foreground">{t('cta.saasDesc')}</p>
                </div>
              </div>
            </Link>

            {/* License Model */}
            <Link href="/modele-wspolpracy">
              <div className="rounded-2xl flex flex-col justify-between border border-gray-300 p-8 bg-background text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('cta.licenseTitle')}</h3>
                  <p className="text-muted-foreground">{t('cta.licenseDesc')}</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-md text-sm font-medium transition-all outline-none focus-visible:border-ring bg-primary shadow-xs hover:bg-primary/90 h-9 px-4 py-2 text-background cursor-pointer"
            >
              {t('cta.contactButton')}
            </button>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={tCommon('contact')}>
        <EmailForm onSubmit={handleEmailSubmit} onClose={closeModal} />
      </Modal>
    </>
  );
}

