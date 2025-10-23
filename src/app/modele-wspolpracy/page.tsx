'use client';

import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { EmailForm } from "@/components/ui/EmailForm";
import { Check, Phone, Mail, Calendar } from "lucide-react";
import { openAppointmentScheduler } from '@/config/calendar';

export const metadata: Metadata = {
  title: 'Modele współpracy | QonnectOne',
  description: 'Poznaj nasze modele współpracy - SaaS i licencyjny. Wybierz rozwiązanie dopasowane do potrzeb Twojej firmy.',
  openGraph: {
    title: 'Modele współpracy | QonnectOne',
    description: 'Poznaj nasze modele współpracy - SaaS i licencyjny. Wybierz rozwiązanie dopasowane do potrzeb Twojej firmy.',
    images: [
      {
        url: 'https://qonnectone.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'QonnectOne Modele współpracy',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modele współpracy | QonnectOne',
    description: 'Poznaj nasze modele współpracy - SaaS i licencyjny. Wybierz rozwiązanie dopasowane do potrzeb Twojej firmy.',
    images: ['https://qonnectone.com/logo.png'],
  },
  alternates: {
    canonical: 'https://qonnectone.com/modele-wspolpracy'
  }
};

export default function MetodyPlatnosciPage() {
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
        <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">

          <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8 pb-18">
            <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">Modele</span>
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">współpracy</span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 text-balance">
              Doskonale rozumiemy, że każdy biznes ma unikalne potrzeby i strategię rozwoju. Właśnie dlatego oferujemy nasze innowacyjne systemy informatyczne w elastycznych modelach, które idealnie dopasowują się do Twoich wymagań, infrastruktury oraz budżetu.
            </p>
          </div>
          {/* <p className="mt-5 text-sm text-foreground/70">Dopasuj model i metodę płatności do indywidualnych potrzeb swojego biznesu</p> */}
        </div>
      </section>

      {/* Payment Models Section */}
      <section id="payment-models">
        <div className="bg-neutral-100 py-12">
          <div className="relative container mx-auto px-4 py-16 max-w-7xl">
            <div className="text-center space-y-4 pb-6 mx-auto">
              <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">MODELE WSPÓŁPRACY</h2>
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                Wybierz model dla Twojego biznesu
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
                Elastyczne modele dostosowane do Twoich potrzeb i budżetu
              </p>
            </div>

            <div className="mx-auto mt-16 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-500 max-w-7xl">
              {/* SaaS Model */}
              <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 py-10 rounded-2xl hover:bg-green-500/10 transition-all duration-500 ease-out border-2 border-primary/20 w-full max-w-sm">
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    Najpopularniejszy
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Model SaaS</h3>
                  <p className="text-foreground mb-4">
                    Postaw na wygodę i efektywność, korzystając z naszych rozwiązań jako usługi w chmurze. Eliminuje potrzebę instalacji, utrzymania i zarządzania infrastrukturą IT. My zajmiemy się bezpieczeństwem, dostępnością i wydajnością.
                  </p>
                  <div className="space-y-2 mb-2">
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>Brak instalacji i utrzymania</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>Bezpieczeństwo w chmurze</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>Wysoka dostępność</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>Koncentracja na biznesie</span>
                    </div>
                  </div>
                </div>
                <svg
                  width="600"
                  height="300"
                  viewBox="0 0 600 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-mb-32 mt-2 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
                >
                  {/* Cloud Infrastructure */}
                  <g className="opacity-90">
                    {/* Cloud shape */}
                    <path d="M80 60C80 45 95 30 120 30C130 15 150 5 180 5C210 5 230 25 240 40C260 40 280 55 280 70C280 85 260 100 240 100H120C100 100 80 85 80 60Z" fill="#E3F2FD" stroke="#1976D2" strokeWidth="2"/>

                    {/* Server icons in cloud */}
                    <rect x="140" y="45" width="30" height="20" rx="3" fill="#1976D2" opacity="0.8"/>
                    <rect x="140" y="70" width="30" height="20" rx="3" fill="#1976D2" opacity="0.6"/>
                    <rect x="140" y="95" width="30" height="20" rx="3" fill="#1976D2" opacity="0.4"/>

                    {/* Database icon */}
                    <ellipse cx="200" cy="55" rx="12" ry="6" fill="#4CAF50"/>
                    <rect x="188" y="55" width="24" height="15" rx="3" fill="#4CAF50"/>
                    <ellipse cx="200" cy="70" rx="12" ry="6" fill="#4CAF50"/>
                  </g>

                  {/* Users/Devices */}
                  <g>
                    {/* Laptop */}
                    <rect x="400" y="80" width="50" height="30" rx="3" fill="#F5F5F5" stroke="#9E9E9E" strokeWidth="2"/>
                    <rect x="408" y="84" width="34" height="22" fill="#1976D2" opacity="0.3"/>
                    <rect x="415" y="110" width="20" height="2" fill="#9E9E9E"/>

                    {/* Mobile device */}
                    <rect x="450" y="120" width="15" height="25" rx="2" fill="#F5F5F5" stroke="#9E9E9E" strokeWidth="1"/>
                    <rect x="452" y="122" width="11" height="18" fill="#1976D2" opacity="0.3"/>

                    {/* Desktop */}
                    <rect x="380" y="140" width="40" height="25" rx="3" fill="#F5F5F5" stroke="#9E9E9E" strokeWidth="2"/>
                    <rect x="388" y="144" width="24" height="17" fill="#1976D2" opacity="0.3"/>
                    <rect x="395" y="170" width="8" height="10" fill="#9E9E9E"/>
                    <rect x="390" y="180" width="18" height="2" fill="#9E9E9E"/>
                  </g>

                  {/* Connection lines */}
                  <g stroke="#1976D2" strokeWidth="2" fill="none" opacity="0.6">
                    <path d="M280 70 Q340 50 400 95" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite"/>
                    </path>
                    <path d="M280 75 Q350 60 450 135" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                    </path>
                    <path d="M280 80 Q320 90 380 155" strokeDasharray="4,4">
                      <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" begin="1s"/>
                    </path>
                  </g>

                  {/* Labels */}
                  <text x="180" y="25" textAnchor="middle" className="fill-gray-700 text-sm font-medium">Chmura SaaS</text>
                  <text x="425" y="70" textAnchor="middle" className="fill-gray-700 text-xs">Laptop</text>
                  <text x="457" y="155" textAnchor="middle" className="fill-gray-700 text-xs">Mobile</text>
                  <text x="400" y="135" textAnchor="middle" className="fill-gray-700 text-xs">Desktop</text>

                  {/* Benefits icons */}
                  <g>
                    {/* Security shield */}
                    <path d="M40 150 L40 165 L55 172 L70 165 L70 150 L55 143 Z" fill="#4CAF50" opacity="0.8"/>
                    <path d="M50 158 L53 161 L60 154" stroke="white" strokeWidth="1.5" fill="none"/>

                    {/* Update arrows */}
                    <g transform="translate(40, 180)">
                      <path d="M0 8 L8 0 L16 8 M8 0 L8 16" stroke="#FF9800" strokeWidth="1.5" fill="none"/>
                      <path d="M20 8 L28 0 L36 8 M28 0 L28 16" stroke="#FF9800" strokeWidth="1.5" fill="none"/>
                    </g>

                    {/* Availability icon */}
                    <circle cx="55" cy="220" r="12" fill="#2196F3" opacity="0.8"/>
                    <path d="M50 220 L55 225 L60 220" stroke="white" strokeWidth="1.5" fill="none"/>
                  </g>

                  {/* Benefit labels */}
                  <text x="55" y="140" textAnchor="middle" className="fill-gray-600 text-xs">Bezpieczeństwo</text>
                  <text x="55" y="175" textAnchor="middle" className="fill-gray-600 text-xs">Aktualizacje</text>
                  <text x="55" y="210" textAnchor="middle" className="fill-gray-600 text-xs">Dostępność</text>
                </svg>
                <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
              </div>

              {/* License Model */}
              <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 py-10 rounded-2xl hover:bg-purple-500/10 transition-all duration-500 ease-out w-full max-w-sm">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Model Licencyjny</h3>
                  <p className="text-foreground mb-4">
                    Jeśli preferujesz pełną kontrolę nad oprogramowaniem i chcesz dostosować system do specyficznych procesów wewnętrznych swojej organizacji, model licencyjny jest dla Ciebie. Nabycie licencji daje Ci swobodę integracji z istniejącą infrastrukturą IT.
                  </p>
                  <div className="space-y-2 mb-2">
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>Pełna kontrola systemu</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>Dostosowanie do procesów</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>Integracja z IT</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Check className="text-green-500 mr-2 w-4 h-4" />
                      <span>Własność licencji</span>
                    </div>
                  </div>
                </div>
                <svg
                  width="600"
                  height="300"
                  viewBox="0 0 600 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-mb-32 mt-2 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
                >
                  {/* Local Infrastructure */}
                  <g className="opacity-90">
                    {/* Server rack */}
                    <rect x="80" y="60" width="120" height="160" rx="8" fill="#2C3E50" stroke="#34495E" strokeWidth="2"/>

                    {/* Server units in rack */}
                    <rect x="90" y="70" width="100" height="25" rx="2" fill="#3498DB" opacity="0.8"/>
                    <rect x="90" y="100" width="100" height="25" rx="2" fill="#3498DB" opacity="0.6"/>
                    <rect x="90" y="130" width="100" height="25" rx="2" fill="#3498DB" opacity="0.4"/>
                    <rect x="90" y="160" width="100" height="25" rx="2" fill="#3498DB" opacity="0.2"/>
                    <rect x="90" y="190" width="100" height="25" rx="2" fill="#3498DB" opacity="0.1"/>

                    {/* Database server */}
                    <rect x="90" y="220" width="100" height="25" rx="2" fill="#E74C3C" opacity="0.8"/>

                    {/* Network cables */}
                    <path d="M200 95 L250 95" stroke="#7F8C8D" strokeWidth="3" fill="none"/>
                    <path d="M200 125 L250 125" stroke="#7F8C8D" strokeWidth="3" fill="none"/>
                    <path d="M200 155 L250 155" stroke="#7F8C8D" strokeWidth="3" fill="none"/>
                    <path d="M200 185 L250 185" stroke="#7F8C8D" strokeWidth="3" fill="none"/>
                    <path d="M200 215 L250 215" stroke="#7F8C8D" strokeWidth="3" fill="none"/>
                    <path d="M200 235 L250 235" stroke="#7F8C8D" strokeWidth="3" fill="none"/>
                  </g>

                  {/* Local Network */}
                  <g>
                    {/* Network switch */}
                    <rect x="250" y="80" width="60" height="40" rx="4" fill="#34495E" stroke="#2C3E50" strokeWidth="2"/>
                    <rect x="255" y="85" width="50" height="30" fill="#3498DB" opacity="0.3"/>

                    {/* Local computers */}
                    <rect x="350" y="100" width="50" height="30" rx="3" fill="#F5F5F5" stroke="#9E9E9E" strokeWidth="2"/>
                    <rect x="358" y="104" width="34" height="22" fill="#3498DB" opacity="0.3"/>
                    <rect x="365" y="130" width="20" height="2" fill="#9E9E9E"/>

                    <rect x="420" y="100" width="50" height="30" rx="3" fill="#F5F5F5" stroke="#9E9E9E" strokeWidth="2"/>
                    <rect x="428" y="104" width="34" height="22" fill="#3498DB" opacity="0.3"/>
                    <rect x="435" y="130" width="20" height="2" fill="#9E9E9E"/>

                    {/* Admin workstation */}
                    <rect x="380" y="150" width="60" height="40" rx="4" fill="#F5F5F5" stroke="#9E9E9E" strokeWidth="2"/>
                    <rect x="388" y="154" width="44" height="32" fill="#3498DB" opacity="0.3"/>
                    <rect x="395" y="190" width="30" height="2" fill="#9E9E9E"/>
                    <rect x="390" y="195" width="40" height="2" fill="#9E9E9E"/>
                  </g>

                  {/* Connection lines */}
                  <g stroke="#3498DB" strokeWidth="2" fill="none" opacity="0.6">
                    <path d="M310 100 L350 115" strokeDasharray="3,3">
                      <animate attributeName="stroke-dashoffset" values="0;6" dur="3s" repeatCount="indefinite"/>
                    </path>
                    <path d="M310 100 L420 115" strokeDasharray="3,3">
                      <animate attributeName="stroke-dashoffset" values="0;6" dur="3s" repeatCount="indefinite" begin="1s"/>
                    </path>
                    <path d="M310 100 L380 170" strokeDasharray="3,3">
                      <animate attributeName="stroke-dashoffset" values="0;6" dur="3s" repeatCount="indefinite" begin="2s"/>
                    </path>
                  </g>

                  {/* Labels */}
                  <text x="140" y="50" textAnchor="middle" className="fill-gray-700 text-sm font-medium">Lokalna infrastruktura</text>
                  <text x="280" y="75" textAnchor="middle" className="fill-gray-700 text-xs">Switch</text>
                  <text x="375" y="90" textAnchor="middle" className="fill-gray-700 text-xs">Komputer 1</text>
                  <text x="445" y="90" textAnchor="middle" className="fill-gray-700 text-xs">Komputer 2</text>
                  <text x="410" y="145" textAnchor="middle" className="fill-gray-700 text-xs">Admin</text>

                  {/* Control icons */}
                  <g>
                    {/* Control panel */}
                    <rect x="40" y="150" width="30" height="20" rx="3" fill="#8E44AD" opacity="0.8"/>
                    <rect x="45" y="155" width="20" height="10" fill="white" opacity="0.3"/>

                    {/* Customization tools */}
                    <g transform="translate(40, 180)">
                      <rect x="0" y="0" width="15" height="15" rx="2" fill="#F39C12" opacity="0.8"/>
                      <path d="M3 3 L12 12 M12 3 L3 12" stroke="white" strokeWidth="1" fill="none"/>
                    </g>

                    {/* Integration icon */}
                    <g transform="translate(40, 210)">
                      <rect x="0" y="0" width="15" height="15" rx="2" fill="#27AE60" opacity="0.8"/>
                      <path d="M3 7 L7 11 L12 2" stroke="white" strokeWidth="1.5" fill="none"/>
                    </g>

                    {/* Ownership icon */}
                    <g transform="translate(40, 240)">
                      <rect x="0" y="0" width="15" height="15" rx="2" fill="#E67E22" opacity="0.8"/>
                      <path d="M7 3 L7 12 M3 7 L11 7" stroke="white" strokeWidth="1" fill="none"/>
                    </g>
                  </g>

                  {/* Control labels */}
                  <text x="55" y="145" textAnchor="middle" className="fill-gray-600 text-xs">Kontrola</text>
                  <text x="55" y="175" textAnchor="middle" className="fill-gray-600 text-xs">Dostosowanie</text>
                  <text x="55" y="205" textAnchor="middle" className="fill-gray-600 text-xs">Integracja</text>
                  <text x="55" y="235" textAnchor="middle" className="fill-gray-600 text-xs">Własność</text>
                </svg>
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
                Gotowy, aby zacząć?
              </h2>
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                Skontaktuj się z nami
              </h3>
              <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
                Nie jesteś pewien, który model jest najlepszy dla Twojego biznesu? Nasz zespół ekspertów pomoże Ci wybrać optymalne rozwiązanie.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Zadzwoń</h3>
                <p className="text-slate-600 text-sm">+48 72 88 02 000</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Napisz</h3>
                <p className="text-slate-600 text-sm">office@qonnectone.com</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2 text-foreground">Umów spotkanie</h3>
                <p className="text-slate-600 text-sm">Bezpłatna konsultacja</p>
              </div>
            </div>

            <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={openAppointmentScheduler}
                className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-primary/50 focus-visible:ring-[3px] bg-primary shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 w-full sm:w-auto text-background flex gap-2 cursor-pointer"
              >
                <Calendar className="size-4 text-background" />
                Umów spotkanie
              </button>
              <button
                onClick={openModal}
                className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-white border border-input shadow-xs hover:bg-gray-50 h-9 px-4 py-2 has-[>svg]:px-3 w-full sm:w-auto text-foreground flex gap-2 cursor-pointer"
              >
                <Phone className="size-4" />
                Skontaktuj się z nami
              </button>
              {/* <button
                className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-white border border-primary text-primary shadow-xs hover:bg-primary/5 h-9 px-4 py-2 has-[>svg]:px-3 w-full sm:w-auto flex gap-2"
              >
                <Download className="h-6 w-6" />
                Pobierz cennik
              </button> */}
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
