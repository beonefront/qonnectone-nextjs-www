import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Cookie, Mail, MapPin, FileText, Clock, AlertTriangle } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.cookies' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://qonnectone.com/${locale === 'pl' ? '' : locale + '/'}cookies`,
      languages: {
        'pl': 'https://qonnectone.com/cookies',
        'en': 'https://qonnectone.com/en/cookies',
        'uk': 'https://qonnectone.com/ua/cookies',
      },
    },
  };
}

export default async function CookiesPage({ params }: Props) {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />

      {/* Hero Section */}
      <section id="cookies-hero">
        <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-32 lg:px-8">
          <div className="flex w-full max-w-4xl flex-col space-y-4 overflow-hidden py-8 pb-16">
            <h1 className="text-center text-4xl font-medium leading-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="inline-block px-1 md:px-2 text-balance font-montserrat font-semibold">Polityka Cookies</span>
            </h1>
            <p className="mx-auto max-w-3xl text-center text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8 text-balance">
              Polityka prywatności i plików cookies na stronie internetowej spółki QonnectOne sp. z o.o.
            </p>
            <p className="mx-auto max-w-4xl text-center text-base leading-6 text-foreground/60 sm:text-base sm:leading-7 text-balance">
              Niniejsza Polityka Cookies określa zasady wykorzystywania plików cookies na stronie www.qonnectone.com oraz informuje o przetwarzaniu danych osobowych zgodnie z RODO.
            </p>
          </div>
        </div>
      </section>

      {/* Informacje o Spółce */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Informacje o Spółce
            </h2>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <FileText className="w-5 h-5 text-primary mr-2" />
                  Odpowiedzialność za treści
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Za treści zamieszczone na stronie www.qonnectone.com odpowiada QonnectOne sp. z o.o. z siedzibą w Gdańsku 80-386 Gdańsk ul. Lęborska 3B (dalej &ldquo;Spółka&rdquo;).
                </p>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-primary mr-2" />
                  Linki zewnętrzne
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Strona internetowa Spółki może zawierać linki do innych stron, które są poza naszą kontrolą i nie są objęte niniejszą polityką prywatności. Rekomendujemy Państwu zapoznanie się z polityką prywatności na innych odwiedzanych przez Państwa stronach internetowych.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Przetwarzanie danych osobowych */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Przetwarzanie danych osobowych
            </h2>
            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Kontakt i udostępnianie danych</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  W trakcie wizyty na stronie mogą Państwo skontaktować się z naszą Spółką wysyłając wiadomość e-mail lub dzwoniąc na jeden z podanych na stronie numerów telefonicznych, a to skutkuje podjęciem decyzji o udostępnieniu nam danych osobowych.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Udostępnienie przez Państwa danych jest dobrowolne, jednak w większości przypadków może być warunkiem koniecznym do nawiązania kontaktu.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Zgodność z RODO</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Państwa dane osobowe przetwarzane są zgodnie z postanowieniami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej RODO) oraz przepisów polskich.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Szczegółowe informacje na temat przetwarzania danych osobowych przez QonnectOne sp. z o.o. znajdziecie Państwo na stronie www.qonnectone.com/dane_osobowe gdzie umieściliśmy wszystkie wymagane w tym zakresie informacje, np. klauzule informacyjne dostosowane do celu, w jakim Państwo chcecie się skontaktować z naszą Spółką.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pliki cookies */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Pliki cookies
            </h2>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Cookie className="w-5 h-5 text-primary mr-2" />
                  Informacja o cookies
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  W trakcie pierwszej wizyty na stronie zostaliście Państwo poinformowani o wykorzystywaniu przez nas plików cookies. Serwery wewnętrzne Spółki i serwery dostawców usług IT będących osobami trzecimi (które mogą być umieszczone poza Europejskim Obszarem Gospodarczym) automatycznie rejestrują dane dotyczące wizyty, opierając się na Państwa adresie IP.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Administrator za pośrednictwem strony instaluje następujące pliki cookies:
                </p>
              </div>
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Zarządzanie cookies</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Pliki cookies są wykorzystywane za Państwa zgodą. Możecie Państwo nimi zarządzać dokonując odpowiednich zmian w ustawieniach przeglądarki internetowej. Szczegóły są publikowane w instrukcjach postępowania przez poszczególnych administratorów przeglądarek (np. Chrome, Firefox, Microsoft Edge, Opera, itd.).
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Pozostawienie przeglądarki w domyślnym ustawieniu umożliwia gromadzenie plików cookies i przetwarzanie Państwa danych osobowych.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Okres przetwarzania danych */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Jak długo będziemy przetwarzać dane osobowe?
            </h2>
            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  Zasady przechowywania
                </h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Informacje i dane osobowe przechowujemy nie dłużej, niż jest to konieczne do realizacji celów do jakich te dane zostały zebrane.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Szczegółowe informacje dotyczące okresu przechowywania danych dla poszczególnych kategorii podmiotów przedstawiono w szczegółowych klauzulach informacyjnych dostępnych na stronie www.qonnectone.com/dokumenty
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
              Komu możemy ujawniać dane osobowe?
            </h2>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Zasady udostępniania</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Informujemy, że nie przekazujemy Państwa danych osobowych pozyskanych za pomocą strony internetowej na rzecz osób trzecich w celach handlowych lub marketingowych.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Udostępnienie Państwa danych stronom trzecim może okazać się konieczne w ramach świadczonych Spółce usług (np. hosting IT, rekrutacja, audyt, doradztwo).
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Zastrzegamy sobie prawo do ujawnienia danych osobowych w przypadkach przewidzianych przez prawo lub gdy ujawnienie następuje w związku z toczącym się postępowaniem sądowym, na wniosek organu administracji lub innych uprawnionych instytucji, jednak tylko w przypadku, gdy na Spółce ciąży obowiązek ujawnienia tych danych.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prawa użytkowników */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Prawa przysługujące osobom przekazującym Spółce dane osobowe
            </h2>
            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Podstawowe prawa</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  W związku z przetwarzaniem danych osobowych przysługują Państwu następujące uprawnienia:
                </p>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>prawo żądania dostępu do swoich danych osobowych lub ich sprostowania, jeżeli są nieprawidłowe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>prawo do usunięcia danych, ograniczenia przetwarzania danych lub przenoszenia danych do innego administratora danych w sytuacjach przewidzianych przepisami prawa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>prawo wyrażenia sprzeciwu wobec przetwarzania danych</span>
                  </li>
                </ul>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Prawo wniesienia skargi</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Jeżeli uznacie Państwo, że przetwarzanie Państwa danych osobowych przez QonnectOne sp. z o.o. jest niezgodne z przepisami o ochronie danych osobowych, przysługuje Państwu prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Informację jak wnieść skargę można znaleźć na stronie: <a href="https://uodo.gov.pl/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://uodo.gov.pl/</a>
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Wycofanie zgody</h3>
                <p className="text-foreground/70 leading-relaxed">
                  W przypadku, jeśli podstawą przetwarzania jest zgoda, przysługuje Państwu prawo cofnięcia udzielonej zgody w dowolnym momencie, przy czym cofnięcie zgody pozostaje bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.
                </p>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Informowanie o prawach</h3>
                <p className="text-foreground/70 leading-relaxed">
                  W każdej sytuacji w trakcie podawania danych osobowych jesteście Państwo informowani o przysługujących uprawnieniach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Kontakt
            </h2>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Dane kontaktowe</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  W sprawach dotyczących niniejszego dokumentu lub przetwarzania Państwa danych osobowych proszę kontaktować się:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Listownie na adres siedziby Spółki:</p>
                      <p className="text-foreground/70">QonnectOne sp. z o.o.<br />Ul. Lęborska 3B<br />Gdańsk 80-386<br />NIP 584-286-56-48<br />z dopiskiem &ldquo;dane osobowe&rdquo;</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Mailowo na adres:</p>
                      <p className="text-foreground/70">office@qonnectone.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zmiany w dokumencie */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center font-montserrat">
              Zmiany w dokumencie Polityka prywatności
            </h2>
            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Aktualizacje</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Spółka zastrzega sobie prawo do okresowej weryfikacji i aktualizacji niniejszego dokumentu.
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
