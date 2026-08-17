import Hero from "../components/Hero";
import ProgramsSection from "../components/ProgramsSection";
import ServicesSection from "../components/ServicesSection";
import FacilitiesSection from "../components/FacilitiesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import TrainersPreview from "../components/TrainersPreview";
import MembershipPromoSection from "../components/MembershipPromoSection";
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <ProgramsSection />
      <FacilitiesSection />
      <WhyChooseUs />
      <TrainersPreview />
      <MembershipPromoSection />
    </>
  );
}
