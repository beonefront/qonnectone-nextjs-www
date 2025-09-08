export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8 tracking-tight text-gray-900 dark:text-white">

          </h2> */}

        {/* Header */}
        <div className="text-center w-full mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 tracking-tight">
              SZYBKO, <span className="text-primary">BEZPIECZNIE</span> I ZGODNIE Z PRAWEM
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-inter leading-relaxed">
            Obsługuj wszystkie procesy bez inwestycji w rozbudowę systemu IT
          </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Kafelek 1 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-inter text-center leading-relaxed">
                <strong>Integruje technologicznie</strong><br />
                sektor finansowy
              </p>
            </div>

            {/* Kafelek 2 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-inter text-center leading-relaxed">
                <strong>Umożliwia obsługę</strong><br />
                wszystkich procesów
              </p>
            </div>

            {/* Kafelek 3 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-inter text-center leading-relaxed">
                <strong>Dostępna w modelach</strong><br />
                licencyjnym, subskrypcyjnym i SAAS
              </p>
            </div>

            {/* Kafelek 4 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg mb-4 mx-auto">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-inter text-center leading-relaxed">
                <strong>Spełnia wymagania</strong><br />
                regulacyjne DORA, RODO/GDPR, AML/CFT
              </p>
            </div>

            {/* Kafelek 5 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg mb-4 mx-auto">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-inter text-center leading-relaxed">
                <strong>Spełnia wymogi</strong><br />
                instytucji nadzorczych w Polsce i UE
              </p>
            </div>

            {/* Kafelek 6 */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg mb-4 mx-auto">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-inter text-center leading-relaxed">
                <strong>Zwiększa efektywność</strong><br />
                operacyjną i rentowność biznesu
              </p>
            </div>
          </div>
        </div>

        <video
          playsInline
          preload="metadata"
          src="https://voyager.postman.com/video/grow-with-postman/drastically-speed-up-api-development-by-reducing-collaboration-friction-video.mp4"
          poster=""
          autoPlay
          loop
          muted
        ></video>
      </div>
    </section>
  );
}
