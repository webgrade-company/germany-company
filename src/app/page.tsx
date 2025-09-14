import {
  AboutSection,
  ContactComponent,
  FAQComponent,
  HeroSection,
  OurService,
  ScrollBasedVelocityDemo,
  StatisticsSection,
  TestimonialsComponent,
  WhyChooseUsSection,
} from "@/components";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ScrollBasedVelocityDemo />
      <AboutSection />
      <OurService />
      {/* <WhyChooseUsSection /> */}
      {/* <StatisticsSection /> */}
      <FAQComponent />
      {/* <TestimonialsComponent /> */}
      <ContactComponent />
    </div>
  );
}

{/* <div className="absolute z-0 top-20 left-20 w-54 h-54 rounded-full flex items-center justify-center animate-float">
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 to-teal-400 blur-3xl"></div>
</div> */}

