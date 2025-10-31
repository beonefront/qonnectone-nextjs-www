import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ModeleWspolpracyClient from './ModeleWspolpracyClient';

export const metadata: Metadata = {
  title: 'Modele współpracy | QonnectOne',
  description: 'Poznaj nasze modele współpracy - SaaS i licencyjny. Wybierz rozwiązanie dopasowane do potrzeb Twojej firmy.',
  openGraph: {
    title: 'Modele współpracy | QonnectOne',
    description: 'Poznaj nasze modele współpracy - SaaS i licencyjny. Wybierz rozwiązanie dopasowane do potrzeb Twojej firmy.',
    images: [
      {
        url: 'https://qonnectone.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'QonnectOne Modele współpracy',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modele współpracy | QonnectOne',
    description: 'Poznaj nasze modele współpracy - SaaS i licencyjny. Wybierz rozwiązanie dopasowane do potrzeb Twojej firmy.',
    images: ['https://qonnectone.com/logo.png'],
  },
  alternates: {
    canonical: 'https://qonnectone.com/modele-wspolpracy'
  }
};

export default function MetodyPlatnosciPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />
      <ModeleWspolpracyClient />
      <Footer />
    </div>
  );
}
