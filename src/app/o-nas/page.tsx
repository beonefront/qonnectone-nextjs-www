import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'O nas | QonnectOne',
  description: 'Poznaj historię i misję firmy QonnectOne - integrujemy biznes płatniczy za pomocą multi-funkcjonalnej platformy dla instytucji nadzorowanych.',
};

export default function ONasPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />

      {/* Hero Section */}
      <section id="about-hero">
        <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
          <div className="flex w-full max-w-4xl flex-col space-y-4 overflow-hidden pt-8">
            <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">O QonnectOne</span>
            </h1>
            <p className="mx-auto max-w-3xl text-center text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 text-balance">
              Integrujemy biznes płatniczy za pomocą multi-funkcjonalnej platformy dla instytucji nadzorowanych.
            </p>
            <p className="mx-auto max-w-4xl text-center text-sm leading-6 text-foreground/60 sm:text-base sm:leading-7 text-balance">
              Dostarczamy zaawansowane rozwiązania IT i ICT dla dynamicznie rozwijającego się sektora finansowego w Polsce i Unii Europejskiej.
            </p>
          </div>

          <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-1/3 lg:h-1/4"></div>
        </div>
      </section>

      {/* Czym jest QonnectOne */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Czym jest QonnectOne?
            </h2>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                QonnectOne dostarcza zaawansowane rozwiązania IT i ICT (Information and Communication Technology) dla dynamicznie rozwijającego się sektora finansowego w Polsce i Unii Europejskiej.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Specjalizujemy się w obsłudze firm nadzorowanych oraz podmiotów obowiązanych zgodnie z Ustawą z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu (AML/CFT).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misja i Wizja */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground font-montserrat">
                    Misja
                  </h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Nasza misja jest jasna: integrować instytucje płatnicze i nadzorowane, aby umożliwić im szybkie i bezpieczne skalowanie biznesu płatniczego. Wierzymy, że kluczem do sukcesu jest połączenie innowacji technologicznych z rygorystycznymi wymogami regulacyjnymi.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground font-montserrat">
                    Wizja
                  </h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Właśnie dlatego dostarczamy systemy, które nie tylko gwarantują pełną zgodność z prawem, ale także optymalizują procesy operacyjne, redukują ryzyko i otwierają nowe możliwości rozwoju. Dzięki naszemu doświadczeniu i głębokiej znajomości branży, stajemy się niezawodnym partnerem w budowaniu bezpiecznej i efektywnej przyszłości cyfrowej.
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
              Rozumiemy biznes naszych Partnerów
            </h2>
            <h3 className="text-xl text-foreground/80 mb-8">
              Dlatego zapewniamy bezpieczeństwo, skalowalność i rozwój
            </h3>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 text-left space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                Wybierając QonnectOne, zyskujesz nie tylko zaawansowane technologie, ale przede wszystkim partnera, który aktywnie wspiera Twój biznes w dynamicznym środowisku regulacyjnym. Zapewniamy, że Twoje operacje będą zawsze zgodne z najwyższymi standardami bezpieczeństwa i przepisów.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Dzięki integracji z QonnectOne nie tracisz cennego czasu i zasobów na budowanie nowego systemu od podstaw, rozszerzanie istniejących rozwiązań czy skomplikowany proces pozyskiwania licencji.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Nie musisz też szukać i integrować się z wieloma dostawcami, co generuje dodatkowe koszty i złożoność. Integrując się z nami, otrzymujesz kompletne narzędzie informatyczne oraz możliwość skorzystania z licencji naszych Partnerów.
              </p>
              <div className="bg-background border border-primary/30 rounded-lg p-6 border-l-4 border-l-primary">
                <p className="text-lg font-semibold text-foreground">
                  Po Twojej stronie pozostaje to, co najważniejsze: rozwój biznesu.
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
              DLACZEGO MY?
            </h2>
            <p className="text-xl text-foreground/70">
              Naszą wizytówką jest doświadczenie, wiedza i znajomość potrzeb biznesu
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background border border-border rounded-xl p-6 shadow-sm text-center group hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Specjalizacja branżowa
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Posiadamy głębokie, praktyczne zrozumienie wymagań rynkowych i regulacyjnych w sektorach nadzorowanych
              </p>
            </div>
            <div className="bg-background border border-border rounded-xl p-6 shadow-sm text-center group hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Innowacyjność
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Nieustannie doskonalimy nasze rozwiązania, aby sprostać aktualnym wyzwaniom i przewidzieć przyszłe trendy w branży płatniczej
              </p>
            </div>
            <div className="bg-background border border-border rounded-xl p-6 shadow-sm text-center group hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Elastyczność
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Nasze modułowe podejście i elastyczne modele wdrożenia gwarantują, że system idealnie dopasuje się do indywidualnych potrzeb i tempa rozwoju Twojej firmy
              </p>
            </div>
            <div className="bg-background border border-border rounded-xl p-6 shadow-sm text-center group hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Wsparcie ekspertów
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Nasz doświadczony zespół specjalistów jest gotowy do wsparcia na każdym etapie współpracy – od analizy potrzeb, przez wdrożenie, aż po bieżącą obsługę i optymalizację.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bezpieczeństwo i zgodność */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Kompleksowe Bezpieczeństwo i zgodność
            </h2>
            <p className="text-lg text-foreground/70 text-center mb-10">
              Kładziemy nacisk na najwyższe standardy ochrony informacji i prywatności danych:
            </p>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-xl p-6 flex items-start">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">RODO / GDPR</h3>
                  <p className="text-foreground/70">
                    Pełna zgodność z Rozporządzeniem Ogólnym o Ochronie Danych Osobowych, zapewniająca ochronę prywatności klientów.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6 flex items-start">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">DORA (Digital Operational Resilience Act)</h3>
                  <p className="text-foreground/70">
                    Aktywnie przygotowujemy nasze rozwiązania do pełnej zgodności z nowymi regulacjami dotyczącymi odporności cyfrowej sektora finansowego.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6 flex items-start">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Audyty Bezpieczeństwa / Penetration Tests</h3>
                  <p className="text-foreground/70">
                    Regularnie poddajemy nasze systemy rygorystycznym audytom bezpieczeństwa i testom penetracyjnym, aby identyfikować i eliminować potencjalne luki.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6 flex items-start">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 22 12 18.82 5.82 22 7 13.87 2 9l6.91-.74L12 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Zgodność z Wymogami KNF dla KIP MIP</h3>
                  <p className="text-foreground/70">
                    Nasz system jest zaprojektowany z myślą o spełnieniu wszystkich wymogów Komisji Nadzoru Finansowego dla Krajowych Instytucji Płatniczych i Małych Instytucji Płatniczych
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
