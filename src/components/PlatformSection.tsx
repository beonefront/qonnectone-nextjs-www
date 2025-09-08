export default function PlatformSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="platform-card text-white rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Zyskaj pewność opłacalnej decyzji</h2>
              <p className="text-gray-200 mb-6">
                Poznaj historie sukcesu naszych klientów i przekonaj się, jak nasze rozwiązania przyniosły im wymierne korzyści.
              </p>
              <p className="text-gray-200 mb-8">Odkryj, jak firmy z różnych branż zwiększyły swoją efektywność i rentowność dzięki naszej platformie.</p>
              <button className="bg-black text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">Przeczytaj Case Studies</button>
            </div>
            <div className="md:w-1/2 bg-gray-800 flex items-center justify-center p-8">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
                <div className="relative bg-gray-700 rounded-xl p-6 w-64">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-lg font-bold">POST/COM BE</div>
                    <i className="fas fa-share-alt text-primary"></i>
                  </div>
                  <div className="bg-gray-600 rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-300">API Platform</div>
                    <div className="font-medium">The complete solution</div>
                  </div>
                  <div className="text-sm text-gray-400">
                    The platform is the virtual platform that provides the new tools and services to the client.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
