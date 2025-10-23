'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { EmailForm } from "@/components/ui/EmailForm";
import { Cloud, Award } from "lucide-react";
import Link from 'next/link';

export default function ModulyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />

      {/* Hero Section */}
      <section id="hero">
        <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 md:pb-16 lg:px-8">
          <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8">
            <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">Funkcje</span>
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">i moduły</span>
              {/* <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">QonnectOne</span> */}
              {/* <div className="flex justify-center mt-2">
                <Image src="/logo.png" alt="QonnectOne" width={270 * 1.2} height={46 * 1.2} />
              </div> */}
            </h1>
            <p className="mx-auto max-w-2xl text-center text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 text-balance">
              Nasza zintegrowana platforma obejmuje szereg zaawansowanych modułów, które wspierają kluczowe obszary działalności operacyjnej i regulacyjnej. Tym samym QonnectOne zapewnia płynne funkcjonowanie, zgodność, wydajność oraz wymierne zyski.
            </p>
          </div>

          <p className="mt-5 text-sm text-foreground/70">Kompleksowe narzędzia dla nadzorowanych instytucji finansowych</p>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="bg-neutral-100">
        <div className="relative container bg mx-auto px-4 pb-22 max-w-7xl">
          <div className="text-center space-y-4 pb-6 pt-28 mx-auto">
            <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">FUNKCJE I MODUŁY QONNECTONE</h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              Zaawansowane moduły systemu
            </h3>
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
              Kompleksowe rozwiązania dostosowane do potrzeb instytucji finansowych
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-500">

            {/* Transaction Module */}
            <div className="group relative overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-blue-500/10 transition-all duration-500 ease-out md:col-span-2">
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-primary">Moduł transakcyjny</h3>
                <p className="text-foreground text-sm mb-4">
                  Kompleksowa obsługa wszystkich metod płatności w jednym miejscu
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
                    <h4 className="font-semibold text-xs text-gray-900">Karty</h4>
                  </div>
                  <p className="text-[10px] text-gray-600">Visa, MC, Amex</p>
                </div>

                {/* BLIK */}
                <div className="bg-white p-2 rounded-lg border border-gray-200 hover:border-green-300 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-xs text-gray-900">BLIK</h4>
                  </div>
                  <p className="text-[10px] text-gray-600">Płatności mobilne</p>
                </div>

                {/* Bank Transfers */}
                <div className="bg-white p-2 rounded-lg border border-gray-200 hover:border-yellow-300 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-xs text-gray-900">Przelewy</h4>
                  </div>
                  <p className="text-[10px] text-gray-600">Banki PL</p>
                </div>

                {/* Digital Wallets */}
                <div className="bg-white p-2 rounded-lg border border-gray-200 hover:border-purple-300 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-xs text-gray-900">Portfele</h4>
                  </div>
                  <p className="text-[10px] text-gray-600">Apple Pay, PayPal</p>
                </div>

                {/* Installments */}
                <div className="bg-white p-2 rounded-lg border border-gray-200 hover:border-indigo-300 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-xs text-gray-900">Raty</h4>
                  </div>
                  <p className="text-[10px] text-gray-600">BNPL, 0-24m</p>
                </div>

                {/* Crypto */}
                <div className="bg-white p-2 rounded-lg border border-gray-200 hover:border-orange-300 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-xs text-gray-900">Crypto</h4>
                  </div>
                  <p className="text-[10px] text-gray-600">BTC, ETH, SOL</p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-[10px] text-gray-600 flex items-center gap-1">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Zgodność z PCI DSS, PSD2 i regulacjami UE
                </p>
              </div>
            </div>

            {/* AML/KYC Module */}
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-red-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Moduł AML / KYC</h3>
                <p className="text-foreground">
                  Automatyzuje procesy weryfikacji tożsamości klientów i monitoruje transakcje pod kątem podejrzanych aktywności. Zapewnia pełną zgodność z przepisami AML/CFT, minimalizując ryzyko prawne i operacyjne.
                </p>
              </div>
              <svg
                width="1203"
                height="753"
                viewBox="0 0 1203 753"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
              >
                <g clipPath="url(#path0)">
                  <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white"></path>
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#F5F5F5"></path>
                  <image href="/modules/aml.png" width="1200" height="700" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom)"></image>
                </g>
                <defs>
                  <clipPath id="path0">
                    <rect width="1203" height="753" fill="white"></rect>
                  </clipPath>
                  <clipPath id="roundedBottom">
                    <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
            </div>



            {/* Crypto Module */}
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-orange-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Moduł Krypto</h3>
                <p className="text-foreground">
                  Umożliwia kompleksową obsługę operacji związanych z aktywami cyfrowymi. Pozwala na bezpieczne depozyty i wypłaty kryptowalut, sprawną wymianę walut cyfrowych oraz generowanie i zarządzanie portfelami dla klientów.
                </p>
              </div>
              <svg
                width="1203"
                height="753"
                viewBox="0 0 1203 753"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
              >
                <g clipPath="url(#path2)">
                  <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white"></path>
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#F5F5F5"></path>
                  <image href="/modules/krypto.png" width="1600" height="1000" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom2)"></image>
                </g>
                <defs>
                  <clipPath id="path2">
                    <rect width="1203" height="753" fill="white"></rect>
                  </clipPath>
                  <clipPath id="roundedBottom2">
                    <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
            </div>

            {/* Reporting Module */}
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-green-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Moduł raportowania</h3>
                <p className="text-foreground">
                  Automatyzuje przygotowanie i wysyłkę raportów do regulatorów (np. KNF, NBP, GIIF). Zapewnia kompletność, walidację danych i śledzenie statusów, ograniczając obciążenie zespołów.
                </p>
              </div>
              <svg
                width="1203"
                height="753"
                viewBox="0 0 1203 753"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
              >
                <g clipPath="url(#path3)">
                  <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white"></path>
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#F5F5F5"></path>
                  <image href="/modules/reports.png" width="1200" height="700" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom3)"></image>
                </g>
                <defs>
                  <clipPath id="path3">
                    <rect width="1203" height="753" fill="white"></rect>
                  </clipPath>
                  <clipPath id="roundedBottom3">
                    <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
            </div>

            {/* Accounting Module */}
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-purple-500/10 transition-all duration-500 ease-out md:col-span-2">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Moduł księgowy</h3>
                <p className="text-foreground">
                  Umożliwia kompleksowe rozliczenia transakcji, ułatwia integrację z zewnętrznymi systemami księgowymi oraz generowanie szczegółowych raportów finansowych. Usprawnia zarządzanie finansami i ułatwia audyty.
                </p>
              </div>
              <svg
                width="1203"
                height="753"
                viewBox="0 0 1203 753"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
              >
                <g clipPath="url(#path4)">
                  <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white"></path>
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#F5F5F5"></path>
                  <image href="/modules/ksiegowosc.png" width="1200" height="700" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom4)"></image>
                </g>
                <defs>
                  <clipPath id="path4">
                    <rect width="1203" height="753" fill="white"></rect>
                  </clipPath>
                  <clipPath id="roundedBottom4">
                    <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
            </div>

            {/* Administrative Module */}
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-indigo-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Moduł administracyjny</h3>
                <p className="text-foreground">
                  Ułatwia intuicyjne zarządzanie bazą danych klientów fizycznych i instytucjonalnych. Umożliwia efektywną rejestrację, segmentację, obsługę zgłoszeń oraz personalizację komunikacji. Znacząco poprawia satysfakcję klientów.
                </p>
              </div>
              <svg
                width="1203"
                height="753"
                viewBox="0 0 1203 753"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
              >
                <g clipPath="url(#path5)">
                  <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white"></path>
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#F5F5F5"></path>
                  <image href="/modules/administracja.png" width="1200" height="800" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom5)"></image>
                </g>
                <defs>
                  <clipPath id="path5">
                    <rect width="1203" height="753" fill="white"></rect>
                  </clipPath>
                  <clipPath id="roundedBottom5">
                    <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
            </div>

            {/* Backoffice Module */}
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-teal-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Moduł Backoffice</h3>
                <p className="text-foreground">
                  To centralny punkt kontroli i zarządzania wszystkimi aspektami platformy. Zapewnia pełną transparentność operacyjną, monitoring transakcji, ułatwia zarządzanie użytkownikami i wszelkie usprawnienia. Wspiera pracę działów supportu i księgowości.
                </p>
              </div>
              <svg
                width="1203"
                height="753"
                viewBox="0 0 1203 753"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
              >
                <g clipPath="url(#path6)">
                  <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white"></path>
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#F5F5F5"></path>
                  <image href="/modules/backoffice.png" width="1200" height="800" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom6)"></image>
                </g>
                <defs>
                  <clipPath id="path6">
                    <rect width="1203" height="753" fill="white"></rect>
                  </clipPath>
                  <clipPath id="roundedBottom6">
                    <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
            </div>

            {/* API/Plugin Module */}
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-emerald-500/10 transition-all duration-500 ease-out md:col-span-2">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Moduł API / Plugin</h3>
                <p className="text-foreground">
                  Oferujemy elastyczne narzędzia integracyjne, które umożliwiają szybkie i bezproblemowe połączenie z dowolną platformą e-commerce naszych Partnerów za pomocą zaawansowanego REST API oraz dedykowanych pluginów.
                </p>
              </div>
              <svg
                width="1203"
                height="753"
                viewBox="0 0 1203 753"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
              >
                <g clipPath="url(#path8)">
                  <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white"></path>
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#F5F5F5"></path>
                  <image href="/modules/api-plugins.png" width="1800" height="900" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom8)"></image>
                </g>
                <defs>
                  <clipPath id="path8">
                    <rect width="1203" height="753" fill="white"></rect>
                  </clipPath>
                  <clipPath id="roundedBottom8">
                    <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta">
        <div className="relative bg-gradient-to-br from-primary/5 via-blue-50 to-purple-50 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-72 h-72 bg-gradient-to-br from-primary/20 to-blue-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-primary/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4 py-20 max-w-7xl">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
              Gotowy, aby zacząć?
            </h2>
              <h3 className="mx-auto max-w-4xl text-2xl font-bold sm:text-2xl md:text-6xl bg-gradient-to-r from-gray-900 via-primary to-blue-700 bg-clip-text text-transparent leading-tight">
                Dostępne modele współpracy
              </h3>
              <p className="mt-8 text-md leading-8 text-slate-600 max-w-3xl mx-auto">
                Poznaj wszystkie modele współpracy dostosowane do Twojego biznesu
              </p>
            </div>

            {/* Enhanced Cooperation Models */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
              <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-primary/5 rounded-2xl"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-primary rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Cloud className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Model SaaS</h3>
                      <p className="text-primary font-medium">Software as a Service</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Wygodne rozwiązanie w chmurze</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Szybka implementacja i wdrożenie</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Regularne aktualizacje i wsparcie</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Model Licencyjny</h3>
                      <p className="text-primary font-medium">On-Premise Solution</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Pełna kontrola nad systemem</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Maksymalne bezpieczeństwo danych</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Dostosowanie do indywidualnych potrzeb</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/modele-wspolpracy" className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full sm:w-auto text-background flex gap-2">
                <Award className="h-6 w-6" />
                Czytaj więcej o modelach współpracy
                </Link>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Skontaktuj się z nami">
        <EmailForm onSubmit={handleEmailSubmit} onClose={closeModal} />
      </Modal>

      <Footer />
    </div>
  );
}
