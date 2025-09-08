import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Moduły | Qonnect',
  description: 'Odkryj funkcjonalne moduły systemu Qonnect',
};

export default function ModulyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="text-white hero-bg from-primary">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 tracking-tight">
              Funkcje i moduły Qonnect One
            </h1>
            <p className="text-xl md:text-2xl font-montserrat font-medium mb-8 text-gray-200">
              Kompleksowe narzędzia dla nadzorowanych instytucji finansowych
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto font-inter leading-relaxed">
              Nasza zintegrowana platforma obejmuje szereg zaawansowanych modułów, które wspierają kluczowe obszary działalności operacyjnej i regulacyjnej. Tym samym QONNECT zapewnia płynne funkcjonowanie, zgodność, wydajność oraz wymierne zyski.
            </p>

            {/* Key Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 max-w-5xl mx-auto">
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-credit-card text-blue-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Moduł płatności</span>
              </div>
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-chart-line text-green-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Analityka i raporty</span>
              </div>
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-plug text-yellow-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Integracje API</span>
              </div>
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-shield-alt text-purple-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Bezpieczeństwo i AML</span>
              </div>
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-users text-orange-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Zarządzanie klientami</span>
              </div>
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-cogs text-indigo-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Automatyzacja procesów</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="cursor-pointer bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition font-inter">
                Poznaj moduły <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button className="cursor-pointer bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition font-inter">
                Konfiguracja <i className="fas fa-cog ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 dark:text-white mb-4">
                Zaawansowane moduły systemu
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Kompleksowe rozwiązania dostosowane do potrzeb instytucji finansowych
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* AML/KYC Module */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="fas fa-user-shield text-red-600 dark:text-red-400 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-gray-900 dark:text-white mb-4">
                      Moduł AML / KYC
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Automatyzuje procesy weryfikacji tożsamości klientów.</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Monitoruje transakcje pod kątem podejrzanych aktywności.</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Zapewnia pełną zgodność z przepisami AML/CFT, minimalizując ryzyko prawne i operacyjne.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Transaction Module */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="fas fa-exchange-alt text-blue-600 dark:text-blue-400 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-gray-900 dark:text-white mb-4">
                      Moduł transakcyjny
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Zapewnia płynną i bezpieczną komunikację z dostawcami płatniczymi.</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Umożliwia efektywne przetwarzanie transakcji finansowych.</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Skraca czas operacji i zwiększa niezawodność procesów płatniczych.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Crypto Module */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="fab fa-bitcoin text-yellow-600 dark:text-yellow-400 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-gray-900 dark:text-white mb-4">
                      Moduł Krypto
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Umożliwia kompleksową obsługę operacji związanych z aktywami cyfrowymi.</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Pozwala na bezpieczne depozyty i wypłaty kryptowalut, sprawną wymianę walut cyfrowych oraz generowanie i zarządzanie portfelami dla klientów.</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Zapewnia zgodność z normami bezpieczeństwa i regulacjami dotyczącymi kryptoaktywów.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Accounting Module */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="fas fa-calculator text-green-600 dark:text-green-400 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-gray-900 dark:text-white mb-4">
                      Moduł księgowy
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Umożliwia kompleksowe rozliczania transakcji.</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Ułatwia integrację z zewnętrznymi systemami księgowymi oraz generowania szczegółowych raportów finansowych.</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Usprawnia zarządzanie finansami i ułatwia audyty.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Administrative Module */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="fas fa-users-cog text-purple-600 dark:text-purple-400 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-gray-900 dark:text-white mb-4">
                      Moduł administracyjny
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Ułatwia intuicyjne zarządzanie bazą danych klientów fizycznych i instytucjonalnych.</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Umożliwia efektywną rejestrację, segmentację, obsługę zgłoszeń oraz personalizację komunikacji.</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Znacząco poprawia satysfakcję klientów.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Backoffice Module */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <i className="fas fa-desktop text-indigo-600 dark:text-indigo-400 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-gray-900 dark:text-white mb-4">
                      Moduł Backoffice
                    </h3>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>To centralny punkt kontroli i zarządzania wszystkimi aspektami platformy.</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Zapewnia pełną transparentność operacyjną, monitoring transakcji.</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Ułatwia zarządzanie użytkownikami i wszelkie usprawnienia.</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                        <span>Wspiera pracę działów supportu i księgowości.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* API/Plugin Module */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-700">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <i className="fas fa-plug text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-montserrat font-bold text-gray-900 dark:text-white mb-4">
                    Moduł API / Plugin dla Sklepów E-Commerce
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    Oferujemy ponadto elastyczne narzędzia integracyjne, które umożliwiają szybkie i bezproblemowe połączenie z
                    dowolną platformą e-commerce naszych Partnerów za pomocą zaawansowanego REST API oraz dedykowanych pluginów.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Payment Methods */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Sprawdź dostępne metody płatności
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Poznaj wszystkie modele współpracy i metody płatności dostosowane do Twojego biznesu
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <i className="fas fa-sync-alt text-3xl mb-4 text-blue-200"></i>
                <h3 className="font-montserrat font-semibold mb-2">Model Subskrypcyjny</h3>
                <p className="text-blue-100 text-sm">Elastyczne płatności miesięczne lub roczne</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <i className="fas fa-cloud text-3xl mb-4 text-blue-200"></i>
                <h3 className="font-montserrat font-semibold mb-2">Model SaaS</h3>
                <p className="text-blue-100 text-sm">Wygodne rozwiązanie w chmurze</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <i className="fas fa-certificate text-3xl mb-4 text-blue-200"></i>
                <h3 className="font-montserrat font-semibold mb-2">Model Licencyjny</h3>
                <p className="text-blue-100 text-sm">Pełna kontrola nad systemem</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="/metody-platnosci" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
                <i className="fas fa-credit-card mr-2"></i>
                Zobacz metody płatności
              </a>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                <i className="fas fa-phone mr-2"></i>
                Skontaktuj się z nami
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
