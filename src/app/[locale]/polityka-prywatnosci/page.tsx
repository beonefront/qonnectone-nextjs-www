import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Shield, FileText, Users, Eye, Lock, Mail, MapPin } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.privacy' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://qonnectone.com/${locale === 'pl' ? '' : locale + '/'}polityka-prywatnosci`,
      languages: {
        'pl': 'https://qonnectone.com/polityka-prywatnosci',
        'en': 'https://qonnectone.com/en/polityka-prywatnosci',
        'uk': 'https://qonnectone.com/ua/polityka-prywatnosci',
      },
    },
  };
}

export default async function PolitykaPrywatnosciPage({ params }: Props) {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />

      {/* Hero Section */}
      <section id="privacy-hero">
        <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
          <div className="flex w-full max-w-4xl flex-col space-y-4 overflow-hidden py-8 pb-16">
            <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">Polityka Prywatności</span>
            </h1>
            <p className="mx-auto max-w-3xl text-center text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 text-balance">
              Polityka Prywatności serwisów internetowych QonnectOne Sp. z o.o. z siedzibą w Gdańsku
            </p>
            <p className="mx-auto max-w-4xl text-center text-base leading-6 text-foreground/60 sm:text-base sm:leading-7 text-balance">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych użytkowników serwisów internetowych QonnectOne zgodnie z Rozporządzeniem RODO.
            </p>
          </div>
        </div>
      </section>

      {/* Definicje terminów */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Definicje terminów użytych w Polityce Prywatności
            </h2>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  Użytkownik
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej korzystająca z usług świadczonych drogą elektroniczną za pośrednictwem serwisów internetowych wskazanych w pkt. 2.
                </p>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-2" />
                  Dane osobowe
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej (&ldquo;osobie, której dane dotyczą&rdquo;); możliwa do zidentyfikowania osoba fizyczna to osoba, którą można bezpośrednio lub pośrednio zidentyfikować, w szczególności na podstawie identyfikatora takiego jak imię i nazwisko, numer identyfikacyjny, dane o lokalizacji, identyfikator internetowy lub jeden bądź kilka szczególnych czynników określających fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną tożsamość osoby fizycznej.
                </p>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <FileText className="w-5 h-5 text-primary mr-2" />
                  Spółka, Administrator Danych Osobowych
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  QonnectOne Spółka z ograniczoną odpowiedzialnością z siedzibą w Gdańsku, ul. Lęborska 3B, 80-386 Gdańsk, wpisaną do rejestru przedsiębiorców przez Sąd Rejonowy Gdańsk - Północ w Gdańsku, VII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS: 0001160997 REGON 54115490 NIP: 5842865648; kapitał zakładowy: 750 000 zł.
                </p>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Eye className="w-5 h-5 text-primary mr-2" />
                  Serwisy
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Serwisy internetowe umieszczone w domenach internetowych: www.qonnectone.com, z których każdy odrębnie określany jest dalej jako &ldquo;Serwis&rdquo;.
                </p>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Lock className="w-5 h-5 text-primary mr-2" />
                  RODO
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informacje o Administratorze */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Informacje o Administratorze Danych Osobowych
            </h2>
            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Dane kontaktowe</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Adres siedziby:</p>
                      <p className="text-foreground/70">ul. Lęborska 3B, 80-386 Gdańsk</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">E-mail:</p>
                      <p className="text-foreground/70">hello@qonnectone.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">KRS:</p>
                      <p className="text-foreground/70">0001160997</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">REGON:</p>
                      <p className="text-foreground/70">54115490</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">NIP:</p>
                      <p className="text-foreground/70">5842865648</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background border border-border rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Inspektor Ochrony Danych</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Administrator Danych Osobowych wyznaczył Inspektora Ochrony Danych. Osoby zainteresowane mogą się skontaktować z Inspektorem we wszelkich sprawach dotyczących przetwarzania danych osobowych przez Administratora Danych Osobowych.
                </p>
                <div className="space-y-2">
                  <p className="text-foreground/70">
                    <strong>E-mail:</strong> hello@qonnectone.com
                  </p>
                  <p className="text-foreground/70">
                    <strong>Adres:</strong> ul. Lęborska 3B, 80-386 Gdańsk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Źródła danych */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Źródła Danych osobowych
            </h2>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Administrator Danych Osobowych pozyskuje Dane osobowe poprzez:
                </p>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>poprzez informacje i dane dobrowolnie wprowadzone w formularzach Serwisu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>poprzez zapisywanie w urządzeniach końcowych pliki cookie (tzw. &ldquo;ciasteczka&rdquo;)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>poprzez gromadzenie logów serwera www</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>zapisywanie parametrów połączenia z Serwisem (oznaczenie czasu, adres IP)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Dane zbierane automatycznie</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Informacje o niektórych zachowaniach Użytkowników – osób fizycznych - podlegają logowaniu w warstwie serwerowej. Dane te są wykorzystywane w celu administrowania serwisem oraz w celu zapewnienia jak najbardziej sprawnej obsługi świadczonych usług.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Administrator Danych Osobowych nie pozyskuje Danych osobowych od podmiotów trzecich. Administrator Danych Osobowych przetwarza Dane osobowe samodzielnie i dobrowolnie podane przez Użytkownika – osobę fizyczną.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cele przetwarzania */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Cele przetwarzania i podstawa prawna
            </h2>
            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">1. Korzystanie z Serwisu</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Dane osobowe przetwarzane są w celu udostępnienia funkcjonalności strony internetowej i utrzymania połączenia – podstawą prawną jest realizacja przez Administratora Danych Osobowych prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO).
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">2. Rejestracja konta i usługi płatnicze</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Dane podane w formularzu rejestracyjnym – w celu zawarcia umowy o świadczenie usług drogą elektroniczną, umowy o świadczenie usługi przekazu pieniężnego i ich wykonania, rozpatrywania reklamacji, wykonania usługi płatniczej zgodnie ze zleceniem płatniczym (art. 6 ust. 1 lit. b RODO).
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">3. Marketing własnych produktów i usług</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Podstawą prawną jest realizacja przez Spółkę prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO), gdzie prawnie uzasadnionym interesem Spółki jest marketing bezpośredni, z zastrzeżeniem, że przesyłanie informacji handlowej za pomocą środków komunikacji elektronicznej jest możliwe tylko za zgodą Użytkownika.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">4. Formularz kontaktowy</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Podstawą prawną jest realizacja przez Spółkę prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO), gdzie prawnie uzasadnionym interesem Spółki jest udzielenie odpowiedzi na kierowane do Spółki zapytanie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Odbiorcy danych */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Odbiorcy Danych osobowych
            </h2>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Dane osobowe mogą być przekazane podmiotom technicznie realizującym niektóre usługi – w szczególności dotyczy to przekazywania informacji do serwisów obsługujących płatności lub też innych podmiotów, z którymi Administrator Danych Osobowych w tym zakresie współpracuje.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Spółka może Dane osobowe podmiotom, które angażuje jako podmioty przetwarzające, takie jak dostawcy usług informatycznych i poczty e-mail, dostawcy technologii, księgowi i firmy niszczące nośniki danych.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Dane osobowe mogą zostać również udostępnione podmiotom uprawnionym do żądania tych danych na mocy obowiązujących przepisów prawa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Okres przechowywania */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Okres przechowywania Danych osobowych
            </h2>
            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Dane osobowe będą przechowywane przez okres zależny od celu przetwarzania:
                </p>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Wykonanie umowy:</strong> przez okres obowiązywania umowy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Funkcjonalność Serwisów:</strong> na czas trwania połączenia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Obowiązki prawne:</strong> przez okres niezbędny do realizacji obowiązków ujętych w przepisach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Roszczenia:</strong> przez okres przedawnienia ewentualnych roszczeń</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Marketing:</strong> do czasu wycofania zgody lub do momentu całkowitego realizacji celu przetwarzania danych</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prawa podmiotu */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Prawa podmiotu, którego Dane osobowe dotyczą
            </h2>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Podstawowe prawa</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Użytkownikowi – osobie fizycznej przysługuje:
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>prawo dostępu do Danych osobowych</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>prawo żądania sprostowania Danych osobowych, jeżeli są nieprawidłowe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>usunięcia Danych osobowych</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>ograniczenia przetwarzania Danych osobowych</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>przenoszenia Danych osobowych</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Wycofanie zgody</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Jeżeli Dane osobowe przetwarzamy na podstawie zgody – Użytkownik ma prawo do jej wycofania w dowolnym momencie. Wycofać zgodę można przesyłając do Spółki e-mail na adres: <strong>hello@qonnectone.com</strong>
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Cofnięcie zgody pozostaje bez wpływu na zgodność z prawem przetwarzania Danych przed momentem cofnięcia zgody ani w zakresie, w jakim Dane osobowe są przetwarzane w oparciu o inną podstawę przetwarzania danych.
                </p>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Prawo wniesienia skargi</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Użytkownikowi – osobie fizycznej - przysługuje również prawo wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych w państwie członkowskim zwykłego pobytu, miejsca pracy Użytkownika – osoby fizycznej - lub miejsca popełnienia domniemanego naruszenia. W przypadku Polski tym organem jest: <strong>Prezes Urzędu Ochrony Danych Osobowych (PUODO)</strong> - Adres: Stawki 2, 00-193 Warszawa, Telefon: 22 531 03 00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Cookies
            </h2>
            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Co to są cookies?</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Pliki cookies (tzw. &ldquo;ciasteczka&rdquo;) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisów i przeznaczone są do korzystania ze stron internetowych Serwisów.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Rodzaje cookies</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  W przypadku Serwisu, stosowane są dwa rodzaje plików cookies:
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Cookies &ldquo;sesyjne&rdquo;:</strong> pliki tymczasowe, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>&ldquo;Stałe&rdquo; pliki cookies:</strong> przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Cele wykorzystania cookies</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisów korzystają ze stron internetowych</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>utrzymanie sesji Użytkownika Serwisów (po zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie Serwisów ponownie wpisywać loginu i hasła</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Zarządzanie cookies</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisów mogą dokonać zmiany ustawień w tym zakresie.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Użytkownik powinien mieć świadomość, że ograniczenie lub wyłączenie stosowania plików cookies może wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisów.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postanowienia końcowe */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Postanowienia końcowe
            </h2>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Obowiązywanie</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Polityka Prywatności wraz z Polityką Cookies obowiązuje od dnia 1 września 2025 roku.
                </p>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Zmiany w Polityce</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Operator zastrzega sobie prawo do zmiany Polityki Prywatności i Polityki Cookies w każdym czasie. Jednolity tekst polityki prywatności i polityki cookies po zmianach będzie dostępny na głównych stronach Serwisów w zakładce &ldquo;Polityka Prywatności&rdquo;.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  O planowanej zmianie Operator poinformuje Użytkowników z tygodniowym wyprzedzeniem, ze wskazaniem zakresu zmian i daty rozpoczęcia obowiązywania. W przypadku braku akceptacji zmian przez Użytkownika, umowa o świadczenie usługi elektronicznej rozwiąże się z upływem wskazanego w zawiadomieniu terminu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
