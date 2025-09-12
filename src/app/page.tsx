import {
  AboutSection,
  FAQComponent,
  HeroSection,
  OurService,
  ScrollBasedVelocityDemo,
  StatisticsSection,
  TestimonialsComponent,
  WhyChooseUsSection,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ScrollBasedVelocityDemo />
      <OurService />
      <AboutSection />
      <WhyChooseUsSection />
      <StatisticsSection />
      <FAQComponent />
      <TestimonialsComponent />
    </div>
  );
}

<div className="absolute z-0 top-20 left-20  w-54 h-54 rounded-full flex items-center justify-center">
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 to-teal-400 blur-3xl"></div>
</div>
