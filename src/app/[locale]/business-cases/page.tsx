import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { Zap, Shield, DollarSign, Scale, Building, AlertTriangle, Clock, TrendingDown, MoreHorizontal, CheckCircle, Users, Lock, ChevronDown } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.businessCases' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [{ url: 'https://qonnectone.com/logo.png', width: 1200, height: 630, alt: t('title') }],
      locale: locale === 'pl' ? 'pl_PL' : locale === 'en' ? 'en_US' : 'uk_UA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['https://qonnectone.com/logo.png'],
    },
    alternates: {
      canonical: `https://qonnectone.com/${locale === 'pl' ? '' : locale + '/'}business-cases`,
      languages: {
        'pl': 'https://qonnectone.com/business-cases',
        'en': 'https://qonnectone.com/en/business-cases',
        'uk': 'https://qonnectone.com/ua/business-cases',
      },
    },
  };
}

export default async function BusinessCasesPage({ params }: Props) {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />

      {/* Hero Section */}
      <section id="hero">
        <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 md:pb-16 lg:px-8">
          <div className="flex w-full max-w-2xl flex-col space-y-4 overflow-hidden pt-8">
            <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">Business</span>
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">Cases</span>
            </h1>
            <p className="mx-auto max-w-2xl text-center text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 text-balance">
              Odkryj, jak nasze rozwiązania pomagają w przyspieszeniu wzrostu, minimalizacji ryzyka i spełnieniu wymogów regulacyjnych w różnych sektorach.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-6 max-w-3xl">
              <div className="flex items-center text-left bg-blue-50 border border-blue-100 rounded-lg p-4 hover:bg-blue-100 transition-colors">
                <Zap className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <span className="font-inter text-gray-700">Szybkie wejście na rynek</span>
              </div>
              <div className="flex items-center text-left bg-green-50 border border-green-100 rounded-lg p-4 hover:bg-green-100 transition-colors">
                <Shield className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                <span className="font-inter text-gray-700">Minimalizacja ryzyka awarii i błędów</span>
              </div>
              <div className="flex items-center text-left bg-yellow-50 border border-yellow-100 rounded-lg p-4 hover:bg-yellow-100 transition-colors">
                <DollarSign className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
                <span className="font-inter text-gray-700">Redukcja kosztów operacyjnych</span>
              </div>
              <div className="flex items-center text-left bg-purple-50 border border-purple-100 rounded-lg p-4 hover:bg-purple-100 transition-colors">
                <Scale className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                <span className="font-inter text-gray-700">Zgodność z regulacjami</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="bg-neutral-100">
        <div className="relative container mx-auto px-4 pb-22 max-w-7xl">
          <div className="text-center space-y-4 pb-6 pt-28 mx-auto">
            <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">BUSINESS CASES</h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              Przykładowe scenariusze użycia
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-foreground/70 text-lg text-center">
              Korzyści i wymierne rezultaty biznesowe uzyskane dzięki naszym rozwiązaniom
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Case Study 1 Details */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                    <Building className="w-4 h-4 mr-1" />
                    Instytucje płatnicze
                  </div>
                  <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
                    Rozszerzenie Oferty Płatniczej dla Krajowej Instytucji Płatniczej X
                  </h2>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Wprowadzenie */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Wprowadzenie</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Krajowa Instytucja Płatnicza (KIP) X, posiadająca zezwolenie na świadczenie usług przekazu pieniężnego,
                    stoi przed strategiczną decyzją o rozszerzeniu swojej oferty o nowe, kluczowe produkty, takie jak karty płatnicze
                    i konta IBAN dla swoich klientów. Tradycyjna ścieżka rozwoju wiąże się z szeregiem wyzwań, w tym długotrwałym
                    procesem licencyjnym, znacznymi inwestycjami finansowymi i operacyjnymi.
                  </p>
                </div>

                {/* Wyzwania */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Wyzwania tradycyjnego podejścia &quot;build from scratch&quot;</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Złożony proces licencyjny</div>
                        <div className="text-sm text-gray-600">Złożenie wniosku o rozszerzenie licencji na nowe produkty to proces wymagający przygotowania obszernej dokumentacji i weryfikacji zgodności z określonymi regulacjami. Czas jego realizacji może wynosić nawet kilkanaście miesięcy.</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Znaczące nakłady finansowe</div>
                        <div className="text-sm text-gray-600">Budowa własnego systemu transakcyjnego od podstaw, integracja z różnymi dostawcami (banki, schematy kartowe, dostawcy usług AML/KYC) oraz zatrudnienie wyspecjalizowanego zespołu.</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Wysokie ryzyko biznesowe i operacyjne</div>
                        <div className="text-sm text-gray-600">Złożoność projektu, potencjalne opóźnienia w procesie licencyjnym i budowie systemu, a także brak gwarancji sukcesu rynkowego dla nowych produktów.</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MoreHorizontal className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Brak elastyczności</div>
                        <div className="text-sm text-gray-600">Raz zbudowany system może być trudny do adaptacji w obliczu zmieniających się wymagań rynkowych czy regulacyjnych.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rozwiązanie */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Rozwiązanie: Partnerstwo z QonnectOne</h3>
                  <p className="text-gray-600 text-sm mb-3">QonnectOne oferuje alternatywne podejście, które pozwala KIP X na szybkie i efektywne skalowanie biznesu, omijając większość wymienionych wyżej wyzwań:</p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Gotowy do integracji system transakcyjny</div>
                        <div className="text-sm text-gray-600">QonnectOne dostarcza kompletny, sprawdzony system informatyczny, który jest gotowy do integracji z istniejącą stroną transakcyjną KIP X.</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Partnerstwo z licencjonowaną instytucją</div>
                        <div className="text-sm text-gray-600">QonnectOne współpracuje z instytucjami nadzorowanymi, które posiadają już niezbędne, rozszerzone licencje na obsługę kart i kont IBAN. Współpraca odbywa się w modelu Payments as a Service (PaaS) w formule outsourcingu.</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Zap className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Szybkie wejście na rynek (Time-to-Market)</div>
                        <div className="text-sm text-gray-600">Integracja z QonnectOne pozwala na znaczne skrócenie czasu potrzebnego na uruchomienie nowych produktów z miesięcy do tygodni.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rezultaty */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kluczowe rezultaty</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">4-6 tygodni</div>
                    <div className="text-sm text-gray-600">Time-to-Market</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">70%</div>
                    <div className="text-sm text-gray-600">Redukcja nakładów</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Minimalizacja</div>
                    <div className="text-sm text-gray-600">Ryzyka biznesowego</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600">Fokus na biznes</div>
                  </div>
                </div>
              </div>

              {/* Szczegółowe informacje - opcjonalnie ukryte */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                    <span>Więcej szczegółów o rozwiązaniu</span>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Dodatkowe korzyści z partnerstwa z QonnectOne:</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Minimalizacja kosztów i ryzyka:</strong> KIP X unika ogromnych początkowych nakładów finansowych związanych z budową systemu i procesem licencyjnym. Zamiast inwestycji w aktywa, model ten opiera się na kosztach operacyjnych (abonament, prowizje).</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Sprawdzenie modelu biznesowego:</strong> QonnectOne umożliwia KIP X szybkie i sprawne przetestowanie nowego modelu biznesowego na rzeczywistym rynku. Dzięki temu można weryfikować popyt, optymalizować procesy i zbierać cenne dane.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Skupienie na rozwoju biznesu:</strong> Współpraca z QonnectOne zwalnia KIP X z obciążeń technologicznych i regulacyjnych, pozwalając w pełni skupić się na pozyskiwaniu klientów, budowaniu marki i rozwijaniu relacji biznesowych.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Podsumowanie:</h4>
                      <p>
                        Dla Krajowej Instytucji Płatniczej X, dążącej do rozszerzenia swojej oferty o karty płatnicze i konta IBAN,
                        partnerstwo z QonnectOne stanowi strategiczne i optymalne rozwiązanie. Pozwala ono na znaczące skrócenie czasu
                        wejścia na rynek, redukcję nakładów finansowych i minimalizację ryzyka biznesowego i operacyjnego.
                        Zamiast złożonej i kosztownej drogi samodzielnego rozwoju, KIP X otrzymuje kompletne narzędzie informatyczne
                        i wsparcie licencjonowanego partnera, co umożliwia szybkie sprawdzenie i skalowanie nowego modelu biznesowego.
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </div>

            {/* Case Study 2 Details */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                    <DollarSign className="w-4 h-4 mr-1" />
                    Kryptowaluty i aktywa cyfrowe
                  </div>
                  <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
                    Ciągłość Działalności i Zgodność z MiCA dla Instytucji Kryptowalutowej Y
                  </h2>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Wprowadzenie */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Wprowadzenie</h3>
                  <p className="text-gray-600 leading-relaxed">
                    VASP, wpisany do rejestru, stoi w obliczu znaczących zmian regulacyjnych związanych z wejściem w życie MiCA (Markets in Crypto-Assets Regulation).
                    Nowe przepisy wymagają uzyskania odpowiednich zezwoleń dla kontynuacji działalności, co stwarza poważne wyzwania
                    operacyjne i strategiczne dla przedsiębiorstwa.
                  </p>
                </div>

                {/* Wyzwania */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Wyzwania związane z wdrożeniem MiCA</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Złożony proces licencyjny MiCA</div>
                        <div className="text-sm text-gray-600">Uzyskanie wymaganego zezwolenia to złożony proces, który może potrwać od kilku do kilkunastu miesięcy, wymagający kompleksowej dokumentacji i spełnienia określonych wymogów kapitałowych oraz operacyjnych.</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Lock className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Blokada działalności operacyjnej</div>
                        <div className="text-sm text-gray-600">Bez odpowiedniej licencji MiCA instytucja nie może kontynuować obsługi klientów w zakresie kryptoaktywów, co oznacza całkowite wstrzymanie przychodów z tego segmentu.</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <TrendingDown className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Ryzyko utraty pozycji rynkowej</div>
                        <div className="text-sm text-gray-600">Konkurenci, którzy szybciej uzyskają licencję MiCA lub mają alternatywne rozwiązania, mogą przejąć klientów i pozycję rynkową w czasie oczekiwania na licencję.</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <DollarSign className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Wysokie koszty compliance</div>
                        <div className="text-sm text-gray-600">Dostosowanie systemów, procesów i zespołu do wymogów MiCA wymaga znacznych inwestycji bez gwarancji uzyskania licencji.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rozwiązanie */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Rozwiązanie: Partnerstwo z QonnectOne</h3>
                  <p className="text-gray-600 text-sm mb-3">QonnectOne oferuje kompleksowe rozwiązanie, które pozwala na kontynuację działalności w okresie przejściowym:</p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Gotowy system zgodny z MiCA</div>
                        <div className="text-sm text-gray-600">Kompletny system transakcyjny już dostosowany do wymogów MiCA, gotowy do natychmiastowej integracji z infrastrukturą klienta.</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Partnerstwo z uprawnionym CASP</div>
                        <div className="text-sm text-gray-600">Współpraca z CASP posiadającymi już licencję zgodnie z MiCA, umożliwiająca działalność pod ich parasolem regulacyjnym (formuła outsourcingu).</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-900">Ciągłość działalności bez przerw</div>
                        <div className="text-sm text-gray-600">Kontynuacja obsługi klientów i generowania przychodów od pierwszego dnia wdrożenia rozwiązania.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rezultaty */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Kluczowe rezultaty</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600">Ciągłość działalności</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Zabezpieczone</div>
                    <div className="text-sm text-gray-600">Przychody i pozycja</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Bez presji</div>
                    <div className="text-sm text-gray-600">Własna licencja MiCA</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-1">Pełna zgodność</div>
                    <div className="text-sm text-gray-600">Od pierwszego dnia</div>
                  </div>
                </div>
              </div>

              {/* Szczegółowe informacje - opcjonalnie ukryte */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                    <span>Więcej szczegółów o rozwiązaniu</span>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-4 text-gray-600 leading-relaxed space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Kluczowe korzyści z partnerstwa w kontekście MiCA:</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Zabezpieczenie ciągłości biznesowej:</strong> Instytucja Y może kontynuować obsługę swoich klientów kryptowalutowych bez przerwy, zachowując przychody i relacje biznesowe w czasie oczekiwania na własną licencję MiCA.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Brak presji czasowej:</strong> Możliwość spokojnego przygotowania i złożenia wysokiej jakości wniosku licencyjnego bez presji związanej z utratą przychodów czy pozycji rynkowej.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Przewaga konkurencyjna:</strong> Podczas gdy konkurenci mogą zmagać się z przerwami w działalności, Instytucja Y utrzymuje pełną operacyjność i może nawet pozyskać nowych klientów.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span><strong>Redukcja ryzyka regulacyjnego:</strong> Działalność pod licencją doświadczonego partnera minimalizuje ryzyko naruszeń przepisów MiCA i zapewnia pełną zgodność od pierwszego dnia.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Strategiczne znaczenie rozwiązania:</h4>
                      <p>
                        Dla Instytucji Nadzorowanej Y, stojącej przed wyzwaniem wdrożenia MiCA, partnerstwo z QonnectOne stanowi
                        nie tylko rozwiązanie przejściowe, ale strategiczny element długoterminowej strategii biznesowej.
                        Umożliwia ono utrzymanie konkurencyjności w kluczowym momencie transformacji regulacyjnej sektora kryptowalut,
                        jednocześnie zapewniając spokój i stabilność finansową niezbędną do skutecznego uzyskania własnej licencji MiCA.
                      </p>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />

      <Footer />
    </div>
  );
}
