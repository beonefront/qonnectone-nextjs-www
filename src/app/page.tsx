
import type { Metadata } from 'next';
import CtaSection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LogoSection from "@/components/LogoSection";
import Navigation from "@/components/Navigation";
import PricingSection from "@/components/PricingSection";
import ProblemComparisonSection from "@/components/ProblemComparisonSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
// import VideoSection from "@/components/VideoSection";

export const metadata: Metadata = {
  title: 'QonnectOne - Kompleksowe rozwiązania płatnicze',
  description: 'Kompleksowe rozwiązania płatnicze dla firm i nadzorowanych instytucji finansowych. Bezpieczeństwo, innowacyjność i zgodność z regulacjami.',
  openGraph: {
    title: 'QonnectOne - Kompleksowe rozwiązania płatnicze',
    description: 'Kompleksowe rozwiązania płatnicze dla firm i nadzorowanych instytucji finansowych. Bezpieczeństwo, innowacyjność i zgodność z regulacjami.',
    images: [
      {
        url: 'https://qonnectone.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'QonnectOne - Kompleksowe rozwiązania płatnicze',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QonnectOne - Kompleksowe rozwiązania płatnicze',
    description: 'Kompleksowe rozwiązania płatnicze dla firm i nadzorowanych instytucji finansowych. Bezpieczeństwo, innowacyjność i zgodność z regulacjami.',
    images: ['https://qonnectone.com/logo.png'],
  },
  alternates: {
    canonical: 'https://qonnectone.com/'
  }
};

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />
      <HeroSection />
      {/* <VideoSection /> */}
      <LogoSection />
      <ProblemSection />
      <SolutionSection />
      <ProblemComparisonSection />
      <PricingSection />
      <FAQSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
