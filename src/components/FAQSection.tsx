import Link from "next/link";
import FadeIn from "./animations/FadeIn";
import StaggerContainer from "./animations/StaggerContainer";

export default function FAQSection() {
  return (
    <section id="faq">
      <div>
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <FadeIn>
            <div className="text-center space-y-4 pb-12 mx-auto">
              <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">FAQ</h2>
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">3 KLUCZOWE PYTANIA</h3>
            </div>
          </FadeIn>

          <StaggerContainer className="max-w-4xl mx-auto space-y-8">
            {/* Question 1 */}
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  1. Dlaczego właśnie Qonnect?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Ponieważ oferta dopasowana jest do konkretnych wymagań Twojej firmy. Nasi programiści są w stanie szybko dopasować fragmenty aplikacji do twojej branży oraz indywidualnych wymagań.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  2. Dlaczego korzystać z zewnętrznego partnera zamiast własnego systemu?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Prace nad dedykowanym systemem informatycznym to koszty oraz ryzyko. Z nami jesteś w stanie zrobić to w rekordowym czasie, wyprzedzić konkurencję i korzystać z benefitów dopracowanego już systemu.
                </p>
              </div>
            </div>

            {/* Question 3 */}
            <div>
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  3. Czym jest aplikacja SAAS?
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Aplikacja SaaS (Software as a Service) to oprogramowanie udostępniane użytkownikom przez Internet w modelu abonamentowym. Nie wymaga instalacji na komputerze – korzystasz z niego przez przeglądarkę. Wszystkie dane i aktualizacje są utrzymywane w chmurze przez dostawcę usługi.
                </p>
              </div>
            </div>
          </StaggerContainer>

          {/* Case Studies Section */}
          <FadeIn>
            <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-4">
                Poznaj <b>realne historie naszych klientów</b> i zobacz, jak dzięki <b>naszej platformie</b> zwiększyli efektywność i zyski.
              </p>
              <Link href="/business-cases" passHref>
                <button className="rounded-md text-sm font-medium transition-all outline-none focus-visible:border-ring bg-primary shadow-xs hover:bg-primary/90 h-9 px-4 py-2 text-background cursor-pointer">
                  Przeczytaj Bussiness Cases
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

