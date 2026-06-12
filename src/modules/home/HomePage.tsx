import { MainLayout } from "@/common/components/layouts/MainLayout";
import { FAQSection } from "@/modules/home/components/FAQSection";
import { FeaturesStrip } from "@/modules/home/components/FeaturesStrip";
import { HeroSection } from "@/modules/home/components/HeroSection";
import { HowItWorksSection } from "@/modules/home/components/HowItWorksSection";
import { LocationsSection } from "@/modules/home/components/LocationsSection";
import { ProductsSection } from "@/modules/home/components/ProductsSection";
import { PromosSection } from "@/modules/home/components/PromosSection";
import { TestimonialsSection } from "@/modules/home/components/TestimonialsSection";
import { WhatsAppCTA } from "@/modules/home/components/WhatsAppCTA";

export function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesStrip />
      <PromosSection />
      <ProductsSection />
      <HowItWorksSection />
      <LocationsSection />
      <TestimonialsSection />
      <FAQSection />
      <WhatsAppCTA />
    </MainLayout>
  );
}
