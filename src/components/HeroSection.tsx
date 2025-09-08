export default function HeroSection() {
  return (
    <section className="text-white hero-bg from-primary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 tracking-tight">Qonnect One</h1>
          <h2 className="text-2xl md:text-3xl font-montserrat font-semibold mb-8 text-gray-200">Odblokuj potencjał biznesowy i zarabiaj więcej</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Qonnect One to rewolucyjna platforma dla domów maklerskich, firm pożyczkowych, ubezpieczycieli, giełd
            kryptowalut, funduszów inwestycyjnych, oraz wszystkich instytucji nadzorowanych.
          </p>

          {/* Key Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <i className="fas fa-check-circle text-green-400 text-xl mr-3 flex-shrink-0"></i>
              <span className="font-inter">Spełniaj wymogi instytucji nadzorowanych</span>
            </div>
            <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <i className="fas fa-check-circle text-green-400 text-xl mr-3 flex-shrink-0"></i>
              <span className="font-inter">Pozyskuj partnerów i korzystaj z ich licencji i produktów</span>
            </div>
            <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <i className="fas fa-check-circle text-green-400 text-xl mr-3 flex-shrink-0"></i>
              <span className="font-inter">Realizuj wszystkie metody płatności</span>
            </div>
            <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <i className="fas fa-check-circle text-green-400 text-xl mr-3 flex-shrink-0"></i>
              <span className="font-inter">Automatyzuj proces obsługi klientów</span>
            </div>
            <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <i className="fas fa-check-circle text-green-400 text-xl mr-3 flex-shrink-0"></i>
              <span className="font-inter">Korzystaj ze wsparcia IT</span>
            </div>
            <div className="flex items-center text-left bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <i className="fas fa-check-circle text-green-400 text-xl mr-3 flex-shrink-0"></i>
              <span className="font-inter">Przeciwdziałaj praniu brudnych pieniędzy (AML)</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="cursor-pointer bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition font-inter text-lg">
              Sprawdź platformę <i className="fas fa-arrow-right ml-2"></i>
            </button>
            <button
              className="cursor-pointer bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition font-inter text-lg"
            >
              Zobacz demo <i className="fas fa-play-circle ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
