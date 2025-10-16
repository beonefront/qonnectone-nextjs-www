import Link from "next/link";
import { PrimaryButton } from "./ui/PrimaryButton";
import FadeIn from "./animations/FadeIn";
import StaggerContainer from "./animations/StaggerContainer";

export default function PricingSection() {
  return (
    <section id="pricing">
      <div className="bg-primary/5">
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <FadeIn>
            <div className="text-center space-y-4 pb-12 mx-auto">
              <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
                MODELE WSPÓŁPRACY
              </h2>
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                Sprawdź dostępne modele współpracy
              </h3>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Model SaaS */}
            <div>
              <div className="rounded-2xl flex flex-col justify-between border border-gray-300 p-8 bg-background text-center hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <span className="text-3xl">☁️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Model SaaS</h3>
                  <p className="text-muted-foreground">
                    Wygodne rozwiązanie w chmurze
                  </p>
                </div>
                <Link href="/modele-wspolpracy" className="mt-4 inline-block">
                  <PrimaryButton>Czytaj więcej</PrimaryButton>
                </Link>
              </div>
            </div>

            {/* Model Licencyjny */}
            <div>
              <div className="rounded-2xl flex flex-col justify-between border border-gray-300 p-8 bg-background text-center hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Model Licencyjny</h3>
                  <p className="text-muted-foreground">
                    Pełna kontrola nad systemem
                  </p>
                </div>
                <Link href="/modele-wspolpracy" className="mt-4 inline-block">
                  <PrimaryButton>Czytaj więcej</PrimaryButton>
                </Link>
              </div>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
