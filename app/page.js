import HeroSection from '@/components/home/HeroSection';
import BrandPositioning from '@/components/home/BrandPositioning';
import BrandShowcase from '@/components/home/BrandShowcase';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedWork from '@/components/home/FeaturedWork';
import ProcessSection from '@/components/home/ProcessSection';
import IndustryFocus from '@/components/home/IndustryFocus';
import CreatorRecruitment from '@/components/home/CreatorRecruitment';
import InsightsSection from '@/components/home/InsightsSection';
import FinalCta from '@/components/home/FinalCta';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandPositioning />
      <BrandShowcase />
      <ServicesSection />
      <FeaturedWork />
      <ProcessSection />
      <IndustryFocus />
      <CreatorRecruitment />
      <InsightsSection />
      <FinalCta />
    </>
  );
}
