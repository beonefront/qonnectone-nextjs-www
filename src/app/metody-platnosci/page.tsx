import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Metody płatności | Qonnect',
  description: 'Poznaj dostępne metody płatności w systemie Qonnect',
};

export default function MetodyPlatnosciPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="text-white hero-bg from-primary">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 tracking-tight">
              Modele i metody płatności
            </h1>
            <p className="text-xl md:text-2xl font-montserrat font-medium mb-8 text-gray-200">
              Dopasuj model i metodę płatności do indywidualnych potrzeb swojego biznesu
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto font-inter leading-relaxed">
              Doskonale rozumiemy, że każda biznes ma unikalne potrzeby i strategię rozwoju. Właśnie dlatego oferujemy nasze innowacyjne systemy informatyczne w elastycznych modelach, które idealnie dopasowują się do Twoich wymagań, infrastruktury oraz budżetu.
            </p>

            {/* Key Payment Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-credit-card text-blue-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Karty płatnicze</span>
              </div>
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-mobile-alt text-green-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">BLIK i płatności mobilne</span>
              </div>
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-university text-yellow-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Przelewy bankowe</span>
              </div>
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-wallet text-purple-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Portfele cyfrowe</span>
              </div>
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-coins text-orange-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Kryptowaluty</span>
              </div>
              <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="fas fa-receipt text-indigo-300 text-xl mr-3 flex-shrink-0"></i>
                <span className="font-inter">Płatności ratalne</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="cursor-pointer bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition font-inter">
                Sprawdź integrację <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button className="cursor-pointer bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition font-inter">
                Dokumentacja API <i className="fas fa-code ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Models Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 dark:text-white mb-4">
                Modele współpracy
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Wybierz model, który najlepiej odpowiada potrzebom Twojego biznesu
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Model Subskrypcyjny */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-sync-alt text-blue-600 dark:text-blue-400 text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-gray-900 dark:text-white mb-2">
                    Model Subskrypcyjny
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  Uzyskaj natychmiastowy dostęp do naszych najnowszych funkcji i bieżących aktualizacji w ramach przewidywalnej opłaty miesięcznej lub rocznej. To idealne rozwiązanie dla firm, które cenią sobie elastyczność, skalowalność i minimalizację kosztów początkowych.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Natychmiastowy dostęp</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Regularne aktualizacje</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Przewidywalne koszty</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Elastyczność i skalowalność</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition">
                  Dowiedz się więcej
                </button>
              </div>

              {/* Model SaaS */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border-2 border-blue-500 hover:shadow-lg transition-shadow relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Najpopularniejszy
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-cloud text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-gray-900 dark:text-white mb-2">
                    Model SaaS
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  Postaw na wygodę i efektywność, korzystając z naszych rozwiązań jako usługi w chmurze. Eliminuje potrzebę instalacji, utrzymania i zarządzania infrastrukturą IT. My zajmiemy się bezpieczeństwem, dostępnością i wydajnością, a Ty możesz skupić się wyłącznie na rozwoju swojego biznesu płatniczego.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Brak instalacji i utrzymania</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Bezpieczeństwo w chmurze</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Wysoka dostępność</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Koncentracja na biznesie</span>
                  </div>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition">
                  Rozpocznij teraz
                </button>
              </div>

              {/* Model Licencyjny */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-certificate text-purple-600 dark:text-purple-400 text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-gray-900 dark:text-white mb-2">
                    Model Licencyjny
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  Jeśli preferujesz pełną kontrolę nad oprogramowaniem i chcesz dostosować system do specyficznych procesów wewnętrznych swojej organizacji, model licencyjny jest dla Ciebie. Nabycie licencji daje Ci swobodę integracji z istniejącą infrastrukturą IT.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Pełna kontrola systemu</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Dostosowanie do procesów</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Integracja z IT</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Własność licencji</span>
                  </div>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition">
                  Skontaktuj się
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
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

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                <i className="fas fa-comments mr-2"></i>
                Rozpocznij rozmowę
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                <i className="fas fa-download mr-2"></i>
                Pobierz cennik
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
