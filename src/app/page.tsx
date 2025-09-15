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
      <section>
        <HeroSection />
      </section>
      <section>
        <ScrollBasedVelocityDemo />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <OurService />
      </section>
      {/* <WhyChooseUsSection /> */}
      {/* <StatisticsSection /> */}
      <section>
        <FAQComponent />
      </section>
      {/* <TestimonialsComponent /> */}
      <section>
        <ContactComponent />
      </section>
    </div>
  );
}
