'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from "next/link";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { EmailForm } from "@/components/ui/EmailForm";

export default function ModulyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
  };

  const openModal = () => setIsModalOpen(true);
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
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">Qonnect</span>
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">One</span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 text-balance">
              Nasza zintegrowana platforma obejmuje szereg zaawansowanych modułów, które wspierają kluczowe obszary działalności operacyjnej i regulacyjnej. Tym samym QONNECT zapewnia płynne funkcjonowanie, zgodność, wydajność oraz wymierne zyski.
            </p>
          </div>

          <p className="mt-5 text-sm text-foreground/70">Kompleksowe narzędzia dla nadzorowanych instytucji finansowych</p>

          <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 bg-gradient-to-t from-background via-background to-transparent lg:h-1/4"></div>
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

          <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
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
                  <image href="/admin-panel.webp" width="1200" height="700" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom)"></image>
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

            {/* Transaction Module */}
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl order-3 xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Moduł transakcyjny</h3>
                <p className="text-foreground">
                  Zapewnia płynną i bezpieczną komunikację z dostawcami płatniczymi oraz efektywne przetwarzanie transakcji finansowych. Skraca czas operacji i zwiększa niezawodność procesów płatniczych.
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
                <g clipPath="url(#path1)">
                  <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white"></path>
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#F5F5F5"></path>
                  <image href="/admin-panel.webp" width="1200" height="700" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom1)"></image>
                </g>
                <defs>
                  <clipPath id="path1">
                    <rect width="1203" height="753" fill="white"></rect>
                  </clipPath>
                  <clipPath id="roundedBottom1">
                    <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
            </div>

            {/* Crypto Module */}
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Moduł Krypto</h3>
                <p className="text-foreground">
                  Umożliwia kompleksową obsługę operacji związanych z aktywami cyfrowymi. Pozwala na bezpieczne depozyty i wypłaty kryptowalut, sprawną wymianę walut cyfrowych oraz generowanie i zarządzanie portfelami dla klientów.
                </p>
              </div>
              <canvas
                className="size-full pointer-events-none z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
                style={{ width: 800, height: 800 }}
                width={800}
                height={800}
              ></canvas>
              <svg
                width="1203"
                height="753"
                viewBox="0 0 1203 753"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mb-48 ml-12 mt-16 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"
              >
                <g clipPath="url(#path2)">
                  <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white"></path>
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#F5F5F5"></path>
                  <image href="/admin-panel.webp" width="1200" height="700" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom2)"></image>
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
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Moduł raportowania</h3>
                <p className="text-foreground">
                  Automatyzuje przygotowanie i wysyłkę raportów do regulatorów (np. KNF, NBP, GIIF). Zapewnia kompletność, walidację danych i śledzenie statusów, ograniczając obciążenie zespołów.
                </p>
              </div>
              <div className="inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)] absolute -bottom-full">
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:0]"
                  style={{
                    width: 210,
                    height: 210,
                    opacity: 0.24,
                    animationDelay: "0s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.05)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:1]"
                  style={{
                    width: 280,
                    height: 280,
                    opacity: 0.21,
                    animationDelay: "0.06s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.1)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:2]"
                  style={{
                    width: 350,
                    height: 350,
                    opacity: 0.18,
                    animationDelay: "0.12s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.15)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:3]"
                  style={{
                    width: 420,
                    height: 420,
                    opacity: 0.15,
                    animationDelay: "0.18s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.2)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:4]"
                  style={{
                    width: 490,
                    height: 490,
                    opacity: 0.12,
                    animationDelay: "0.24s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.25)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:5]"
                  style={{
                    width: 560,
                    height: 560,
                    opacity: 0.09,
                    animationDelay: "0.3s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.3)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:6]"
                  style={{
                    width: 630,
                    height: 630,
                    opacity: 0.06,
                    animationDelay: "0.36s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.35)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:7]"
                  style={{
                    width: 700,
                    height: 700,
                    opacity: 0.03,
                    animationDelay: "0.42s",
                    borderStyle: "dashed",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.4)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
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
                  <image href="/admin-panel.webp" width="1200" height="700" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom3)"></image>
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
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-purple-500/10 transition-all duration-500 ease-out">
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
                  <image href="/admin-panel.webp" width="1200" height="700" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom4)"></image>
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
                  <image href="/admin-panel.webp" width="1200" height="700" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom5)"></image>
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
                  <image href="/admin-panel.webp" width="1200" height="700" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom6)"></image>
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
          </div>

          {/* API/Plugin Special Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white text-2xl">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Moduł API / Plugin dla Sklepów E-Commerce
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Oferujemy ponadto elastyczne narzędzia integracyjne, które umożliwiają szybkie i bezproblemowe połączenie z
                  dowolną platformą e-commerce naszych Partnerów za pomocą zaawansowanego REST API oraz dedykowanych pluginów.
                </p>
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
                Gotowy, aby zacząć?
              </h2>
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                Sprawdź dostępne metody płatności
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
                Poznaj wszystkie modele współpracy i metody płatności dostosowane do Twojego biznesu
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mx-auto mb-4 text-primary">
                  <path d="M5 12V7a7 7 0 1 1 14 0v5"/>
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                  <circle cx="12" cy="16" r="1"/>
                </svg>
                <h3 className="font-semibold mb-2 text-foreground">Model Subskrypcyjny</h3>
                <p className="text-slate-600 text-sm">Elastyczne płatności miesięczne lub roczne</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mx-auto mb-4 text-primary">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
                <h3 className="font-semibold mb-2 text-foreground">Model SaaS</h3>
                <p className="text-slate-600 text-sm">Wygodne rozwiązanie w chmurze</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 mx-auto mb-4 text-primary">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <h3 className="font-semibold mb-2 text-foreground">Model Licencyjny</h3>
                <p className="text-slate-600 text-sm">Pełna kontrola nad systemem</p>
              </div>
            </div>

            <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link href="/metody-platnosci" className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full sm:w-auto text-background flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <rect width="20" height="14" x="2" y="5" rx="2"/>
                  <line x1="2" x2="22" y1="10" y2="10"/>
                </svg>
                Zobacz metody płatności
              </Link>
              <button
                onClick={openModal}
                className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-white border border-primary text-primary shadow-xs hover:bg-primary/5 h-9 px-4 py-2 has-[>svg]:px-3 w-full sm:w-auto flex gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Skontaktuj się z nami
              </button>
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
