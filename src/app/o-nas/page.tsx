import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import TrustedCompaniesSection from '@/components/TrustedCompaniesSection';
import PlatformSection from '@/components/PlatformSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'O nas | Qonnect',
  description: 'Poznaj historię i misję firmy Qonnect',
};

export default function ONasPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="text-white hero-bg from-primary">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 tracking-tight">
              O QonnectOne
            </h1>
            <p className="text-xl md:text-2xl font-montserrat font-medium mb-8 text-gray-200">
               Integrujemy biznes płatniczy za pomocą multi-funkcjonalnej platformy dla instytucji nadzorowanych.
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto font-inter leading-relaxed">
              Dostarczamy zaawansowane rozwiązania IT i ICT dla dynamicznie rozwijającego się sektora finansowego w Polsce i Unii Europejskiej.
            </p>
          </div>
        </div>
      </section>

      {/* Czym jest QonnectOne */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Czym jest QonnectOne?
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                QonnectOne dostarcza zaawansowane rozwiązania IT i ICT (Information and Communication Technology) dla dynamicznie rozwijającego się sektora finansowego w Polsce i Unii Europejskiej.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Specjalizujemy się w obsłudze firm nadzorowanych oraz podmiotów obowiązanych zgodnie z Ustawą z dnia 1 marca 2018 r. o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu (AML/CFT).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misja i Wizja */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <i className="fas fa-bullseye text-blue-500 mr-3"></i>
                  Misja
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Nasza misja jest jasna: integrować instytucje płatnicze i nadzorowane, aby umożliwić im szybkie i bezpieczne skalowanie biznesu płatniczego. Wierzymy, że kluczem do sukcesu jest połączenie innowacji technologicznych z rygorystycznymi wymogami regulacyjnymi.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <i className="fas fa-eye text-purple-500 mr-3"></i>
                  Wizja
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Właśnie dlatego dostarczamy systemy, które nie tylko gwarantują pełną zgodność z prawem, ale także optymalizują procesy operacyjne, redukują ryzyko i otwierają nowe możliwości rozwoju. Dzięki naszemu doświadczeniu i głębokiej znajomości branży, stajemy się niezawodnym partnerem w budowaniu bezpiecznej i efektywnej przyszłości cyfrowej.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rozumiemy biznes */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Rozumiemy biznes naszych Partnerów
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
              Dlatego zapewniamy bezpieczeństwo, skalowalność i rozwój
            </h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-8 text-left">
              <div className="space-y-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Wybierając QonnectOne, zyskujesz nie tylko zaawansowane technologie, ale przede wszystkim partnera, który aktywnie wspiera Twój biznes w dynamicznym środowisku regulacyjnym. Zapewniamy, że Twoje operacje będą zawsze zgodne z najwyższymi standardami bezpieczeństwa i przepisów.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Dzięki integracji z QonnectOne nie tracisz cennego czasu i zasobów na budowanie nowego systemu od podstaw, rozszerzanie istniejących rozwiązań czy skomplikowany proces pozyskiwania licencji.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Nie musisz też szukać i integrować się z wieloma dostawcami, co generuje dodatkowe koszty i złożoność. Integrując się z nami, otrzymujesz kompletne narzędzie informatyczne oraz możliwość skorzystania z licencji naszych Partnerów.
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    Po Twojej stronie pozostaje to, co najważniejsze: rozwój biznesu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego my */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                DLACZEGO MY?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Naszą wizytówką jest doświadczenie, wiedza i znajomość potrzeb biznesu
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-industry text-blue-600 dark:text-blue-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Specjalizacja branżowa
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Posiadamy głębokie, praktyczne zrozumienie wymagań rynkowych i regulacyjnych w sektorach nadzorowanych
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-lightbulb text-purple-600 dark:text-purple-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Innowacyjność
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Nieustannie doskonalimy nasze rozwiązania, aby sprostać aktualnym wyzwaniom i przewidzieć przyszłe trendy w branży płatniczej
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-cogs text-green-600 dark:text-green-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Elastyczność
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Nasze modułowe podejście i elastyczne modele wdrożenia gwarantują, że system idealnie dopasuje się do indywidualnych potrzeb i tempa rozwoju Twojej firmy
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-orange-600 dark:text-orange-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Wsparcie ekspertów
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Nasz doświadczony zespół specjalistów jest gotowy do wsparcia na każdym etapie współpracy – od analizy potrzeb, przez wdrożenie, aż po bieżącą obsługę i optymalizację.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bezpieczeństwo i zgodność */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Kompleksowe Bezpieczeństwo i zgodność
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-10">
              Kładziemy nacisk na najwyższe standardy ochrony informacji i prywatności danych:
            </p>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 flex items-start">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-shield-alt text-blue-600 dark:text-blue-400"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">RODO / GDPR</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Pełna zgodność z Rozporządzeniem Ogólnym o Ochronie Danych Osobowych, zapewniająca ochronę prywatności klientów.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 flex items-start">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-server text-purple-600 dark:text-purple-400"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">DORA (Digital Operational Resilience Act)</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Aktywnie przygotowujemy nasze rozwiązania do pełnej zgodności z nowymi regulacjami dotyczącymi odporności cyfrowej sektora finansowego.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 flex items-start">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-search text-green-600 dark:text-green-400"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Audyty Bezpieczeństwa / Penetration Tests</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Regularnie poddajemy nasze systemy rygorystycznym audytom bezpieczeństwa i testom penetracyjnym, aby identyfikować i eliminować potencjalne luki.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 flex items-start">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-university text-red-600 dark:text-red-400"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Zgodność z Wymogami KNF dla KIP MIP</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Nasz system jest zaprojektowany z myślą o spełnieniu wszystkich wymogów Komisji Nadzoru Finansowego dla Krajowych Instytucji Płatniczych i Małych Instytucji Płatniczych
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 pt-12 pb-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Skontaktuj się z nami
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Nie jesteś pewien, który model jest najlepszy dla Twojego biznesu?
              Nasze zespół ekspertów pomoże Ci wybrać optymalne rozwiązanie.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <i className="fas fa-phone text-3xl mb-4 text-blue-200"></i>
                <h3 className="font-montserrat font-semibold mb-2">Zadzwoń</h3>
                <p className="text-blue-100">+48 123 456 789</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <i className="fas fa-envelope text-3xl mb-4 text-blue-200"></i>
                <h3 className="font-montserrat font-semibold mb-2">Napisz</h3>
                <p className="text-blue-100">kontakt@qonnectone.pl</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <i className="fas fa-calendar text-3xl mb-4 text-blue-200"></i>
                <h3 className="font-montserrat font-semibold mb-2">Umów spotkanie</h3>
                <p className="text-blue-100">Bezpłatna konsultacja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
