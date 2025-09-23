
import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Logo Section */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative">
            <Image
              src="/logo-white.png"
              alt="QonnectOne Logo"
              width={200}
              height={80}
              className="mx-auto mb-4 animate-pulse-slow"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-8 space-y-4 animate-fade-in-up animation-delay-300">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            QonnectOne
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-light">
            Przyszłość płatności finansowych
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg text-gray-300">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>

        {/* Status Message */}
        <div className="mb-12 animate-fade-in-up animation-delay-600">
          <div className="inline-flex items-center space-x-3 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 px-6 py-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            <span className="text-blue-200 font-medium">Już wkrótce...</span>
          </div>
        </div>

        {/* Countdown Timer */}
        {/* <div className="mb-12 animate-fade-in-up animation-delay-900">
          <h2 className="text-2xl font-semibold mb-6 text-gray-200">Premiera za:</h2>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400">{timeLeft.days}</div>
              <div className="text-sm text-gray-300">Dni</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400">{timeLeft.hours}</div>
              <div className="text-sm text-gray-300">Godzin</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-300">Minut</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-300">Sekund</div>
            </div>
          </div>
        </div> */}

        {/* Features Preview */}
        <div className="mb-12 animate-fade-in-up animation-delay-1200">
          <h3 className="text-xl font-semibold mb-6 text-gray-200">Przygotowujemy dla Ciebie:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-blue-200 mb-2">Moduł AML/KYC</h4>
              <p className="text-sm text-gray-400">Zaawansowana weryfikacja tożsamości</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-purple-200 mb-2">Płatności Crypto</h4>
              <p className="text-sm text-gray-400">Obsługa kryptowalut nowej generacji</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-green-200 mb-2">Zaawansowana Analityka</h4>
              <p className="text-sm text-gray-400">Inteligentne raportowanie w czasie rzeczywistym</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="animate-fade-in-up animation-delay-1500">
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Zostaw swój email, aby otrzymać powiadomienie o premierze i ekskluzywny dostęp do beta testów.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Twój adres email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Powiadom mnie
            </button>
          </div>
        </div> */}

        {/* Footer */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-1800">
          <p className="text-gray-400 text-sm">
            © 2025 QonnectOne. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </div>
  );
}
