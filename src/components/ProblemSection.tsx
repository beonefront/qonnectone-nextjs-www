import { ShieldCheck, Network, CreditCard, Bot, Headphones, ShieldAlert } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problem">
      <div className="bg-blue-50 transition-colors duration-300">
        <div className="relative container mx-auto px-4 py-32 pt-16 max-w-7xl">
          <div className="text-center space-y-4 pb-6 mx-auto">
            <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">Problem</h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">Problemy, które rozwiązujemy</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 mt-12">
            <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px)" }}>
              <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
                <div data-slot="card-content" className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Spełniaj wymogi instytucji nadzorowanych</h3>
                  <p className="text-muted-foreground">Zapewnij zgodność z regulacjami KNF i UE bez zbędnej papierologii oraz opóźnień.</p>
                </div>
              </div>
            </div>

            <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px)" }}>
              <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
                <div data-slot="card-content" className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Pozyskuj partnerów i korzystaj z ich licencji i produktów</h3>
                  <p className="text-muted-foreground">Szybko łącz się z partnerami i wykorzystuj ich licencje, API oraz produkty w jednym ekosystemie.</p>
                </div>
              </div>
            </div>

            <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px)" }}>
              <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
                <div data-slot="card-content" className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Realizuj wszystkie metody płatności</h3>
                  <p className="text-muted-foreground">Obsługuj karty, przelewy, pay‑by‑link, BLIK i portfele w jednym, spójnym procesie.</p>
                </div>
              </div>
            </div>

            <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px)" }}>
              <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
                <div data-slot="card-content" className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Automatyzuj proces obsługi klientów</h3>
                  <p className="text-muted-foreground">Usprawnij onboarding, KYC, rozliczenia i komunikację, redukując ręczną pracę zespołu.</p>
                </div>
              </div>
            </div>

            <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px)" }}>
              <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
                <div data-slot="card-content" className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Korzystaj ze wsparcia IT</h3>
                  <p className="text-muted-foreground">Korzystaj z pomocy ekspertów przy integracjach, bezpieczeństwie oraz utrzymaniu systemów.</p>
                </div>
              </div>
            </div>

            <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px)" }}>
              <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
                <div data-slot="card-content" className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldAlert className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Przeciwdziałaj praniu brudnych pieniędzy (AML)</h3>
                  <p className="text-muted-foreground">Monitoruj transakcje, wykrywaj ryzyka i spełniaj obowiązki raportowe zgodnie z AML/CFT.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
