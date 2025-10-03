'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { EmailForm } from "@/components/ui/EmailForm";
import { Check, Phone, Mail, Calendar, Briefcase, Download } from "lucide-react";

export default function MetodyPlatnosciPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAppointmentClick = () => {
    // Redirect to Google appointment scheduling
    window.open('https://workspace.google.com/resources/appointment-scheduling/', '_blank');
  };

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
                  <div className="space-y-2 mb-6">
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

              {/* License Model */}
              <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 py-10 rounded-2xl hover:bg-purple-500/10 transition-all duration-500 ease-out w-full max-w-sm">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Model Licencyjny</h3>
                  <p className="text-foreground mb-4">
                    Jeśli preferujesz pełną kontrolę nad oprogramowaniem i chcesz dostosować system do specyficznych procesów wewnętrznych swojej organizacji, model licencyjny jest dla Ciebie. Nabycie licencji daje Ci swobodę integracji z istniejącą infrastrukturą IT.
                  </p>
                  <div className="space-y-2 mb-6">
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
                onClick={handleAppointmentClick}
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
