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


