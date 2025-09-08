export default function TrustedCompaniesSection() {
  return (
    <section className="pt-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 tracking-tight">PARTNERZY</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter leading-relaxed">
            Zobacz kto nam zaufał i dołącz do ponad 30 firm z którymi współpracujemy
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
          <div className="flex items-center justify-center h-16">
            <div className="text-2xl font-bold text-gray-400">Spotify</div>
          </div>
          <div className="flex items-center justify-center h-16">
            <div className="text-2xl font-bold text-gray-400">Netflix</div>
          </div>
          <div className="flex items-center justify-center h-16">
            <div className="text-2xl font-bold text-gray-400">Uber</div>
          </div>
          <div className="flex items-center justify-center h-16">
            <div className="text-2xl font-bold text-gray-400">Airbnb</div>
          </div>
          <div className="flex items-center justify-center h-16">
            <div className="text-2xl font-bold text-gray-400">Tesla</div>
          </div>
          <div className="flex items-center justify-center h-16">
            <div className="text-2xl font-bold text-gray-400">Discord</div>
          </div>
        </div>
      </div>
    </section>
  );
}
