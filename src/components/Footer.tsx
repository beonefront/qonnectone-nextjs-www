import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Image src="/logo-white.png" alt="Qonnect Logo" width={200} height={40} className="h-10" />
            </div>
            <p className="mb-4 font-inter">
              Kompleksowe rozwiązania płatnicze dla instytucji finansowych.
              Bezpieczeństwo, innowacyjność i zgodność z regulacjami.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin text-xl"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter text-xl"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook text-xl"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-youtube text-xl"></i>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4 text-white">Rozwiązania</h3>
            <ul className="space-y-3 font-inter">
              <li><Link href="/moduly" className="hover:text-white transition">Moduły systemu</Link></li>
              <li><Link href="/metody-platnosci" className="hover:text-white transition">Metody płatności</Link></li>
              <li><Link href="/#features" className="hover:text-white transition">Funkcje</Link></li>
              <li><Link href="/#integrations" className="hover:text-white transition">Integracje</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition">Cennik</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4 text-white">Firma</h3>
            <ul className="space-y-3 font-inter">
              <li><Link href="/o-nas" className="hover:text-white transition">O nas</Link></li>
              <li><Link href="/business-cases" className="hover:text-white transition">Business Cases</Link></li>
              <li><Link href="/#stats" className="hover:text-white transition">Statystyki</Link></li>
              <li><Link href="/#trusted-companies" className="hover:text-white transition">Nasi klienci</Link></li>
              <li><Link href="#" className="hover:text-white transition">Kariera</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4 text-white">Wsparcie</h3>
            <ul className="space-y-3 font-inter">
              <li><Link href="#" className="hover:text-white transition">Dokumentacja API</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition">Centrum pomocy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Kontakt</Link></li>
              <li><Link href="#" className="hover:text-white transition">Status systemu</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-8 pb-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center md:text-left">
              <h4 className="font-montserrat font-semibold text-white mb-2">
                <i className="fas fa-phone mr-2 text-blue-400"></i>Telefon
              </h4>
              <p className="font-inter text-gray-300">+48 123 456 789</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-montserrat font-semibold text-white mb-2">
                <i className="fas fa-envelope mr-2 text-blue-400"></i>Email
              </h4>
              <p className="font-inter text-gray-300">kontakt@qonnectone.pl</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-montserrat font-semibold text-white mb-2">
                <i className="fas fa-map-marker-alt mr-2 text-blue-400"></i>Siedziba
              </h4>
              <p className="font-inter text-gray-300">Gdańsk, Polska</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 font-inter">
              &copy; 2025 Qonnect. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex space-x-6 font-inter">
              <Link href="#" className="hover:text-gray-300 transition">Regulamin</Link>
              <Link href="#" className="hover:text-gray-300 transition">Polityka prywatności</Link>
              <Link href="#" className="hover:text-gray-300 transition">Cookies</Link>
              <Link href="#" className="hover:text-gray-300 transition">RODO</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
