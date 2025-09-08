import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Business Cases | Qonnect',
  description: 'Poznaj przypadki użycia i sukcesy naszych klientów',
};

export default function BusinessCasesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="text-white hero-bg from-primary">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 tracking-tight">
              Business Cases
            </h1>
            <p className="text-xl md:text-2xl font-montserrat font-medium mb-8 text-gray-200">
              Poznaj historie sukcesu firm, które zaufały rozwiązaniom QonnectOne
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto font-inter leading-relaxed">
              Odkryj, jak nasze rozwiązania pomagają instytucjom finansowym w przyspieszeniu wzrostu,
              minimalizacji ryzyka i spełnieniu wymogów regulacyjnych w różnych sektorach.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-rocket text-blue-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Szybkie wejście na rynek</span>
              </div>
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-shield-alt text-green-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Minimalizacja ryzyka</span>
              </div>
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-coins text-yellow-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Redukcja kosztów operacyjnych</span>
              </div>
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-balance-scale text-purple-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Zgodność z regulacjami</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="cursor-pointer bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition font-inter">
                Skontaktuj się z nami <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button className="cursor-pointer bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition font-inter">
                Zobacz demo <i className="fas fa-play-circle ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Rozszerzenie Oferty Płatniczej dla Krajowej Instytucji Płatniczej X
                </h2>
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-4">
                  Sektor: Instytucje płatnicze
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Wprowadzenie:</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Krajowa Instytucja Płatnicza (KIP) X, posiadająca podstawową licencję na realizację przekazu płatniczego,
                    stoi przed strategiczną decyzją o rozszerzeniu swojej oferty o nowe, kluczowe produkty, takie jak karty płatnicze
                    i konta IBAN dla swoich klientów. Tradycyjna ścieżka rozwoju wiąże się z szeregiem wyzwań, w tym długotrwałym
                    procesem regulacyjnym, znacznymi inwestycjami finansowymi i operacyjnymi.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Wyzwania tradycyjnego podejścia &quot;build from scratch&quot;:</h3>
                  <div className="space-y-3">
                    <div className="pl-4 border-l-2 border-red-200 dark:border-red-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Długotrwały proces licencyjny</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Złożenie wniosku do KNF o rozszerzenie licencji na nowe produkty (np. wydawanie pieniądza elektronicznego,
                        usługi związane z kontami płatniczymi) to proces trwający kilkanaście miesięcy, wymagający przygotowania
                        obszernej dokumentacji i spełnienia rygorystycznych wymogów regulacyjnych.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-red-200 dark:border-red-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Znaczące nakłady finansowe</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Budowa własnego systemu transakcyjnego od podstaw, integracja z różnymi dostawcami (banki, schematy kartowe,
                        dostawcy usług AML/KYC) oraz zatrudnienie wyspecjalizowanego zespołu (programiści, specjaliści ds. compliance,
                        operacji) generuje ogromne koszty inwestycyjne i operacyjne.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-red-200 dark:border-red-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Wysokie ryzyko biznesowe i operacyjne</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Złożoność projektu, potencjalne opóźnienia w procesie licencyjnym i budowie systemu, a także brak gwarancji
                        sukcesu rynkowego dla nowych produktów, stanowią poważne ryzyko biznesowe. Utrzymanie zgodności z dynamicznie
                        zmieniającymi się regulacjami również jest wyzwaniem.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-red-200 dark:border-red-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Brak elastyczności</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Raz zbudowany system może być trudny do adaptacji w obliczu zmieniających się wymagań rynkowych czy regulacyjnych.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Rozwiązanie: Partnerstwo z QonnectOne</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    QonnectOne oferuje alternatywne podejście, które pozwala KIP X na szybkie i efektywne skalowanie biznesu,
                    omijając większość wymienionych wyżej wyzwań:
                  </p>

                  <div className="space-y-3">
                    <div className="pl-4 border-l-2 border-green-200 dark:border-green-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Gotowy do integracji system transakcyjny</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        QonnectOne dostarcza kompletny, sprawdzony system informatyczny, który jest gotowy do integracji z istniejącą
                        stroną transakcyjną KIP X. Eliminuje to potrzebę projektowania i budowy skomplikowanej infrastruktury od zera.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-green-200 dark:border-green-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Partnerstwo z licencjonowaną instytucją</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        QonnectOne współpracuje z instytucjami nadzorowanymi, które posiadają już niezbędne, rozszerzone licencje
                        (np. licencję instytucji pieniądza elektronicznego lub inną wymaganą do obsługi kart i kont IBAN).
                        Dzięki temu KIP X może oferować nowe produkty pod nadzorem licencji partnera.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-green-200 dark:border-green-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Minimalizacja kosztów i ryzyka</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        KIP X unika ogromnych początkowych nakładów finansowych związanych z budową systemu i procesem licencyjnym.
                        Zamiast inwestycji w aktywa, model ten opiera się na kosztach operacyjnych (abonament, prowizje),
                        co znacząco redukuje ryzyko finansowe.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-green-200 dark:border-green-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Szybkie wejście na rynek (Time-to-Market)</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Integracja z QonnectOne pozwala na znaczne skrócenie czasu potrzebnego na uruchomienie nowych produktów.
                        Zamiast kilkunastu miesięcy, KIP X może zaoferować karty płatnicze i konta IBAN w ciągu kilku tygodni
                        lub miesięcy, co daje ogromną przewagę konkurencyjną.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-green-200 dark:border-green-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Sprawdzenie modelu biznesowego</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        QonnectOne umożliwia KIP X szybkie i sprawne przetestowanie nowego modelu biznesowego na rzeczywistym rynku.
                        Dzięki temu można weryfikować popyt, optymalizować procesy i zbierać cenne dane bez ponoszenia pełnych
                        kosztów i ryzyk tradycyjnego podejścia.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-green-200 dark:border-green-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Skupienie na rozwoju biznesu</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Współpraca z QonnectOne zwalnia KIP X z obciążeń technologicznych i regulacyjnych, pozwalając w pełni
                        skupić się na tym, co najważniejsze – pozyskiwaniu klientów, budowaniu marki i rozwijaniu relacji biznesowych.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Kluczowe rezultaty:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">12-18 miesięcy → 4-6 tygodni</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Skrócenie czasu wejścia na rynek</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">70%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Redukcja nakładów inwestycyjnych</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">Minimalizacja</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Ryzyka biznesowego i operacyjnego</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">100%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Fokus na rozwoju biznesu</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Podsumowanie</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Dla Krajowej Instytucji Płatniczej X, dążącej do rozszerzenia swojej oferty o karty płatnicze i konta IBAN,
                    partnerstwo z QonnectOne stanowi strategiczne i optymalne rozwiązanie. Pozwala ono na znaczące skrócenie czasu
                    wejścia na rynek, redukcję nakładów finansowych i minimalizację ryzyka biznesowego i operacyjnego.
                    Zamiast złożonej i kosztownej drogi samodzielnego rozwoju, KIP X otrzymuje kompletne narzędzie informatyczne
                    i wsparcie licencjonowanego partnera, co umożliwia szybkie sprawdzenie i skalowanie nowego modelu biznesowego.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Ciągłość Działalności i Zgodność z MiCA dla Instytucji Kryptowalutowej Y
                </h2>
                <div className="text-sm text-green-600 dark:text-green-400 mb-4">
                  Sektor: Kryptowaluty i aktywa cyfrowe
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Wprowadzenie:</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Instytucja Nadzorowana Y, posiadająca podstawową licencję na obrót kryptoaktywami, stoi w obliczu znaczących zmian
                    regulacyjnych związanych z wejściem w życie dyrektywy MiCA (Markets in Crypto-Assets Regulation). Aby kontynuować
                    działalność i obsługiwać swoich klientów w nowym środowisku prawnym, firma musi uzyskać stosowną licencję MiCA.
                    Tradycyjna ścieżka jej pozyskania wiąże się jednak z długotrwałym i niepewnym procesem.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Wyzwania związane z dyrektywą MiCA w tradycyjnym podejściu:</h3>
                  <div className="space-y-3">
                    <div className="pl-4 border-l-2 border-red-200 dark:border-red-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Długotrwały i niepewny proces licencyjny</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Procedura złożenia wniosku i uzyskania licencji MiCA to złożony proces, który może trwać od kilku do kilkunastu
                        miesięcy, a co najważniejsze – nie gwarantuje jej otrzymania. Wymaga to gruntownego przygotowania dokumentacji,
                        spełnienia rygorystycznych wymogów kapitałowych, organizacyjnych i technologicznych.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-red-200 dark:border-red-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Blokada działalności operacyjnej</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Bez odpowiedniej licencji MiCA, Instytucja Y nie będzie mogła kontynuować swojej dotychczasowej działalności
                        ani obsługiwać obecnych klientów w nowym środowisku regulacyjnym. Może to prowadzić do utraty klientów,
                        spadku przychodów i potencjalnie do konieczności zawieszenia operacji.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-red-200 dark:border-red-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Znaczące nakłady finansowe i zasobów</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Przygotowanie do wniosku licencyjnego i dostosowanie wewnętrznych systemów do wymogów MiCA wiąże się z dużymi
                        inwestycjami w doradztwo prawne i regulacyjne, technologie, audyty oraz rekrutację lub szkolenie personelu.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-red-200 dark:border-red-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Ryzyko utraty pozycji rynkowej</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Długotrwały okres oczekiwania na licencję może spowodować, że konkurenci, którzy szybciej dostosują się do
                        nowych regulacji, zyskają przewagę rynkową, a Instytucja Y straci swój udział w rynku.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Rozwiązanie: Partnerstwo z QonnectOne</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    QonnectOne oferuje strategiczne rozwiązanie, które pozwala Instytucji Y na bezproblemowe przejście przez okres
                    transformacji regulacyjnej, zapewniając ciągłość działania:
                  </p>

                  <div className="space-y-3">
                    <div className="pl-4 border-l-2 border-green-200 dark:border-green-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Gotowy system do integracji</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        QonnectOne dostarcza kompletny, sprawdzony system transakcyjny, który jest gotowy do szybkiej integracji
                        z istniejącą platformą transakcyjną Instytucji Y. Eliminuje to potrzebę kosztownej i czasochłonnej budowy
                        własnych rozwiązań od zera, zgodnych z MiCA.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-green-200 dark:border-green-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Partnerstwo z licencjonowaną instytucją (depozytariuszem)</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        QonnectOne umożliwia partnerstwo z instytucją nadzorowaną, która już posiada odpowiednie licencje na działalność
                        jako depozytariusz aktywów cyfrowych oraz dysponuje wymaganym systemem transakcyjnym. Dzięki temu Instytucja Y
                        może prowadzić swoją działalność pod &quot;parasolem&quot; licencjonowanego partnera.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-green-200 dark:border-green-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Utrzymanie dotychczasowej działalności</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Kluczową korzyścią jest możliwość kontynuowania działalności operacyjnej i obsługi swoich obecnych klientów
                        bez konieczności wstrzymywania operacji w oczekiwaniu na własną licencję MiCA. Pozwala to na utrzymanie
                        płynności finansowej i unikanie utraty bazy klientów.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-green-200 dark:border-green-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Spokojne procedowanie własnej licencji</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Partnerstwo z QonnectOne daje Instytucji Y niezbędny czas i przestrzeń na spokojne i dokładne procedowanie
                        własnego wniosku o licencję MiCA, bez presji czasowej wynikającej z zagrożenia wstrzymaniem działalności.
                        Firma może skoncentrować się na spełnianiu wszystkich wymogów, mając pewność, że jej operacje są zabezpieczone.
                      </p>
                    </div>

                    <div className="pl-4 border-l-2 border-green-200 dark:border-green-700">
                      <h4 className="font-medium text-gray-900 dark:text-white">Minimalizacja ryzyka biznesowego</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Dzięki temu rozwiązaniu, Instytucja Y znacząco minimalizuje ryzyko związane z niepewnością procesu licencyjnego
                        oraz potencjalną blokadą działalności, chroniąc swoje przychody i pozycję na rynku.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Kluczowe rezultaty:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">100%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Ciągłość działalności operacyjnej</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Zabezpieczone</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Przychody i pozycja rynkowa</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">Bez presji</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Procedowanie własnej licencji MiCA</div>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">Pełna zgodność</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Z regulacjami od pierwszego dnia</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Podsumowanie</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Dla Instytucji Nadzorowanej Y, stojącej przed wyzwaniem uzyskania licencji MiCA, partnerstwo z QonnectOne stanowi
                    strategiczne i niezbędne rozwiązanie. Umożliwia ono utrzymanie ciągłości działalności operacyjnej i obsługi klientów
                    w okresie przejściowym, jednocześnie pozwalając na spokojne i skuteczne procedowanie własnego wniosku licencyjnego.
                    QonnectOne dostarcza gotowy system i dostęp do licencjonowanego partnera, co pozwala Instytucji Y na płynne przejście
                    przez transformację regulacyjną, zabezpieczenie pozycji rynkowej i minimalizację ryzyka finansowego oraz operacyjnego.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Potrzebujesz podobnego rozwiązania?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Skontaktuj się z nami, aby omówić jak QonnectOne może przyspieszyć rozwój Twojej instytucji finansowej
                i pomóc w spełnieniu wymogów regulacyjnych.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Umów konsultację
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
