import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Zap, Eye, Target, Users, Lightbulb, Shield, Award, Building, Server, Search } from 'lucide-react';

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
          <div className="flex w-full max-w-4xl flex-col space-y-4 overflow-hidden py-8 pb-16">
            <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">O nas</span>
            </h1>
            <p className="mx-auto max-w-3xl text-center text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 text-balance">
              Jesteśmy QonnectOne, dostawcą rozwiązania technologicznego w formule SaaS, które rewolucjonizuje rynek, umożliwiając firmom niefinansowym i operatorom płatniczym natychmiastowe wzbogacenie swojej oferty o usługi bankowości wbudowanej (Embedded Banking).
            </p>
            <p className="mx-auto max-w-4xl text-center text-base leading-6 text-foreground/60 sm:text-base sm:leading-7 text-balance">
              Działamy jako centralny hub, integrujący aplikacje klienckie z zewnętrznymi dostawcami usług finansowych (jak np. spersonalizowane karty płatnicze, rachunki rozliczeniowe czy usługi pożyczkowe), a wszystko to za pośrednictwem intuicyjnego API. Nasz model SaaS gwarantuje minimalizację kosztów początkowych i szybkie wdrożenie, jednocześnie zapewniając pełną skalowalność i zgodność z regulacjami (m.in. RODO, DORA, MICA).
            </p>
          </div>
        </div>
      </section>

      {/* Czym jest QonnectOne */}
      {/* <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Czym jest QonnectOne?
            </h2>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                QonnectOne jest kompleksową platformą dostarczającą zaawansowane rozwiązania IT i ICT (Information and Communication Technology).
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Specjalizujemy się w obsłudze firm nadzorowanych oraz podmiotów obowiązanych zgodnie z Ustawą z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu (AML/CFT).
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Misja i Wizja */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground font-montserrat">
                    Misja
                  </h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Naszą misją jest przekształcanie złożoności w przewagę konkurencyjną dla naszych klientów. Dążymy do tego, by każde przedsiębiorstwo mogło &ldquo;wbudować&rdquo; płynne, natywne i bezpieczne doświadczenia finansowe bezpośrednio w swoje produkty i platformy, zwiększając tym samym lojalność klientów i generując nowe strumienie przychodów. Dostarczamy infrastrukturę (silnik BaaS), która pozwala firmom niefinansowym angażować większą część klientów, bez konieczności polegania na zewnętrznych portalach bankowych tworzyć bardziej &ldquo;płynne, wciągające doświadczenie użytkownika&rdquo; (&ldquo;seamless, sticky user experience&rdquo;), zwiększając zaangażowanie i lojalność klientów.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-primary" />
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
                <Building className="w-8 h-8 text-blue-600" />
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
                <Lightbulb className="w-8 h-8 text-purple-600" />
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
                <Target className="w-8 h-8 text-green-600" />
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
                <Users className="w-8 h-8 text-orange-600" />
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
                  <Shield className="w-6 h-6 text-blue-600" />
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
                  <Server className="w-6 h-6 text-purple-600" />
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
                  <Search className="w-6 h-6 text-green-600" />
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
                  <Award className="w-6 h-6 text-red-600" />
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
