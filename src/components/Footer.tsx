import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Image
                src="/logo-white.png"
                alt="Qonnect Logo"
                width={180}
                height={36}
                className="h-9 w-auto"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
              Kompleksowe rozwiązania płatnicze dla instytucji finansowych.
              Bezpieczeństwo, innowacyjność i zgodność z regulacjami.
            </p>

            {/* Social links */}
            <div className="flex space-x-3">
              {[
                { href: "#", icon: "fab fa-linkedin", label: "LinkedIn" },
                { href: "#", icon: "fab fa-twitter", label: "Twitter" },
                // { href: "#", icon: "fab fa-facebook", label: "Facebook" },
                // { href: "#", icon: "fab fa-youtube", label: "YouTube" }
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-sm`}></i>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              {/* Solutions */}
              <div>
                <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
                  Rozwiązania
                </h3>
                <ul className="space-y-3">
                  {[
                    { href: "/moduly", label: "Moduły systemu" },
                    { href: "/metody-platnosci", label: "Metody płatności" },
                    // { href: "/#features", label: "Funkcje" },
                    // { href: "/#integrations", label: "Integracje" },
                    // { href: "/#pricing", label: "Cennik" }
                  ].map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
                  Firma
                </h3>
                <ul className="space-y-3">
                  {[
                    { href: "/o-nas", label: "O nas" },
                    { href: "/business-cases", label: "Business Cases" },
                    // { href: "/#stats", label: "Statystyki" },
                    // { href: "/#trusted-companies", label: "Nasi klienci" },
                    // { href: "#", label: "Kariera" }
                  ].map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
                  Wsparcie
                </h3>
                <ul className="space-y-3">
                  {[
                    { href: "/#faq", label: "FAQ" },
                    { href: "/o-nas", label: "Dokumentacja API" },
                    { href: "/o-nas", label: "Centrum pomocy" },
                    { href: "/o-nas", label: "Kontakt" },
                    // { href: "#", label: "Status systemu" }
                  ].map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-6 border-t border-slate-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-500 text-xs">
              © 2025 Qonnect. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6">
              {[
                { href: "#", label: "Regulamin" },
                { href: "#", label: "Polityka prywatności" },
                { href: "#", label: "Cookies" },
                { href: "#", label: "RODO" }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-slate-500 hover:text-slate-300 text-xs transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
