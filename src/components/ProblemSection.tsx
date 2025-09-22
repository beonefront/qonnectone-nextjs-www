export default function ProblemSection() {
  return (
    <section id="problem">
      <div>
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center space-y-4 pb-6 mx-auto">
            <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">Problem</h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">Problemy, które rozwiązujemy</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px)" }}>
              <div data-slot="card" className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 bg-background border-none shadow-none">
                <div data-slot="card-content" className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-6 h-6 text-primary"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-6 h-6 text-primary"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6 text-primary"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-6 h-6 text-primary"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-6 h-6 text-primary"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6 text-primary"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
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
