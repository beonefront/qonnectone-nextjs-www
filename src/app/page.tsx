
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import StatsSection from "../components/StatsSection";
import ShowGifSection from "../components/ShowGifSection";
import TrustedCompaniesSection from "../components/TrustedCompaniesSection";
import PlatformSection from "../components/PlatformSection";
import FAQSection from "../components/FAQSection";
import PricingSection from "../components/PricingSection";
import Footer from "../components/Footer";
import BlazingAcceptanceSection from "@/components/BlazingAcceptanceSection";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BlazingAcceptanceSection />
      <StatsSection />
      <ShowGifSection />
      {/* <IntegrationsSection /> */}
      <FAQSection />
      <PricingSection />
      <TrustedCompaniesSection />
      <PlatformSection />
      <Footer />
    </div>
  );
}
