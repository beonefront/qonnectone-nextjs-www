export default function SolutionSection() {
  return (
    <section id="solution">
      <div className="bg-neutral-100">
        <div className="relative container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center space-y-4 pb-6 mx-auto">
            <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">FUNKCJE I MODUŁY</h2>
            <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
              Narzędzia dla firm i nadzorowanych instytucji finansowych
            </h3>
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
              Nasza zintegrowana platforma obejmuje szereg zaawansowanych modułów, które wspierają kluczowe obszary działalności operacyjnej i regulacyjnej. Tym samym QonnectOne zapewnia płynne funkcjonowanie, zgodność, wydajność oraz wymierne zyski.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl hover:bg-red-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Moduł AML / KYC</h3>
                <p className="text-foreground">
                  Automatyzuje procesy weryfikacji tożsamości klientów i monitoruje transakcje pod kątem podejrzanych aktywności. Zapewnia pełną zgodność z przepisami AML/CFT, minimalizując ryzyko prawne i operacyjne.
                </p>
              </div>
              <svg
                width="1203"
                height="753"
                viewBox="0 0 1203 753"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
              >
                <g clipPath="url(#path0)">
                  <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white"></path>
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#F5F5F5"></path>
                  <g className="mix-blend-luminosity">
                    <path d="M566.269 32.0852H572.426C573.277 32.0852 573.696 31.6663 573.696 30.7395V25.9851C573.696 25.1472 573.353 24.7219 572.642 24.6521V23.0842C572.642 20.6721 571.036 19.5105 569.348 19.5105C567.659 19.5105 566.053 20.6721 566.053 23.0842V24.6711C565.393 24.7727 565 25.1917 565 25.9851V30.7395C565 31.6663 565.418 32.0852 566.269 32.0852ZM567.272 22.97C567.272 21.491 568.211 20.6785 569.348 20.6785C570.478 20.6785 571.423 21.491 571.423 22.97V24.6394L567.272 24.6458V22.97Z" fill="#A3A3A3"></path>
                  </g>
                  <g className="mix-blend-luminosity">
                    <text x="580" y="30" fill="#A3A3A3" fontSize="12" fontFamily="Arial, sans-serif">
                      https://acme.ai
                    </text>
                  </g>
                  <image href="/modules/aml.png" width="1200" height="750" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom)"></image>
                </g>
                <defs>
                  <clipPath id="path0">
                    <rect width="1203" height="753" fill="white"></rect>
                  </clipPath>
                  <clipPath id="roundedBottom">
                    <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
            </div>

            {/* Card 2 */}
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl order-3 xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Moduł transakcyjny</h3>
                <p className="text-foreground">
                  Zapewnia płynną i bezpieczną komunikację z dostawcami płatniczymi oraz efektywne przetwarzanie transakcji finansowych. Skraca czas operacji i zwiększa niezawodność procesów płatniczych.
                </p>
              </div>
              <svg
                width="1203"
                height="753"
                viewBox="0 0 1203 753"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
              >
                <g clipPath="url(#path0)">
                  <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white"></path>
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#F5F5F5"></path>
                  <g className="mix-blend-luminosity">
                    <path d="M566.269 32.0852H572.426C573.277 32.0852 573.696 31.6663 573.696 30.7395V25.9851C573.696 25.1472 573.353 24.7219 572.642 24.6521V23.0842C572.642 20.6721 571.036 19.5105 569.348 19.5105C567.659 19.5105 566.053 20.6721 566.053 23.0842V24.6711C565.393 24.7727 565 25.1917 565 25.9851V30.7395C565 31.6663 565.418 32.0852 566.269 32.0852ZM567.272 22.97C567.272 21.491 568.211 20.6785 569.348 20.6785C570.478 20.6785 571.423 21.491 571.423 22.97V24.6394L567.272 24.6458V22.97Z" fill="#A3A3A3"></path>
                  </g>
                  <g className="mix-blend-luminosity">
                    <text x="580" y="30" fill="#A3A3A3" fontSize="12" fontFamily="Arial, sans-serif">
                      https://acme.ai
                    </text>
                  </g>
                  <image href="/modules/transactions.png" width="1650" height="1200" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom)"></image>
                </g>
                <defs>
                  <clipPath id="path0">
                    <rect width="1203" height="753" fill="white"></rect>
                  </clipPath>
                  <clipPath id="roundedBottom">
                    <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
            </div>

            {/* Card 3 */}
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Raportowanie</h3>
                <p className="text-foreground">
                Automatyzuje przygotowanie i wysyłkę raportów do regulatorów (np. KNF, NBP, GIIF). Zapewnia kompletność, walidację danych i śledzenie statusów, ograniczając obciążenie zespołów.
                </p>
              </div>
              <canvas
                className="size-full pointer-events-none z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
                style={{ width: 800, height: 800 }}
                width={800}
                height={800}
              ></canvas>
              <svg
                width="1203"
                height="753"
                viewBox="0 0 1203 753"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mb-48 ml-12 mt-16 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"
              >
                <g clipPath="url(#path0)">
                  <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white"></path>
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#F5F5F5"></path>
                  <g className="mix-blend-luminosity">
                    <path d="M566.269 32.0852H572.426C573.277 32.0852 573.696 31.6663 573.696 30.7395V25.9851C573.696 25.1472 573.353 24.7219 572.642 24.6521V23.0842C572.642 20.6721 571.036 19.5105 569.348 19.5105C567.659 19.5105 566.053 20.6721 566.053 23.0842V24.6711C565.393 24.7727 565 25.1917 565 25.9851V30.7395C565 31.6663 565.418 32.0852 566.269 32.0852ZM567.272 22.97C567.272 21.491 568.211 20.6785 569.348 20.6785C570.478 20.6785 571.423 21.491 571.423 22.97V24.6394L567.272 24.6458V22.97Z" fill="#A3A3A3"></path>
                  </g>
                  <g className="mix-blend-luminosity">
                    <text x="580" y="30" fill="#A3A3A3" fontSize="12" fontFamily="Arial, sans-serif">
                      https://acme.ai
                    </text>
                  </g>
                  <image href="/modules/reports.png" width="1000" height="720" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom)"></image>
                </g>
                <defs>
                  <clipPath id="path0">
                    <rect width="1203" height="753" fill="white"></rect>
                  </clipPath>
                  <clipPath id="roundedBottom">
                    <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
            </div>

            {/* Card 4 */}
            <div className="group relative items-start overflow-hidden bg-neutral-50 p-6 rounded-2xl flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Moduł Krypto</h3>
                <p className="text-foreground">
                Umożliwia kompleksową obsługę operacji związanych z aktywami cyfrowymi. Pozwala na bezpieczne depozyty i wypłaty kryptowalut, sprawną wymianę walut cyfrowych oraz generowanie i zarządzanie portfelami dla klientów.
                </p>
              </div>
              <div className="inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)] absolute -bottom-full">
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:0]"
                  style={{
                    width: 210,
                    height: 210,
                    opacity: 0.24,
                    animationDelay: "0s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.05)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:1]"
                  style={{
                    width: 280,
                    height: 280,
                    opacity: 0.21,
                    animationDelay: "0.06s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.1)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:2]"
                  style={{
                    width: 350,
                    height: 350,
                    opacity: 0.18,
                    animationDelay: "0.12s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.15)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:3]"
                  style={{
                    width: 420,
                    height: 420,
                    opacity: 0.15,
                    animationDelay: "0.18s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.2)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:4]"
                  style={{
                    width: 490,
                    height: 490,
                    opacity: 0.12,
                    animationDelay: "0.24s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.25)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:5]"
                  style={{
                    width: 560,
                    height: 560,
                    opacity: 0.09,
                    animationDelay: "0.3s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.3)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:6]"
                  style={{
                    width: 630,
                    height: 630,
                    opacity: 0.06,
                    animationDelay: "0.36s",
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.35)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
                <div
                  className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:7]"
                  style={{
                    width: 700,
                    height: 700,
                    opacity: 0.03,
                    animationDelay: "0.42s",
                    borderStyle: "dashed",
                    borderWidth: 1,
                    borderColor: "hsl(var(--foreground), 0.4)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                  }}
                ></div>
              </div>
              <svg
                width="1203"
                height="753"
                viewBox="0 0 1203 753"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
              >
                <g clipPath="url(#path0)">
                  <path d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z" className="fill-[#E5E5E5]"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z" className="fill-white"></path>
                  <circle cx="27" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="47" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <circle cx="67" cy="25" r="6" className="fill-[#E5E5E5]"></circle>
                  <path d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z" fill="#F5F5F5"></path>
                  <g className="mix-blend-luminosity">
                    <path d="M566.269 32.0852H572.426C573.277 32.0852 573.696 31.6663 573.696 30.7395V25.9851C573.696 25.1472 573.353 24.7219 572.642 24.6521V23.0842C572.642 20.6721 571.036 19.5105 569.348 19.5105C567.659 19.5105 566.053 20.6721 566.053 23.0842V24.6711C565.393 24.7727 565 25.1917 565 25.9851V30.7395C565 31.6663 565.418 32.0852 566.269 32.0852ZM567.272 22.97C567.272 21.491 568.211 20.6785 569.348 20.6785C570.478 20.6785 571.423 21.491 571.423 22.97V24.6394L567.272 24.6458V22.97Z" fill="#A3A3A3"></path>
                  </g>
                  <g className="mix-blend-luminosity">
                    <text x="580" y="30" fill="#A3A3A3" fontSize="12" fontFamily="Arial, sans-serif">
                      https://acme.ai
                    </text>
                  </g>
                  <image href="/modules/krypto.png" width="1200" height="800" x="1" y="52" preserveAspectRatio="xMidYMid slice" clipPath="url(#roundedBottom)"></image>
                </g>
                <defs>
                  <clipPath id="path0">
                    <rect width="1203" height="753" fill="white"></rect>
                  </clipPath>
                  <clipPath id="roundedBottom">
                    <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="white"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


