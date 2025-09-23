
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

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />
      <HeroSection />
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
